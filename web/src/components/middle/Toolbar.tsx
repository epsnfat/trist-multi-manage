import { ChevronRight, PanelRightClose, PanelRightOpen } from 'lucide-react'
import { previewTabs, type PreviewTabKey } from '../../data/preview'
import type { Category } from '../../types'

type Props = {
  activeMeta: Category
  selectedModel: string
  previewTab: PreviewTabKey
  onPreviewTab: (key: PreviewTabKey) => void
  rightOpen: boolean
  onToggleRight: () => void
}

export default function Toolbar({
  activeMeta,
  selectedModel,
  previewTab,
  onPreviewTab,
  rightOpen,
  onToggleRight,
}: Props) {
  const ActiveIcon = activeMeta.icon

  return (
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
              onClick={() => onPreviewTab(t.key)}
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
          onClick={onToggleRight}
          className="w-8 h-7 flex items-center justify-center bg-white border border-[#E4E4E7] rounded-md text-[#52525B] hover:bg-[#F4F4F5] translate-x-[25px]"
        >
          {rightOpen ? <PanelRightClose size={16} /> : <PanelRightOpen size={16} />}
        </button>
      </div>
    </div>
  )
}
