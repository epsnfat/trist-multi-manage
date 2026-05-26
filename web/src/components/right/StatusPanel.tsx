import { metrics, statusTabs, type StatusTabKey } from '../../data/status'

type Props = {
  statusTab: StatusTabKey
  onStatusTab: (key: StatusTabKey) => void
}

export default function StatusPanel({ statusTab, onStatusTab }: Props) {
  return (
    <section className="pt-2.5 pr-5 pb-5 pl-2.5 flex flex-col gap-3.5 border-b border-[#E4E4E7]">
      <div className="flex items-center justify-between gap-2.5">
        <div className="p-[3px] flex gap-0.5 bg-[#F4F4F5] rounded-lg">
          {statusTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => onStatusTab(t.key)}
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
  )
}
