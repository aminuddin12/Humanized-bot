<script setup lang="ts">
useHead({ title: 'About Us | SaaS Humanized-Bot' })
</script>

<template>
  <NuxtLayout name="default">
    <div class="py-20 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <UContainer>
        <div class="max-w-3xl mb-20">
          <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-8">
            We build AI that <span class="text-emerald-500">feels human.</span>
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            SaaS Bot was founded with a single mission: to bridge the gap between automation and human connection. We believe that technology should empower businesses without sacrificing the personal touch.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <UCard>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p class="text-slate-600 dark:text-slate-400">
              To become the global standard for humanized business interactions, making AI accessible and effective for companies of all sizes.
            </p>
          </UCard>
          <UCard>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Values</h2>
            <p class="text-slate-600 dark:text-slate-400">
              Inclusion, transparency, and innovation. We work tirelessly to ensure our bots reflect the diverse needs of our clients.
            </p>
          </UCard>
        </div>

        <div class="text-center mb-20">
          <h2 class="text-3xl font-black text-slate-900 dark:text-white mb-12">Meet the Leadership</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <UCard v-for="i in 3" :key="i" class="flex flex-col items-center text-center">
              <div class="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-800 mx-auto mb-6 flex items-center justify-center">
                <UIcon name="i-fluent-person-24-filled" class="text-4xl text-slate-400" />
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Executive Member {{ i }}</h3>
              <p class="text-sm text-slate-500 uppercase font-black tracking-widest mt-1">Founder & CEO</p>
            </UCard>
          </div>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>
