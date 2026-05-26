import type { LogLevel } from '../types'

export const modelLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '10:24:31', level: 'INFO', msg: '模型 claude-opus-4-7 已就绪' },
  { t: '10:24:32', level: 'DEBUG', msg: '加载 tokenizer (vocab 200K)' },
  { t: '10:24:34', level: 'INFO', msg: '收到调用请求 sess #8c2f1a' },
  { t: '10:25:01', level: 'WARN', msg: '上下文使用接近 90% 阈值' },
  { t: '10:25:08', level: 'INFO', msg: '生成完成 — 输出 1,248 tokens' },
  { t: '10:25:12', level: 'ERROR', msg: '限流 429 — 已自动重试' },
]

export const agentLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '10:24:31', level: 'INFO', msg: 'Agent agent-research 已启动' },
  { t: '10:24:32', level: 'INFO', msg: '初始化研究任务队列' },
  { t: '10:24:34', level: 'DEBUG', msg: '已加载 3 个知识库源' },
  { t: '10:24:50', level: 'INFO', msg: '开始任务执行 #task-12345' },
  { t: '10:25:10', level: 'DEBUG', msg: '调用下游 API: knowledge-search' },
  { t: '10:25:15', level: 'INFO', msg: '任务执行完成 — 生成报告' },
]

export const taskLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '09:15:00', level: 'INFO', msg: '任务 task-data-analysis 已创建' },
  { t: '09:15:05', level: 'INFO', msg: '分配给 Agent-analysis' },
  { t: '09:16:20', level: 'DEBUG', msg: '加载数据集 (2.3 GB)' },
  { t: '09:18:45', level: 'INFO', msg: '数据验证通过' },
  { t: '09:25:30', level: 'WARN', msg: '内存使用 85% — 启用分块处理' },
  { t: '09:30:00', level: 'INFO', msg: '分析完成 — 生成 5 个洞察' },
]

export const projectLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '08:00:00', level: 'INFO', msg: '项目 project-ai-platform 工作流启动' },
  { t: '08:05:00', level: 'INFO', msg: '检查代码库 (52 commits)' },
  { t: '08:10:00', level: 'DEBUG', msg: '运行测试套件 — 进度 23%' },
  { t: '08:25:00', level: 'INFO', msg: '所有单元测试通过 (1,247/1,247)' },
  { t: '08:30:00', level: 'WARN', msg: '代码覆盖率 78% — 目标 85%' },
  { t: '08:35:00', level: 'INFO', msg: '集成测试完成，准备部署' },
]

export const skillLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '11:00:00', level: 'INFO', msg: '技能 skill-python 已加载' },
  { t: '11:00:05', level: 'DEBUG', msg: '初始化 Python 3.11 运行时' },
  { t: '11:00:10', level: 'INFO', msg: '加载依赖库 (12 个)' },
  { t: '11:00:15', level: 'DEBUG', msg: '编译 Cython 扩展' },
  { t: '11:00:20', level: 'INFO', msg: '性能基准测试 — 基准 100/100' },
  { t: '11:00:25', level: 'INFO', msg: 'skill-python 就绪' },
]

export const memoryLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '10:00:00', level: 'INFO', msg: '记忆库 memory-user-context 已连接' },
  { t: '10:00:05', level: 'DEBUG', msg: '从磁盘加载索引 (1,542 条记录)' },
  { t: '10:00:10', level: 'INFO', msg: '初始化向量数据库连接' },
  { t: '10:00:15', level: 'DEBUG', msg: '启用缓存层 (4 GB)' },
  { t: '10:00:20', level: 'INFO', msg: '上次同步: 2026-05-25 09:30 UTC' },
  { t: '10:00:25', level: 'INFO', msg: '记忆库准备就绪' },
]

export const toolLogs: { t: string; level: LogLevel; msg: string }[] = [
  { t: '07:30:00', level: 'INFO', msg: '工具 tool-code-formatter 启动' },
  { t: '07:30:05', level: 'DEBUG', msg: '加载配置文件 (.prettier)' },
  { t: '07:30:10', level: 'INFO', msg: '初始化格式化引擎' },
  { t: '07:30:15', level: 'DEBUG', msg: '预热性能缓存' },
  { t: '07:30:20', level: 'INFO', msg: '就绪为 2,341 个文件格式化' },
  { t: '07:30:25', level: 'INFO', msg: 'tool-code-formatter 可用' },
]

export const getLogs = (activeCategory: string): { t: string; level: LogLevel; msg: string }[] => {
  switch (activeCategory) {
    case 'agent':
      return agentLogs
    case 'task':
      return taskLogs
    case 'project':
      return projectLogs
    case 'skill':
      return skillLogs
    case 'memory':
      return memoryLogs
    case 'tool':
      return toolLogs
    case 'model':
    default:
      return modelLogs
  }
}

export const levelClass: Record<LogLevel, string> = {
  INFO: 'bg-[#DBEAFE] text-[#1D4ED8]',
  DEBUG: 'bg-[#F4F4F5] text-[#52525B]',
  WARN: 'bg-[#FEF3C7] text-[#B45309]',
  ERROR: 'bg-[#FEE2E2] text-[#B91C1C]',
}
