import type { Model, ModelStatus } from '../types'

export const models: Model[] = [
  { id: 'claude-opus-4-7', provider: 'Anthropic', status: 'available' },
  { id: 'claude-sonnet-4-6', provider: 'Anthropic', status: 'available' },
  { id: 'claude-haiku-4-5', provider: 'Anthropic', status: 'available' },
  { id: 'gpt-4o', provider: 'OpenAI', status: 'available' },
  { id: 'gemini-2.0-pro', provider: 'Google', status: 'limited' },
  { id: 'llama-3.3-70b', provider: 'Meta', status: 'offline' },
]

export const statusLabel: Record<ModelStatus, string> = {
  available: '可用',
  limited: '受限',
  offline: '离线',
}

export const statusDot: Record<ModelStatus, string> = {
  available: 'bg-[#10B981]',
  limited: 'bg-[#F59E0B]',
  offline: 'bg-[#A1A1AA]',
}
