import type { Model } from '../types'

export const tools: Model[] = [
  { id: 'tool-code-formatter', provider: 'Internal', status: 'available' },
  { id: 'tool-linter', provider: 'Internal', status: 'available' },
  { id: 'tool-git-integration', provider: 'Internal', status: 'available' },
  { id: 'tool-api-client', provider: 'Internal', status: 'available' },
  { id: 'tool-database-query', provider: 'Internal', status: 'limited' },
  { id: 'tool-file-processor', provider: 'Internal', status: 'available' },
  { id: 'tool-notification', provider: 'Internal', status: 'offline' },
  { id: 'tool-logger', provider: 'Internal', status: 'available' },
  { id: 'tool-metrics-collector', provider: 'Internal', status: 'available' },
  { id: 'tool-cache-manager', provider: 'Internal', status: 'available' },
]
