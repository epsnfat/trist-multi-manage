import type { LucideIcon } from 'lucide-react'

export type Category = {
  key: string
  icon: LucideIcon
  label: string
}

export type ModelStatus = 'available' | 'limited' | 'offline'

export type Model = {
  id: string
  provider: string
  status: ModelStatus
}

export type LogLevel = 'INFO' | 'DEBUG' | 'WARN' | 'ERROR'
