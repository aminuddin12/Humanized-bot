<script setup>
import HeroSection from '@/components/public/HeroSection.vue'
import FeatureGrid from '@/components/public/FeatureGrid.vue'
import DoctorList from '@/components/public/DoctorList.vue'
import JourneySection from '@/components/public/JourneySection.vue'
import { reactive } from 'vue'

const pageData = reactive({
  hero: {
    badgeText: 'Klinik+ Engine v2.5 Online',
    headline: 'Kesehatan Anda,',
    highlightedText: 'Dipercepat oleh Kecerdasan.',
    subline: 'Konsultasi medis tanpa batas waktu. Mulai dari pengecekan gejala awal berbasis AI hingga panggilan video dengan dokter spesialis terkemuka dalam hitungan menit.',
    primaryCta: { label: 'Cek Gejala Sekarang', to: '#triage' },
    secondaryCta: { label: 'Buat Janji Temu', to: '#doctors' }
  },
  triage: {
    title: 'Kenali Gejala Anda.',
    description: 'Pilih area keluhan, dan AI medis kami akan memberikan rekomendasi tindakan atau spesialis yang tepat secara instan.',
    bodyZones: [
      { id: 'head', name: "Kepala & Saraf", icon: "fluent:brain-circuit-24-regular", aiResponse: "Menganalisis pola pusing, migrain, atau masalah saraf. Apakah Anda merasakan pandangan kabur?", specialists: ["Neurologi", "THT"] },
      { id: 'chest', name: "Dada & Paru", icon: "fluent:lungs-24-regular", aiResponse: "Mendeteksi indikasi sesak napas, batuk persisten, atau nyeri dada. Sudah berapa lama gejala ini muncul?", specialists: ["Pulmonologi", "Kardiologi"] },
      { id: 'stomach', name: "Pencernaan", icon: "fluent:food-apple-20-regular", aiResponse: "Mengevaluasi keluhan mual, asam lambung, atau nyeri abdomen. Apakah disertai demam?", specialists: ["Penyakit Dalam", "Gizi Klinik"] },
      { id: 'joints', name: "Otot & Sendi", icon: "fluent:walk-24-regular", aiResponse: "Memeriksa riwayat cedera fisik, pegal linu, atau radang sendi. Bagian mana yang terasa kaku?", specialists: ["Ortopedi", "Fisioterapi"] }
    ]
  },
  doctors: {
    title: 'Tersedia Saat Ini.',
    description: 'Tidak perlu antre berjam-jam. Terhubung dengan dokter spesialis berpengalaman secara langsung melalui video call beresolusi tinggi.',
    list: [
      { id: 1, name: "dr. Ahmad Faisal, Sp.PD", spec: "Penyakit Dalam", rating: "4.9", exp: "12 Thn", image: "https://i.pravatar.cc/300?img=11", isLive: true },
      { id: 2, name: "dr. Rina P., Sp.A", spec: "Dokter Anak (Pediatri)", rating: "5.0", exp: "8 Thn", image: "https://i.pravatar.cc/300?img=47", isLive: true },
      { id: 3, name: "dr. Kevin W., Sp.S", spec: "Saraf & Neurologi", rating: "4.8", exp: "15 Thn", image: "https://i.pravatar.cc/300?img=12", isLive: false },
      { id: 4, name: "dr. Maya Indah, Sp.GK", spec: "Gizi Klinik", rating: "4.9", exp: "6 Thn", image: "https://i.pravatar.cc/300?img=5", isLive: true }
    ]
  }
})

useHead({
  title: 'Beranda',
  meta: [
    { property: 'og:title', content: 'Klinik+ | Home' }
  ]
})
</script>

<template>
  <div class="w-full relative">
    <div class="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-500/10 dark:bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>
    <div class="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen"></div>

    <main>
      <HeroSection v-bind="pageData.hero" />
      <FeatureGrid v-bind="pageData.triage" />
      <DoctorList v-bind="pageData.doctors" :doctors="pageData.doctors.list" />
      <JourneySection />
    </main>
  </div>
</template>
