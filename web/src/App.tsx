import { useState } from 'react'
import {
  Activity,
  Bell,
  Bot,
  Brain,
  ChevronRight,
  Cpu,
  ExternalLink,
  Folder,
  Info as InfoIcon,
  ListChecks,
  type LucideIcon,
  Maximize2,
  PanelRightClose,
  PanelRightOpen,
  Play,
  Plus,
  RefreshCw,
  Search,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Trash2,
  Wrench,
} from 'lucide-react'

type Category = {
  key: string
  icon: LucideIcon
  label: string
}

const categories: Category[] = [
  { key: 'agent', icon: Bot, label: 'Agent' },
  { key: 'model', icon: Cpu, label: '模型' },
  { key: 'task', icon: ListChecks, label: '任务' },
  { key: 'project', icon: Folder, label: '项目' },
  { key: 'skill', icon: Sparkles, label: '技能' },
  { key: 'memory', icon: Brain, label: '记忆' },
  { key: 'tool', icon: Wrench, label: '工具' },
]

type ModelStatus = 'available' | 'limited' | 'offline'

type Model = {
  id: string
  provider: string
  status: ModelStatus
}

const models: Model[] = [
  { id: 'claude-opus-4-7', provider: 'Anthropic', status: 'available' },
  { id: 'claude-sonnet-4-6', provider: 'Anthropic', status: 'available' },
  { id: 'claude-haiku-4-5', provider: 'Anthropic', status: 'available' },
  { id: 'gpt-4o', provider: 'OpenAI', status: 'available' },
  { id: 'gemini-2.0-pro', provider: 'Google', status: 'limited' },
  { id: 'llama-3.3-70b', provider: 'Meta', status: 'offline' },
]

const statusLabel: Record<ModelStatus, string> = {
  available: '可用',
  limited: '受限',
  offline: '离线',
}

const statusDot: Record<ModelStatus, string> = {
  available: 'bg-[#10B981]',
  limited: 'bg-[#F59E0B]',
  offline: 'bg-[#A1A1AA]',
}

const previewRows: [string, string][] = [
  ['模型 ID', 'claude-opus-4-7'],
  ['提供商', 'Anthropic'],
  ['上下文窗口', '200K tokens'],
  ['最大输出', '32K tokens'],
  ['输入 / 输出价格', '$15.00 / $75.00 每 M tokens'],
]

type LogLevel = 'INFO' | 'DEBUG' | 'WARN' | 'ERROR'

const logs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '10:24:31', level: 'INFO', msg: '模型 claude-opus-4-7 已就绪' },
  { t: '10:24:32', level: 'DEBUG', msg: '加载 tokenizer (vocab 200K)' },
  { t: '10:24:34', level: 'INFO', msg: '收到调用请求 sess #8c2f1a' },
  { t: '10:25:01', level: 'WARN', msg: '上下文使用接近 90% 阈值' },
  { t: '10:25:08', level: 'INFO', msg: '生成完成 — 输出 1,248 tokens' },
  { t: '10:25:12', level: 'ERROR', msg: '限流 429 — 已自动重试' },
]

const levelClass: Record<LogLevel, string> = {
  INFO: 'bg-[#DBEAFE] text-[#1D4ED8]',
  DEBUG: 'bg-[#F4F4F5] text-[#52525B]',
  WARN: 'bg-[#FEF3C7] text-[#B45309]',
  ERROR: 'bg-[#FEE2E2] text-[#B91C1C]',
}

const metrics: [string, string][] = [
  ['调用/min', '1.2K'],
  ['Tokens/s', '85'],
  ['P50 延迟', '640 ms'],
  ['错误率', '0.2%'],
]

const infoFields: [string, string][] = [
  ['ID', 'anthropic/claude-opus-4-7'],
  ['发布日期', '2026-01-15'],
  ['最后更新', '2026-04-22'],
  ['提供商', 'Anthropic'],
  ['调用次数', '12.3M'],
  ['成功率', '99.6%'],
]

const capabilities = ['推理', '视觉', '工具调用']

const statusTabs = [
  { key: 'status', label: '状态' },
  { key: 'anomaly', label: '异常' },
  { key: 'memory', label: '内存' },
] as const

const previewTabs = [
  { key: 'preview', label: '预览' },
  { key: 'operate', label: '操作' },
] as const

