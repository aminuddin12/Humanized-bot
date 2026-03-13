<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue'
import BaseBox from '~/components/ui/BaseBox.vue'
import BaseTypography from '~/components/ui/BaseTypography.vue'
import BaseGrid from '~/components/ui/BaseGrid.vue'
import BaseCard from '~/components/ui/BaseCard.vue'

useHead({ title: 'About Us | SaaS Bot' })
</script>

<template>
  <NuxtLayout name="default">
    <BaseContainer padding="lg">
      <BaseBox display="flex" flexDirection="col" gap="md" class="max-w-3xl mb-20">
        <BaseTypography variant="h1">We build AI that <BaseTypography variant="span" color="accent">feels human.</BaseTypography></BaseTypography>
        <BaseTypography variant="p">
          SaaS Bot was founded with a single mission: to bridge the gap between automation and human connection. We believe that technology should empower businesses without sacrificing the personal touch.
        </BaseTypography>
      </BaseBox>

      <BaseGrid cols="2" gap="xl" class="mb-32">
        <BaseBox display="flex" flexDirection="col" gap="sm">
          <BaseTypography variant="h2">Our Vision</BaseTypography>
          <BaseTypography variant="p" color="muted" class="text-base">
            To become the global standard for humanized business interactions, making AI accessible and effective for companies of all sizes.
          </BaseTypography>
        </BaseBox>
        <BaseBox display="flex" flexDirection="col" gap="sm">
          <BaseTypography variant="h2">Our Values</BaseTypography>
          <BaseTypography variant="p" color="muted" class="text-base">
            Inclusion, transparency, and innovation. We work tirelessly to ensure our bots reflect the diverse needs of our clients.
          </BaseTypography>
        </BaseBox>
      </BaseGrid>

      <BaseBox class="text-center mb-20">
        <BaseTypography variant="h2" class="mb-12">Meet the Leadership</BaseTypography>
        <BaseGrid cols="3" gap="lg">
          <BaseCard v-for="i in 3" :key="i" padding="lg" radius="3xl" class="flex flex-col items-center">
            <BaseBox background="dark" rounded="full" class="w-32 h-32 mb-6 bg-gray-200 dark:bg-gray-800" />
            <BaseTypography variant="h3" class="text-lg">Executive Member {{ i }}</BaseTypography>
            <BaseTypography variant="detail" color="muted">Founder & CEO</BaseTypography>
          </BaseCard>
        </BaseGrid>
      </BaseBox>
    </BaseContainer>
  </NuxtLayout>
</template>
