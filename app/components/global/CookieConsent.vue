<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'

const show = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    setTimeout(() => { show.value = true }, 2000)
  }
})

const accept = () => {
  localStorage.setItem('cookie-consent', 'true')
  show.value = false
}
</script>

<template>
  <transition 
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <BaseBox 
      v-if="show" 
      position="fixed" 
      class="bottom-6 left-6 right-6 lg:left-auto lg:w-[400px] z-[90]"
    >
      <BaseSurface variant="glass" padding="md" class="rounded-[2rem] shadow-floating border flex flex-col gap-4">
        <BaseBox display="flex" alignItems="center" gap="sm">
          <BaseBox background="dark" rounded="lg" class="w-8 h-8 flex items-center justify-center bg-emerald-500">
            <UIcon name="i-fluent-cookies-24-filled" class="text-white" />
          </BaseBox>
          <BaseTypography variant="h3" class="text-base">Cookie Settings</BaseTypography>
        </BaseBox>
        
        <BaseTypography variant="p" color="muted" class="text-xs leading-relaxed">
          We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
        </BaseTypography>

        <BaseBox display="flex" gap="sm">
          <BaseButton size="sm" class="flex-grow" @click="accept">Accept All</BaseButton>
          <BaseButton variant="outline" size="sm" @click="show = false">Decline</BaseButton>
        </BaseBox>
      </BaseSurface>
    </BaseBox>
  </transition>
</template>
