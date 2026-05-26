import { categories } from '../data/categories'

type Props = {
  activeCategory: string
  onSelect: (key: string) => void
}

export default function IconColumn({ activeCategory, onSelect }: Props) {
  return (
    <aside className="w-14 py-3 flex flex-col items-center gap-1.5 bg-[#FAFAFA] border-r border-[#E4E4E7]">
      {categories.map((c) => {
        const active = c.key === activeCategory
        const Icon = c.icon
        return (
          <button
            key={c.key}
            onClick={() => onSelect(c.key)}
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
  )
}
