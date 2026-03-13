<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseSurface from '~/components/ui/BaseSurface.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import BaseBadge from '~/components/ui/BaseBadge.vue'

const status = ref('disconnected') // disconnected, connecting, qr_ready, connected
const qrCode = ref('')
const isLoading = ref(false)

const startConnection = () => {
  isLoading.value = true
  status.value = 'connecting'
  
  // Mock WebSocket flow
  setTimeout(() => {
    status.value = 'qr_ready'
    qrCode.value = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=MockSaaSBotConnection'
    isLoading.value = false
  }, 2000)
}

const mockConnect = () => {
  status.value = 'connected'
}
</script>

<template>
  <BaseSurface variant="default" padding="xl" class="rounded-[2.5rem] border shadow-sm">
    <BaseBox display="flex" flexDirection="col" alignItems="center" gap="lg" class="text-center">
      <BaseBox>
        <BaseTypography variant="h3" class="mb-2">WhatsApp Scanner</BaseTypography>
        <BaseTypography variant="p" color="muted" class="text-sm">Link your WhatsApp account to start automating.</BaseTypography>
      </BaseBox>

      <!-- Disconnected State -->
      <BaseBox v-if="status === 'disconnected'" class="py-10">
        <BaseBox background="dark" rounded="2xl" class="w-20 h-20 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-800 mb-6">
          <UIcon name="i-fluent-phone-link-24-regular" class="text-4xl text-gray-400" />
        </BaseBox>
        <BaseButton size="lg" :disabled="isLoading" @click="startConnection">
          {{ isLoading ? 'Initializing...' : 'Link Device' }}
        </BaseButton>
      </BaseBox>

      <!-- Connecting State -->
      <BaseBox v-if="status === 'connecting'" class="py-10 flex flex-col items-center gap-4">
        <BaseBox class="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
        <BaseTypography variant="p" class="text-sm font-bold">Connecting to WhatsApp Server...</BaseTypography>
      </BaseBox>

      <!-- QR Ready State -->
      <BaseBox v-if="status === 'qr_ready'" class="flex flex-col items-center gap-6">
        <BaseBox class="p-4 bg-white rounded-3xl shadow-xl border-8 border-gray-50">
          <img :src="qrCode" alt="QR Code" class="w-64 h-64" @click="mockConnect" />
        </BaseBox>
        <BaseBox display="flex" flexDirection="col" gap="xs">
          <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Scan this QR Code</BaseTypography>
          <BaseTypography variant="p" class="text-xs text-emerald-600 font-bold">Awaiting device scan...</BaseTypography>
        </BaseBox>
      </BaseBox>

      <!-- Connected State -->
      <BaseBox v-if="status === 'connected'" class="py-10 flex flex-col items-center">
        <BaseBox background="dark" rounded="full" class="w-20 h-20 flex items-center justify-center bg-emerald-500 mb-6 shadow-glow">
          <UIcon name="i-fluent-checkmark-circle-24-filled" class="text-4xl text-white" />
        </BaseBox>
        <BaseTypography variant="h3" class="text-emerald-500 mb-2">Successfully Linked!</BaseTypography>
        <BaseBadge color="emerald">Session Active</BaseBadge>
        <BaseButton variant="ghost" class="mt-8 text-red-500" @click="status = 'disconnected'">Disconnect Device</BaseButton>
      </BaseBox>

    </BaseBox>
  </BaseSurface>
</template>
