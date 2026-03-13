<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'

const currentYear = new Date().getFullYear()

const footerLinks = [
  { title: 'Product', items: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
  { title: 'Company', items: ['About Us', 'Careers', 'Contact', 'Blog'] },
  { title: 'Resources', items: ['Documentation', 'API Reference', 'Status', 'Privacy'] }
]
</script>

<template>
  <BaseBox as="footer" background="white" class="border-t border-gray-100 dark:border-dark-border">
    <BaseContainer padding="sm">
      <BaseGrid cols="4" gap="lg">
        <BaseBox display="flex" flexDirection="col" gap="sm">
          <NuxtLink to="/" class="flex items-center gap-2">
            <BaseTypography variant="h3" as="span" class="text-xl tracking-tighter">SaaS<BaseTypography variant="span" color="accent">Bot</BaseTypography></BaseTypography>
          </NuxtLink>
          <BaseTypography variant="p" class="text-sm">
            Scale your customer interactions with our smart humanized bot engine.
          </BaseTypography>
        </BaseBox>

        <BaseBox v-for="section in footerLinks" :key="section.title" display="flex" flexDirection="col" gap="sm">
          <BaseTypography variant="detail">{{ section.title }}</BaseTypography>
          <BaseBox as="ul" display="flex" flexDirection="col" gap="none">
            <BaseBox as="li" v-for="item in section.items" :key="item">
              <NuxtLink to="#" class="group">
                <BaseTypography variant="p" color="muted" class="text-xs group-hover:text-alan-dark dark:group-hover:text-white transition-colors py-1">
                  {{ item }}
                </BaseTypography>
              </NuxtLink>
            </BaseBox>
          </BaseBox>
        </BaseBox>
      </BaseGrid>

      <BaseBox display="flex" alignItems="center" justifyContent="between" class="mt-20 pt-8 border-t border-gray-100 dark:border-dark-border">
        <BaseTypography variant="detail" color="muted" class="text-[9px]">
          &copy; {{ currentYear }} SaaS Bot Engine. All Rights Reserved.
        </BaseTypography>
        <BaseBox display="flex" gap="sm">
          <UIcon name="i-fa6-brands-twitter" class="text-alan-text-muted hover:text-alan-dark transition-colors" />
          <UIcon name="i-fa6-brands-instagram" class="text-alan-text-muted hover:text-alan-dark transition-colors" />
          <UIcon name="i-fa6-brands-linkedin" class="text-alan-text-muted hover:text-alan-dark transition-colors" />
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </BaseBox>
</template>
