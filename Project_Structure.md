Humanized-bot
├── Project_Structure.md
├── README.md
├── app
│   ├── app.config.ts
│   ├── app.vue
│   ├── assets
│   │   └── css
│   │       └── main.css
│   ├── components
│   │   ├── auth
│   │   ├── blocks
│   │   │   └── RunningBrands.vue
│   │   ├── dashboard
│   │   │   └── WaScannerPanel.vue
│   │   ├── global
│   │   │   ├── BottomFooter.vue
│   │   │   ├── CookieConsent.vue
│   │   │   ├── DocSidebar.vue
│   │   │   ├── DynamicLogo.vue
│   │   │   ├── GlobalFooter.vue
│   │   │   ├── GlobalHeader.vue
│   │   │   ├── MegaMenu.vue
│   │   │   └── SearchPopup.vue
│   │   ├── navigation
│   │   │   ├── DesktopNavbar.vue
│   │   │   ├── MobileBottomNav.vue
│   │   │   └── TabletSidebar.vue
│   │   ├── public
│   │   │   ├── FeatureGrid.vue
│   │   │   ├── HeroSection.vue
│   │   │   ├── HowItWorksSection.vue
│   │   │   ├── IntegrationsGrid.vue
│   │   │   ├── PublicFooter.vue
│   │   │   └── PublicNavbar.vue
│   │   ├── sections
│   │   │   ├── JourneySection.vue
│   │   │   └── RunningText.vue
│   │   └── ui
│   │       ├── BaseBadge.vue
│   │       ├── BaseBox.vue
│   │       ├── BaseButton.vue
│   │       ├── BaseCard.vue
│   │       ├── BaseContainer.vue
│   │       ├── BaseGrid.vue
│   │       ├── BaseIconWrapper.vue
│   │       ├── BaseImage.vue
│   │       ├── BaseSurface.vue
│   │       ├── BaseTypography.vue
│   │       └── ThemeToggle.vue
│   ├── composables
│   │   ├── useAuth.ts
│   │   ├── useNavigationData.ts
│   │   ├── usePublicData.ts
│   │   └── useViewport.ts
│   ├── configs
│   │   ├── layouts
│   │   │   └── box.json
│   │   └── ui
│   │       ├── badge.json
│   │       ├── base-button.json
│   │       ├── base-card.json
│   │       ├── base-surface.json
│   │       ├── box.json
│   │       ├── container.json
│   │       ├── grid.json
│   │       ├── hero-section.json
│   │       ├── icon-wrapper.json
│   │       ├── index-page.json
│   │       ├── section-wrapper.json
│   │       ├── surface.json
│   │       └── typography.json
│   ├── data
│   │   ├── bot-data.json
│   │   └── public-data.json
│   ├── error.vue
│   ├── layouts
│   │   ├── auth.vue
│   │   ├── dashboard.vue
│   │   ├── default.vue
│   │   └── full.vue
│   ├── middleware
│   │   └── auth.ts
│   ├── pages
│   │   ├── [...slug].vue
│   │   ├── about.vue
│   │   ├── docs
│   │   │   └── [...slug].vue
│   │   ├── features.vue
│   │   ├── index.vue
│   │   ├── integrations.vue
│   │   ├── login.vue
│   │   ├── pricing.vue
│   │   ├── register.vue
│   │   ├── service.vue
│   │   └── u
│   │       ├── dashboard.vue
│   │       └── settings
│   │           ├── account.vue
│   │           ├── billing.vue
│   │           ├── bot.vue
│   │           └── contacts.vue
│   ├── types
│   │   ├── index.ts
│   │   └── ui.ts
│   └── utils
│       └── ui.ts
├── content
│   └── docs
│       └── intro.md
├── docker-compose.yml
├── eslint.config.mjs
├── lang
│   ├── en
│   │   └── main.json
│   └── id
│       └── main.json
├── nuxt.config.ts
├── package-lock.json
├── package.json
├── prisma
│   ├── schema
│   │   ├── auth.prisma
│   │   ├── billing.prisma
│   │   ├── bot.prisma
│   │   ├── cms.prisma
│   │   ├── config.prisma
│   │   ├── crm.prisma
│   │   ├── integration.prisma
│   │   └── system.prisma
│   └── seeders
│       └── seed.ts
├── public
│   ├── favicon.ico
│   └── robots.txt
├── server
│   ├── api
│   │   └── v1
│   │       ├── auth
│   │       │   ├── login.ts
│   │       │   ├── logout.ts
│   │       │   ├── profile.ts
│   │       │   └── register.ts
│   │       ├── billing
│   │       │   └── status.ts
│   │       ├── bot
│   │       │   ├── connection.ts
│   │       │   └── settings.ts
│   │       ├── cms
│   │       │   └── pages
│   │       │       └── [slug].ts
│   │       ├── crm
│   │       │   └── contacts.ts
│   │       ├── public
│   │       │   ├── features.ts
│   │       │   └── pricing.ts
│   │       └── system
│   │           ├── health.ts
│   │           └── translations
│   │               └── [locale].ts
│   ├── middleware
│   │   └── auth.ts
│   ├── plugins
│   │   └── baileys.ts
│   └── utils
│       ├── auth.ts
│       └── prisma.ts
├── tests
│   └── ui-engine.spec.ts
└── tsconfig.json
