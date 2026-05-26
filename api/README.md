# uv加载
curl -LsSf https://astral.sh/uv/install.sh | sh
# 全局安装uv
pip install uv

# 初始化项目
uv init api
cd api

# 下载并指定该项目使用 Python 3.12
uv python pin 3.12