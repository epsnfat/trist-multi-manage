import { Play, RefreshCw } from 'lucide-react'
import { getPreviewRows } from '../../data/preview'

type Props = {
  activeCategory: string
  selectedModel: string
}

const getTitleAndSubtitle = (activeCategory: string) => {
  switch (activeCategory) {
    case 'agent':
      return { title: 'Agent 预览', subtitle: '查看 Agent 配置、能力与执行信息' }
    case 'task':
      return { title: '任务预览', subtitle: '查看任务详情、进度与分配信息' }
    case 'project':
      return { title: '项目预览', subtitle: '查看项目计划、进度与团队信息' }
    case 'skill':
      return { title: '技能预览', subtitle: '查看技能详情、版本与依赖信息' }
    case 'memory':
      return { title: '记忆库预览', subtitle: '查看记忆数据、类型与更新信息' }
    case 'tool':
      return { title: '工具预览', subtitle: '查看工具详情、版本与使用统计' }
    case 'model':
    default:
      return { title: '模型预览', subtitle: '查看模型能力、上下文与计费信息' }
  }
}

export default function PreviewCard({ activeCategory, selectedModel }: Props) {
  const previewRows = getPreviewRows(activeCategory, selectedModel)
  const { title, subtitle } = getTitleAndSubtitle(activeCategory)

  return (
    <div className="flex-1 p-1.5 min-h-0">
      <div className="h-full p-6 flex flex-col gap-4 bg-white rounded-xl border border-[#E4E4E7]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-[16px] font-semibold text-[#18181B]">{title}</div>
            <div className="text-[12px] text-[#71717A]">{subtitle}</div>
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
  )
}
