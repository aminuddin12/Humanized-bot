import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveStyles(config: Record<string, unknown>, props: Record<string, unknown>) {
  const activeClasses: string[] = [(config.base as string) || '']
  
  const variants = config.variants as Record<string, Record<string, string>> | undefined
  const defaultVariants = config.defaultVariants as Record<string, string> | undefined

  if (variants) {
    Object.keys(variants).forEach((key) => {
      const propValue = props[key] as string | undefined
      const variantOptions = variants[key]
      
      if (propValue && variantOptions && variantOptions[propValue]) {
        activeClasses.push(variantOptions[propValue])
      } else if (defaultVariants && defaultVariants[key] && variantOptions) {
        const defaultKey = defaultVariants[key]
        const defaultOption = variantOptions[defaultKey]
        if (defaultOption) {
          activeClasses.push(defaultOption)
        }
      }
    })
  }

  // Handle slots if they exist
  const configSlots = config.slots as Record<string, string> | undefined
  if (configSlots) {
    const slots: Record<string, string> = {}
    Object.keys(configSlots).forEach((slotName) => {
      const slotBase = configSlots[slotName]
      const slotClasses = [slotBase]
      
      // Slot variants could also be handled here if needed
      slots[slotName] = cn(...slotClasses)
    })
    return { base: cn(...activeClasses), slots }
  }

  return cn(...activeClasses)
}
