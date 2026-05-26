import { Bell, Search, Settings } from 'lucide-react'

export default function TitleBar() {
  return (
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
  )
}
