import type { Model } from '../types'

export const tasks: Model[] = [
  { id: 'task-data-analysis', provider: 'Internal', status: 'available' },
  { id: 'task-code-review', provider: 'Internal', status: 'available' },
  { id: 'task-doc-generation', provider: 'Internal', status: 'available' },
  { id: 'task-bug-fixing', provider: 'Internal', status: 'limited' },
  { id: 'task-performance-opt', provider: 'Internal', status: 'available' },
  { id: 'task-security-audit', provider: 'Internal', status: 'available' },
  { id: 'task-testing', provider: 'Internal', status: 'offline' },
  { id: 'task-deployment', provider: 'Internal', status: 'available' },
]
