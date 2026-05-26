export const modelPreviewRows: [string, string][] = [
  ['模型 ID', 'claude-opus-4-7'],
  ['提供商', 'Anthropic'],
  ['上下文窗口', '200K tokens'],
  ['最大输出', '32K tokens'],
  ['输入 / 输出价格', '$15.00 / $75.00 每 M tokens'],
]

export const agentPreviewRows: [string, string][] = [
  ['Agent ID', 'agent-research'],
  ['类型', '研究型'],
  ['使用模型', 'claude-opus-4-7'],
  ['版本', 'v1.2.0'],
  ['状态', '运行中'],
]

export const taskPreviewRows: [string, string][] = [
  ['任务 ID', 'task-data-analysis'],
  ['优先级', '高'],
  ['分配给', 'Agent-analysis'],
  ['截止日期', '2026-05-30'],
  ['进度', '65%'],
]

export const projectPreviewRows: [string, string][] = [
  ['项目 ID', 'project-ai-platform'],
  ['状态', '进行中'],
  ['团队规模', '8 人'],
  ['开始日期', '2026-01-15'],
  ['预期完成', '2026-08-30'],
]

export const skillPreviewRows: [string, string][] = [
  ['技能 ID', 'skill-python'],
  ['类别', '编程语言'],
  ['熟练度', '精通'],
  ['使用频率', '日常'],
  ['相关工具', '3 个'],
]

export const memoryPreviewRows: [string, string][] = [
  ['记忆 ID', 'memory-user-context'],
  ['类型', '用户上下文'],
  ['大小', '2.5 MB'],
  ['最后更新', '2026-05-25 10:30'],
  ['有效期', '30 天'],
]

export const toolPreviewRows: [string, string][] = [
  ['工具 ID', 'tool-code-formatter'],
  ['类别', '开发工具'],
  ['版本', 'v2.1.0'],
  ['依赖', 'Node.js >= 16'],
  ['使用次数', '1,248'],
]

export const getPreviewRows = (activeCategory: string, selectedItem: string): [string, string][] => {
  let baseRows: [string, string][] = []
  
  switch (activeCategory) {
    case 'agent':
      baseRows = agentPreviewRows
      return baseRows.map(([k, v]) => (k === 'Agent ID' ? [k, selectedItem] : [k, v]))
    case 'task':
      baseRows = taskPreviewRows
      return baseRows.map(([k, v]) => (k === '任务 ID' ? [k, selectedItem] : [k, v]))
    case 'project':
      baseRows = projectPreviewRows
      return baseRows.map(([k, v]) => (k === '项目 ID' ? [k, selectedItem] : [k, v]))
    case 'skill':
      baseRows = skillPreviewRows
      return baseRows.map(([k, v]) => (k === '技能 ID' ? [k, selectedItem] : [k, v]))
    case 'memory':
      baseRows = memoryPreviewRows
      return baseRows.map(([k, v]) => (k === '记忆 ID' ? [k, selectedItem] : [k, v]))
    case 'tool':
      baseRows = toolPreviewRows
      return baseRows.map(([k, v]) => (k === '工具 ID' ? [k, selectedItem] : [k, v]))
    case 'model':
    default:
      return modelPreviewRows.map(([k, v]) => (k === '模型 ID' ? [k, selectedItem] : [k, v]))
  }
}

export const previewTabs = [
  { key: 'preview', label: '预览' },
  { key: 'operate', label: '操作' },
] as const

export type PreviewTabKey = (typeof previewTabs)[number]['key']
