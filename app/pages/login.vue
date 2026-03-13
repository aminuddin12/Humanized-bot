<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseButton from '~/components/ui/BaseButton.vue'
import { useAuth } from '~/composables/useAuth'

definePageMeta({ layout: 'auth' })
useHead({ title: 'Login | SaaS Bot' })

const { login } = useAuth()
const form = ref({ email: '', password: '' })
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  try {
    await login(form.value)
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
      <BaseTypography variant="h2" class="text-2xl">Welcome back</BaseTypography>
      <BaseTypography variant="p" color="muted" class="text-sm">Enter your credentials to access your dashboard.</BaseTypography>
    </BaseBox>

    <BaseBox display="flex" flexDirection="col" gap="md">
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
        <BaseBox display="flex" justifyContent="between">
          <BaseTypography variant="detail" class="text-[10px] font-black uppercase">Password</BaseTypography>
          <NuxtLink to="#" class="text-[10px] font-bold text-emerald-500 hover:underline">Forgot password?</NuxtLink>
        </BaseBox>
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

      <BaseButton size="lg" class="w-full mt-2" :disabled="isLoading" @click="handleLogin">
        {{ isLoading ? 'Signing in...' : 'Sign in to Dashboard' }}
      </BaseButton>
    </BaseBox>

    <BaseBox class="text-center">
      <BaseTypography variant="p" class="text-xs">
        Don't have an account? 
        <NuxtLink to="/register" class="font-bold text-emerald-500 hover:underline ml-1">Create account</NuxtLink>
      </BaseTypography>
    </BaseBox>
  </BaseBox>
</template>
