import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export type ControlProps = InputHTMLAttributes<HTMLInputElement>

export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none dark:text-zinc-100 dark:placeholder:text-zinc-400',
        props.className,
      )}
    />
  )
}
