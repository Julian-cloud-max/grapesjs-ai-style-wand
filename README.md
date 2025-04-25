# GrapesJS AI Style Wand Plugin | GrapesJS AI 样式魔法棒插件

[English](#english) | [中文](#中文)

# English

A powerful GrapesJS plugin that allows quick style application through natural language descriptions.

![Demo](./demo/demo.gif)

## Features

- 🎨 Apply styles quickly through natural language descriptions
- 💡 Smart recognition of various style keywords
- 🔥 Built-in common style combinations
- 🎯 Support for quick application of preset style tags
- 📱 Responsive design support

## Installation

```bash
npm i grapesjs-ai-style-wand
```

## Usage

```js
import grapesjs from 'grapesjs';
import aiStyleWand from 'grapesjs-ai-style-wand';

const editor = grapesjs.init({
  container: '#gjs',
  plugins: [aiStyleWand],
  pluginsOpts: {
    'grapesjs-ai-style-wand': {
      // Configuration options
      modalTitle: 'AI Style Wand',
      buttonLabel: 'Magic Wand',
      placeholder: 'Describe the style effect you want...',
      applyBtnText: 'Apply Style',
      cancelBtnText: 'Cancel'
    }
  }
});
```

## Supported Style Keywords

### Colors
- Text colors: red, deep red, pink, orange, yellow, gold, green, etc.
- Background colors: red background, deep red background, pink background, etc.

### Size and Spacing
- Font sizes: large, small, extra large, huge, tiny
- Spacing: compact, loose, no spacing, top spacing, bottom spacing, etc.

### Text Styles
- Font weight: bold, light
- Styles: italic, underline, strikethrough
- Alignment: center, left, right, justify
- Others: loose line height, tight line height, wide letter spacing, narrow letter spacing

### Borders and Decorations
- Shadows: shadow, light shadow, strong shadow, inner shadow
- Border radius: rounded, slightly rounded, large rounded, fully rounded
- Borders: border, thin border, thick border, dashed border, etc.

### Preset Style Combinations
- Button styles
- Card styles
- Heading styles
- Navigation bar styles
- Footer styles
- Form styles
- Input field styles

## Future Improvements

### Version 1.0.x (Current)
- ✅ Local style mapping implementation for fast response
- ✅ Basic style keyword support
- ✅ Preset style combinations
- ✅ Simple UI interface

### Version 1.1.0 (Planned)
- 🚀 AI API Integration
  - OpenAI GPT API integration for more natural language understanding
  - Custom AI model support
  - Style generation based on context and design principles
- 🎨 Enhanced Style Support
  - More complex style combinations
  - Animation and transition effects
  - Responsive design patterns
- 🛠 Customization Features
  - Custom style keyword mapping
  - User-defined style combinations
  - Style template system

### Version 1.2.0 (Future)
- 🌐 Multi-language Support
  - Complete internationalization
  - Language-specific style descriptions
- 🎯 Smart Suggestions
  - Context-aware style recommendations
  - Design pattern suggestions
  - Accessibility improvements
- 📊 Analytics and Optimization
  - Usage statistics
  - Performance optimization
  - Style conflict resolution

### Long-term Vision
- 🤖 Advanced AI Features
  - Style learning from existing designs
  - Brand style guide integration
  - Design system automation
- 🔄 Real-time Collaboration
  - Team style sharing
  - Version control for styles
  - Style library management
- 🎓 Learning System
  - Interactive tutorials
  - Best practice suggestions
  - Design principle guidance

## Contributing

We welcome Pull Requests to improve this plugin! Here are the steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file



---

# 中文

一个强大的 GrapesJS 插件，通过自然语言描述快速应用样式。

## 功能特点

- 🎨 通过自然语言描述快速应用样式
- 💡 智能识别多种样式关键词
- 🔥 内置多种常用样式组合
- 🎯 支持快速应用预设样式标签
- 📱 响应式设计支持

## 安装

```bash
npm i grapesjs-ai-style-wand
```

## 使用方法

```js
import grapesjs from 'grapesjs';
import aiStyleWand from 'grapesjs-ai-style-wand';

const editor = grapesjs.init({
  container: '#gjs',
  plugins: [aiStyleWand],
  pluginsOpts: {
    'grapesjs-ai-style-wand': {
      // 配置选项
      modalTitle: 'AI 样式魔法棒',
      buttonLabel: '魔法棒',
      placeholder: '请描述想要的样式效果...',
      applyBtnText: '应用样式',
      cancelBtnText: '取消'
    }
  }
});
```

## 支持的样式关键词

### 颜色相关
- 文字颜色：红色、深红、粉红、橙色、黄色、金色、绿色等
- 背景颜色：红色背景、深红背景、粉红背景、橙色背景等

### 尺寸和间距
- 字体大小：大、小、超大、特大、极小
- 间距：紧凑、宽松、无间距、上间距、下间距等

### 文本样式
- 字重：粗体、细体
- 样式：斜体、下划线、删除线
- 对齐：居中、左对齐、右对齐、两端对齐
- 其他：行高松、行高紧、字间距宽、字间距窄

### 边框和装饰
- 阴影：阴影、轻微阴影、强烈阴影、内阴影
- 圆角：圆角、轻微圆角、大圆角、完全圆角
- 边框：边框、细边框、粗边框、虚线边框等

### 预设组合样式
- 按钮样式
- 卡片样式
- 标题样式
- 导航栏样式
- 页脚样式
- 表单样式
- 输入框样式

## 未来改进计划

### 版本 1.0.x（当前）
- ✅ 本地样式映射实现，确保快速响应
- ✅ 基础样式关键词支持
- ✅ 预设样式组合
- ✅ 简单的用户界面

### 版本 1.1.0（计划中）
- 🚀 AI API 集成
  - 集成 OpenAI GPT API 实现更自然的语言理解
  - 支持自定义 AI 模型
  - 基于上下文和设计原则的样式生成
- 🎨 增强样式支持
  - 更复杂的样式组合
  - 动画和过渡效果
  - 响应式设计模式
- 🛠 自定义功能
  - 自定义样式关键词映射
  - 用户自定义样式组合
  - 样式模板系统

### 版本 1.2.0（未来）
- 🌐 多语言支持
  - 完整的国际化支持
  - 语言特定的样式描述
- 🎯 智能建议
  - 上下文感知的样式推荐
  - 设计模式建议
  - 可访问性改进
- 📊 分析和优化
  - 使用统计
  - 性能优化
  - 样式冲突解决

### 长期愿景
- 🤖 高级 AI 功能
  - 从现有设计中学习样式
  - 品牌样式指南集成
  - 设计系统自动化
- 🔄 实时协作
  - 团队样式共享
  - 样式版本控制
  - 样式库管理
- 🎓 学习系统
  - 交互式教程
  - 最佳实践建议
  - 设计原则指导

## 贡献指南

欢迎提交 Pull Request 来改进这个插件！以下是贡献步骤：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件


## 更新日志

### 1.0.0
- 初始版本发布
- 支持基本样式应用
- 添加预设样式组合 