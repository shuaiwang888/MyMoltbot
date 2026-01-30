# Moltbot Tech Blog

一个现代化的技术博客网站，使用 Next.js 14 构建，采用 React 和 TypeScript 开发，具备响应式设计和丰富的功能。

## 功能特性

### 🎨 现代化UI设计
- 使用 Tailwind CSS 构建的响应式用户界面
- 渐变背景和现代化视觉效果
- 流畅的CSS动画和过渡效果
- 完美适配桌面端和移动端设备

### 📱 响应式布局
- 自适应不同屏幕尺寸
- 移动优先的设计理念
- 流畅的移动端体验

### 🏗️ 技术架构
- 基于 Next.js 14 的 App Router 架构
- React Server Components
- TypeScript 类型安全
- Tailwind CSS 样式系统

### 📝 内容展示
- 文章列表展示
- 详细的文章页面
- 作者信息和发布日期
- 文章标签分类系统
- 摘要预览功能

### 🔍 内容组织
- 标签过滤功能
- 侧边栏导航
- 分类浏览系统

### 🎯 用户体验
- 直观的导航结构
- 清晰的信息层级
- 快速的内容定位

## 页面结构

### 首页 (`/`)
- 展示最新的技术文章列表
- 每篇文章包含标题、摘要、作者、日期和标签
- 响应式网格布局

### 文章详情页 (`/article/[id]`)
- 完整的文章内容展示
- 详细的作者和发布时间信息
- 相关标签显示

### 布局组件
- **Header**: 导航栏，包含网站Logo和标题
- **Sidebar**: 标签分类，方便内容筛选
- **Footer**: 版权信息和联系方式

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI组件**: React Server Components
- **构建工具**: Next.js内置构建系统

## 项目结构

```
my-moltbot-tech-blog/
├── app/                    # Next.js 14 App Router
│   ├── article/[id]/       # 动态路由 - 文章详情页
│   ├── layout.tsx          # 全局布局
│   └── page.tsx            # 首页
├── components/             # 可复用UI组件
│   ├── ArticleCard.tsx     # 文章卡片组件
│   ├── Header.tsx          # 头部导航组件
│   ├── Sidebar.tsx         # 侧边栏组件
│   └── Footer.tsx          # 页脚组件
├── styles/                 # 样式文件
│   └── globals.css         # 全局样式
├── public/                 # 静态资源
├── README.md               # 项目说明
├── package.json            # 项目依赖
├── next.config.js          # Next.js 配置
├── tailwind.config.js      # Tailwind CSS 配置
└── tsconfig.json           # TypeScript 配置
```

## 安装和运行

1. 克隆项目
```bash
git clone <repository-url>
cd my-moltbot-tech-blog
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问 `http://localhost:3000`

## 部署

该项目可以轻松部署到以下平台：
- Vercel (推荐)
- Netlify
- AWS Amplify
- 任何支持 Next.js 的托管服务

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

MIT License