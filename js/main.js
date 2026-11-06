/**
 * INAS — Personal Hospitality Portfolio
 * Main Interactive Controller (Vanilla JS)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ── 0. Translation Dictionary (EN / ID) ────────────────────────
  const UI_TRANSLATIONS = {
    en: {
      nav_about: "About",
      nav_experience: "Experience",
      nav_portfolio: "Portofolio",
      nav_achievements: "Achievements",
      nav_journal: "Journal",
      nav_connect: "Let's connect",
      nav_home: "Home",
      hero_role: "Food & Beverage Attendant",
      hero_bio: "My name is Ardan, a hospitality student with a background in technology. I'm learning to bring care, curiosity and attention to every guest experience.",
      btn_explore: "Explore Portofolio",
      btn_cv: "Download CV",
      contact_phone_label: "Contact Phone",
      contact_mail_label: "Contact Mail",
      location_status_label: "Location & Status",
      location_status_sub: "Open to Daily Worker & Training Opportunities",
      preferences_title: "Preferences & Settings",
      lang_label: "Language",
      theme_label: "Theme",
      skills_eyebrow: "Service & Skills",
      skills_headline: "Care is in the details.",
      skills_subtext: "A learning-focused skill map. Personalise these areas with the skills, training and service examples you can demonstrate.",
      exp_eyebrow: "01 / Professional Experience",
      exp_headline: "Where My Journey Takes Shape.",
      exp_subtext: "The starting points of my practical hospitality experience. Details below are editable notes to complete in my own words.",
      portfolio_eyebrow: "03 / Selected Portfolio",
      portfolio_headline: "Experiences in Practice.",
      portfolio_subtext: "A place for the work, the preparation and the listening in between. These project examples are draft documentations, not completed project claims.",
      filter_all: "All Work",
      filter_hotel: "Hotel",
      filter_fnb: "F&B",
      filter_event: "Event",
      filter_service: "Service",
      pf_cat_corporate: "Corporate Hospitality",
      pf_card1_title: "The details before the doors open.",
      pf_card2_title: "The details before the doors open.",
      pf_card3_title: "The details before the doors open.",
      pf_card4_title: "The details before the doors open.",
      pf_card5_title: "The details before the doors open.",
      pf_card1_desc: "Draft: document a corporate service setting, your role and one detail you learned to notice.",
      pf_card2_desc: "Draft: document a corporate service setting, your role and one detail you learned to notice.",
      pf_card3_desc: "Draft: document a banquet service setting, your role and one detail you learned to notice.",
      pf_card4_desc: "Draft: document a corporate service setting, your role and one detail you learned to notice.",
      pf_card5_desc: "Draft: document a corporate service setting, your role and one detail you learned to notice.",
      pf_view_details: "View Details →",
      journal_eyebrow: "05 / Journal & Blog",
      achieve_eyebrow: "04 / Honors & Credentials",
      achieve_headline: "Milestones of Dedication.",
      achieve_subtext: "Verified certifications, competition achievements, and professional hospitality credentials demonstrating commitment to service excellence.",
      achieve_filter_all: "All Credentials",
      achieve_filter_award: "Competitions & Awards",
      achieve_filter_cert: "Certifications",
      achieve_filter_training: "Specialized Training",
      contact_form_title: "Reach Out to Me",
      contact_form_sub: "Send an inquiry for banquet daily worker, training, or hospitality collaboration.",
      journal_headline: "Notes From the Hospitality Journey.",
      journal_subtext: "Journal, personal reflections and growth. Blog, service knowledge and hospitality insights. A space to learn, reflect and share.",
      jnl_card1_title: "Learning to notice the little things.",
      jnl_card2_title: "Learning to notice the little things.",
      jnl_card3_title: "Learning to notice the little things.",
      jnl_card1_desc: "Draft: a personal reflection on attention to detail during your early service experience.",
      jnl_card2_desc: "Draft: a personal reflection on attention to detail during your early service experience.",
      jnl_card3_desc: "Draft: a personal reflection on attention to detail during your early service experience.",
      jnl_read_article: "Read Article →"
    },
    id: {
      nav_about: "Tentang",
      nav_experience: "Pengalaman",
      nav_portfolio: "Portofolio",
      nav_achievements: "Prestasi",
      nav_journal: "Jurnal",
      nav_connect: "Mari terhubung",
      nav_home: "Beranda",
      hero_role: "Food & Beverage Attendant",
      hero_bio: "Nama saya Ardan, pembelajar perhotelan dengan latar belakang teknologi. Saya belajar menghadirkan kepedulian, ketelitian, dan perhatian tulus dalam setiap pengalaman tamu.",
      btn_explore: "Jelajahi Portofolio",
      btn_cv: "Unduh CV",
      contact_phone_label: "Telepon Kontak",
      contact_mail_label: "Email Kontak",
      location_status_label: "Lokasi & Status",
      location_status_sub: "Terbuka untuk Daily Worker & Peluang Pelatihan",
      preferences_title: "Preferensi & Pengaturan",
      lang_label: "Bahasa",
      theme_label: "Tema",
      skills_eyebrow: "Layanan & Keahlian",
      skills_headline: "Ketelitian ada di setiap detail.",
      skills_subtext: "Peta keahlian berbasis pembelajaran. Isi setiap area dengan keterampilan, pelatihan, dan contoh pelayanan yang bisa kamu demonstrasikan.",
      exp_eyebrow: "01 / Pengalaman Profesional",
      exp_headline: "Di Sinilah Perjalanan Saya Bermakna.",
      exp_subtext: "Titik awal pengalaman perhotelan praktis saya. Detail di bawah adalah catatan draf yang bisa dilengkapi dengan kata-kata saya sendiri.",
      portfolio_eyebrow: "03 / Portofolio Terpilih",
      portfolio_headline: "Pengalaman dalam Praktek.",
      portfolio_subtext: "Tempat untuk karya, persiapan, dan pembelajaran di antaranya. Contoh proyek ini adalah dokumentasi draf, bukan klaim proyek yang selesai.",
      filter_all: "Semua Karya",
      filter_hotel: "Hotel",
      filter_fnb: "F&B",
      filter_event: "Event",
      filter_service: "Layanan",
      pf_cat_corporate: "Perhotelan Korporat",
      pf_card1_title: "Detail sebelum pintu dibuka.",
      pf_card2_title: "Detail sebelum pintu dibuka.",
      pf_card3_title: "Detail sebelum pintu dibuka.",
      pf_card4_title: "Detail sebelum pintu dibuka.",
      pf_card5_title: "Detail sebelum pintu dibuka.",
      pf_card1_desc: "Draf: dokumentasikan setting layanan korporat, peran Anda, dan satu detail yang Anda pelajari.",
      pf_card2_desc: "Draf: dokumentasikan setting layanan korporat, peran Anda, dan satu detail yang Anda pelajari.",
      pf_card3_desc: "Draf: dokumentasikan setting layanan banquet, peran Anda, dan satu detail yang Anda pelajari.",
      pf_card4_desc: "Draf: dokumentasikan setting layanan korporat, peran Anda, dan satu detail yang Anda pelajari.",
      pf_card5_desc: "Draf: dokumentasikan setting layanan korporat, peran Anda, dan satu detail yang Anda pelajari.",
      pf_view_details: "Lihat Detail →",
      journal_eyebrow: "05 / Jurnal & Blog",
      achieve_eyebrow: "04 / Prestasi & Sertifikasi",
      achieve_headline: "Pencapaian & Dedikasi.",
      achieve_subtext: "Sertifikasi resmi, pencapaian kejuaraan, dan kualifikasi profesional perhotelan yang membuktikan komitmen pada keunggulan pelayanan.",
      achieve_filter_all: "Semua Sertifikasi",
      achieve_filter_award: "Juara & Prestasi",
      achieve_filter_cert: "Sertifikasi Resmi",
      achieve_filter_training: "Pelatihan Khusus",
      contact_form_title: "Hubungi Saya",
      contact_form_sub: "Kirimkan penawaran daily worker banquet, pelatihan, atau kolaborasi perhotelan.",
      journal_headline: "Catatan dari Perjalanan Perhotelan.",
      journal_subtext: "Jurnal, refleksi pribadi, dan pertumbuhan. Blog, pengetahuan layanan, dan wawasan perhotelan. Ruang untuk belajar, merefleksi, dan berbagi.",
      jnl_card1_title: "Belajar memperhatikan hal-hal kecil.",
      jnl_card2_title: "Belajar memperhatikan hal-hal kecil.",
      jnl_card3_title: "Belajar memperhatikan hal-hal kecil.",
      jnl_card1_desc: "Draf: refleksi pribadi tentang perhatian terhadap detail selama pengalaman pelayanan awal Anda.",
      jnl_card2_desc: "Draf: refleksi pribadi tentang perhatian terhadap detail selama pengalaman pelayanan awal Anda.",
      jnl_card3_desc: "Draf: refleksi pribadi tentang perhatian terhadap detail selama pengalaman pelayanan awal Anda.",
      jnl_read_article: "Baca Artikel →"
    }
  };

  // ── 1. Elements ────────────────────────────────────────────────
  const header = document.getElementById('site-header');
  const heroStage = document.getElementById('home');
  const heroBg = document.querySelector('.hero-hotel-bg');
  const heroModel = document.querySelector('.hero-art-layer');
  const heroContent = document.querySelector('.hero-content-left');
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const menuOverlay = document.getElementById('menu-overlay');

  // ── 2. Cinematic Booting Sequence ──────────────────────────────
  const bootStage = document.getElementById('cinematic-boot');
  const bootBrandWrap = document.getElementById('boot-brand-wrap');
  const bootBrandTitle = document.querySelector('.boot-brand-title');
  const bootBrandExpand = document.getElementById('boot-brand-expand');
  const navBrandGroup = document.querySelector('.brand-group');

  if (bootStage && bootBrandWrap && navBrandGroup) {
    document.body.classList.add('is-booting');

    // Helper to reveal all elements immediately on skip
    const revealAllElements = () => {
      document.querySelectorAll(
        '.hero-art-layer, .hero-mist-backdrop, .hero-top-vignette, header.site-header, ' +
        '.brand-group, .nav-links-wrap, .hamburger-btn, .hero-greeting, .hero-name, ' +
        '.hero-profession, .hero-bio, .hero-actions, .social-row, .hero-hotel-bg, ' +
        '.grid-container, .service-icons-bar'
      ).forEach(el => el && el.classList.add('is-revealed'));
    };

    // Step 1 (250ms): Fading in pelan dan anggun "INAS" di tengah layar (durasi ~1.1s)
    setTimeout(() => {
      bootBrandTitle.classList.add('is-visible');
    }, 250);

    // Step 2 (1400ms): Diikuti mekarnya "INAS | The Texts" secara tenang dan elegan (durasi ~1.1s)
    setTimeout(() => {
      bootBrandExpand.classList.add('is-expanded');
    }, 1400);

    // Step 3 (3100ms): Setelah logo utuh terbaca jelas, logo memudar keluar secara halus (durasi ~0.85s)
    setTimeout(() => {
      bootBrandWrap.classList.add('is-fading-out');
    }, 3100);

    // Step 4 (3950ms): Dissolve intro overlay (kanvas tetap putih/cream bersih)
    setTimeout(() => {
      bootStage.classList.add('is-fading');
      document.body.classList.add('boot-revealed');
      document.body.classList.remove('is-booting');
    }, 3950);

    // Step 5 (4450ms): Tutup intro stage sepenuhnya
    setTimeout(() => {
      bootStage.classList.add('is-finished');
    }, 4450);

    // ── Deterministic Hero Reveal Sequence (Satu Persatu) ──

    // 1. Model Subjek muncul pertama kali di atas kanvas putih (4.2s)
    setTimeout(() => {
      if (heroModel) heroModel.classList.add('is-revealed');
    }, 4200);

    // 2. Mist di sisi kiri muncul menyelimuti (5.3s)
    setTimeout(() => {
      const mist = document.querySelector('.hero-mist-backdrop');
      const vignette = document.querySelector('.hero-top-vignette');
      if (mist) mist.classList.add('is-revealed');
      if (vignette) vignette.classList.add('is-revealed');
    }, 5300);

    // 3. Navbar & Text Hero mengalir seirama (5.8s - 6.7s)
    setTimeout(() => {
      if (header) header.classList.add('is-revealed');
      if (navBrandGroup) navBrandGroup.classList.add('is-revealed');
      const greeting = document.querySelector('.hero-greeting');
      if (greeting) greeting.classList.add('is-revealed');
    }, 5800);

    setTimeout(() => {
      const name = document.querySelector('.hero-name');
      const navLinks = document.querySelector('.nav-links-wrap');
      if (name) name.classList.add('is-revealed');
      if (navLinks) navLinks.classList.add('is-revealed');
    }, 6100);

    setTimeout(() => {
      const prof = document.querySelector('.hero-profession');
      const bio = document.querySelector('.hero-bio');
      if (prof) prof.classList.add('is-revealed');
      if (bio) bio.classList.add('is-revealed');
      if (hamburgerBtn) hamburgerBtn.classList.add('is-revealed');
    }, 6400);

    setTimeout(() => {
      const actions = document.querySelector('.hero-actions');
      const social = document.querySelector('.social-row');
      if (actions) actions.classList.add('is-revealed');
      if (social) social.classList.add('is-revealed');
    }, 6700);

    // 4. Foto background hotel PALING TERAKHIR (8.3s)
    setTimeout(() => {
      if (heroBg) heroBg.classList.add('is-revealed');
    }, 8300);

    // 5. Grid guidelines & ikon layanan hospitality (8.9s)
    setTimeout(() => {
      const grid = document.querySelector('.grid-container');
      const services = document.querySelector('.service-icons-bar');
      if (grid) grid.classList.add('is-revealed');
      if (services) services.classList.add('is-revealed');
    }, 8900);

    // Skip intro gracefully only on Escape or Space key
    const handleSkip = (e) => {
      if (e && e.type === 'keydown' && e.key !== 'Escape' && e.key !== ' ') return;
      document.body.classList.remove('is-booting');
      document.body.classList.add('boot-revealed');
      bootStage.classList.add('is-finished');
      revealAllElements();
      window.removeEventListener('keydown', handleSkip);
    };
    window.addEventListener('keydown', handleSkip);
  }

  // ── 3. Theme Management (Dark Mode / Light Mode) ───────────────
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('inas_theme') || 'light';

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('inas_theme', theme);
  }

  // Initialize theme
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark-mode');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // ── 4. Language Switcher (EN / ID) ─────────────────────────────
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('inas_lang') || 'en';

  function applyLanguage(lang) {
    const dict = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS.en;

    // Update active button state
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    localStorage.setItem('inas_lang', lang);
  }

  // Initialize language
  applyLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
    });
  });

  // ── 5. Navbar Solid on Scroll & Parallax Effect ───────────────
  let rafId = null;

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar state
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Parallax on Hero section (only compute while hero is in view)
    if (heroStage) {
      const heroHeight = heroStage.offsetHeight;
      if (scrollY <= heroHeight + 100) {
        if (heroBg) {
          heroBg.style.transform = `translateY(${scrollY * 0.38}px)`;
        }
        if (heroModel) {
          heroModel.style.transform = `translateY(${scrollY * 0.14}px)`;
        }
        if (heroContent) {
          const fadeOpacity = Math.max(0, 1 - (scrollY / (heroHeight * 0.85)));
          heroContent.style.opacity = fadeOpacity;
        }
      }
    }

    // Parallax on About Section Image ("An Overview Personality")
    const aboutSection = document.getElementById('about');
    const aboutImg = document.querySelector('.about-image-card img');
    if (aboutSection && aboutImg) {
      const rect = aboutSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (progress - 0.5) * 55;
        aboutImg.style.transform = `scale(1.12) translateY(${translateY.toFixed(1)}px)`;
      }
    }

    // Parallax on Experience Photos
    const expPhotos = document.querySelectorAll('.exp-photo-card img');
    expPhotos.forEach(photo => {
      const card = photo.closest('.exp-photo-card');
      if (card) {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const translateY = (progress - 0.5) * 45;
          photo.style.transform = `scale(1.12) translateY(${translateY.toFixed(1)}px)`;
        }
      }
    });
  }

  window.addEventListener('scroll', () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      handleScroll();
      rafId = null;
    });
  }, { passive: true });

  handleScroll();

  // ── 6. Fullscreen Hamburger Menu Toggle ───────────────────────
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    menuOverlay.classList.toggle('is-open', isMenuOpen);
    hamburgerBtn.classList.toggle('is-active', isMenuOpen);
    hamburgerBtn.setAttribute('aria-expanded', isMenuOpen);
    document.body.classList.toggle('menu-open', isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }

  function closeMenu() {
    if (!isMenuOpen) return;
    isMenuOpen = false;
    menuOverlay.classList.remove('is-open');
    hamburgerBtn.classList.remove('is-active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking any overlay navigation link
  document.querySelectorAll('.menu-nav-anchor').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });

  // ── 7. About Section Tab Switcher ─────────────────────────────
  const pills = document.querySelectorAll('.about-pill');
  const panels = {
    inas: document.getElementById('panel-inas'),
    education: document.getElementById('panel-education'),
    extra: document.getElementById('panel-extra')
  };

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.getAttribute('data-tab');

      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      Object.keys(panels).forEach(key => {
        if (panels[key]) {
          panels[key].style.display = 'none';
        }
      });

      if (panels[target]) {
        panels[target].style.display = 'block';
        panels[target].classList.remove('fi');
        void panels[target].offsetWidth;
        panels[target].classList.add('fi', 'fi-up');
      }
    });
  });

  // ── 8. Multilingual Hospitality Greeting Rotator (32 Languages) ──
  const greetingEl = document.getElementById('hero-greeting-text');
  if (greetingEl) {
    const greetings = [
      // 1. English (Primary International)
      { text: "Hello, I am", lang: "en" },
      // 2. Bahasa Indonesia (National Identity)
      { text: "Halo, saya", lang: "id" },
      // 3. Balinese (Indigenous Bali Heritage)
      { text: "Om Swastyastu, tityang", lang: "ban" },
      // 4. Javanese (Regional Heritage)
      { text: "Sugeng rawuh, kulo", lang: "jv" },
      // 5. Sundanese (Regional Heritage)
      { text: "Sampurasun, simkuring", lang: "su" },
      // 6. French (Culinary & Luxury Hospitality)
      { text: "Bonjour, je suis", lang: "fr" },
      // 7. Japanese (Native Script + Latin Transliteration)
      { text: "こんにちは、私は (Konnichiwa, watashi wa)", lang: "ja" },
      // 8. Spanish (Global Hospitality)
      { text: "Hola, soy", lang: "es" },
      // 9. German (European Resort Tourism)
      { text: "Guten Tag, ich bin", lang: "de" },
      // 10. Italian (Fine Dining Heritage)
      { text: "Buongiorno, sono", lang: "it" },
      // 11. Mandarin Chinese (Native + Pinyin)
      { text: "你好，我是 (Nǐ hǎo, wǒ shì)", lang: "zh" },
      // 12. Russian (Cyrillic + Latin)
      { text: "Здравствуйте, я (Zdravstvuyte, ya)", lang: "ru" },
      // 13. Arabic (Arabic Script + Latin)
      { text: "مرحباً، أنا (Marhaban, ana)", lang: "ar" },
      // 14. Dutch (Historical & Tourism Link)
      { text: "Hallo, ik ben", lang: "nl" },
      // 15. Korean (Hangul + Latin)
      { text: "안녕하세요, 저는 (Annyeonghaseyo, jeoneun)", lang: "ko" },
      // 16. Portuguese
      { text: "Olá, eu sou", lang: "pt" },
      // 17. Hindi (Devanagari + Latin)
      { text: "नमस्ते, मैं हूँ (Namaste, main hoon)", lang: "hi" },
      // 18. Thai (Thai Script + Latin)
      { text: "สวัสดีครับ, ผม (Sawasdee krup, phom)", lang: "th" },
      // 19. Vietnamese
      { text: "Xin chào, tôi là", lang: "vi" },
      // 20. Turkish
      { text: "Merhaba, ben", lang: "tr" },
      // 21. Greek (Greek Script + Latin)
      { text: "Γεια σας, είμαι (Geia sas, eimai)", lang: "el" },
      // 22. Swedish
      { text: "Hej, jag är", lang: "sv" },
      // 23. Danish
      { text: "Goddag, jeg er", lang: "da" },
      // 24. Norwegian
      { text: "Hei, jeg er", lang: "no" },
      // 25. Finnish
      { text: "Hei, olen", lang: "fi" },
      // 26. Polish
      { text: "Dzień dobry, jestem", lang: "pl" },
      // 27. Czech
      { text: "Dobrý den, jsem", lang: "cs" },
      // 28. Hungarian
      { text: "Jó napot, én vagyok", lang: "hu" },
      // 29. Tagalog (Filipino)
      { text: "Kamusta, ako si", lang: "tl" },
      // 30. Swahili (East African Hospitality)
      { text: "Jambo, mimi ni", lang: "sw" },
      // 31. Hawaiian (Pacific Island Aloha Spirit)
      { text: "Aloha, ʻo wau ʻo", lang: "haw" },
      // 32. Australian Hospitality
      { text: "G'day, I am", lang: "en-AU" }
    ];

    let greetingIndex = 0;
    const intervalMs = 3400; // 3.4 seconds per greeting
    const fadeDurationMs = 850; // Smooth 0.85s cinematic blur/fade

    setInterval(() => {
      greetingEl.classList.remove('fade-in');
      greetingEl.classList.add('fade-out');

      setTimeout(() => {
        greetingIndex = (greetingIndex + 1) % greetings.length;
        greetingEl.textContent = greetings[greetingIndex].text;
        greetingEl.setAttribute('lang', greetings[greetingIndex].lang);
        greetingEl.classList.remove('fade-out');
        greetingEl.classList.add('fade-in');
      }, fadeDurationMs);
    }, intervalMs);
  }

  // ── 9. Smooth Anchor Scrolling ────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 74;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ── 10. Experience Timeline Accordion Toggle ──────────────────
  document.querySelectorAll('.exp-item').forEach(item => {
    const toggleBtn = item.querySelector('.exp-toggle-btn');
    const toggleIcon = item.querySelector('.exp-toggle-icon');

    if (toggleBtn && toggleIcon) {
      toggleBtn.addEventListener('click', () => {
        const isCollapsed = item.classList.toggle('is-collapsed');
        toggleIcon.innerHTML = isCollapsed ? '&plus;' : '&minus;';
        toggleBtn.setAttribute('aria-expanded', !isCollapsed);
      });
    }
  });

  // ── 11. Scroll-Triggered Reveal Observer (About & Experience) ──
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
      }
    });
  }, {
    threshold: 0.10,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

  // ── 11. Portfolio Filter Tabs ────────────────────────────────
  const pfBtns = document.querySelectorAll('.pf-btn');
  const pfCards = document.querySelectorAll('.pf-card[data-category]');

  pfBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pfBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      pfCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(14px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.transition = 'opacity 0.2s ease';
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 220);
        }
      });
    });
  });


  // ── 12. Achievements Filter Tabs ──────────────────────────────
  const achieveBtns = document.querySelectorAll('.achieve-filter-btn');
  const achieveCards = document.querySelectorAll('.achieve-card[data-category]');

  achieveBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      achieveBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      achieveCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(14px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.style.transition = 'opacity 0.2s ease';
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 220);
        }
      });
    });
  });

});
