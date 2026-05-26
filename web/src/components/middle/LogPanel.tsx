import { Maximize2, SlidersHorizontal, Terminal, Trash2 } from 'lucide-react'
import { levelClass, getLogs } from '../../data/logs'

type Props = {
  activeCategory: string
}

export default function LogPanel({ activeCategory }: Props) {
  const logs = getLogs(activeCategory)

  return (
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
  )
}
