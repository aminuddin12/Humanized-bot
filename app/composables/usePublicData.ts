import { ref, computed } from 'vue'
import type { PageData, BotFeature, IntegrationApp } from '~/types'
import botData from '~/data/bot-data.json'

export const usePublicData = () => {
  const colorMode = useColorMode()

  const toggleDark = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }

  const features = ref<BotFeature[]>(botData.features.list)
  const activeFeature = ref<BotFeature>(features.value[0])
  const integrations = ref<IntegrationApp[]>(botData.integrations.list)

  const selectFeature = (feature: BotFeature) => {
    activeFeature.value = feature
  }

  return {
    isDark: computed(() => colorMode.value === 'dark'),
    toggleDark,
    features,
    activeFeature,
    integrations,
    selectFeature,
    pageData: botData as PageData
  }
}
