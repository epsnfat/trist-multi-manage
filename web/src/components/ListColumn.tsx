import { Bot, Brain, Cpu, Folder, ListChecks, Plus, Search, Sparkles, Wrench } from 'lucide-react'
import { models, statusDot as modelStatusDot, statusLabel as modelStatusLabel } from '../data/models'
import { agents, statusDot as agentStatusDot, statusLabel as agentStatusLabel } from '../data/agents'
import { tasks } from '../data/tasks'
import { projects } from '../data/projects'
import { skills } from '../data/skills'
import { memories } from '../data/memory'
import { tools } from '../data/tools'
import type { Category } from '../types'

type Props = {
  activeMeta: Category
  activeCategory: string
  selectedModel: string
  onSelectModel: (id: string) => void
}

export default function ListColumn({ activeMeta, activeCategory, selectedModel, onSelectModel }: Props) {
  const getDataForCategory = () => {
    const commonStatusDot = agentStatusDot
    const commonStatusLabel = agentStatusLabel
    
    switch (activeCategory) {
      case 'agent':
        return { items: agents, icon: Bot, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'task':
        return { items: tasks, icon: ListChecks, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'project':
        return { items: projects, icon: Folder, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'skill':
        return { items: skills, icon: Sparkles, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'memory':
        return { items: memories, icon: Brain, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'tool':
        return { items: tools, icon: Wrench, statusDot: commonStatusDot, statusLabel: commonStatusLabel }
      case 'model':
      default:
        return { items: models, icon: Cpu, statusDot: modelStatusDot, statusLabel: modelStatusLabel }
    }
  }

  const { items, icon: IconComponent, statusDot, statusLabel } = getDataForCategory()

  return (
    <aside className="w-[220px] bg-white border-r border-[#E4E4E7] flex flex-col">
      <div className="h-12 px-4 flex items-center justify-between border-b border-[#E4E4E7]">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-semibold text-[#18181B]">{activeMeta.label}</span>
          <span className="px-2 py-0.5 rounded-full bg-[#F4F4F5] text-[11px] font-semibold text-[#71717A]">
            {items.length}
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
        {items.map((m) => {
          const active = m.id === selectedModel
          return (
            <button
              key={m.id}
              onClick={() => onSelectModel(m.id)}
              className={`px-2.5 py-2.5 flex items-start gap-2.5 rounded-lg text-left ${
                active ? 'bg-[#EEF2FF]' : 'hover:bg-[#FAFAFA]'
              }`}
            >
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 flex items-center justify-center bg-[#F4F4F5] rounded-lg">
                  <IconComponent size={16} className={active ? 'text-[#4338CA]' : 'text-[#52525B]'} />
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
  )
}
