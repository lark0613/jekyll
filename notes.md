---
layout: default
title: 笔记页
---

<div class="notes-container">
  <h1>我的学习笔记</h1>
  <div id="note-list"></div>
  <div id="note-content" style="display:none;"></div>
</div>

<script>
  const repo = "{{ site.github_repo }}";
  fetch(`https://api.github.com/repos/${repo}/contents/notes`)
    .then(r => r.json())
    .then(files => {
      const mdFiles = files.filter(f => f.name.endsWith('.md')).sort((a,b) => a.name.localeCompare(b.name));
      const list = document.getElementById('note-list');
      mdFiles.forEach(f => {
        const div = document.createElement('div');
        div.className = 'note-item';
        div.innerHTML = `<a href="javascript:void(0)" onclick="loadNote('${f.download_url}')">${f.name.replace('.md','').replace(/-/g,' ')}</a>`;
        list.appendChild(div);
      });
    });

  window.loadNote = (url) => {
    fetch(url).then(r=>r.text()).then(md => {
      document.getElementById('note-content').innerHTML = `<button onclick="back()" class="back-btn">返回列表</button><article class="note-article">${marked.parse(md)}</article>`;
      document.getElementById('note-content').style.display = 'block';
      document.getElementById('note-list').style.display = 'none';
      hljs.highlightAll();
    });
  };
  window.back = () => {
    document.getElementById('note-content').style.display = 'none';
    document.getElementById('note-list').style.display = 'block';
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css">