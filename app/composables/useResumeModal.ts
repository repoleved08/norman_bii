const resumeModalOpen = ref(false)

export function useResumeModal() {
  function openResumeModal() {
    resumeModalOpen.value = true
  }

  function closeResumeModal() {
    resumeModalOpen.value = false
  }

  return { resumeModalOpen, openResumeModal, closeResumeModal }
}
