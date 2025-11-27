// 时钟（首页）
if (document.getElementById('clock')) {
  function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString('zh-CN', {hour12:false});
    document.getElementById('date').textContent = now.toLocaleDateString('zh-CN', {weekday:'long', year:'numeric', month:'long', day:'numeric'});
  }
  setInterval(updateClock, 1000);
  updateClock();
}

// 笔记高亮
if (typeof hljs !== 'undefined') {
  hljs.highlightAll();
}