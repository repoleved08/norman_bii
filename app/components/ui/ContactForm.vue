<script setup lang="ts">
import { AnimatePresence, Motion } from 'motion-v'

type Status = 'idle' | 'sending' | 'success' | 'error'

const status = ref<Status>('idle')
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  projectType: 'Laravel / Backend development',
  message: '',
  website: '',
})

const projectTypes = [
  'Laravel / Backend development',
  'Financial or payments system',
  'ERP / internal tooling',
  'Real-time app (WebSockets)',
  'Full-stack project',
  'Something else',
]

async function submit() {
  if (status.value === 'sending') return
  status.value = 'sending'
  errorMessage.value = ''

  try {
    const res = await $fetch<{ ok: boolean }>('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    if (res.ok) {
      status.value = 'success'
      form.name = ''
      form.email = ''
      form.message = ''
    }
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err?.data?.statusMessage || 'Something went wrong. Email me directly instead.'
  }
}

function reset() {
  status.value = 'idle'
}
</script>

<template>
  <form class="card relative overflow-hidden p-6 sm:p-8" novalidate @submit.prevent="submit">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="cf-name" class="mb-1.5 block text-sm font-medium text-ink">Name</label>
        <input
          id="cf-name"
          v-model="form.name"
          type="text"
          required
          autocomplete="name"
          placeholder="Jane Doe"
          class="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-brand-500 focus:outline-none"
        />
      </div>
      <div>
        <label for="cf-email" class="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input
          id="cf-email"
          v-model="form.email"
          type="email"
          required
          autocomplete="email"
          placeholder="jane@company.com"
          class="w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-brand-500 focus:outline-none"
        />
      </div>
    </div>

    <div class="mt-5">
      <label for="cf-type" class="mb-1.5 block text-sm font-medium text-ink">What do you need?</label>
      <select
        id="cf-type"
        v-model="form.projectType"
        class="w-full appearance-none rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink focus:border-brand-500 focus:outline-none"
      >
        <option v-for="type in projectTypes" :key="type" :value="type">{{ type }}</option>
      </select>
    </div>

    <div class="mt-5">
      <label for="cf-message" class="mb-1.5 block text-sm font-medium text-ink">Message</label>
      <textarea
        id="cf-message"
        v-model="form.message"
        rows="5"
        required
        placeholder="Tell me about the project — timeline, scale, and what 'done' looks like."
        class="w-full resize-none rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-brand-500 focus:outline-none"
      />
    </div>

    <input
      v-model="form.website"
      type="text"
      name="website"
      tabindex="-1"
      autocomplete="off"
      class="hidden"
      aria-hidden="true"
    />

    <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <button
        type="submit"
        class="btn btn-primary w-full sm:w-auto"
        :disabled="status === 'sending'"
        :aria-busy="status === 'sending'"
      >
        <Icon v-if="status === 'sending'" name="lucide:loader-circle" class="h-4 w-4 animate-spin" />
        <template v-else>
          <Icon name="lucide:send" class="h-4 w-4" />
          Send message
        </template>
      </button>
      <p class="font-mono text-xs text-faint">Replies within 24h, usually faster.</p>
    </div>

    <AnimatePresence>
      <Motion
        v-if="status === 'success' || status === 'error'"
        :initial="{ opacity: 0, y: 8 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0 }"
        class="mt-5"
      >
        <div
          v-if="status === 'success'"
          class="flex items-start gap-2.5 rounded-lg border border-success/25 bg-success/10 px-4 py-3 text-sm text-success"
        >
          <Icon name="lucide:check-circle-2" class="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p class="font-medium">Message sent.</p>
            <p class="text-xs opacity-80">I will get back to you within 24 hours. Want to talk sooner? Book a call.</p>
          </div>
          <button type="button" class="ml-auto text-xs opacity-80 hover:opacity-100" @click="reset">Send another</button>
        </div>
        <div
          v-else
          class="flex items-start gap-2.5 rounded-lg border border-danger/25 bg-danger/10 px-4 py-3 text-sm text-danger"
        >
          <Icon name="lucide:alert-circle" class="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p class="font-medium">Could not send.</p>
            <p class="text-xs opacity-80">{{ errorMessage }}</p>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </form>
</template>
