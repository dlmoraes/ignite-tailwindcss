'use client'

import * as Select from '@radix-ui/react-select'
import { ComponentProps } from 'react'

export type ContentProps = ComponentProps<typeof Select.Content>

export function Content({ children, ...props }: ContentProps) {
  return (
    <Select.Portal>
      <Select.Content
        side="bottom"
        position="popper"
        sideOffset={8}
        className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
      >
        <Select.Viewport>{children}</Select.Viewport>
      </Select.Content>
    </Select.Portal>
  )
}
