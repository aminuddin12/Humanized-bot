export type ButtonVariant = 'primary' | 'secondary' | 'white' | 'glass' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type CardVariant = 'default' | 'glass' | 'surface' | 'featured' | 'white'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'
export type CardRadius = 'none' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'

export type TypographyAlias = 'h1' | 'h2' | 'h3' | 'p' | 'detail' | 'span'

// Keep existing aliases if they are used elsewhere, but these new ones are more specific
export type BoxLayoutAlias = string
export type SurfaceAlias = string
