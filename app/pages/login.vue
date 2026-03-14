<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useHead({ title: 'Login | SaaS Humanized-Bot' })

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
  <div class="flex flex-col gap-8">
    <div>
      <h2 class="text-2xl font-black text-slate-900 dark:text-white">Welcome back</h2>
      <p class="text-sm text-slate-500 mt-1">Enter your credentials to access your dashboard.</p>
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="handleLogin">
      <UFormGroup label="Email Address">
        <UInput 
          v-model="form.email"
          type="email" 
          placeholder="name@company.com"
          icon="i-fluent-mail-24-regular"
          size="lg"
        />
      </UFormGroup>

      <UFormGroup label="Password">
        <template #hint>
          <NuxtLink to="#" class="text-xs font-bold text-emerald-500 hover:underline">Forgot?</NuxtLink>
        </template>
        <UInput 
          v-model="form.password"
          type="password" 
          placeholder="••••••••"
          icon="i-fluent-lock-closed-24-regular"
          size="lg"
        />
      </UFormGroup>

      <UButton 
        type="submit" 
        color="primary" 
        size="lg" 
        block 
        class="mt-2 font-bold py-3"
        :loading="isLoading"
      >
        Sign in to Dashboard
      </UButton>
    </form>

    <div class="text-center">
      <p class="text-xs text-slate-500">
        Don't have an account? 
        <NuxtLink to="/register" class="font-bold text-emerald-500 hover:underline ml-1">Create account</NuxtLink>
      </p>
    </div>
  </div>
</template>
