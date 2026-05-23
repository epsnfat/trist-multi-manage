布局总览（1440 × 900）：

区域	宽度	内容
图标栏	64px	Agent（选中态）/ 模型 / 任务 / 项目 + 底部用户头像
列表栏	260px	当前类目（Agent）的搜索框 + 4 条列表项，首项选中
中间·上	flex	工具栏（面包屑 + 预览/操作 Tab）+ 预览卡片（标题、刷新/运行按钮、键值行）
中间·下	240px	日志面板（live 标记 + 多级日志行，INFO/DEBUG/WARN/ERROR 配色）
右栏·上	320px	状态面板（运行中徽章 + CPU/内存/延迟/运行时长 2×2 指标）
右栏·下	320px	信息面板（ID/时间/创建者/会话数/成功率 等字段、标签、联动备注）
联动 待确认细节：图标 → 列表类目，列表项 → 中间面包屑/预览/日志，预览/操作 → 右栏状态+信息。


cd /Users/admin/Documents/program/trist-multi-manage/web && npm run dev

sleep 3 && cat /private/tmp/claude-501/-Users-admin-Documents-program-trist-multi-manage/48bb6af8-2f86-4a62-9faa-a012c1379274/tasks/b1uklz7i7.output