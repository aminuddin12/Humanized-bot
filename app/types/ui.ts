import type boxConfig from '~/configs/layouts/box.json'
import type surfaceConfig from '~/configs/ui/surface.json'
import type typographyConfig from '~/configs/ui/typography.json'

export type BoxLayoutAlias = keyof typeof boxConfig
export type SurfaceAlias = keyof typeof surfaceConfig
export type TypographyAlias = keyof typeof typographyConfig