export default function App() {
  const [activeCategory, setActiveCategory] = useState('model')
  const [selectedModel, setSelectedModel] = useState('claude-opus-4-7')
  const [rightOpen, setRightOpen] = useState(true)
  const [previewTab, setPreviewTab] = useState<(typeof previewTabs)[number]['key']>('preview')
  const [statusTab, setStatusTab] = useState<(typeof statusTabs)[number]['key']>('status')

  const activeMeta = categories.find((c) => c.key === activeCategory) ?? categories[1]
  const ActiveIcon = activeMeta.icon

  return (
    <div className="w-[1200px] h-[750px] flex flex-col bg-[#F7F7F8] overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5 font-sans">
      {/* Title bar */}
      <header className="h-9 px-4 flex items-center justify-between bg-white border-b border-[#E4E4E7]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="text-[13px] font-medium text-[#52525B]">Trist Multi Manage</div>
        <div className="flex items-center gap-3.5 text-[#71717A]">
          <Search size={16} />
          <Bell size={16} />
          <Settings size={16} />
        </div>
      </header>

      <div className="flex-1 flex min-h-0">
        {/* Icon column */}
        <aside className="w-14 py-3 flex flex-col items-center gap-1.5 bg-[#FAFAFA] border-r border-[#E4E4E7]">
          {categories.map((c) => {
            const active = c.key === activeCategory
            const Icon = c.icon
            return (
              <button
                key={c.key}
                onClick={() => setActiveCategory(c.key)}
                className={`w-11 h-11 flex flex-col items-center justify-center gap-0.5 rounded-[10px] transition-colors ${
                  active ? 'bg-[#EEF2FF] border border-[#C7D2FE]' : 'hover:bg-[#F4F4F5]'
                }`}
              >
                <Icon size={20} className={active ? 'text-[#4338CA]' : 'text-[#52525B]'} />
                <span
                  className={`text-[10px] ${
                    active ? 'font-semibold text-[#4338CA]' : 'font-medium text-[#71717A]'
                  }`}
                >
                  {c.label}
                </span>
              </button>
            )
          })}
          <div className="flex-1" />
          <div className="w-8 h-8 flex items-center justify-center bg-[#18181B] rounded-full">
            <span className="text-[12px] font-semibold text-white">L</span>
          </div>
        </aside>

        {/* List column */}
        <aside className="w-[220px] bg-white border-r border-[#E4E4E7] flex flex-col">
          <div className="h-12 px-4 flex items-center justify-between border-b border-[#E4E4E7]">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-semibold text-[#18181B]">{activeMeta.label}</span>
              <span className="px-2 py-0.5 rounded-full bg-[#F4F4F5] text-[11px] font-semibold text-[#71717A]">
                {activeCategory === 'model' ? models.length : 0}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#52525B]">
              <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#F4F4F5]">
                <Search size={16} />
              </button>
              <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-[#F4F4F5]">
                <Plus size={16} />
              </button>
            </div>
          </div>
          <div className="px-3 py-2.5">
            <div className="h-8 px-2.5 flex items-center gap-2 bg-[#F4F4F5] rounded-lg">
              <Search size={14} className="text-[#A1A1AA]" />
              <span className="text-[13px] text-[#A1A1AA]">搜索 {activeMeta.label}...</span>
            </div>
          </div>
          <div className="px-2 py-1 flex flex-col gap-0.5 overflow-auto">
            {models.map((m) => {
              const active = m.id === selectedModel
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className={`px-2.5 py-2.5 flex items-start gap-2.5 rounded-lg text-left ${
                    active ? 'bg-[#EEF2FF]' : 'hover:bg-[#FAFAFA]'
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#F4F4F5] rounded-lg">
                      <Cpu size={16} className={active ? 'text-[#4338CA]' : 'text-[#52525B]'} />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[m.status]}`} />
                      <span className="text-[10px] text-[#71717A]">{statusLabel[m.status]}</span>
                    </div>
                  </div>
                  <div className="pt-1 flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-[#18181B] truncate">{m.id}</div>
                    <div className="text-[11px] text-[#71717A]">{m.provider}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </aside>

        {/* Middle area */}
        <main className="flex-1 flex flex-col bg-[#F7F7F8] min-w-0">
          {/* Toolbar */}
          <div className="h-12 pl-5 pr-[-5px] flex items-center justify-between bg-white border-b border-[#E4E4E7]">
            <div className="flex items-center gap-2">
              <ActiveIcon size={16} className="text-[#71717A]" />
              <span className="text-[13px] text-[#71717A]">{activeMeta.label}</span>
              <ChevronRight size={14} className="text-[#A1A1AA]" />
              <span className="text-[14px] font-semibold text-[#18181B]">{selectedModel}</span>
            </div>
            <div className="flex items-center gap-2 pr-5">
              <div className="p-[3px] flex gap-0.5 bg-[#F4F4F5] rounded-lg">
                {previewTabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setPreviewTab(t.key)}
                    className={`px-3.5 py-1.5 rounded-md text-[12px] ${
                      previewTab === t.key
                        ? 'bg-white border border-[#E4E4E7] text-[#18181B] font-semibold'
                        : 'text-[#71717A] font-medium'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setRightOpen((o) => !o)}
                className="w-8 h-7 flex items-center justify-center bg-white border border-[#E4E4E7] rounded-md text-[#52525B] hover:bg-[#F4F4F5] translate-x-[25px]"
              >
                {rightOpen ? <PanelRightClose size={16} /> : <PanelRightOpen size={16} />}
              </button>
            </div>
          </div>

          {/* Preview area */}
          <div className="flex-1 p-1.5 min-h-0">
            <div className="h-full p-6 flex flex-col gap-4 bg-white rounded-xl border border-[#E4E4E7]">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="text-[16px] font-semibold text-[#18181B]">模型预览</div>
                  <div className="text-[12px] text-[#71717A]">查看模型能力、上下文与计费信息</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-3.5 py-2 flex items-center gap-1.5 bg-white border border-[#E4E4E7] rounded-lg text-[12px] font-medium text-[#18181B] hover:bg-[#FAFAFA]">
                    <RefreshCw size={14} className="text-[#52525B]" />
                    刷新
                  </button>
                  <button className="px-3.5 py-2 flex items-center gap-1.5 bg-[#18181B] rounded-lg text-[12px] font-medium text-white hover:bg-black">
                    <Play size={14} />
                    运行
                  </button>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col gap-2.5 bg-[#FAFAFA] rounded-lg border border-[#F1F1F3] overflow-auto">
                {previewRows.map(([k, v]) => (
                  <div key={k} className="flex items-start gap-4">
                    <span className="w-24 shrink-0 text-[12px] font-medium text-[#71717A]">{k}</span>
                    <span className="flex-1 text-[13px] text-[#18181B]">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Log area */}
          <div className="h-[200px] flex flex-col bg-white border-t border-[#E4E4E7]">
            <div className="h-9 px-5 flex items-center justify-between border-b border-[#F1F1F3]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-[#52525B]" />
                <span className="text-[13px] font-semibold text-[#18181B]">日志</span>
                <span className="px-1.5 py-0.5 flex items-center gap-1 bg-[#DCFCE7] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-[10px] font-semibold text-[#15803D]">live</span>
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#71717A]">
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#F4F4F5]">
                  <SlidersHorizontal size={14} />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#F4F4F5]">
                  <Trash2 size={14} />
                </button>
                <button className="w-6 h-6 flex items-center justify-center rounded hover:bg-[#F4F4F5]">
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
            <div className="flex-1 px-4 py-2.5 flex flex-col gap-1 bg-[#FAFAFA] overflow-auto font-mono">
              {logs.map((l, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[11px] text-[#A1A1AA]">{l.t}</span>
                  <span
                    className={`w-[52px] py-px text-center text-[10px] font-semibold rounded ${levelClass[l.level]}`}
                  >
                    {l.level}
                  </span>
                  <span className="text-[11px] text-[#27272A]">{l.msg}</span>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right sidebar */}
        {rightOpen && (
          <aside className="w-[270px] bg-white border-l border-[#E4E4E7] flex flex-col gap-1.5 min-h-0">
            {/* Status panel */}
            <section className="pt-2.5 pr-5 pb-5 pl-2.5 flex flex-col gap-3.5 border-b border-[#E4E4E7]">
              <div className="flex items-center justify-between gap-2.5">
                <div className="p-[3px] flex gap-0.5 bg-[#F4F4F5] rounded-lg">
                  {statusTabs.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setStatusTab(t.key)}
                      className={`px-2.5 py-1.5 rounded-md text-[12px] ${
                        statusTab === t.key
                          ? 'bg-white border border-[#E4E4E7] text-[#18181B] font-semibold'
                          : 'text-[#71717A] font-medium'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <span className="px-2 py-0.5 flex items-center gap-1 bg-[#DCFCE7] rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-[11px] font-semibold text-[#15803D]">可用</span>
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {metrics.map(([k, v]) => (
                  <div
                    key={k}
                    className="p-3 flex flex-col gap-1 bg-[#FAFAFA] rounded-lg border border-[#F1F1F3]"
                  >
                    <span className="text-[11px] text-[#71717A]">{k}</span>
                    <span className="text-[18px] font-semibold text-[#18181B]">{v}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Info panel */}
            <section className="p-5 flex flex-col gap-3 flex-1 overflow-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <InfoIcon size={14} className="text-[#52525B]" />
                  <span className="text-[13px] font-semibold text-[#18181B]">信息</span>
                </div>
                <ExternalLink size={14} className="text-[#71717A]" />
              </div>
              {infoFields.map(([k, v]) => (
                <div
                  key={k}
                  className="py-2 -ml-1 pr-1 flex items-center justify-between border-b border-[#F1F1F3]"
                >
                  <span className="text-[12px] text-[#71717A]">{k}</span>
                  <span className="text-[12px] font-medium text-[#18181B]">{v}</span>
                </div>
              ))}
              <div className="flex flex-col gap-1.5 pt-1">
                <span className="text-[11px] font-medium text-[#71717A]">能力</span>
                <div className="flex gap-1.5 flex-wrap">
                  {capabilities.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 bg-[#F4F4F5] border border-[#E4E4E7] rounded-full text-[11px] font-medium text-[#52525B]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-3 flex flex-col gap-1.5 bg-[#FEF9C3] border border-[#FDE68A] rounded-lg">
                <div className="flex items-center gap-1.5">
                  <Activity size={14} className="text-[#A16207]" />
                  <span className="text-[11px] font-semibold text-[#A16207]">备注</span>
                </div>
                <span className="text-[11px] text-[#713F12]">
                  右栏内容跟随中间预览/操作区联动，逻辑待定。
                </span>
              </div>
            </section>
          </aside>
        )}
      </div>
    </div>
  )
}
