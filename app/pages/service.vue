<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import BaseIconWrapper from '~/components/ui/BaseIconWrapper.vue'

const solutions = [
  { title: 'Customer Support', desc: 'Automate 80% of routine inquiries with human-like responses.', icon: 'i-fluent-chat-help-24-filled' },
  { title: 'Sales Automation', desc: 'Qualify leads and book meetings directly within the chat.', icon: 'i-fluent-money-hand-24-filled' },
  { title: 'Marketing Broadcast', desc: 'Send personalized campaigns with high engagement rates.', icon: 'i-fluent-megaphone-loud-24-filled' },
  { title: 'Internal Operations', desc: 'Streamline employee requests and HR processes.', icon: 'i-fluent-people-settings-24-filled' },
  { title: 'Data Analytics', desc: 'Gain deep insights from every conversation automatically.', icon: 'i-fluent-data-line-24-filled' },
  { title: 'API Integrations', desc: 'Connect with your existing CRM and backend systems.', icon: 'i-fluent-puzzle-piece-24-filled' }
]

useHead({ title: 'Solutions | SaaS Bot' })
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer padding="lg">
      <BaseBox class="text-center max-w-3xl mx-auto mb-20">
        <BaseTypography variant="h1" class="mb-6">Empowering Your Business with <BaseTypography variant="span" color="accent">AI Solutions.</BaseTypography></BaseTypography>
        <BaseTypography variant="p">
          Discover how SaaS Bot can transform your operations and enhance customer satisfaction across all digital touchpoints.
        </BaseTypography>
      </BaseBox>

      <BaseGrid cols="3" gap="lg">
        <BaseCard v-for="sol in solutions" :key="sol.title" padding="xl" radius="3xl" class="group hover:border-alan-accent transition-all duration-500">
          <BaseIconWrapper :icon="sol.icon" color="dark" size="lg" class="mb-8 group-hover:scale-110 transition-transform" />
          <BaseTypography variant="h3" class="mb-4">{{ sol.title }}</BaseTypography>
          <BaseTypography variant="p" color="muted" class="text-sm">
            {{ sol.desc }}
          </BaseTypography>
        </BaseCard>
      </BaseGrid>

      <BaseBox background="dark" class="mt-32 p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
        <BaseBox position="absolute" class="inset-0 bg-emerald-500/10 blur-[100px] pointer-events-none" />
        <BaseTypography variant="h2" color="white" class="mb-8 relative z-10">Ready to transform your workflow?</BaseTypography>
        <BaseBox display="flex" justifyContent="center" gap="md" class="relative z-10">
          <BaseButton size="lg">Get Started Free</BaseButton>
          <BaseButton variant="outline" size="lg" class="text-white border-white/20 hover:bg-white/10">Talk to Sales</BaseButton>
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>
