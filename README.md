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
- Text colors: red, deep red, pink, orange, yellow, gold, green, deep green, cyan, blue, deep blue, sky blue, purple, lavender, brown, black, white, gray, silver, light blue, sea blue, navy, mint, burgundy, coral
- Background colors: red background, deep red background, pink background, etc. (corresponding to each text color)

### Size and Spacing
- Font sizes: large, small, extra large, huge, tiny
- Spacing: compact, loose, no spacing, top spacing, bottom spacing, left spacing, right spacing, inner padding, medium, narrow spacing, large spacing, top margin, bottom margin, left margin, right margin, inner top padding, inner bottom padding, inner left padding, inner right padding

### Text Styles
- Font weight: bold, light, extra bold, extra light, normal weight
- Styles: italic, underline, strikethrough, uppercase, lowercase, capitalize
- Alignment: center, left, right, justify
- Line height and spacing: loose line height, tight line height, wide letter spacing, narrow letter spacing, medium line height, extra wide line spacing, extra narrow line spacing, medium letter spacing, very wide letter spacing, very narrow letter spacing

### Borders and Decorations
- Shadows: shadow, light shadow, strong shadow, inner shadow
- Border radius: rounded, slightly rounded, large rounded, fully rounded
- Borders: border, thin border, thick border, dashed border, dotted border, double border, very thin border, very thick border, top border, bottom border, left border, right border
- Border colors: red border, green border, blue border, black border, white border, gray border, yellow border, orange border, purple border

### Display and Positioning
- Display: hidden, visible, inline, inline-block
- Float: float left, float right, clear float
- Position: absolute position, relative position, fixed position, align left, align right, center display
- Size: full width, half width, full height, one-third width, one-fourth width, one-fifth width
- Overflow: hidden overflow, scroll overflow, visible overflow
- Flex layout: flex layout, flex row, flex column, space-between, space-around, vertical center

### Mouse Styles
- Cursors: pointer, not-allowed, wait, help, crosshair, text, move, grab, grabbing, zoom, default

### Special Effects
- Opacity: transparent, semi-transparent, opaque
- Filters: blur, strong blur, sharpen, grayscale, invert, sepia, saturate
- Text effects: text shadow, glowing text, embossed text
- Transforms: rotate, scale, move
- Backgrounds: gradient background, horizontal gradient, vertical gradient
- Material effects: glass effect, 3D effect

### Preset Style Combinations
- Button styles
- Card styles
- Heading styles
- Navigation bar styles
- Footer styles
- Form styles
- Input field styles

## Special Features

### Help Guide
- Click the question mark icon in the top-right corner of the magic wand interface to view all supported style commands
- Intuitive display of all available commands, organized by category for easy reference

### Unsupported Command Alert
- When entering unsupported commands, a friendly alert modal will appear
- Guides users to use the correct command format

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

## Change Log

### 1.0.1
- Added help button for viewing all available style commands
- Added unsupported command alert feature
- Expanded style command support with new colors and positioning
- Removed all transitions and animations features
- Optimized user interface for improved experience

### 1.0.0
- Initial release
- Basic style application support
- Added preset style combinations



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
- 文字颜色：红色、深红、粉红、橙色、黄色、金色、绿色、深绿、青色、蓝色、深蓝、天蓝、紫色、粉紫、棕色、黑色、白色、灰色、银色、淡蓝、海蓝、藏青、薄荷、酒红、珊瑚
- 背景颜色：红色背景、深红背景、粉红背景、橙色背景、黄色背景等与文字颜色对应的背景色

### 尺寸和间距
- 字体大小：大、小、超大、特大、极小
- 间距：紧凑、宽松、无间距、上间距、下间距、左间距、右间距、内部间距、适中、窄间距、大间距、顶部外边距、底部外边距、左侧外边距、右侧外边距、内部上边距、内部下边距、内部左边距、内部右边距

### 文本样式
- 字重：粗体、细体、加粗、特粗、特细、普通粗细
- 样式：斜体、下划线、删除线、大写、小写、首字母大写
- 对齐：居中、左对齐、右对齐、两端对齐
- 行高与间距：行高松、行高紧、字间距宽、字间距窄、中等行高、特宽行距、特窄行距、字间距中等、字间距极宽、字间距极窄

### 边框和装饰
- 阴影：阴影、轻微阴影、强烈阴影、内阴影
- 圆角：圆角、轻微圆角、大圆角、完全圆角
- 边框：边框、细边框、粗边框、虚线边框、点线边框、双线边框、极细边框、特粗边框、上边框、下边框、左边框、右边框
- 边框颜色：红色边框、绿色边框、蓝色边框、黑色边框、白色边框、灰色边框、黄色边框、橙色边框、紫色边框

### 显示和定位
- 显示方式：隐藏、可见、内联、内联块
- 浮动：浮动左、浮动右、清除浮动
- 定位：绝对定位、相对定位、固定定位、靠左、靠右、居中显示
- 尺寸：全宽、半宽、全高、三分之一宽、四分之一宽、五分之一宽
- 溢出：溢出隐藏、溢出滚动、可见溢出
- 弹性布局：弹性布局、弹性行、弹性列、两端分散、均匀分散、垂直居中

### 鼠标样式
- 鼠标光标：手型鼠标、禁用鼠标、等待鼠标、帮助鼠标、十字鼠标、文本鼠标、移动鼠标、抓取鼠标、抓取中鼠标、缩放鼠标、默认鼠标

### 特殊效果
- 透明度：透明、半透明、不透明
- 滤镜：模糊、强烈模糊、锐化、黑白、反色、褪色、增强色彩
- 文字效果：阴影文字、发光文字、浮雕文字
- 变换：旋转、缩放、移动
- 背景：渐变背景、水平渐变、垂直渐变
- 材质效果：玻璃效果、立体效果

### 预设组合样式
- 按钮样式
- 卡片样式
- 标题样式
- 导航栏样式
- 页脚样式
- 表单样式
- 输入框样式

## 特色功能

### 帮助查询
- 点击魔法棒界面右上角的问号图标，可查看所有支持的样式指令
- 直观展示全部可用指令，按类别整理，方便查找

### 不支持指令提示
- 当输入不支持的指令时，会显示友好的提示弹窗
- 引导用户使用正确的指令格式

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

### 1.0.1
- 添加帮助按钮，支持查看全部可用样式指令
- 新增不支持指令提示功能
- 扩展样式指令支持范围，新增多种颜色和定位指令
- 移除所有过渡和动画功能
- 优化用户界面，提升使用体验

### 1.0.0
- 初始版本发布
- 支持基本样式应用
- 添加预设样式组合 