import './styles.css';

export default (editor, opts = {}) => {
  const options = {
    // 默认选项
    modalTitle: 'AI Style Wand',
    buttonLabel: '魔法棒',
    placeholder: '请描述想要的样式效果...',
    applyBtnText: '应用样式',
    cancelBtnText: '取消',
    // 合并用户提供的选项
    ...opts
  };

  // 添加魔法棒按钮到组件选中时的工具栏
  editor.on('component:selected', (component) => {
    // 获取默认工具栏
    const defaultToolbar = component.get('toolbar');
    
    // 检查工具栏是否已经有魔法棒按钮
    const hasMagicWand = defaultToolbar.some(item => item.id === 'ai-style-wand');
    
    // 如果没有魔法棒按钮，添加它
    if (!hasMagicWand) {
      component.set('toolbar', [
        ...defaultToolbar,
        {
          id: 'ai-style-wand',
          command: 'open-ai-style-wand',
          label: `<svg viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M7.5,5.6L5,7L6.4,4.5L5,2L7.5,3.4L10,2L8.6,4.5L10,7L7.5,5.6M19.5,15.4L22,14L20.6,16.5L22,19L19.5,17.6L17,19L18.4,16.5L17,14L19.5,15.4M22,2L20.6,4.5L22,7L19.5,5.6L17,7L18.4,4.5L17,2L19.5,3.4L22,2M13.34,12.78L15.78,10.34L13.66,8.22L11.22,10.66L13.34,12.78M14.37,7.29L16.71,9.63C17.1,10 17.1,10.65 16.71,11.04L5.04,22.71C4.65,23.1 4,23.1 3.63,22.71L1.29,20.37C0.9,20 0.9,19.35 1.29,18.96L12.96,7.29C13.35,6.9 14,6.9 14.37,7.29Z"/>
          </svg>`,
          attributes: { title: options.buttonLabel }
        }
      ]);
    }
  });

  // 创建样式应用功能
  editor.Commands.add('apply-ai-style', {
    run(editor, sender, data = {}) {
      const { styleDescription, selectedComponent } = data;
      
      if (!selectedComponent || !styleDescription) return;
      
      // 这里我们简单模拟AI样式应用
      // 在实际项目中，这里可以调用外部API进行样式生成
      
      // 一些简单的样式映射示例
      const styleMap = {
        // 颜色
        '红色': { color: 'red' },
        '深红': { color: '#8B0000' },
        '粉红': { color: '#FFC0CB' },
        '橙色': { color: 'orange' },
        '黄色': { color: 'yellow' },
        '金色': { color: 'gold' },
        '绿色': { color: 'green' },
        '深绿': { color: 'darkgreen' },
        '青色': { color: 'cyan' },
        '蓝色': { color: 'blue' },
        '深蓝': { color: 'darkblue' },
        '天蓝': { color: 'skyblue' },
        '紫色': { color: 'purple' },
        '粉紫': { color: '#FF00FF' },
        '棕色': { color: 'brown' },
        '黑色': { color: 'black' },
        '白色': { color: 'white' },
        '灰色': { color: 'gray' },
        '银色': { color: 'silver' },
        '淡蓝': { color: '#ADD8E6' },
        '海蓝': { color: '#4682B4' },
        '藏青': { color: '#191970' },
        '薄荷': { color: '#98FB98' },
        '酒红': { color: '#800020' },
        '珊瑚': { color: '#FF7F50' },
        
        // 背景颜色
        '红色背景': { 'background-color': 'red' },
        '深红背景': { 'background-color': '#8B0000' },
        '粉红背景': { 'background-color': '#FFC0CB' },
        '橙色背景': { 'background-color': 'orange' },
        '黄色背景': { 'background-color': 'yellow' },
        '金色背景': { 'background-color': 'gold' },
        '绿色背景': { 'background-color': 'green' },
        '深绿背景': { 'background-color': 'darkgreen' },
        '青色背景': { 'background-color': 'cyan' },
        '蓝色背景': { 'background-color': 'blue' },
        '深蓝背景': { 'background-color': 'darkblue' },
        '天蓝背景': { 'background-color': 'skyblue' },
        '紫色背景': { 'background-color': 'purple' },
        '粉紫背景': { 'background-color': '#FF00FF' },
        '棕色背景': { 'background-color': 'brown' },
        '黑色背景': { 'background-color': 'black' },
        '白色背景': { 'background-color': 'white' },
        '灰色背景': { 'background-color': 'gray' },
        '银色背景': { 'background-color': 'silver' },
        '淡蓝背景': { 'background-color': '#ADD8E6' },
        '海蓝背景': { 'background-color': '#4682B4' },
        '藏青背景': { 'background-color': '#191970' },
        '薄荷背景': { 'background-color': '#98FB98' },
        '酒红背景': { 'background-color': '#800020' },
        '珊瑚背景': { 'background-color': '#FF7F50' },
        
        // 尺寸和间距
        '大': { 'font-size': '24px' },
        '小': { 'font-size': '12px' },
        '超大': { 'font-size': '32px' },
        '特大': { 'font-size': '48px' },
        '极小': { 'font-size': '9px' },
        '紧凑': { 'padding': '5px', 'margin': '5px' },
        '宽松': { 'padding': '20px', 'margin': '15px' },
        '无间距': { 'padding': '0', 'margin': '0' },
        '上间距': { 'margin-top': '20px' },
        '下间距': { 'margin-bottom': '20px' },
        '左间距': { 'margin-left': '20px' },
        '右间距': { 'margin-right': '20px' },
        '内部间距': { 'padding': '15px' },
        '适中': { 'padding': '10px', 'margin': '10px' },
        '窄间距': { 'padding': '3px', 'margin': '3px' },
        '大间距': { 'padding': '30px', 'margin': '30px' },
        '顶部外边距': { 'margin-top': '30px' },
        '底部外边距': { 'margin-bottom': '30px' },
        '左侧外边距': { 'margin-left': '30px' },
        '右侧外边距': { 'margin-right': '30px' },
        '内部上边距': { 'padding-top': '15px' },
        '内部下边距': { 'padding-bottom': '15px' },
        '内部左边距': { 'padding-left': '15px' },
        '内部右边距': { 'padding-right': '15px' },
        
        // 文本样式
        '粗体': { 'font-weight': 'bold' },
        '细体': { 'font-weight': '300' },
        '斜体': { 'font-style': 'italic' },
        '下划线': { 'text-decoration': 'underline' },
        '删除线': { 'text-decoration': 'line-through' },
        '大写': { 'text-transform': 'uppercase' },
        '小写': { 'text-transform': 'lowercase' },
        '首字母大写': { 'text-transform': 'capitalize' },
        '居中': { 'text-align': 'center' },
        '左对齐': { 'text-align': 'left' },
        '右对齐': { 'text-align': 'right' },
        '两端对齐': { 'text-align': 'justify' },
        '行高松': { 'line-height': '2' },
        '行高紧': { 'line-height': '1.2' },
        '字间距宽': { 'letter-spacing': '2px' },
        '字间距窄': { 'letter-spacing': '-0.5px' },
        '加粗': { 'font-weight': 'bold' },
        '特粗': { 'font-weight': '900' },
        '特细': { 'font-weight': '100' },
        '普通粗细': { 'font-weight': 'normal' },
        '中等行高': { 'line-height': '1.5' },
        '特宽行距': { 'line-height': '3' },
        '特窄行距': { 'line-height': '1' },
        '字间距中等': { 'letter-spacing': '1px' },
        '字间距极宽': { 'letter-spacing': '4px' },
        '字间距极窄': { 'letter-spacing': '-1px' },
        
        // 边框和装饰
        '阴影': { 'box-shadow': '0 4px 8px rgba(0,0,0,0.2)' },
        '轻微阴影': { 'box-shadow': '0 2px 4px rgba(0,0,0,0.1)' },
        '强烈阴影': { 'box-shadow': '0 8px 16px rgba(0,0,0,0.3)' },
        '内阴影': { 'box-shadow': 'inset 0 0 5px rgba(0,0,0,0.2)' },
        '圆角': { 'border-radius': '8px' },
        '轻微圆角': { 'border-radius': '4px' },
        '大圆角': { 'border-radius': '16px' },
        '完全圆角': { 'border-radius': '50%' },
        '边框': { 'border': '1px solid #ccc' },
        '细边框': { 'border': '0.5px solid #eee' },
        '粗边框': { 'border': '3px solid #aaa' },
        '虚线边框': { 'border': '1px dashed #ccc' },
        '点线边框': { 'border': '1px dotted #ccc' },
        '双线边框': { 'border': '4px double #ccc' },
        '红色边框': { 'border': '1px solid red' },
        '绿色边框': { 'border': '1px solid green' },
        '蓝色边框': { 'border': '1px solid blue' },
        '黑色边框': { 'border': '1px solid black' },
        '白色边框': { 'border': '1px solid white' },
        '灰色边框': { 'border': '1px solid gray' },
        '黄色边框': { 'border': '1px solid yellow' },
        '橙色边框': { 'border': '1px solid orange' },
        '紫色边框': { 'border': '1px solid purple' },
        '极细边框': { 'border': '0.1px solid #eee' },
        '特粗边框': { 'border': '5px solid #aaa' },
        '上边框': { 'border-top': '1px solid #ccc' },
        '下边框': { 'border-bottom': '1px solid #ccc' },
        '左边框': { 'border-left': '1px solid #ccc' },
        '右边框': { 'border-right': '1px solid #ccc' },
        
        // 显示和定位
        '隐藏': { 'display': 'none' },
        '可见': { 'display': 'block' },
        '内联': { 'display': 'inline' },
        '内联块': { 'display': 'inline-block' },
        '浮动左': { 'float': 'left' },
        '浮动右': { 'float': 'right' },
        '清除浮动': { 'clear': 'both' },
        '绝对定位': { 'position': 'absolute' },
        '相对定位': { 'position': 'relative' },
        '固定定位': { 'position': 'fixed' },
        '全宽': { 'width': '100%' },
        '半宽': { 'width': '50%' },
        '全高': { 'height': '100%' },
        '溢出隐藏': { 'overflow': 'hidden' },
        '溢出滚动': { 'overflow': 'scroll' },
        '可见溢出': { 'overflow': 'visible' },
        '靠左': { 'margin-right': 'auto', 'margin-left': '0' },
        '靠右': { 'margin-left': 'auto', 'margin-right': '0' },
        '居中显示': { 'margin-left': 'auto', 'margin-right': 'auto' },
        '弹性布局': { 'display': 'flex' },
        '弹性行': { 'display': 'flex', 'flex-direction': 'row' },
        '弹性列': { 'display': 'flex', 'flex-direction': 'column' },
        '两端分散': { 'display': 'flex', 'justify-content': 'space-between' },
        '均匀分散': { 'display': 'flex', 'justify-content': 'space-around' },
        '垂直居中': { 'display': 'flex', 'align-items': 'center' },
        '三分之一宽': { 'width': '33.333%' },
        '四分之一宽': { 'width': '25%' },
        '五分之一宽': { 'width': '20%' },
        
        // 鼠标样式
        '手型鼠标': { 'cursor': 'pointer' },
        '禁用鼠标': { 'cursor': 'not-allowed' },
        '等待鼠标': { 'cursor': 'wait' },
        '帮助鼠标': { 'cursor': 'help' },
        '十字鼠标': { 'cursor': 'crosshair' },
        '文本鼠标': { 'cursor': 'text' },
        '移动鼠标': { 'cursor': 'move' },
        '抓取鼠标': { 'cursor': 'grab' },
        '抓取中鼠标': { 'cursor': 'grabbing' },
        '缩放鼠标': { 'cursor': 'zoom-in' },
        '默认鼠标': { 'cursor': 'default' },
        
        // 特殊效果
        '透明': { 'opacity': '0.5' },
        '半透明': { 'opacity': '0.7' },
        '不透明': { 'opacity': '1' },
        '模糊': { 'filter': 'blur(2px)' },
        '高亮': { 'background': 'rgba(255, 255, 0, 0.2)' },
        '渐变背景': { 'background': 'linear-gradient(to right, #f6d365, #fda085)' },
        '水平渐变': { 'background': 'linear-gradient(to right, #4facfe, #00f2fe)' },
        '垂直渐变': { 'background': 'linear-gradient(to bottom, #4facfe, #00f2fe)' },
        '旋转': { 'transform': 'rotate(5deg)' },
        '缩放': { 'transform': 'scale(1.1)' },
        '移动': { 'transform': 'translateY(-5px)' },
        '强烈模糊': { 'filter': 'blur(5px)' },
        '锐化': { 'filter': 'contrast(150%)' },
        '黑白': { 'filter': 'grayscale(100%)' },
        '反色': { 'filter': 'invert(100%)' },
        '褪色': { 'filter': 'saturate(0%)' },
        '增强色彩': { 'filter': 'saturate(200%)' },
        '阴影文字': { 'text-shadow': '2px 2px 4px rgba(0,0,0,0.5)' },
        '发光文字': { 'text-shadow': '0 0 5px #fff, 0 0 10px #fff' },
        '浮雕文字': { 'text-shadow': '1px 1px 0 #fff, -1px -1px 0 #000' },
        '玻璃效果': { 'backdrop-filter': 'blur(10px)', 'background': 'rgba(255, 255, 255, 0.2)' },
        '立体效果': { 'box-shadow': '0 5px 15px rgba(0,0,0,0.3)', 'transform': 'translateY(-2px)' },
      };
      
      // 记录是否找到匹配的样式
      let foundMatch = false;
      
      // 解析用户输入，应用相应的样式
      Object.keys(styleMap).forEach(keyword => {
        if (styleDescription.includes(keyword)) {
          selectedComponent.addStyle(styleMap[keyword]);
          foundMatch = true;
        }
      });
      
      // 检查是否包含预设组合样式
      const presetStyles = [
        '按钮样式', '卡片样式', '标题样式', '导航栏样式', 
        '页脚样式', '表单样式', '输入框样式', '悬停效果'
      ];
      
      presetStyles.forEach(preset => {
        if (styleDescription.includes(preset)) {
          foundMatch = true;
        }
      });
      
      // 如果包含某些特定组合词，应用组合样式
      if (styleDescription.includes('按钮样式')) {
        selectedComponent.addStyle({
          'padding': '10px 20px',
          'background-color': '#4CAF50',
          'color': 'white',
          'border': 'none',
          'border-radius': '4px',
          'cursor': 'pointer',
          'font-size': '16px'
        });
      }
      
      if (styleDescription.includes('卡片样式')) {
        selectedComponent.addStyle({
          'padding': '16px',
          'background-color': 'white',
          'border-radius': '8px',
          'box-shadow': '0 4px 8px rgba(0,0,0,0.1)',
          'margin': '8px'
        });
      }
      
      if (styleDescription.includes('标题样式')) {
        selectedComponent.addStyle({
          'font-size': '28px',
          'font-weight': 'bold',
          'color': '#333',
          'margin-bottom': '15px',
          'border-bottom': '2px solid #eee',
          'padding-bottom': '5px'
        });
      }
      
      if (styleDescription.includes('导航栏样式')) {
        selectedComponent.addStyle({
          'background-color': '#333',
          'color': 'white',
          'padding': '15px',
          'display': 'flex',
          'justify-content': 'space-between',
          'align-items': 'center'
        });
      }
      
      if (styleDescription.includes('页脚样式')) {
        selectedComponent.addStyle({
          'background-color': '#333',
          'color': 'white',
          'padding': '20px',
          'text-align': 'center',
          'margin-top': '20px'
        });
      }
      
      if (styleDescription.includes('表单样式')) {
        selectedComponent.addStyle({
          'padding': '15px',
          'background-color': '#f9f9f9',
          'border': '1px solid #ddd',
          'border-radius': '4px'
        });
      }
      
      if (styleDescription.includes('输入框样式')) {
        selectedComponent.addStyle({
          'padding': '8px 12px',
          'border': '1px solid #ddd',
          'border-radius': '4px',
          'font-size': '14px',
          'width': '100%',
          'box-sizing': 'border-box'
        });
      }
      
      if (styleDescription.includes('悬停效果')) {
        const className = 'ai-hover-effect-' + Math.floor(Math.random() * 10000);
        
        // 添加CSS类
        selectedComponent.addClass(className);
        
        // 添加相应的CSS样式到文档头部
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
          .${className}:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }
        `;
        document.head.appendChild(styleTag);
      }
      
      // 如果没有找到匹配的样式，显示提示信息
      if (!foundMatch) {
        // 创建提示弹窗
        const alertModal = document.createElement('div');
        alertModal.className = 'ai-style-alert-modal';
        alertModal.innerHTML = `
          <div class="ai-style-alert-content">
            <p>暂不支持 "${styleDescription}" 指令！</p>
            <p>请尝试其他描述或关闭此提示。</p>
            <button class="ai-style-alert-close">知道了</button>
          </div>
        `;
        
        document.body.appendChild(alertModal);
        
        // 添加事件监听
        const closeBtn = alertModal.querySelector('.ai-style-alert-close');
        
        closeBtn.addEventListener('click', () => {
          document.body.removeChild(alertModal);
        });
        
        // 5秒后自动关闭
        setTimeout(() => {
          if (document.body.contains(alertModal)) {
            document.body.removeChild(alertModal);
          }
        }, 5000);
      }
    }
  });

  // 创建显示魔法棒弹窗的命令
  editor.Commands.add('open-ai-style-wand', {
    run(editor) {
      const selectedComponent = editor.getSelected();
      
      if (!selectedComponent) {
        alert('请先选择一个组件！');
        return;
      }
      
      // 创建弹窗HTML
      const content = document.createElement('div');
      content.innerHTML = `
        <div class="ai-style-wand-modal">
          <div class="ai-style-wand-modal-body">
            <textarea 
              id="ai-style-description" 
              placeholder="${options.placeholder}"
              class="ai-style-textarea"
            ></textarea>
            <div class="ai-style-suggestions">
              <span class="ai-style-tag">红色</span>
              <span class="ai-style-tag">粗体</span>
              <span class="ai-style-tag">居中</span>
              <span class="ai-style-tag">圆角</span>
              <span class="ai-style-tag">阴影</span>
              <span class="ai-style-tag">按钮样式</span>
              <span class="ai-style-tag">卡片样式</span>
            </div>
          </div>
          <div class="ai-style-wand-modal-footer">
            <button id="ai-style-apply" class="ai-style-apply-btn">${options.applyBtnText}</button>
            <button id="ai-style-cancel" class="ai-style-cancel-btn">${options.cancelBtnText}</button>
          </div>
        </div>
        
        <!-- 指令帮助弹窗 -->
        <div class="ai-commands-help" style="display: none;">
          <div class="ai-commands-help-header">
            <h3>支持的样式指令</h3>
            <div class="ai-commands-help-close">×</div>
          </div>
          <div class="ai-commands-help-content">
            <div class="ai-commands-section">
              <h4>颜色指令</h4>
              <p>红色, 深红, 粉红, 橙色, 黄色, 金色, 绿色, 深绿, 青色, 蓝色, 深蓝, 天蓝, 紫色, 粉紫, 棕色, 黑色, 白色, 灰色, 银色, 淡蓝, 海蓝, 藏青, 薄荷, 酒红, 珊瑚</p>
              <p>红色背景, 深红背景, 粉红背景, 橙色背景, 黄色背景, 金色背景, 绿色背景, 深绿背景, 青色背景, 蓝色背景, 深蓝背景, 天蓝背景, 紫色背景, 粉紫背景, 棕色背景, 黑色背景, 白色背景, 灰色背景, 银色背景, 淡蓝背景, 海蓝背景, 藏青背景, 薄荷背景, 酒红背景, 珊瑚背景</p>
              <p>示例：红色背景, 蓝色文字</p>
            </div>
            <div class="ai-commands-section">
              <h4>尺寸和间距</h4>
              <p>大, 小, 超大, 特大, 极小, 紧凑, 宽松, 无间距, 上间距, 下间距, 左间距, 右间距, 内部间距, 适中, 窄间距, 大间距, 顶部外边距, 底部外边距, 左侧外边距, 右侧外边距, 内部上边距, 内部下边距, 内部左边距, 内部右边距</p>
            </div>
            <div class="ai-commands-section">
              <h4>文本样式</h4>
              <p>粗体, 细体, 斜体, 下划线, 删除线, 大写, 小写, 首字母大写, 居中, 左对齐, 右对齐, 两端对齐, 行高松, 行高紧, 字间距宽, 字间距窄, 加粗, 特粗, 特细, 普通粗细, 中等行高, 特宽行距, 特窄行距, 字间距中等, 字间距极宽, 字间距极窄</p>
            </div>
            <div class="ai-commands-section">
              <h4>边框和装饰</h4>
              <p>阴影, 轻微阴影, 强烈阴影, 内阴影, 圆角, 轻微圆角, 大圆角, 完全圆角, 边框, 细边框, 粗边框, 虚线边框, 点线边框, 双线边框, 红色边框, 绿色边框, 蓝色边框, 黑色边框, 白色边框, 灰色边框, 黄色边框, 橙色边框, 紫色边框, 极细边框, 特粗边框, 上边框, 下边框, 左边框, 右边框</p>
            </div>
            <div class="ai-commands-section">
              <h4>显示和定位</h4>
              <p>隐藏, 可见, 内联, 内联块, 浮动左, 浮动右, 清除浮动, 绝对定位, 相对定位, 固定定位, 全宽, 半宽, 全高, 溢出隐藏, 溢出滚动, 可见溢出, 靠左, 靠右, 居中显示, 弹性布局, 弹性行, 弹性列, 两端分散, 均匀分散, 垂直居中, 三分之一宽, 四分之一宽, 五分之一宽</p>
            </div>
            <div class="ai-commands-section">
              <h4>鼠标样式</h4>
              <p>手型鼠标, 禁用鼠标, 等待鼠标, 帮助鼠标, 十字鼠标, 文本鼠标, 移动鼠标, 抓取鼠标, 抓取中鼠标, 缩放鼠标, 默认鼠标</p>
            </div>
            <div class="ai-commands-section">
              <h4>特殊效果</h4>
              <p>透明, 半透明, 不透明, 模糊, 高亮, 渐变背景, 水平渐变, 垂直渐变, 旋转, 缩放, 移动, 强烈模糊, 锐化, 黑白, 反色, 褪色, 增强色彩, 阴影文字, 浮雕文字, 玻璃效果, 立体效果</p>
            </div>
            <div class="ai-commands-section">
              <h4>预设组合样式</h4>
              <p>按钮样式, 卡片样式, 标题样式, 导航栏样式, 页脚样式, 表单样式, 输入框样式</p>
            </div>
          </div>
        </div>
      `;
      
      // 创建包含问号图标的标题HTML
      const titleWithHelp = `
        <div class="gjs-modal-title-with-help">
          <span>${options.modalTitle}</span>
          <div class="ai-help-icon" title="查看支持的指令">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="currentColor" d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6C9.79,6 8,7.79 8,10H10C10,8.9 10.9,8 12,8C13.1,8 14,8.9 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10C16,7.79 14.21,6 12,6M11,16H13V18H11V16Z"/>
            </svg>
          </div>
        </div>
      `;
      
      // 显示弹窗并设置自定义标题
      editor.Modal.setTitle(titleWithHelp);
      editor.Modal.setContent(content);
      editor.Modal.open();
      
      // 添加事件监听
      const applyBtn = content.querySelector('#ai-style-apply');
      const cancelBtn = content.querySelector('#ai-style-cancel');
      const textArea = content.querySelector('#ai-style-description');
      const styleTags = content.querySelectorAll('.ai-style-tag');
      
      // 获取问号图标（现在在标题中）
      setTimeout(() => {
        const helpIcon = document.querySelector('.gjs-modal-title-with-help .ai-help-icon');
        const commandsHelp = content.querySelector('.ai-commands-help');
        const commandsHelpClose = content.querySelector('.ai-commands-help-close');
        
        // 问号图标点击事件
        if (helpIcon) {
          helpIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            commandsHelp.style.display = 'block';
          });
        }
        
        // 关闭指令帮助弹窗
        commandsHelpClose.addEventListener('click', () => {
          commandsHelp.style.display = 'none';
        });
      }, 100);
      
      // 为样式标签添加点击事件
      styleTags.forEach(tag => {
        tag.addEventListener('click', () => {
          const tagText = tag.textContent;
          const currentText = textArea.value;
          
          // 如果当前文本为空，直接添加标签文本
          if (!currentText) {
            textArea.value = tagText;
          } 
          // 如果当前文本不为空，在末尾添加逗号+标签文本
          else {
            // 检查是否已经包含相同的标签
            if (!currentText.includes(tagText)) {
              textArea.value = `${currentText}，${tagText}`;
            }
          }
          
          // 聚焦到文本区域
          textArea.focus();
        });
      });
      
      // 应用样式按钮点击事件
      applyBtn.addEventListener('click', () => {
        const styleDescription = textArea.value;
        editor.runCommand('apply-ai-style', { 
          styleDescription,
          selectedComponent
        });
        editor.Modal.close();
      });
      
      // 取消按钮点击事件
      cancelBtn.addEventListener('click', () => {
        editor.Modal.close();
      });
    }
  });
}; 