<script setup lang="ts">
const solutions = [
  { title: 'Customer Support', desc: 'Automate 80% of routine inquiries with human-like responses.', icon: 'i-fluent-chat-help-24-filled' },
  { title: 'Sales Automation', desc: 'Qualify leads and book meetings directly within the chat.', icon: 'i-fluent-money-hand-24-filled' },
  { title: 'Marketing Broadcast', desc: 'Send personalized campaigns with high engagement rates.', icon: 'i-fluent-megaphone-loud-24-filled' },
  { title: 'Internal Operations', desc: 'Streamline employee requests and HR processes.', icon: 'i-fluent-people-settings-24-filled' },
  { title: 'Data Analytics', desc: 'Gain deep insights from every conversation automatically.', icon: 'i-fluent-data-line-24-filled' },
  { title: 'API Integrations', desc: 'Connect with your existing CRM and backend systems.', icon: 'i-fluent-puzzle-piece-24-filled' }
]

useHead({ title: 'Solutions | SaaS Humanized-Bot' })
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto mb-20">
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Empowering Your Business with <span class="text-emerald-500">AI Solutions.</span>
          </h1>
          <p class="text-lg text-slate-500 dark:text-slate-400">
            Discover how SaaS Bot can transform your operations and enhance customer satisfaction across all digital touchpoints.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard v-for="sol in solutions" :key="sol.title" class="group hover:ring-2 hover:ring-emerald-500 transition-all duration-300">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-900 dark:bg-black mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
              <UIcon :name="sol.icon" class="text-2xl text-emerald-500" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ sol.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              {{ sol.desc }}
            </p>
          </UCard>
        </div>

        <div class="mt-32 p-12 md:p-20 rounded-[3rem] text-center bg-slate-900 dark:bg-black relative overflow-hidden">
          <div class="absolute inset-0 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
          <h2 class="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 tracking-tight">Ready to transform your workflow?</h2>
          <div class="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <UButton size="xl" color="primary" class="px-10">Get Started Free</UButton>
            <UButton size="xl" variant="outline" color="white" class="px-10">Talk to Sales</UButton>
          </div>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
