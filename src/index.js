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
          className: 'fa fa-magic',
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
        
        // 过渡和动画
        '平滑过渡': { 'transition': 'all 0.3s ease' },
        '快速过渡': { 'transition': 'all 0.1s ease' },
        '慢速过渡': { 'transition': 'all 0.8s ease' },
        
        // 鼠标样式
        '手型鼠标': { 'cursor': 'pointer' },
        '禁用鼠标': { 'cursor': 'not-allowed' },
        '等待鼠标': { 'cursor': 'wait' },
        '帮助鼠标': { 'cursor': 'help' },
        
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
      };
      
      // 解析用户输入，应用相应的样式
      Object.keys(styleMap).forEach(keyword => {
        if (styleDescription.includes(keyword)) {
          selectedComponent.addStyle(styleMap[keyword]);
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
          'font-size': '16px',
          'transition': 'background-color 0.3s ease'
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
            transition: all 0.3s ease;
          }
        `;
        document.head.appendChild(styleTag);
      }
      
      // 这里可以添加更多样式映射或调用外部API
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
          <div class="ai-style-wand-modal-header">
            <h3>${options.modalTitle}</h3>
          </div>
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
      `;
      
      // 显示弹窗
      editor.Modal.setTitle(options.modalTitle);
      editor.Modal.setContent(content);
      editor.Modal.open();
      
      // 添加事件监听
      const applyBtn = content.querySelector('#ai-style-apply');
      const cancelBtn = content.querySelector('#ai-style-cancel');
      const textArea = content.querySelector('#ai-style-description');
      const styleTags = content.querySelectorAll('.ai-style-tag');
      
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