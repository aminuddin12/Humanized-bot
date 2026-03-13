<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ layout: 'auth' })
useHead({ title: 'Create Account | SaaS Bot' })

const { register } = useAuth()
const form = ref({ name: '', email: '', password: '' })
const isLoading = ref(false)

const handleRegister = async () => {
  isLoading.value = true
  try {
    await register(form.value)
    navigateTo('/u/dashboard')
  } catch (err) {
    console.error(err)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <BaseBox display="flex" flexDirection="col" gap="lg">
    <BaseBox>
      <BaseTypography variant="h2" class="text-2xl">Create account</BaseTypography>
      <BaseTypography variant="p" color="muted" class="text-sm">Start your 14-day free trial today. No credit card required.</BaseTypography>
    </BaseBox>

    <BaseBox display="flex" flexDirection="col" gap="md">
      <!-- Name Field -->
      <BaseBox display="flex" flexDirection="col" gap="xs">
        <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Full Name</BaseTypography>
        <BaseBox class="relative">
          <UIcon name="i-fluent-person-24-regular" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            v-model="form.name"
            type="text" 
            placeholder="John Doe"
            class="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 outline-none focus:border-emerald-500 transition-all text-sm"
          />
        </BaseBox>
      </BaseBox>

      <!-- Email Field -->
      <BaseBox display="flex" flexDirection="col" gap="xs">
        <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Email Address</BaseTypography>
        <BaseBox class="relative">
          <UIcon name="i-fluent-mail-24-regular" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            v-model="form.email"
            type="email" 
            placeholder="name@company.com"
            class="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 outline-none focus:border-emerald-500 transition-all text-sm"
          />
        </BaseBox>
      </BaseBox>

      <!-- Password Field -->
      <BaseBox display="flex" flexDirection="col" gap="xs">
        <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Password</BaseTypography>
        <BaseBox class="relative">
          <UIcon name="i-fluent-lock-closed-24-regular" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            v-model="form.password"
            type="password" 
            placeholder="••••••••"
            class="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800 outline-none focus:border-emerald-500 transition-all text-sm"
          />
        </BaseBox>
      </BaseBox>

      <BaseButton size="lg" class="w-full mt-2" :disabled="isLoading" @click="handleRegister">
        {{ isLoading ? 'Creating account...' : 'Start Free Trial' }}
      </BaseButton>
    </BaseBox>

    <BaseBox class="text-center">
      <BaseTypography variant="p" class="text-xs">
        Already have an account? 
        <NuxtLink to="/login" class="font-bold text-emerald-500 hover:underline ml-1">Sign in</NuxtLink>
      </BaseTypography>
    </BaseBox>
  </BaseBox>
</template>
