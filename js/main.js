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
      nav_portfolio: "Portfolio",
      nav_achievements: "Achievements",
      nav_journal: "Journal",
      nav_connect: "Let's connect",
      nav_home: "Home",
      hero_role: "Food & Beverage Service",
      hero_bio: "Food and Beverage Service professional with hands-on experience in banquet operations and high-volume events. Experienced in guest service, ESB Lite POS, order accuracy and collaborative service.",
      about_intro: "I am an F&B Service team member with on-call banquet experience at Bali Nusa Dua Convention Center and Paradisus by Meliá Bali. My work includes event service, wedding set-menu placements and seating-chart preparation.",
      about_festival: "At KAFE during Bali Spirit Festival 2026, I supported a busy service operation, recording more than 1,500 transactions in ESB Lite and engaging with over 300 guests each day.",
      about_profile: "I bring a foundation in Food & Beverage Service, a background in Software Engineering, and an intermediate level of English. I value clear communication, accurate service and dependable teamwork.",
      about_fnb_education: "Studied Food & Beverage Service at Mediterranean Bali Ubud from 2025 to 2026.",
      about_software_education: "Completed vocational studies in Software Engineering at SMK Negeri 1 Gianyar from 2020 to 2023 before focusing on hospitality.",
      about_combined_education: "This combination of study gives me a service-focused foundation and familiarity with digital tools used in day-to-day operations.",
      about_service_background: "I work across banquet and event settings, from convention service to resort functions and a high-volume festival café.",
      about_languages: "I am comfortable communicating in Bahasa Indonesia (native) and English (intermediate).",
      btn_explore: "Explore Portfolio",
      btn_cv: "Download CV",
      contact_phone_label: "Contact Phone",
      contact_mail_label: "Contact Mail",
      location_status_label: "Location & Status",
      location_status_sub: "Open to hospitality opportunities",
      preferences_title: "Preferences & Settings",
      lang_label: "Language",
      theme_label: "Theme",
      skills_eyebrow: "Service & Skills",
      skills_headline: "Care is in the details.",
      skills_subtext: "Practical strengths developed through banquet service, resort functions and high-volume event work.",
      exp_eyebrow: "01 / Professional Experience",
      exp_headline: "Hospitality Experience.",
      exp_subtext: "Selected hospitality roles and event experience drawn from my professional CV.",
      exp_bndcc_story: "On-call banquet service team member at Bali Nusa Dua Convention Center, supporting event dining for functions with more than 1,000 attendees.",
      exp_bndcc_scale: "Events of 1,000+ attendees; service teams of 30–120 staff.",
      exp_bndcc_service: "Banquet tables seating 8–10 guests and bar support for VIP events.",
      exp_paradisus_story: "On-call banquet service team member supporting wedding functions and resort events at Paradisus by Meliá Bali.",
      exp_paradisus_preparation: "Set-menu placements and seating-chart preparation for wedding events.",
      exp_paradisus_setting: "Banquet operations in a resort environment.",
      exp_kafe_story: "Supported café service during Bali Spirit Festival, engaging with more than 300 guests per day.",
      exp_kafe_pos: "Processed more than 1,500 transactions using ESB Lite.",
      exp_kafe_service: "Guest interaction, order handling and accurate point-of-sale transactions.",
      portfolio_eyebrow: "03 / Selected Portfolio",
      portfolio_headline: "Experiences in Practice.",
      portfolio_subtext: "Selected examples from my banquet and event service experience, with responsibilities and results described in my CV.",
      filter_all: "All Work",
      filter_corporate: "Corporate",
      filter_banquet: "Banquet",
      filter_hotel: "Hotel",
      filter_fnb: "F&B",
      filter_events: "Events",
      filter_luxury: "Luxury Standards",
      filter_event: "Event",
      filter_service: "Service",
      pf_cat_corporate: "Corporate Hospitality",
      pf_card1_title: "Convention banquet service",
      pf_card2_title: "Wedding banquet preparation",
      pf_card3_title: "Guest service at Bali Spirit Festival",
      pf_card4_title: "Accurate POS service",
      pf_card5_title: "High-volume festival service",
      pf_card1_desc: "Supported banquet service for events with more than 1,000 attendees, working with service teams of 30–120 staff.",
      pf_card2_desc: "Prepared set-menu placements and seating charts for wedding functions at Paradisus by Meliá Bali.",
      pf_card3_desc: "Engaged with more than 300 guests per day during the six-day festival service period.",
      pf_card4_desc: "Recorded more than 1,500 transactions using ESB Lite during Bali Spirit Festival 2026.",
      pf_card5_desc: "Delivered café service during a six-day festival, combining guest interaction with efficient order and payment handling.",
      pf_view_details: "View Experience",
      journal_eyebrow: "05 / Service Experience",
      achieve_eyebrow: "04 / Recognition",
      achieve_headline: "Recognition for Commitment.",
      achieve_subtext: "Recognition received during my studies at Mediterranean Bali Ubud.",
      achieve_filter_all: "All Recognition",
      achieve_filter_award: "Student Recognition",
      achieve_filter_cert: "Certifications",
      achieve_filter_training: "Training",
      award_english_title: "English Student of the Month",
      award_english_desc: "Recognized as English Student of the Month in 2025.",
      award_discipline_title: "Discipline Student of the Month",
      award_discipline_desc: "Recognized for discipline as a student in 2025.",
      contact_form_title: "Reach Out to Me",
      contact_form_sub: "For banquet service, event work and hospitality opportunities, please get in touch.",
      contact_intro_eyebrow: "06 / CONTACT",
      contact_intro_title: "Let's connect.",
      journal_headline: "Selected Service Experience.",
      journal_subtext: "A closer look at selected service settings and the responsibilities involved in each role.",
      jnl_card1_title: "Banquet service at scale",
      jnl_card2_title: "Preparing wedding functions",
      jnl_card3_title: "Service during Bali Spirit Festival",
      jnl_card1_desc: "BNDCC events included more than 1,000 attendees, banquet tables of 8–10 guests and service teams of 30–120 staff.",
      jnl_card2_desc: "Banquet preparation included set-menu placements and seating-chart preparation for wedding events.",
      jnl_card3_desc: "Across the six-day event, guest service involved more than 300 daily guest interactions and over 1,500 ESB Lite transactions.",
      jnl_read_article: "View Experience"
    },
    id: {
      nav_about: "Tentang",
      nav_experience: "Pengalaman",
      nav_portfolio: "Portofolio",
      nav_achievements: "Prestasi",
      nav_journal: "Jurnal",
      nav_connect: "Mari terhubung",
      nav_home: "Beranda",
      hero_role: "Food & Beverage Service",
      hero_bio: "Tenaga Food & Beverage Service dengan pengalaman langsung di operasional banquet dan acara berkapasitas tinggi. Berpengalaman dalam pelayanan tamu, penggunaan POS ESB Lite, ketelitian pesanan, dan kerja tim.",
      about_intro: "Saya merupakan anggota tim F&B Service dengan pengalaman banquet on-call di Bali Nusa Dua Convention Center dan Paradisus by Meliá Bali. Pengalaman saya mencakup layanan acara, penataan menu set untuk pernikahan, dan persiapan denah tempat duduk.",
      about_festival: "Di KAFE selama Bali Spirit Festival 2026, saya mendukung operasional layanan yang sibuk, mencatat lebih dari 1.500 transaksi melalui ESB Lite dan berinteraksi dengan lebih dari 300 tamu setiap hari.",
      about_profile: "Saya memiliki dasar pendidikan Food & Beverage Service, latar belakang Rekayasa Perangkat Lunak, dan kemampuan bahasa Inggris tingkat menengah. Saya mengutamakan komunikasi yang jelas, layanan yang akurat, dan kerja tim yang dapat diandalkan.",
      about_fnb_education: "Mempelajari Food & Beverage Service di Mediterranean Bali Ubud pada 2025–2026.",
      about_software_education: "Menyelesaikan pendidikan kejuruan Rekayasa Perangkat Lunak di SMK Negeri 1 Gianyar pada 2020–2023 sebelum berfokus pada bidang perhotelan.",
      about_combined_education: "Perpaduan pendidikan tersebut memberi saya dasar pelayanan dan pemahaman tentang alat digital yang digunakan dalam operasional sehari-hari.",
      about_service_background: "Saya memiliki pengalaman di lingkungan banquet dan acara, mulai dari layanan konvensi hingga fungsi resor dan kafe festival berkapasitas tinggi.",
      about_languages: "Saya berkomunikasi dalam Bahasa Indonesia (asli) dan bahasa Inggris (tingkat menengah).",
      btn_explore: "Jelajahi Portofolio",
      btn_cv: "Unduh CV",
      contact_phone_label: "Telepon Kontak",
      contact_mail_label: "Email Kontak",
      location_status_label: "Lokasi & Status",
      location_status_sub: "Terbuka untuk peluang di bidang perhotelan",
      preferences_title: "Preferensi & Pengaturan",
      lang_label: "Bahasa",
      theme_label: "Tema",
      skills_eyebrow: "Layanan & Keahlian",
      skills_headline: "Ketelitian ada di setiap detail.",
      skills_subtext: "Keahlian praktis yang dikembangkan melalui layanan banquet, acara resor, dan operasional acara berkapasitas tinggi.",
      exp_eyebrow: "01 / Pengalaman Profesional",
      exp_headline: "Pengalaman di Bidang Perhotelan.",
      exp_subtext: "Pilihan pengalaman kerja dan acara di bidang perhotelan, berdasarkan CV profesional saya.",
      exp_bndcc_story: "Anggota tim banquet on-call di Bali Nusa Dua Convention Center, mendukung layanan acara dengan lebih dari 1.000 peserta.",
      exp_bndcc_scale: "Acara dengan lebih dari 1.000 peserta; tim layanan berjumlah 30–120 staf.",
      exp_bndcc_service: "Meja banquet untuk 8–10 tamu dan dukungan bar untuk acara VIP.",
      exp_paradisus_story: "Anggota tim banquet on-call yang mendukung acara pernikahan dan fungsi resor di Paradisus by Meliá Bali.",
      exp_paradisus_preparation: "Penataan menu set dan persiapan denah tempat duduk untuk acara pernikahan.",
      exp_paradisus_setting: "Operasional banquet di lingkungan resor.",
      exp_kafe_story: "Mendukung layanan kafe selama Bali Spirit Festival dan berinteraksi dengan lebih dari 300 tamu per hari.",
      exp_kafe_pos: "Memproses lebih dari 1.500 transaksi menggunakan ESB Lite.",
      exp_kafe_service: "Interaksi dengan tamu, penanganan pesanan, dan transaksi di sistem POS secara akurat.",
      portfolio_eyebrow: "03 / Portofolio Terpilih",
      portfolio_headline: "Pengalaman dalam Praktek.",
      portfolio_subtext: "Pilihan pengalaman layanan banquet dan acara, dengan tanggung jawab dan hasil yang tercantum dalam CV saya.",
      filter_all: "Semua Karya",
      filter_corporate: "Korporat",
      filter_banquet: "Banquet",
      filter_hotel: "Hotel",
      filter_fnb: "F&B",
      filter_events: "Acara",
      filter_luxury: "Standar Premium",
      filter_event: "Event",
      filter_service: "Layanan",
      pf_cat_corporate: "Perhotelan Korporat",
      pf_card1_title: "Layanan banquet konvensi",
      pf_card2_title: "Persiapan banquet pernikahan",
      pf_card3_title: "Layanan tamu di Bali Spirit Festival",
      pf_card4_title: "Transaksi POS yang akurat",
      pf_card5_title: "Layanan festival berkapasitas tinggi",
      pf_card1_desc: "Mendukung layanan banquet untuk acara dengan lebih dari 1.000 peserta bersama tim layanan yang terdiri dari 30–120 staf.",
      pf_card2_desc: "Menyiapkan tata letak menu set dan denah tempat duduk untuk acara pernikahan di Paradisus by Meliá Bali.",
      pf_card3_desc: "Berinteraksi dengan lebih dari 300 tamu per hari selama periode layanan festival enam hari.",
      pf_card4_desc: "Mencatat lebih dari 1.500 transaksi menggunakan ESB Lite selama Bali Spirit Festival 2026.",
      pf_card5_desc: "Memberikan layanan kafe selama festival enam hari, termasuk interaksi dengan tamu serta penanganan pesanan dan pembayaran.",
      pf_view_details: "Lihat Pengalaman",
      journal_eyebrow: "05 / Pengalaman Layanan",
      achieve_eyebrow: "04 / Apresiasi",
      achieve_headline: "Apresiasi atas Dedikasi.",
      achieve_subtext: "Apresiasi yang diterima selama menempuh pendidikan di Mediterranean Bali Ubud.",
      achieve_filter_all: "Semua Apresiasi",
      achieve_filter_award: "Apresiasi Siswa",
      achieve_filter_cert: "Sertifikasi",
      achieve_filter_training: "Pelatihan",
      award_english_title: "Siswa Bahasa Inggris Terbaik Bulan Ini",
      award_english_desc: "Menerima penghargaan English Student of the Month pada 2025.",
      award_discipline_title: "Siswa Paling Disiplin Bulan Ini",
      award_discipline_desc: "Menerima penghargaan atas kedisiplinan sebagai siswa pada 2025.",
      contact_form_title: "Hubungi Saya",
      contact_form_sub: "Untuk layanan banquet, acara, dan peluang kerja di bidang perhotelan, silakan hubungi saya.",
      contact_intro_eyebrow: "06 / KONTAK",
      contact_intro_title: "Mari terhubung.",
      journal_headline: "Pilihan Pengalaman Layanan.",
      journal_subtext: "Gambaran singkat tentang beberapa lingkungan layanan dan tanggung jawab dalam setiap peran.",
      jnl_card1_title: "Layanan banquet berskala besar",
      jnl_card2_title: "Persiapan acara pernikahan",
      jnl_card3_title: "Layanan di Bali Spirit Festival",
      jnl_card1_desc: "Acara BNDCC mencakup lebih dari 1.000 peserta, meja banquet untuk 8–10 tamu, dan tim layanan berjumlah 30–120 staf.",
      jnl_card2_desc: "Persiapan banquet mencakup penataan menu set dan denah tempat duduk untuk acara pernikahan.",
      jnl_card3_desc: "Selama acara enam hari, layanan tamu mencakup lebih dari 300 interaksi per hari dan lebih dari 1.500 transaksi ESB Lite.",
      jnl_read_article: "Lihat Pengalaman"
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
  const contactForm = document.getElementById('portfolio-contact-form');
  let greetingRotationEnabled = false;
  let introSkipped = false;

  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:arisuardanamediubd@gmail.com?subject=${subject}&body=${body}`;
    });
  }

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

    setTimeout(() => {
      if (introSkipped) return;
      const greeting = document.getElementById('hero-greeting-text');
      if (greeting) {
        const greetingElement = greeting.parentElement;
        const greetingRect = greetingElement.getBoundingClientRect();
        greetingElement.style.setProperty('--hero-greeting-top', `${greetingRect.top}px`);
        greetingElement.style.setProperty('--hero-greeting-left', `${greetingRect.left}px`);
        greetingElement.style.setProperty('--hero-greeting-width', `${greetingRect.width}px`);
        greeting.textContent = 'OM SWASTYASTU';
        greeting.setAttribute('lang', 'ban');
        greetingElement.classList.add('is-revealed', 'is-blessing');
      }
    }, 4200);

    setTimeout(() => {
      if (introSkipped) return;
      const greeting = document.querySelector('.hero-greeting');
      if (greeting) greeting.classList.add('is-fading-out');
    }, 6600);

    setTimeout(() => {
      if (introSkipped) return;
      const greeting = document.getElementById('hero-greeting-text');
      if (greeting) {
        greeting.textContent = 'Om Swastyastu, tityang';
        greeting.setAttribute('lang', 'ban');
        greeting.parentElement.classList.remove('is-blessing', 'is-fading-out');
        greeting.parentElement.classList.add('is-boot-hidden');
        greeting.parentElement.style.removeProperty('--hero-greeting-top');
        greeting.parentElement.style.removeProperty('--hero-greeting-left');
        greeting.parentElement.style.removeProperty('--hero-greeting-width');
      }
    }, 7300);

    setTimeout(() => {
      if (introSkipped) return;
      if (header) header.classList.add('is-revealed');
      if (navBrandGroup) navBrandGroup.classList.add('is-revealed');
      const greeting = document.querySelector('.hero-greeting');
      if (greeting) {
        greeting.classList.remove('is-boot-hidden');
        greeting.classList.add('is-revealed');
      }
      const mist = document.querySelector('.hero-mist-backdrop');
      const vignette = document.querySelector('.hero-top-vignette');
      if (mist) mist.classList.add('is-revealed');
      if (vignette) vignette.classList.add('is-revealed');
      greetingRotationEnabled = true;
      window.dispatchEvent(new Event('inas:greeting-start'));
    }, 7600);

    setTimeout(() => {
      if (introSkipped) return;
      const name = document.querySelector('.hero-name');
      const navLinks = document.querySelector('.nav-links-wrap');
      if (name) name.classList.add('is-revealed');
      if (navLinks) navLinks.classList.add('is-revealed');
    }, 7900);

    setTimeout(() => {
      if (introSkipped) return;
      const prof = document.querySelector('.hero-profession');
      const bio = document.querySelector('.hero-bio');
      if (prof) prof.classList.add('is-revealed');
      if (bio) bio.classList.add('is-revealed');
      if (hamburgerBtn) hamburgerBtn.classList.add('is-revealed');
    }, 8200);

    setTimeout(() => {
      if (introSkipped) return;
      const actions = document.querySelector('.hero-actions');
      const social = document.querySelector('.social-row');
      if (actions) actions.classList.add('is-revealed');
      if (social) social.classList.add('is-revealed');
    }, 8500);

    // Reveal the hero photos only after every landing-page text element is visible.
    setTimeout(() => {
      if (introSkipped) return;
      if (heroModel) heroModel.classList.add('is-revealed');
      if (heroBg) heroBg.classList.add('is-revealed');
    }, 10100);

    // Reveal the grid and service labels before the portrait.
    setTimeout(() => {
      const grid = document.querySelector('.grid-container');
      const services = document.querySelector('.service-icons-bar');
      if (grid) grid.classList.add('is-revealed');
      if (services) services.classList.add('is-revealed');
    }, 9500);

    // Skip intro gracefully only on Escape or Space key
    const handleSkip = (e) => {
      if (e && e.type === 'keydown' && e.key !== 'Escape' && e.key !== ' ') return;
      introSkipped = true;
      greetingRotationEnabled = true;
      window.dispatchEvent(new Event('inas:greeting-start'));
      const greeting = document.getElementById('hero-greeting-text');
      if (greeting) {
        greeting.textContent = 'Om Swastyastu, tityang';
        greeting.setAttribute('lang', 'ban');
        greeting.parentElement.classList.remove('is-blessing', 'is-settling', 'is-fading-out', 'is-boot-hidden');
        greeting.parentElement.style.removeProperty('--hero-greeting-top');
        greeting.parentElement.style.removeProperty('--hero-greeting-left');
        greeting.parentElement.style.removeProperty('--hero-greeting-width');
      }
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
  const cinematicSections = [
    document.querySelector('.skills-subpart'),
    document.querySelector('.experience-subpart'),
    document.querySelector('.portfolio-section'),
    document.querySelector('.achievements-section'),
    document.querySelector('.journal-section'),
    document.querySelector('.contact-section')
  ].filter(Boolean);

  function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

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
      const progress = Math.min(1, Math.max(0, -rect.top / (windowHeight * 0.7)));
      const titleFade = Math.min(1, progress / 0.65);
      const contentFade = Math.min(1, Math.max(0, (progress - 0.25) / 0.45));
      aboutSection.style.setProperty('--about-intro-progress', titleFade.toFixed(3));
      aboutSection.style.setProperty('--about-content-progress', contentFade.toFixed(3));

      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const translateY = (progress - 0.5) * 55;
        aboutImg.style.transform = `scale(1.12) translateY(${translateY.toFixed(1)}px)`;
      }
    }

    cinematicSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (windowHeight * 0.9 - rect.top) / (windowHeight * 1.35)));
      const introOpacity = Math.min(
        1,
        Math.max(0, progress / 0.2),
        Math.max(0, (0.72 - progress) / 0.2)
      );
      const contentProgress = Math.min(1, Math.max(0, (progress - 0.72) / 0.26));

      section.style.setProperty('--section-intro-opacity', introOpacity.toFixed(3));
      section.style.setProperty('--section-content-progress', contentProgress.toFixed(3));
      section.style.setProperty('--section-intro-offset', `${((1 - progress) * 22).toFixed(1)}px`);
    });

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
    const intervalMs = 3400;
    const fadeDurationMs = 850;

    greetingEl.style.setProperty('--greeting-cycle-duration', `${intervalMs + fadeDurationMs}ms`);

    const scheduleGreeting = () => {
      if (!greetingRotationEnabled) return;

      greetingEl.classList.remove('fade-in');
      greetingEl.classList.add('is-timing');

      setTimeout(() => {
        greetingEl.classList.remove('is-timing');
        greetingEl.classList.add('fade-out');

        setTimeout(() => {
          greetingIndex = (greetingIndex + 1) % greetings.length;
          greetingEl.textContent = greetings[greetingIndex].text;
          greetingEl.setAttribute('lang', greetings[greetingIndex].lang);
          greetingEl.classList.remove('fade-out');
          greetingEl.classList.add('fade-in');

          requestAnimationFrame(() => {
            greetingEl.classList.remove('fade-in');
            scheduleGreeting();
          });
        }, fadeDurationMs);
      }, intervalMs);
    };

    window.addEventListener('inas:greeting-start', scheduleGreeting, { once: true });
    if (greetingRotationEnabled) scheduleGreeting();
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
