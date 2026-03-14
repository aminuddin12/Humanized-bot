<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useHead({ title: 'Create Account | SaaS Humanized-Bot' })

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
  <div class="flex flex-col gap-8">
    <div>
      <h2 class="text-2xl font-black text-slate-900 dark:text-white">Create account</h2>
      <p class="text-sm text-slate-500 mt-1">Start your 14-day free trial today. No credit card required.</p>
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="handleRegister">
      <UFormGroup label="Full Name">
        <UInput 
          v-model="form.name"
          placeholder="John Doe"
          icon="i-fluent-person-24-regular"
          size="lg"
        />
      </UFormGroup>

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
        Start Free Trial
      </UButton>
    </form>

    <div class="text-center">
      <p class="text-xs text-slate-500">
        Already have an account? 
        <NuxtLink to="/login" class="font-bold text-emerald-500 hover:underline ml-1">Sign in</NuxtLink>
      </p>
    </div>
  </div>
</template>
