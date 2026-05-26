import type { Model } from '../types'

export const memories: Model[] = [
  { id: 'memory-user-context', provider: 'Internal', status: 'available' },
  { id: 'memory-conversation', provider: 'Internal', status: 'available' },
  { id: 'memory-knowledge-base', provider: 'Internal', status: 'available' },
  { id: 'memory-patterns', provider: 'Internal', status: 'available' },
  { id: 'memory-preferences', provider: 'Internal', status: 'limited' },
  { id: 'memory-history', provider: 'Internal', status: 'available' },
]
