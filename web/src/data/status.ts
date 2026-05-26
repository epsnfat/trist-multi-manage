export const metrics: [string, string][] = [
  ['调用/min', '1.2K'],
  ['Tokens/s', '85'],
  ['P50 延迟', '640 ms'],
  ['错误率', '0.2%'],
]

export const statusTabs = [
  { key: 'status', label: '状态' },
  { key: 'anomaly', label: '异常' },
  { key: 'memory', label: '内存' },
] as const

export type StatusTabKey = (typeof statusTabs)[number]['key']
