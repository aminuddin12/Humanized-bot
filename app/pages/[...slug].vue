<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'

const route = useRoute()
const slug = route.params.slug || 'home'

const { data: page, error } = await useFetch(`/api/v1/cms/pages/${slug}`)

useHead({
  title: page.value?.title || 'Page'
})
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer v-if="page" padding="lg">
      <BaseBox class="max-w-4xl mx-auto">
        <BaseTypography variant="h1" class="mb-8">{{ page.title }}</BaseTypography>
        <BaseBox class="prose dark:prose-invert" v-html="page.content" />
      </BaseBox>
    </BaseContainer>
    
    <BaseContainer v-else-if="error" padding="lg">
      <BaseBox class="text-center py-20">
        <BaseTypography variant="h1" class="mb-4 text-6xl">404</BaseTypography>
        <BaseTypography variant="h2">Page Not Found</BaseTypography>
        <BaseTypography variant="p" class="mt-4 mb-8">The page you are looking for does not exist or has been moved.</BaseTypography>
        <BaseButton to="/">Go back home</BaseButton>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>
