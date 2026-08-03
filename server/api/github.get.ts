import { fallbackRepos } from '~/data/opensource'

function fetchWithTimeout(url: string, headers: Record<string, string>, timeout = 8000) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)
  return fetch(url, { headers, signal: controller.signal }).finally(() => clearTimeout(timer))
}

export default defineEventHandler(async (event) => {
  const username = 'repoleved08'
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'norman-bii-portfolio',
    'X-GitHub-Api-Version': '2022-11-28',
  }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=7200')

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetchWithTimeout(`https://api.github.com/users/${username}`, headers),
      fetchWithTimeout(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`, headers),
    ])

    if (!profileRes.ok || !reposRes.ok) throw new Error('github api error')

    const profile = await profileRes.json()
    const repos = await reposRes.json()

    return {
      profile: {
        name: profile.name || username,
        avatar: profile.avatar_url,
        bio: profile.bio,
        followers: profile.followers ?? 0,
        publicRepos: profile.public_repos ?? 0,
        totalStars: repos.reduce((sum: number, repo: { stargazers_count: number }) => sum + (repo.stargazers_count || 0), 0),
        url: profile.html_url,
      },
      repos: repos.map((repo: {
        name: string
        description: string | null
        language: string | null
        stargazers_count: number
        forks_count: number
        html_url: string
        topics: string[]
        updated_at: string
      }) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        url: repo.html_url,
        topics: (repo.topics || []).slice(0, 3),
        updatedAt: repo.updated_at,
      })),
    }
  } catch {
    return {
      profile: {
        name: username,
        avatar: '',
        bio: null,
        followers: 0,
        publicRepos: fallbackRepos.length,
        totalStars: fallbackRepos.reduce((sum, repo) => sum + repo.stars, 0),
        url: `https://github.com/${username}`,
      },
      repos: fallbackRepos,
    }
  }
})
