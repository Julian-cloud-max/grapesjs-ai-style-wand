# GrapesJS AI Style Wand Plugin

一个为GrapesJS编辑器提供AI样式魔法棒功能的插件。用户可以通过简单的文本描述，让AI自动为组件应用样式。

## 功能特点

- 在组件工具栏中添加魔法棒按钮
- 点击魔法棒按钮打开样式输入弹窗
- 用自然语言描述想要的样式效果
- 自动将样式应用到选中的组件上
- 提供丰富的样式快捷标签供直接点击使用

## 如何使用

1. 在画布上拖入一个组件（如文本、按钮等）
2. 点击选中该组件
3. 在组件上方会出现一个工具栏，其中包含魔法棒图标 (✨)
4. 点击魔法棒图标，会打开样式输入弹窗
5. 在弹窗中输入你想要的样式描述（例如："红色大字"、"按钮样式"等）
6. 或者直接点击弹窗中的样式标签，快速添加常用样式
7. 点击"应用样式"，样式会自动应用到选中的组件上

## 安装

```bash
npm install grapesjs-ai-style-wand
```

## 使用方法

### 浏览器引入

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/grapesjs-ai-style-wand.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  const editor = grapesjs.init({
    container: '#gjs',
    // ...
    plugins: ['grapesjs-ai-style-wand'],
    pluginsOpts: {
      'grapesjs-ai-style-wand': {
        // 可选配置
      }
    }
  });
</script>
```

### NPM方式引入

```js
import grapesjs from 'grapesjs';
import aiStyleWandPlugin from 'grapesjs-ai-style-wand';

const editor = grapesjs.init({
  container: '#gjs',
  // ...
  plugins: [aiStyleWandPlugin],
  pluginsOpts: {
    [aiStyleWandPlugin]: {
      // 可选配置
    }
  }
});
```

## 配置选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|---------|-------------|
| `modalTitle` | String | 'AI Style Wand' | 弹窗标题 |
| `buttonLabel` | String | '魔法棒' | 工具栏按钮的标签 |
| `placeholder` | String | '请描述想要的样式效果...' | 输入框的占位文本 |
| `applyBtnText` | String | '应用样式' | 应用按钮的文本 |
| `cancelBtnText` | String | '取消' | 取消按钮的文本 |

## 支持的样式描述

插件支持多种类型的样式描述，可以组合使用。以下是支持的样式类型：

### 颜色相关
- 文本颜色：红色、深红、粉红、橙色、黄色、金色、绿色、深绿、青色、蓝色、深蓝、天蓝、紫色、粉紫、棕色、黑色、白色、灰色、银色
- 背景颜色：红色背景、深红背景、粉红背景、橙色背景、黄色背景...等（与文本颜色对应）

### 尺寸和间距
- 字体大小：大、小、超大、特大、极小
- 间距控制：紧凑、宽松、无间距、上间距、下间距、左间距、右间距、内部间距

### 文本样式
- 字重：粗体、细体
- 样式：斜体、下划线、删除线
- 大小写：大写、小写、首字母大写
- 对齐：居中、左对齐、右对齐、两端对齐
- 行高：行高松、行高紧
- 字间距：字间距宽、字间距窄

### 边框和装饰
- 阴影：阴影、轻微阴影、强烈阴影、内阴影
- 圆角：圆角、轻微圆角、大圆角、完全圆角
- 边框：边框、细边框、粗边框、虚线边框、点线边框、双线边框、红色边框、绿色边框、蓝色边框

### 显示和定位
- 显示方式：隐藏、可见、内联、内联块
- 浮动：浮动左、浮动右、清除浮动
- 定位：绝对定位、相对定位、固定定位
- 尺寸：全宽、半宽、全高
- 溢出控制：溢出隐藏、溢出滚动、可见溢出

### 过渡和动画
- 过渡：平滑过渡、快速过渡、慢速过渡
- 鼠标样式：手型鼠标、禁用鼠标、等待鼠标、帮助鼠标

### 特殊效果
- 透明度：透明、半透明、不透明
- 滤镜：模糊
- 背景效果：高亮、渐变背景、水平渐变、垂直渐变
- 变换：旋转、缩放、移动
- 交互：悬停效果

### 预设组合样式
- 按钮样式：适合按钮的预设样式
- 卡片样式：适合卡片的预设样式
- 标题样式：适合标题的预设样式
- 导航栏样式：适合导航栏的预设样式
- 页脚样式：适合页脚的预设样式
- 表单样式：适合表单的预设样式
- 输入框样式：适合输入框的预设样式

## 开发

克隆仓库并安装依赖:

```bash
git clone https://github.com/yourusername/grapesjs-ai-style-wand.git
cd grapesjs-ai-style-wand
npm i
```

启动开发服务器:

```bash
npm start
```

构建项目:

```bash
npm run build
```

## 许可证

MIT 