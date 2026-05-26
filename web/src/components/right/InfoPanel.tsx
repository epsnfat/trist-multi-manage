    import { Activity, ExternalLink, Info as InfoIcon } from 'lucide-react'
import { capabilities, infoFields } from '../../data/info'

export default function InfoPanel() {
  return (
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
  )
}
