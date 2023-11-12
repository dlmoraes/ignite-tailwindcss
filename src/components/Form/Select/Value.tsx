'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ValueProps = ComponentProps<typeof Select.Value>

export function Value({ children, ...props }: ValueProps) {
  if (!children) {
    return <Select.Value {...props} />
  }

  return (
    <Select.Value {...props} className={twMerge('text-black', props.className)}>
      {children}
    </Select.Value>
  )
}
