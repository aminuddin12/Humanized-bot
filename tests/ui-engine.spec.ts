import { describe, it, expect } from 'vitest'
import { resolveStyles } from '../app/utils/ui'

describe('resolveStyles', () => {
  const config = {
    base: 'base-class',
    variants: {
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary'
      },
      size: {
        sm: 'text-sm',
        lg: 'text-lg'
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'sm'
    }
  }

  it('should apply base class', () => {
    const result = resolveStyles(config, {})
    expect(result).toContain('base-class')
  })

  it('should apply default variants when no props provided', () => {
    const result = resolveStyles(config, {})
    expect(result).toContain('text-primary')
    expect(result).toContain('text-sm')
  })

  it('should override default variants with props', () => {
    const result = resolveStyles(config, { color: 'secondary', size: 'lg' })
    expect(result).toContain('text-secondary')
    expect(result).toContain('text-lg')
    expect(result).not.toContain('text-primary')
    expect(result).not.toContain('text-sm')
  })

  it('should handle slots', () => {
    const slotConfig = {
      base: 'root-base',
      slots: {
        root: 'slot-root-base',
        content: 'slot-content-base'
      }
    }
    const result = resolveStyles(slotConfig, {})
    expect(result.base).toBe('root-base')
    expect(result.slots.root).toBe('slot-root-base')
    expect(result.slots.content).toBe('slot-content-base')
  })
})
