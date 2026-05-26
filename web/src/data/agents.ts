import type { Model, ModelStatus } from '../types'

export const agents: Model[] = [
  { id: 'agent-research', provider: 'Internal', status: 'available' },
  { id: 'agent-analysis', provider: 'Internal', status: 'available' },
  { id: 'agent-coding', provider: 'Internal', status: 'available' },
  { id: 'agent-planning', provider: 'Internal', status: 'available' },
  { id: 'agent-testing', provider: 'Internal', status: 'available' },
  { id: 'agent-review', provider: 'Internal', status: 'limited' },
  { id: 'agent-monitor', provider: 'Internal', status: 'available' },
  { id: 'agent-deploy', provider: 'Internal', status: 'available' },
  { id: 'agent-debug', provider: 'Internal', status: 'offline' },
  { id: 'agent-optimize', provider: 'Internal', status: 'available' },
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
