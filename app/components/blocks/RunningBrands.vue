<script setup lang="ts">
import BaseBox from '~/components/ui/BaseBox.vue'

const brands = [
  'i-logos-google', 'i-logos-microsoft', 'i-logos-slack-icon', 'i-logos-whatsapp-icon',
  'i-logos-telegram', 'i-logos-facebook', 'i-logos-instagram-icon', 'i-logos-twitter'
]
</script>

<template>
  <BaseBox class="py-12 overflow-hidden bg-white dark:bg-dark-bg">
    <BaseBox class="animate-marquee">
      <BaseBox v-for="i in 4" :key="i" display="flex" alignItems="center" gap="xl" class="px-8">
        <UIcon 
          v-for="brand in brands" 
          :key="brand" 
          :name="brand" 
          class="text-5xl grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
        />
      </BaseBox>
    </BaseBox>
  </BaseBox>
</template>
