(function () {
  const activeTab = document.body.dataset.activeTab || 'all';
  const tabs = [
    { id: 'all', label: 'All', href: 'index.html', className: '' },
    { id: 'ai-mode', label: 'AI Mode', href: 'ai-mode.html', className: 'hidden md:inline-flex' },
    { id: 'images', label: 'Images', href: 'images.html', className: '' },
    { id: 'videos', label: 'Videos', href: 'videos.html', className: '' },
    { id: 'news', label: 'News', href: 'news.html', className: 'hidden sm:inline-flex' },
    { id: 'shopping', label: 'Shopping', href: 'shopping.html', className: 'hidden lg:inline-flex' },
    { id: 'maps', label: 'Maps', href: 'maps.html', className: 'hidden lg:inline-flex' },
    { id: 'books', label: 'Books', href: 'books.html', className: 'hidden xl:inline-flex' },
  ];

  const navItems = tabs
    .map(
      (tab) =>
        `<li><a href="${tab.href}" class="nav-tab ${tab.className} ${tab.id === activeTab ? 'active' : ''}">${tab.label}</a></li>`
    )
    .join('');

  const header = document.getElementById('site-header');
  if (!header) return;

  header.innerHTML = `
    <header class="sticky top-0 z-50 bg-white border-b border-google-border">
      <div class="flex items-center gap-3 sm:gap-4 px-3 sm:px-5 pt-3 pb-0 max-w-[100vw]">
        <a href="index.html" aria-label="Google Home" class="shrink-0 pb-3">
          <svg class="w-[92px] h-[30px] sm:w-[116px] sm:h-[36px]" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
            <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
            <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.88h.34v-3.52h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
            <path fill="#4285F4" d="M225 3v65h-9.5V3h9.5z"/>
            <path fill="#34A853" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
            <path fill="#EA4335" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 24.92 0 13.76 10.84 24.92 24.7 24.92 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
          </svg>
        </a>
        <div class="flex-1 min-w-0 max-w-[692px]">
          <div class="search-box serp-search flex items-center h-[44px] sm:h-[46px] px-3 sm:px-4 rounded-full border border-google-border bg-white hover:shadow-serp focus-within:shadow-serp focus-within:hover:shadow-serp transition-shadow">
            <input type="text" id="search-input" value="how to learn web development" aria-label="Search" class="flex-1 text-base outline-none bg-transparent min-w-0" autocomplete="off" />
            <button type="button" aria-label="Clear" class="clear-btn p-1 rounded-full hover:bg-gray-100 mr-1">
              <svg class="w-5 h-5 text-google-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
            <div class="w-px h-7 bg-google-border mx-1 hidden sm:block"></div>
            <button type="button" aria-label="Search by voice" class="p-2 rounded-full hover:bg-gray-100">
              <svg class="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            </button>
          </div>
        </div>
        <div class="flex items-center gap-0.5 sm:gap-1 shrink-0 ml-auto">
          <button type="button" aria-label="Settings" class="p-2 rounded-full hover:bg-gray-100 hidden sm:block">
            <svg class="w-6 h-6 text-google-gray" viewBox="0 0 24 24" fill="currentColor"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.63-.2-1.42.36-1.86l1.53-1.19c-.01-.15-.02-.3-.02-.46v-.92c0-.16.01-.31.02-.46l-1.52-1.19c-.56-.44-.71-1.23-.36-1.86l1.85-3.18c.34-.62 1.11-.91 1.81-.65l1.8.72c.26-.17.52-.32.79-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.7-.26 1.47.03 1.81.65l1.85 3.19c.35.63.2 1.42-.36 1.86l-1.52 1.19c.01.15.02.3.02.46v.92c0 .16-.01.31-.02.46l1.52 1.19c.56.44.71 1.23.36 1.86l-1.85 3.18c-.34.62-1.11.91-1.81.65l-1.8-.72c-.26.17-.52.32-.79.46l-.27 1.91c-.09.69-.71 1.23-1.45 1.23zM12 15.5c1.93 0 3.5-1.57 3.5-3.5S13.93 8.5 12 8.5 8.5 10.07 8.5 12s1.57 3.5 3.5 3.5z"/></svg>
          </button>
          <button type="button" aria-label="Google apps" class="p-2 rounded-full hover:bg-gray-100">
            <svg class="w-6 h-6 text-google-muted" viewBox="0 0 24 24" fill="currentColor"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"/></svg>
          </button>
          <button type="button" aria-label="Google Account" class="ml-0.5">
            <div class="w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-medium flex items-center justify-center">N</div>
          </button>
        </div>
      </div>
      <nav class="nav-tabs overflow-x-auto scrollbar-hide pl-[60px] sm:pl-[148px] pr-4 -mt-px" aria-label="Search filters">
        <ul class="flex items-center gap-1 min-w-max pb-0">
          ${navItems}
          <li>
            <button type="button" class="nav-tab nav-tab-more">
              More
              <svg class="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
          </li>
          <li class="ml-auto hidden sm:block">
            <button type="button" class="nav-tab nav-tab-tools">
              Tools
              <svg class="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  `;
})();
