const searchInput = document.getElementById('search-input');
const clearBtn = document.querySelector('.clear-btn');

function updateSearch(query) {
  if (!query.trim()) return;
  document.title = `${query} - Google Search`;
  const statsEl = document.querySelector('.results-stats');
  if (statsEl) {
    const count = Math.floor(Math.random() * 900000000) + 10000000;
    statsEl.innerHTML = `About ${count.toLocaleString()} results <span class="hidden sm:inline">(${(Math.random() * 0.5 + 0.2).toFixed(2)} seconds)</span>`;
  }
}

function toggleClearBtn() {
  if (!searchInput || !clearBtn) return;
  if (searchInput.value.length > 0) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }
}

if (searchInput && clearBtn) {
  toggleClearBtn();
  searchInput.addEventListener('input', toggleClearBtn);
  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.classList.add('hidden');
    searchInput.focus();
  });
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      updateSearch(searchInput.value);
    }
  });
}

// People also ask accordion
const paaAnswers = {
  'How long does it take to learn web development?':
    'Most beginners can build basic websites in 3–6 months with consistent practice. Becoming job-ready typically takes 6–12 months depending on hours per week and prior experience.',
  'Can I learn web development for free?':
    'Yes. Platforms like freeCodeCamp, MDN Web Docs, The Odin Project, and YouTube offer free, high-quality web development courses.',
  'What is the best language to start web development?':
    'Start with HTML and CSS for structure and styling, then learn JavaScript. These three are the foundation of frontend web development.',
  'Is web development still a good career in 2026?':
    'Web development remains in demand. Frontend, full-stack, and specialized roles (React, Node.js) continue to offer strong job opportunities globally.',
};

document.querySelectorAll('.paa-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    const question = btn.querySelector('span').textContent;
    const existing = btn.nextElementSibling;

    if (existing && existing.classList.contains('paa-answer')) {
      existing.classList.toggle('show');
      btn.classList.toggle('expanded');
      return;
    }

    document.querySelectorAll('.paa-answer').forEach((el) => el.remove());
    document.querySelectorAll('.paa-item').forEach((el) => el.classList.remove('expanded'));

    const answer = document.createElement('div');
    answer.className = 'paa-answer show';
    answer.textContent = paaAnswers[question] || 'No answer available.';
    btn.after(answer);
    btn.classList.add('expanded');
  });
});

// Related chip click updates search
document.querySelectorAll('.related-chip').forEach((chip) => {
  chip.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.value = chip.textContent;
    toggleClearBtn();
    updateSearch(chip.textContent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
