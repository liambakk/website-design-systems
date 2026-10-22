const tabs = [...document.querySelectorAll('.bk-tab')];
const panels = [...document.querySelectorAll('.bk-panel')];
const title = document.getElementById('section-title');

function activateTab(tab, focus = false) {
  for (const item of tabs) {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    if (active && focus) item.focus();
  }
  for (const panel of panels) panel.hidden = panel.dataset.panel !== tab.dataset.tab;
  title.textContent = tab.textContent;
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    const nextIndex = event.key === 'ArrowRight' ? (index + 1) % tabs.length :
      event.key === 'ArrowLeft' ? (index - 1 + tabs.length) % tabs.length :
      event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
    if (nextIndex < 0) return;
    event.preventDefault();
    activateTab(tabs[nextIndex], true);
  });
});

const projects = [...document.querySelectorAll('.bk-project')];
const previewTitle = document.getElementById('project-preview-title');
const art = document.getElementById('project-art');
for (const project of projects) {
  project.addEventListener('click', () => {
    for (const item of projects) item.setAttribute('aria-pressed', String(item === project));
    previewTitle.textContent = project.dataset.project;
    art.dataset.art = project.dataset.art;
  });
}
