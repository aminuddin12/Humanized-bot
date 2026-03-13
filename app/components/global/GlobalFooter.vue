<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'

const footerLinks = [
  { 
    title: 'Product', 
    items: [
      { label: 'Features', to: '/features' },
      { label: 'Integrations', to: '/integrations' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Changelog', to: '#' }
    ] 
  },
  { 
    title: 'Company', 
    items: [
      { label: 'About Us', to: '/about' },
      { label: 'Careers', to: '#' },
      { label: 'Privacy', to: '#' },
      { label: 'Terms', to: '#' }
    ] 
  },
  { 
    title: 'Support', 
    items: [
      { label: 'Documentation', to: '/docs' },
      { label: 'Help Center', to: '#' },
      { label: 'Community', to: '#' },
      { label: 'Status', to: '#' }
    ] 
  }
]

const socials = [
  { icon: 'i-fa6-brands-twitter', to: '#' },
  { icon: 'i-fa6-brands-linkedin', to: '#' },
  { icon: 'i-fa6-brands-github', to: '#' }
]
</script>

<template>
  <BaseBox as="footer" background="white" class="border-t border-gray-100 dark:border-gray-800 pt-20 pb-10">
    <BaseContainer padding="none">
      <BaseBox display="grid" class="grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <!-- Left: Company Info (35%) -->
        <BaseBox class="lg:col-span-4 flex flex-col gap-6">
          <NuxtLink to="/" class="flex items-center gap-2">
            <BaseBox background="dark" rounded="xl" display="flex" alignItems="center" justifyContent="center" class="w-10 h-10">
              <UIcon name="i-fluent-bot-24-filled" class="text-xl text-emerald-500" />
            </BaseBox>
            <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
          </NuxtLink>
          
          <BaseTypography variant="p" class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Automate your customer interactions with the most human-like AI bot engine. Scale faster, respond smarter, and never miss a lead.
          </BaseTypography>

          <BaseBox display="flex" flexDirection="col" gap="xs">
            <BaseTypography variant="detail" color="muted" class="flex items-center gap-2">
              <UIcon name="i-fluent-location-24-regular" class="text-emerald-500" />
              Alan Digital Tower, 22nd Floor, Jakarta
            </BaseTypography>
            <BaseTypography variant="detail" color="muted" class="flex items-center gap-2">
              <UIcon name="i-fluent-phone-24-regular" class="text-emerald-500" />
              +62 21 555 0123
            </BaseTypography>
          </BaseBox>

          <BaseBox display="flex" gap="sm">
            <NuxtLink v-for="social in socials" :key="social.icon" :to="social.to" class="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
              <UIcon :name="social.icon" class="text-lg" />
            </NuxtLink>
          </BaseBox>
        </BaseBox>

        <!-- Right: Links (65%) -->
        <BaseBox class="lg:col-span-8">
          <BaseGrid cols="3" gap="lg">
            <BaseBox v-for="group in footerLinks" :key="group.title" display="flex" flexDirection="col" gap="md">
              <BaseTypography variant="detail" class="font-black text-gray-900 dark:text-white uppercase tracking-widest">
                {{ group.title }}
              </BaseTypography>
              <BaseBox as="ul" display="flex" flexDirection="col" gap="sm">
                <BaseBox as="li" v-for="item in group.items" :key="item.label">
                  <NuxtLink :to="item.to" class="text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-500 transition-colors">
                    {{ item.label }}
                  </NuxtLink>
                </BaseBox>
              </BaseBox>
            </BaseBox>
          </BaseGrid>
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </BaseBox>
</template>
