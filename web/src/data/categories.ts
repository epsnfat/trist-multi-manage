import { Bot, Brain, Cpu, Folder, ListChecks, Sparkles, Wrench } from 'lucide-react'
import type { Category } from '../types'

export const categories: Category[] = [
  { key: 'agent', icon: Bot, label: 'Agent' },
  { key: 'model', icon: Cpu, label: '模型' },
  { key: 'task', icon: ListChecks, label: '任务' },
  { key: 'project', icon: Folder, label: '项目' },
  { key: 'skill', icon: Sparkles, label: '技能' },
  { key: 'memory', icon: Brain, label: '记忆' },
  { key: 'tool', icon: Wrench, label: '工具' },
]
