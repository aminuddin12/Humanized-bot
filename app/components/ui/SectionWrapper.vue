<script setup lang="ts">
import config from '~/configs/ui/section-wrapper.json'
import { useUI } from '~/utils/ui'

const props = defineProps({
  as: {
    type: String,
    default: 'section'
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg' | 'full',
    default: 'lg'
  }
})

const ui = useUI(config, props)
</script>

<template>
  <component :is="as" :class="ui.root">
    <BaseContainer :size="size" :class="ui.container">
      <slot />
    </BaseContainer>
  </component>
</template>
