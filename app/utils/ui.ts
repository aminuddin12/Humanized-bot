import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function resolveStyles(config: any, props: Record<string, any>) {
  const activeClasses = [config.base]
  
  if (config.variants) {
    Object.keys(config.variants).forEach((key) => {
      const propValue = props[key]
      const variantOptions = config.variants[key]
      
      if (propValue && variantOptions[propValue]) {
        activeClasses.push(variantOptions[propValue])
      } else if (config.defaultVariants && config.defaultVariants[key]) {
        activeClasses.push(variantOptions[config.defaultVariants[key]])
      }
    })
  }

  // Handle slots if they exist
  if (config.slots) {
    const slots: Record<string, string> = {}
    Object.keys(config.slots).forEach((slotName) => {
      const slotBase = config.slots[slotName]
      const slotClasses = [slotBase]
      
      // Slot variants could also be handled here if needed
      slots[slotName] = cn(...slotClasses)
    })
    return { base: cn(...activeClasses), slots }
  }

  return cn(...activeClasses)
}
