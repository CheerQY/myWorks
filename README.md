# 个人网站

一个现代化的个人作品集网站，展示产品经理漆英的专业能力和项目经验。

## 功能特性

### 🏠 首页 (index.html)
- 个人介绍和基本信息展示
- 技能标签和优势展示
- 教育和工作经历时间线
- 项目经历卡片展示
- 响应式设计，支持移动端

### 📁 作品集 (portfolio.html)
- 项目列表展示
- 每个项目包含图片、描述、标签
- 点击"查看详情"进入项目详情页
- 支持项目分类和筛选

### 📋 项目详情 (project-detail.html)
- **项目背景**: 行业现状、机遇与挑战分析
- **项目目标**: 明确的项目目标和价值主张
- **项目行动**: 详细的时间线和执行步骤
- **项目结果**: 数据成果和业务成果展示
- **视频展示**: 
  - 项目功能演示视频
  - 项目背景介绍视频
  - 视频播放控制功能
- **成果展示**: 界面截图和用户反馈
- **技术栈**: 使用的技术和工具
- **项目总结**: 成功经验和未来规划

### 📞 联系页面 (contact.html)
- 联系信息展示
- 联系表单
- 常见问题解答
- 社交媒体链接

## 技术栈

- **前端**: HTML5, CSS3, JavaScript
- **样式框架**: Tailwind CSS
- **图标**: Font Awesome
- **动画**: CSS3 Animations
- **响应式**: Mobile-first 设计

## 项目结构

```
个人网站/
├── index.html              # 首页
├── portfolio.html          # 作品集页面
├── project-detail.html     # 项目详情页面
├── contact.html            # 联系页面
├── js/
│   └── project-data.js     # 项目数据配置
├── images/                 # 图片资源
│   ├── profile.jpg         # 头像
│   ├── project1.jpg        # 项目图片
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
├── videos/                 # 视频资源
│   ├── BookStudio.mp4      # 项目演示视频
│   └── SmartTeaching.mp4   # 项目介绍视频
└── assets/                 # 其他资源
```

## 使用方法

1. **启动本地服务器**:
   ```bash
   python3 -m http.server 8000
   ```


### 动态内容加载
- 通过URL参数 `?id=project1` 加载不同项目信息
- 支持的项目ID: project1, project2, project3, project4

### 视频展示功能
- 支持MP4和WebM格式视频
- 视频播放控制按钮
- 自动错误处理和占位符显示
- 响应式视频播放器

### 交互功能
- 卡片悬停效果
- 进度条动画
- 时间线展示
- 图片画廊

## 自定义配置

### 添加新项目
1. 在 `js/project-data.js` 中添加新项目数据
2. 在 `portfolio.html` 中添加项目卡片
3. 上传项目图片到 `images/` 目录
4. 上传项目视频到 `videos/` 目录

### 修改样式
- 主要样式使用 Tailwind CSS 类
- 自定义动画在 `<style>` 标签中定义
- 响应式断点: sm(640px), md(768px), lg(1024px), xl(1280px)

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 许可证

© 2025 漆英. 保留所有权利。 
