<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <BaseBox as="section" background="white" class="border-t border-gray-50 dark:border-gray-900 py-8">
    <BaseContainer padding="none">
      <BaseBox display="flex" alignItems="center" justifyContent="between" class="flex-col md:flex-row gap-4">
        <BaseTypography variant="detail" color="muted" class="text-[10px]">
          &copy; {{ currentYear }} SaaS Bot Engine by Alan Digital. All Rights Reserved.
        </BaseTypography>
        
        <BaseBox display="flex" alignItems="center" gap="md">
          <UIcon name="i-logos-visa" class="text-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <UIcon name="i-logos-mastercard" class="text-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <UIcon name="i-logos-stripe" class="text-3xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <UIcon name="i-logos-paypal" class="text-2xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
        </BaseBox>
      </BaseBox>
    </BaseContainer>
  </BaseBox>
</template>
