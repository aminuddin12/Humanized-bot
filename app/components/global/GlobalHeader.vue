<template>
  <header class="sticky top-0 z-50 bg-white/75 dark:bg-slate-900/75 backdrop-blur border-b border-slate-200 dark:border-slate-800">
    <UContainer class="flex items-center justify-between h-16">
      <div class="flex-shrink-0 font-bold text-xl tracking-tight text-emerald-600 dark:text-emerald-400">
        <NuxtLink to="/">SaaSBot</NuxtLink>
      </div>
      
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
        <NuxtLink to="/features" class="hover:text-emerald-500 transition-colors">Features</NuxtLink>
        <NuxtLink to="/pricing" class="hover:text-emerald-500 transition-colors">Pricing</NuxtLink>
        <NuxtLink to="/docs" class="hover:text-emerald-500 transition-colors">Documentation</NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <UButton to="/login" variant="ghost" color="gray" class="hidden sm:flex">Login</UButton>
        <UButton to="/register" color="primary">Get Started</UButton>
      </div>
    </UContainer>
  </header>
</template>
