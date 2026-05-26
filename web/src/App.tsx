import { useState, useEffect } from 'react'
import IconColumn from './components/IconColumn'
import ListColumn from './components/ListColumn'
import TitleBar from './components/TitleBar'
import LogPanel from './components/middle/LogPanel'
import PreviewCard from './components/middle/PreviewCard'
import Toolbar from './components/middle/Toolbar'
import InfoPanel from './components/right/InfoPanel'
import StatusPanel from './components/right/StatusPanel'
import { categories } from './data/categories'
import type { PreviewTabKey } from './data/preview'
import type { StatusTabKey } from './data/status'

const getDefaultItemForCategory = (category: string): string => {
  switch (category) {
    case 'agent':
      return 'agent-research'
    case 'task':
      return 'task-data-analysis'
    case 'project':
      return 'project-ai-platform'
    case 'skill':
      return 'skill-python'
    case 'memory':
      return 'memory-user-context'
    case 'tool':
      return 'tool-code-formatter'
    case 'model':
    default:
      return 'claude-opus-4-7'
  }
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('model')
  const [selectedModel, setSelectedModel] = useState('claude-opus-4-7')
  const [rightOpen, setRightOpen] = useState(true)
  const [previewTab, setPreviewTab] = useState<PreviewTabKey>('preview')
  const [statusTab, setStatusTab] = useState<StatusTabKey>('status')

  useEffect(() => {
    setSelectedModel(getDefaultItemForCategory(activeCategory))
  }, [activeCategory])

  const activeMeta = categories.find((c) => c.key === activeCategory) ?? categories[1]

  return (
    <div className="w-[1200px] h-[750px] flex flex-col bg-[#F7F7F8] overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5 font-sans">
      <TitleBar />
      <div className="flex-1 flex min-h-0">
        <IconColumn activeCategory={activeCategory} onSelect={setActiveCategory} />
        <ListColumn
          activeMeta={activeMeta}
          activeCategory={activeCategory}
          selectedModel={selectedModel}
          onSelectModel={setSelectedModel}
        />
        <main className="flex-1 flex flex-col bg-[#F7F7F8] min-w-0">
          <Toolbar
            activeMeta={activeMeta}
            selectedModel={selectedModel}
            previewTab={previewTab}
            onPreviewTab={setPreviewTab}
            rightOpen={rightOpen}
            onToggleRight={() => setRightOpen((o) => !o)}
          />
          <PreviewCard activeCategory={activeCategory} selectedModel={selectedModel} />
          <LogPanel activeCategory={activeCategory} />
        </main>
        {rightOpen && (
          <aside className="w-[270px] bg-white border-l border-[#E4E4E7] flex flex-col gap-1.5 min-h-0">
            <StatusPanel statusTab={statusTab} onStatusTab={setStatusTab} />
            <InfoPanel />
          </aside>
        )}
      </div>
    </div>
  )
}
