import { ref, onMounted } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const bodyZones = [
  { id: 'head', name: "Kepala & Saraf", icon: "fluent:brain-circuit-24-regular", aiResponse: "Menganalisis pola pusing, migrain, atau masalah saraf. Apakah Anda merasakan pandangan kabur?", specialists: ["Neurologi", "THT"] },
  { id: 'chest', name: "Dada & Paru", icon: "fluent:lungs-24-regular", aiResponse: "Mendeteksi indikasi sesak napas, batuk persisten, atau nyeri dada. Sudah berapa lama gejala ini muncul?", specialists: ["Pulmonologi", "Kardiologi"] },
  { id: 'stomach', name: "Pencernaan", icon: "fluent:food-apple-20-regular", aiResponse: "Mengevaluasi keluhan mual, asam lambung, atau nyeri abdomen. Apakah disertai demam?", specialists: ["Penyakit Dalam", "Gizi Klinik"] },
  { id: 'joints', name: "Otot & Sendi", icon: "fluent:walk-24-regular", aiResponse: "Memeriksa riwayat cedera fisik, pegal linu, atau radang sendi. Bagian mana yang terasa kaku?", specialists: ["Ortopedi", "Fisioterapi"] }
]

const activeZone = ref(bodyZones[0])

const selectZone = (zone: any) => {
  activeZone.value = zone
}

const liveDoctors = [
  { id: 1, name: "dr. Ahmad Faisal, Sp.PD", spec: "Penyakit Dalam", rating: "4.9", exp: "12 Thn", image: "https://i.pravatar.cc/300?img=11", isLive: true },
  { id: 2, name: "dr. Rina P., Sp.A", spec: "Dokter Anak (Pediatri)", rating: "5.0", exp: "8 Thn", image: "https://i.pravatar.cc/300?img=47", isLive: true },
  { id: 3, name: "dr. Kevin W., Sp.S", spec: "Saraf & Neurologi", rating: "4.8", exp: "15 Thn", image: "https://i.pravatar.cc/300?img=12", isLive: false },
  { id: 4, name: "dr. Maya Indah, Sp.GK", spec: "Gizi Klinik", rating: "4.9", exp: "6 Thn", image: "https://i.pravatar.cc/300?img=5", isLive: true }
]

export const usePublicData = () => {
  onMounted(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
  })

  return {
    isDark,
    toggleDark,
    bodyZones,
    activeZone,
    selectZone,
    liveDoctors
  }
}
