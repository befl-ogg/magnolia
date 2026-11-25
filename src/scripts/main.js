    document.addEventListener('DOMContentLoaded', () => {
      /* -----------------------------------------------------------------------
         1. DATA MODEL: THE 4 CHAMELEON ATMOSPHERES
         ----------------------------------------------------------------------- */
      const atmospheres = [
        {
          id: 0,
          num: '01',
          tag: 'Bodas & Galas',
          quoterValue: 'Bodas & Galas',
          title: 'Romance bajo luz dorada.',
          desc: 'Cenas largas a la luz de las velas, reflejos ámbar sobre el concreto pulido y guirnaldas cálidas que abrazan el arco monumental.',
          kelvinDesktop: '2700K · Iluminación Nocturna Cálida',
          kelvinMobile: '2700K · Cálido Nocturno',
          capacityDesktop: 'Aforo sugerido: 80 – 220 invitados',
          capacityMobile: '80 – 220 invitados',
          specs: ['Guirnaldas cálidas', 'Banquete imperial', 'Barra nocturna'],
          bgColor: '#12100E',
          textColor: '#F4F1EC'
        },
        {
          id: 1,
          num: '02',
          tag: 'Corporativo & Negocios',
          quoterValue: 'Corporativo',
          title: 'Precisión que eleva tu marca.',
          desc: 'Lanzamientos, consejos directivos y conferencias inmersas en luz arquitectónica neutra, tonos piedra y acústica impecable.',
          kelvinDesktop: '4000K · Luz Arquitectónica Neutra',
          kelvinMobile: '4000K · Neutro Ejecutivo',
          capacityDesktop: 'Aforo sugerido: 40 – 180 asistentes',
          capacityMobile: '40 – 180 asistentes',
          specs: ['Acústica de voz', 'Montaje auditorio', 'Proyección limpia'],
          bgColor: '#E8E3DB',
          textColor: '#1A1816'
        },
        {
          id: 2,
          num: '03',
          tag: 'Bazares & Pop-Ups',
          quoterValue: 'Bazares & Pop-Ups',
          title: 'Un lienzo abierto al diseño.',
          desc: 'Planta libre bañada por luz natural desde los ventanales superiores, diseñada para recorridos fluidos y exhibiciones curadas.',
          kelvinDesktop: '5500K · Luz Natural Diurna',
          kelvinMobile: '5500K · Diurno Abierto',
          capacityDesktop: 'Flujo continuo · Hasta 250 personas',
          capacityMobile: 'Planta libre comercial',
          specs: ['Ventanales cenitales', 'Planta modular', 'Acceso a pie de calle'],
          bgColor: '#F4F1EC',
          textColor: '#1A1816'
        },
        {
          id: 3,
          num: '04',
          tag: 'Encuentros Privados',
          quoterValue: 'Encuentros Privados',
          title: 'Intimidad curada al detalle.',
          desc: 'Celebraciones privadas, catas y cenas de autor con iluminación perimetral tenue, protagonismo en la barra y salas lounge.',
          kelvinDesktop: '2400K · Escena Íntima Low-Key',
          kelvinMobile: '2400K · Íntimo Privado',
          capacityDesktop: 'Aforo sugerido: 30 – 90 invitados',
          capacityMobile: '30 – 90 invitados',
          specs: ['Salas lounge', 'Foco en barra', 'Privacidad total'],
          bgColor: '#191716',
          textColor: '#F4F1EC'
        }
      ];

      /* -----------------------------------------------------------------------
         2. LOCKED-CAMERA ARCHITECTURAL RENDER GENERATOR (PHASE 3)
         Renders Magnolia's exact interior (roof trusses, upper windows, wooden
         bar + greenery trellis, monumental arched mirror, polished concrete)
         with 4 seamless crossfading lighting & furniture atmosphere layers.
         ----------------------------------------------------------------------- */
      function buildLockedCameraSVG(prefix) {
        return `
        <svg class="w-full h-full object-cover" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" aria-label="Interior arquitectónico de Magnolia transformándose entre cuatro atmósferas">
          <defs>
            <!-- Sky & Wall Gradients per Atmosphere -->
            <linearGradient id="${prefix}-wall-warm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#28211A"/>
              <stop offset="65%" stop-color="#382C20"/>
              <stop offset="100%" stop-color="#201913"/>
            </linearGradient>
            <linearGradient id="${prefix}-wall-corp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#D7D2CA"/>
              <stop offset="100%" stop-color="#B9B2A7"/>
            </linearGradient>
            <linearGradient id="${prefix}-wall-day" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#F1EDE5"/>
              <stop offset="100%" stop-color="#DED7CB"/>
            </linearGradient>
            <linearGradient id="${prefix}-wall-priv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#171412"/>
              <stop offset="100%" stop-color="#261E18"/>
            </linearGradient>

            <!-- Polished Concrete Floor Reflections per Atmosphere -->
            <linearGradient id="${prefix}-floor-warm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#533F2B"/>
              <stop offset="45%" stop-color="#765839"/>
              <stop offset="100%" stop-color="#2E2218"/>
            </linearGradient>
            <linearGradient id="${prefix}-floor-corp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#A5A098"/>
              <stop offset="50%" stop-color="#B8B3AA"/>
              <stop offset="100%" stop-color="#87827A"/>
            </linearGradient>
            <linearGradient id="${prefix}-floor-day" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#D5CEC2"/>
              <stop offset="50%" stop-color="#E5DFD5"/>
              <stop offset="100%" stop-color="#C0B8AA"/>
            </linearGradient>
            <linearGradient id="${prefix}-floor-priv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#2D231B"/>
              <stop offset="55%" stop-color="#433224"/>
              <stop offset="100%" stop-color="#16120F"/>
            </linearGradient>

            <radialGradient id="${prefix}-warm-glow" cx="50%" cy="32%" r="60%">
              <stop offset="0%" stop-color="#F6BE70" stop-opacity="0.45"/>
              <stop offset="55%" stop-color="#C8873E" stop-opacity="0.14"/>
              <stop offset="100%" stop-color="#120E0B" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="${prefix}-bar-spot" cx="31%" cy="48%" r="34%">
              <stop offset="0%" stop-color="#F7C274" stop-opacity="0.62"/>
              <stop offset="100%" stop-color="#14110E" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="${prefix}-sunbeam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#FFFDF6" stop-opacity="0.48"/>
              <stop offset="65%" stop-color="#FFF7E6" stop-opacity="0.14"/>
              <stop offset="100%" stop-color="#FFF7E6" stop-opacity="0"/>
            </linearGradient>
          </defs>

          <!-- =================================================================
               ATMOSPHERE 0: BODAS & GALAS (WARM NOCTURNAL GOLDEN)
               ================================================================= -->
          <g class="atmosphere-layer" data-layer="0" style="opacity: 1;">
            <rect width="1200" height="585" fill="url(#${prefix}-wall-warm)"/>
            <rect y="585" width="1200" height="315" fill="url(#${prefix}-floor-warm)"/>
            <!-- Clerestory Night Windows -->
            <rect x="335" y="232" width="64" height="44" fill="#18212C" stroke="#4D3D2E" stroke-width="2"/>
            <rect x="490" y="232" width="64" height="44" fill="#18212C" stroke="#4D3D2E" stroke-width="2"/>
            <!-- Arch Wall Mass (Right-Center) -->
            <rect x="635" y="182" width="355" height="403" fill="#46382B"/>
            <!-- Monumental Arched Mirror -->
            <path d="M725 545 V322 A88 88 0 0 1 901 322 V545 Z" fill="#1A140F" stroke="#0E0B09" stroke-width="8"/>
            <!-- Reflected String Lights in Mirror -->
            <g opacity="0.85">
              <circle cx="775" cy="315" r="2.8" fill="#FFE4AD"/>
              <circle cx="813" cy="326" r="3" fill="#FFE4AD"/>
              <circle cx="852" cy="318" r="2.8" fill="#FFE4AD"/>
              <circle cx="792" cy="378" r="2.2" fill="#FFD98E" opacity="0.7"/>
              <circle cx="835" cy="384" r="2.2" fill="#FFD98E" opacity="0.7"/>
            </g>
            <!-- Wooden Bar + Warm Trellis (Left-Center) -->
            <rect x="200" y="340" width="405" height="245" fill="#1A140E"/>
            <rect x="200" y="485" width="275" height="100" fill="#7D5531"/>
            <rect x="200" y="492" width="275" height="4" fill="#FFD992" opacity="0.9"/>
            <!-- Trellis Greenery Glow -->
            <rect x="315" y="340" width="290" height="150" fill="#2A3420" opacity="0.7"/>
            <!-- Long Candlelit Banquet Tables (Left & Right Perspective) -->
            <polygon points="0,635 280,595 320,645 0,745" fill="#4C331E" stroke="#22150B"/>
            <polygon points="1200,635 900,595 855,650 1200,775" fill="#4C331E" stroke="#22150B"/>
            <!-- Glowing Candles on Tables & Arch Base -->
            <g fill="#FFE8B0">
              <ellipse cx="140" cy="632" rx="4" ry="8"/>
              <ellipse cx="220" cy="614" rx="3.5" ry="7"/>
              <ellipse cx="970" cy="625" rx="4" ry="8"/>
              <ellipse cx="1065" cy="655" rx="4.5" ry="9"/>
              <ellipse cx="705" cy="570" rx="3.5" ry="8"/>
              <ellipse cx="722" cy="574" rx="3" ry="6"/>
              <ellipse cx="918" cy="572" rx="3.5" ry="8"/>
            </g>
            <!-- Overhead Edison Festoon Lights -->
            <path d="M50 85 Q380 185 620 140 T1150 95" fill="none" stroke="#C2A27A" stroke-opacity="0.28" stroke-width="1"/>
            <path d="M120 50 Q550 145 1080 65" fill="none" stroke="#C2A27A" stroke-opacity="0.22" stroke-width="1"/>
            <g fill="#FFE4A6">
              <circle cx="195" cy="128" r="4"/><circle cx="340" cy="154" r="4.2"/>
              <circle cx="495" cy="152" r="4.2"/><circle cx="660" cy="138" r="4.5"/>
              <circle cx="825" cy="126" r="4.2"/><circle cx="995" cy="112" r="4"/>
              <circle cx="280" cy="95" r="3.5"/><circle cx="560" cy="112" r="3.8"/>
              <circle cx="880" cy="92" r="3.5"/>
            </g>
            <!-- Warm Volumetric Glow -->
            <rect width="1200" height="900" fill="url(#${prefix}-warm-glow)"/>
          </g>

          <!-- =================================================================
               ATMOSPHERE 1: CORPORATIVO & NEGOCIOS (NEUTRAL 4000K ARCHITECTURAL)
               ================================================================= -->
          <g class="atmosphere-layer" data-layer="1" style="opacity: 0;">
            <rect width="1200" height="585" fill="url(#${prefix}-wall-corp)"/>
            <rect y="585" width="1200" height="315" fill="url(#${prefix}-floor-corp)"/>
            <!-- Crisp Overcast Daylight Clerestory Windows -->
            <rect x="335" y="232" width="64" height="44" fill="#EEF2F5" stroke="#8C877F" stroke-width="2"/>
            <rect x="490" y="232" width="64" height="44" fill="#EEF2F5" stroke="#8C877F" stroke-width="2"/>
            <!-- Arch Wall Mass -->
            <rect x="635" y="182" width="355" height="403" fill="#EAE6DF"/>
            <!-- Monumental Arch Mirror (Clean Neutral Reflection) -->
            <path d="M725 545 V322 A88 88 0 0 1 901 322 V545 Z" fill="#C4C0B8" stroke="#2D2B28" stroke-width="8"/>
            <path d="M750 545 L875 280" stroke="#FFFFFF" stroke-opacity="0.28" stroke-width="26"/>
            <!-- Bar / Executive Coffee & Registration Credenza -->
            <rect x="200" y="340" width="405" height="245" fill="#B5AFA6"/>
            <rect x="200" y="485" width="275" height="100" fill="#6F5B48"/>
            <rect x="315" y="340" width="290" height="145" fill="#5D6B57" opacity="0.65"/>
            <!-- Executive Architectural Presentation Screen & Minimal Podium -->
            <rect x="285" y="365" width="285" height="162" fill="#1E1D1B" stroke="#2C2A28" stroke-width="4"/>
            <rect x="315" y="405" width="110" height="3" fill="#C2A27A"/>
            <rect x="315" y="425" width="180" height="2" fill="#F4F1EC" opacity="0.5"/>
            <rect x="315" y="440" width="145" height="2" fill="#F4F1EC" opacity="0.3"/>
            <!-- Minimalist Podium -->
            <rect x="592" y="510" width="26" height="82" fill="#2A2826"/>
            <rect x="582" y="505" width="46" height="6" fill="#C2A27A"/>
            <!-- Clean Linear Executive Seating Rows -->
            <g fill="#2C2A27" opacity="0.88">
              <rect x="190" y="650" width="140" height="18" rx="2"/>
              <rect x="360" y="650" width="140" height="18" rx="2"/>
              <rect x="680" y="650" width="140" height="18" rx="2"/>
              <rect x="850" y="650" width="140" height="18" rx="2"/>
              <rect x="150" y="715" width="165" height="22" rx="2"/>
              <rect x="345" y="715" width="165" height="22" rx="2"/>
              <rect x="670" y="715" width="165" height="22" rx="2"/>
              <rect x="865" y="715" width="165" height="22" rx="2"/>
            </g>
            <!-- Crisp Overhead Architectural Track Bars -->
            <line x1="210" y1="125" x2="990" y2="125" stroke="#FFFFFF" stroke-opacity="0.7" stroke-width="3"/>
            <line x1="280" y1="165" x2="920" y2="165" stroke="#FFFFFF" stroke-opacity="0.45" stroke-width="2"/>
          </g>

          <!-- =================================================================
               ATMOSPHERE 2: BAZARES & POP-UPS (5500K SUNLIT OPEN COMMERCIAL)
               ================================================================= -->
          <g class="atmosphere-layer" data-layer="2" style="opacity: 0;">
            <rect width="1200" height="585" fill="url(#${prefix}-wall-day)"/>
            <rect y="585" width="1200" height="315" fill="url(#${prefix}-floor-day)"/>
            <!-- Bright Sunlit Clerestory Windows -->
            <rect x="335" y="232" width="64" height="44" fill="#FFFFFF" stroke="#C5BEB2" stroke-width="2"/>
            <rect x="490" y="232" width="64" height="44" fill="#FFFFFF" stroke="#C5BEB2" stroke-width="2"/>
            <!-- Arch Wall Mass in Pure Daylight -->
            <rect x="635" y="182" width="355" height="403" fill="#FAF8F4"/>
            <!-- Monumental Arch Mirror Reflecting Bright Interior -->
            <path d="M725 545 V322 A88 88 0 0 1 901 322 V545 Z" fill="#DDD7CC" stroke="#36322D" stroke-width="8"/>
            <path d="M740 520 L885 275" stroke="#FFFFFF" stroke-opacity="0.55" stroke-width="36"/>
            <!-- Sunlit Wooden Bar & Vibrant Botanical Wall -->
            <rect x="200" y="340" width="405" height="245" fill="#D4CEC3"/>
            <rect x="200" y="485" width="275" height="100" fill="#B18457"/>
            <rect x="315" y="340" width="290" height="145" fill="#6D865A" opacity="0.75"/>
            <!-- Open-Plan Designer Pop-Up Plinths & Boutique Racks -->
            <g>
              <!-- Center-Left Oak Display Table -->
              <rect x="235" y="615" width="175" height="12" fill="#B5895D"/>
              <line x1="252" y1="627" x2="252" y2="705" stroke="#3A3530" stroke-width="3"/>
              <line x1="393" y1="627" x2="393" y2="705" stroke="#3A3530" stroke-width="3"/>
              <!-- Ceramic Vessels / Art Objects -->
              <ellipse cx="290" cy="602" rx="12" ry="15" fill="#E9E3D8" stroke="#A89F92"/>
              <rect x="335" y="592" width="22" height="23" fill="#C2A27A" opacity="0.85"/>
              <!-- Right Minimal Brass Apparel / Design Rack -->
              <path d="M840 700 V560 H990 V700" fill="none" stroke="#9E7E57" stroke-width="3"/>
              <rect x="862" y="566" width="24" height="72" rx="2" fill="#EAE4DA"/>
              <rect x="894" y="566" width="24" height="78" rx="2" fill="#C8B6A0"/>
              <rect x="926" y="566" width="24" height="68" rx="2" fill="#5D564E"/>
              <!-- Center Minimal Gallery Plinth -->
              <rect x="545" y="625" width="90" height="110" fill="#F8F6F1" stroke="#D3CCC0" stroke-width="1.5"/>
              <circle cx="590" cy="603" r="18" fill="#C2A27A" opacity="0.5"/>
            </g>
            <!-- Diagonal Natural Morning Sunbeams Across Floor -->
            <polygon points="0,120 420,230 820,900 160,900" fill="url(#${prefix}-sunbeam)"/>
          </g>

          <!-- =================================================================
               ATMOSPHERE 3: ENCUENTROS PRIVADOS (2400K INTIMATE LOW-KEY)
               ================================================================= -->
          <g class="atmosphere-layer" data-layer="3" style="opacity: 0;">
            <rect width="1200" height="585" fill="url(#${prefix}-wall-priv)"/>
            <rect y="585" width="1200" height="315" fill="url(#${prefix}-floor-priv)"/>
            <!-- Deep Dusk Windows -->
            <rect x="335" y="232" width="64" height="44" fill="#0F131B" stroke="#2D251E" stroke-width="2"/>
            <rect x="490" y="232" width="64" height="44" fill="#0F131B" stroke="#2D251E" stroke-width="2"/>
            <!-- Arch Wall Mass in Moody Shadow -->
            <rect x="635" y="182" width="355" height="403" fill="#231D18"/>
            <!-- Monumental Arch Mirror with Subtle Candle Reflections -->
            <path d="M725 545 V322 A88 88 0 0 1 901 322 V545 Z" fill="#100D0B" stroke="#080706" stroke-width="8"/>
            <ellipse cx="813" cy="528" rx="34" ry="8" fill="#F3B867" opacity="0.22"/>
            <!-- Illuminated Bar Hero Focus -->
            <rect x="200" y="340" width="405" height="245" fill="#130F0C"/>
            <rect x="200" y="485" width="275" height="100" fill="#8C5E35"/>
            <rect x="200" y="491" width="275" height="4" fill="#FFE09C" opacity="0.95"/>
            <rect x="315" y="340" width="290" height="145" fill="#27321D" opacity="0.8"/>
            <!-- Warm Spotlight Focused on Bar & Lounge -->
            <rect width="1200" height="900" fill="url(#${prefix}-bar-spot)"/>
            <!-- Contemporary Low Lounge Sofas & Coffee Table -->
            <g>
              <!-- Left Lounge Sofa -->
              <rect x="210" y="655" width="190" height="58" rx="8" fill="#3B312A" stroke="#C2A27A" stroke-opacity="0.25"/>
              <rect x="210" y="635" width="190" height="28" rx="6" fill="#2E2520"/>
              <!-- Low Marble/Bronze Coffee Table -->
              <ellipse cx="565" cy="705" rx="95" ry="26" fill="#2A231E" stroke="#C2A27A" stroke-opacity="0.45"/>
              <ellipse cx="565" cy="694" rx="4" ry="8" fill="#FFE8B0"/>
              <ellipse cx="582" cy="698" rx="3" ry="6" fill="#FFE8B0"/>
              <!-- Right Lounge Armchairs -->
              <rect x="745" y="658" width="135" height="55" rx="8" fill="#46382E" stroke="#C2A27A" stroke-opacity="0.22"/>
            </g>
          </g>

          <!-- =================================================================
               PERSISTENT ARCHITECTURAL SKELETON (LOCKED CAMERA STRUCTURE)
               Always anchored across all 4 transitions so there are zero jumps.
               ================================================================= -->
          <g pointer-events="none">
            <!-- Industrial Roof Steel Trusses -->
            <rect x="0" y="0" width="1200" height="145" fill="#0F0D0B" opacity="0.88"/>
            <g stroke="#29241E" stroke-width="3" opacity="0.9">
              <line x1="0" y1="65" x2="1200" y2="65"/>
              <line x1="0" y1="115" x2="1200" y2="115"/>
              <line x1="160" y1="0" x2="160" y2="145"/>
              <line x1="410" y1="0" x2="410" y2="145"/>
              <line x1="660" y1="0" x2="660" y2="145"/>
              <line x1="910" y1="0" x2="910" y2="145"/>
              <line x1="1120" y1="0" x2="1120" y2="145"/>
            </g>

            <!-- Structural Steel Side Columns -->
            <rect x="1110" y="145" width="18" height="475" fill="#12100E" opacity="0.85"/>
            <rect x="0" y="145" width="22" height="520" fill="#12100E" opacity="0.65"/>

            <!-- Signature Pendant Fixtures -->
            <g>
              <line x1="292" y1="65" x2="292" y2="185" stroke="#11100F" stroke-width="2"/>
              <path d="M262 204 Q292 174 322 204 Z" fill="#161412"/>
              <line x1="862" y1="65" x2="862" y2="185" stroke="#11100F" stroke-width="2"/>
              <path d="M832 204 Q862 174 892 204 Z" fill="#161412"/>
            </g>

            <!-- Tall Slender Interior Trees Flanking the Walls & Arch -->
            <g fill="#232D1B" opacity="0.82">
              <ellipse cx="90" cy="360" rx="52" ry="185"/>
              <ellipse cx="668" cy="425" rx="26" ry="125"/>
              <ellipse cx="965" cy="420" rx="28" ry="130"/>
              <ellipse cx="1075" cy="395" rx="44" ry="165"/>
            </g>
            <!-- Floor Horizon Subtle Architectural Seam -->
            <line x1="0" y1="585" x2="1200" y2="585" stroke="#000000" stroke-opacity="0.18" stroke-width="1"/>
          </g>
        </svg>`;
      }

      const desktopSceneContainer = document.getElementById('desktop-scene-container');
      const mobileSceneContainer = document.getElementById('mobile-scene-container');
      desktopSceneContainer.innerHTML = buildLockedCameraSVG('desk');
      mobileSceneContainer.innerHTML = buildLockedCameraSVG('mob');

      /* -----------------------------------------------------------------------
         3. INTERSECTION OBSERVER: QUIET REVEALS (PHASES 2, 4, 5)
         ----------------------------------------------------------------------- */
      const revealEls = document.querySelectorAll('.reveal-up, .reveal-curtain');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

      revealEls.forEach((el) => revealObserver.observe(el));

      /* -----------------------------------------------------------------------
         4. SCROLL ENGINE (RAF THROTTLED FOR 60 FPS):
            - Phase 1 Hero Illumination & Crossfade to Bone
            - Adaptive Header Theme (Dark vs Light)
            - Phase 2 Differential Parallax (Desktop Only)
            - Phase 3 Desktop Sticky Pinning Chameleon Scrub
            - Mobile Floating Bar Visibility
         ----------------------------------------------------------------------- */
      const siteHeader = document.getElementById('site-header');
      const heroSection = document.getElementById('fase-1');
      const heroBgLayer = document.getElementById('hero-bg-layer');
      const heroFacadeSvg = document.getElementById('hero-facade-svg');
      const heroGlowMain = document.getElementById('hero-glow-main');
      const heroGlowLeft = document.getElementById('hero-glow-left');
      const heroGlowRight = document.getElementById('hero-glow-right');
      const heroAmbientHalo = document.getElementById('hero-ambient-halo');
      const heroContent = document.getElementById('hero-content');
      const heroScrollCue = document.getElementById('hero-scroll-cue');
      const heroToBoneVeil = document.getElementById('hero-to-bone-veil');

      const parallaxCards = document.querySelectorAll('[data-parallax-card]');

      const desktopTrack = document.getElementById('chameleon-desktop-track');
      const desktopStickyStage = document.getElementById('chameleon-sticky-stage');
      const desktopLayers = desktopSceneContainer.querySelectorAll('.atmosphere-layer');
      const desktopStepBtns = document.querySelectorAll('.desktop-step-btn');
      const desktopScrollBar = document.getElementById('desktop-scroll-bar');

      const desktopStepNum = document.getElementById('desktop-step-num');
      const desktopAtmoTag = document.getElementById('desktop-atmo-tag');
      const desktopAtmoTitle = document.getElementById('desktop-atmo-title');
      const desktopAtmoDesc = document.getElementById('desktop-atmo-desc');
      const desktopAtmoSpecs = document.getElementById('desktop-atmo-specs');
      const desktopSceneKelvin = document.getElementById('desktop-scene-kelvin');
      const desktopSceneCapacity = document.getElementById('desktop-scene-capacity');
      const desktopAtmoCta = document.getElementById('desktop-atmo-cta');

      const mobileFloatingBar = document.getElementById('mobile-floating-bar');
      const phase2El = document.getElementById('fase-2');
      const phase4El = document.getElementById('fase-4');

      let currentDesktopStep = -1;
      let scrollTicking = false;
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function applyDesktopAtmosphereCopy(index) {
        if (currentDesktopStep === index) return;
        currentDesktopStep = index;
        const a = atmospheres[index];

        desktopStickyStage.style.backgroundColor = a.bgColor;
        desktopStickyStage.style.color = a.textColor;

        desktopStepNum.textContent = a.num;
        desktopAtmoTag.textContent = a.tag;
        desktopAtmoTitle.textContent = a.title;
        desktopAtmoDesc.textContent = a.desc;
        desktopSceneKelvin.textContent = a.kelvinDesktop;
        desktopSceneCapacity.textContent = a.capacityDesktop;
        desktopAtmoCta.dataset.targetAtmo = a.quoterValue;

        desktopAtmoSpecs.innerHTML = a.specs.map(s =>
          `<span class="px-3 py-1.5 text-[11px] tracking-[0.12em] uppercase border border-current/20 rounded-sm opacity-80">${s}</span>`
        ).join('');

        desktopStepBtns.forEach((btn, idx) => {
          if (idx === index) {
            btn.classList.add('border-bronze', 'opacity-100');
            btn.classList.remove('border-current/20', 'opacity-45');
          } else {
            btn.classList.remove('border-bronze', 'opacity-100');
            btn.classList.add('border-current/20', 'opacity-45');
          }
        });
      }

      function updateOnScroll() {
        scrollTicking = false;
        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const isDesktop = window.innerWidth >= 1024;

        /* --- A. FASE 1: HERO ILLUMINATION & REVELATION --- */
        const heroScrollable = Math.max(1, heroSection.offsetHeight - vh);
        const heroProgress = Math.min(1, Math.max(0, scrollY / heroScrollable));

        if (!prefersReducedMotion) {
          // Soft ambient lighting intensifies on scroll (0 -> 0.65)
          const lightBoost = Math.min(1, heroProgress / 0.65);
          heroFacadeSvg.style.opacity = (0.52 + lightBoost * 0.42).toFixed(3);
          heroGlowMain.setAttribute('opacity', (0.42 + lightBoost * 0.55).toFixed(3));
          heroGlowLeft.setAttribute('opacity', (0.32 + lightBoost * 0.60).toFixed(3));
          heroGlowRight.setAttribute('opacity', (0.32 + lightBoost * 0.60).toFixed(3));
          heroAmbientHalo.style.opacity = (0.4 + lightBoost * 0.6).toFixed(3);

          // Microscopic cinematic zoom
          const scale = 1 + heroProgress * 0.065;
          heroBgLayer.style.transform = `scale(${scale.toFixed(4)})`;

          // Headline gentle lift & fade
          heroContent.style.transform = `translateY(${(-heroProgress * 44).toFixed(1)}px)`;
          heroContent.style.opacity = Math.max(0, 1 - heroProgress * 1.45).toFixed(3);
          heroScrollCue.style.opacity = Math.max(0, 1 - heroProgress * 3.5).toFixed(3);

          // Smooth obsidian -> bone veil (0.62 -> 1.0)
          const veilProgress = Math.min(1, Math.max(0, (heroProgress - 0.62) / 0.38));
          heroToBoneVeil.style.opacity = veilProgress.toFixed(3);
        }

        /* --- B. PHASE 2: SUBTLE DIFFERENTIAL PARALLAX (DESKTOP ONLY) --- */
        if (isDesktop && !prefersReducedMotion) {
          parallaxCards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < vh * 1.2 && rect.bottom > -vh * 0.2) {
              const speed = parseFloat(card.dataset.speed || '0');
              const centerOffset = (rect.top + rect.height / 2) - (vh / 2);
              card.style.transform = `translateY(${(centerOffset * speed).toFixed(1)}px)`;
            }
          });
        } else {
          parallaxCards.forEach((card) => {
            if (card.style.transform) card.style.transform = '';
          });
        }

        /* --- C. PHASE 3: DESKTOP STICKY PINNING CHAMELEON SCRUB --- */
        let desktopChameleonDark = true;
        if (isDesktop && desktopTrack) {
          const rect = desktopTrack.getBoundingClientRect();
          const trackScrollable = Math.max(1, desktopTrack.offsetHeight - vh);
          const rawProgress = Math.min(1, Math.max(0, -rect.top / trackScrollable));

          // Map 0..1 across 4 atmospheres (0..3 continuous)
          const continuous = rawProgress * 3;
          const activeIdx = Math.min(3, Math.round(continuous));

          // Smooth crossfade weights between adjacent layers (zero sudden jumps)
          desktopLayers.forEach((layer, idx) => {
            const dist = Math.abs(continuous - idx);
            const opacity = Math.max(0, 1 - dist);
            const scale = 1 + (1 - opacity) * 0.025;
            layer.style.opacity = opacity.toFixed(3);
            layer.style.transform = `scale(${scale.toFixed(4)})`;
          });

          desktopScrollBar.style.transform = `scaleX(${(0.25 + rawProgress * 0.75).toFixed(3)})`;
          applyDesktopAtmosphereCopy(activeIdx);
          desktopChameleonDark = (activeIdx === 0 || activeIdx === 3);
        }

        /* --- D. ADAPTIVE HEADER CONTRAST (DARK vs LIGHT SECTIONS) --- */
        const p2Rect = phase2El.getBoundingClientRect();
        const p4Rect = phase4El.getBoundingClientRect();
        const headerY = 48;

        let isLightHeader = false;
        if (p2Rect.top <= headerY && p2Rect.bottom > headerY) {
          isLightHeader = true;
        } else if (p4Rect.top <= headerY) {
          isLightHeader = true;
        } else if (isDesktop && desktopTrack) {
          const dRect = desktopTrack.getBoundingClientRect();
          if (dRect.top <= headerY && dRect.bottom > headerY) {
            isLightHeader = !desktopChameleonDark;
          }
        }

        if (scrollY > 40) {
          siteHeader.classList.add('backdrop-blur-md', 'border-b');
          if (isLightHeader) {
            siteHeader.classList.remove('text-bone', 'bg-obsidian/70', 'border-bone/10');
            siteHeader.classList.add('text-ink', 'bg-bone/85', 'border-ink/10');
          } else {
            siteHeader.classList.remove('text-ink', 'bg-bone/85', 'border-ink/10');
            siteHeader.classList.add('text-bone', 'bg-obsidian/70', 'border-bone/10');
          }
        } else {
          siteHeader.classList.remove('backdrop-blur-md', 'border-b', 'text-ink', 'bg-bone/85', 'bg-obsidian/70', 'border-ink/10', 'border-bone/10');
          siteHeader.classList.add('text-bone');
        }

        /* --- E. MOBILE FLOATING BAR (VISIBLE AFTER HERO, HIDDEN AT QUOTER) --- */
        const phase5Rect = document.getElementById('fase-5').getBoundingClientRect();
        if (scrollY > vh * 0.95 && phase5Rect.top > vh * 0.75) {
          mobileFloatingBar.classList.remove('translate-y-full');
        } else {
          mobileFloatingBar.classList.add('translate-y-full');
        }
      }

      window.addEventListener('scroll', () => {
        if (!scrollTicking) {
          window.requestAnimationFrame(updateOnScroll);
          scrollTicking = true;
        }
      }, { passive: true });
      window.addEventListener('resize', updateOnScroll, { passive: true });

      // Clickable Desktop Atmosphere Rail (Smooth Scroll to Exact Scrub Position)
      desktopStepBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const step = parseInt(btn.dataset.jumpStep, 10);
          const trackTop = desktopTrack.getBoundingClientRect().top + window.scrollY;
          const trackScrollable = desktopTrack.offsetHeight - window.innerHeight;
          const targetY = trackTop + (step / 3) * trackScrollable;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        });
      });

      /* -----------------------------------------------------------------------
         5. PHASE 3 MOBILE INTERACTIVE TABS & TOUCH SWIPE ENGINE
         ----------------------------------------------------------------------- */
      let mobileActiveStep = 0;
      const mobileContainer = document.getElementById('chameleon-mobile');
      const mobileLayers = mobileSceneContainer.querySelectorAll('.atmosphere-layer');
      const mobileTabs = document.querySelectorAll('.mobile-tab-btn');
      const mobileKelvin = document.getElementById('mobile-scene-kelvin');
      const mobileCapacity = document.getElementById('mobile-scene-capacity');
      const mobileTag = document.getElementById('mobile-atmo-tag');
      const mobileTitle = document.getElementById('mobile-atmo-title');
      const mobileDesc = document.getElementById('mobile-atmo-desc');
      const mobileSpecs = document.getElementById('mobile-atmo-specs');
      const mobileAtmoCta = document.getElementById('mobile-atmo-cta');

      function setMobileAtmosphere(index) {
        mobileActiveStep = (index + atmospheres.length) % atmospheres.length;
        const a = atmospheres[mobileActiveStep];

        mobileContainer.style.backgroundColor = a.bgColor;
        mobileContainer.style.color = a.textColor;

        mobileLayers.forEach((layer, idx) => {
          layer.style.opacity = idx === mobileActiveStep ? '1' : '0';
          layer.style.transform = idx === mobileActiveStep ? 'scale(1)' : 'scale(1.03)';
        });

        mobileKelvin.textContent = a.kelvinMobile;
        mobileCapacity.textContent = a.capacityMobile;
        mobileTag.textContent = a.tag;
        mobileTitle.textContent = a.title;
        mobileDesc.textContent = a.desc;
        mobileAtmoCta.dataset.targetAtmo = a.quoterValue;

        mobileSpecs.innerHTML = a.specs.map(s =>
          `<span class="px-3 py-1 text-[10px] tracking-[0.14em] uppercase border border-current/20 rounded-sm opacity-80">${s}</span>`
        ).join('');

        mobileTabs.forEach((tab, idx) => {
          if (idx === mobileActiveStep) {
            tab.classList.add('border-bronze', 'text-bronze', 'opacity-100', 'font-medium');
            tab.classList.remove('border-transparent', 'opacity-60');
            tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            tab.classList.remove('border-bronze', 'text-bronze', 'opacity-100', 'font-medium');
            tab.classList.add('border-transparent', 'opacity-60');
          }
        });
      }

      mobileTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          setMobileAtmosphere(parseInt(tab.dataset.mobileStep, 10));
        });
      });

      document.getElementById('mobile-prev-btn').addEventListener('click', () => {
        setMobileAtmosphere(mobileActiveStep - 1);
      });
      document.getElementById('mobile-next-btn').addEventListener('click', () => {
        setMobileAtmosphere(mobileActiveStep + 1);
      });

      // Touch Swipe Support on Mobile Architectural Stage
      const mobileSwipeStage = document.getElementById('mobile-swipe-stage');
      let touchStartX = 0;
      let touchStartY = 0;

      mobileSwipeStage.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });

      mobileSwipeStage.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].screenX - touchStartX;
        const dy = e.changedTouches[0].screenY - touchStartY;
        if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) setMobileAtmosphere(mobileActiveStep + 1);
          else setMobileAtmosphere(mobileActiveStep - 1);
        }
      }, { passive: true });

      // Initialize Both Desktop & Mobile Atmosphere States
      applyDesktopAtmosphereCopy(0);
      setMobileAtmosphere(0);
      updateOnScroll();

      /* -----------------------------------------------------------------------
         6. PHASE 5: INTERACTIVE EVENT CONCIERGE QUOTER & SYNC WITH PHASE 3
         ----------------------------------------------------------------------- */
      let selectedAtmosphere = 'Bodas & Galas';
      const quoterPills = document.querySelectorAll('.quoter-pill');
      const guestSlider = document.getElementById('guest-slider');
      const guestCountDisplay = document.getElementById('guest-count-display');
      const layoutRecommendation = document.getElementById('layout-recommendation');
      const addonChecks = document.querySelectorAll('.addon-check');
      const estimateRangeEl = document.getElementById('estimate-range');
      const summaryTagText = document.getElementById('summary-tag-text');
      const eventDateInput = document.getElementById('event-date');
      const flexibleDateCheck = document.getElementById('flexible-date');
      const scheduleSelect = document.getElementById('event-schedule');
      const formFeedback = document.getElementById('form-feedback');

      // Base reference rates (transparent inaugural guidance)
      const baseRates = {
        'Bodas & Galas': 22000,
        'Corporativo': 16500,
        'Bazares & Pop-Ups': 14000,
        'Encuentros Privados': 15000
      };

      function selectQuoterAtmosphere(val) {
        selectedAtmosphere = val;
        quoterPills.forEach((pill) => {
          if (pill.dataset.atmoVal === val) {
            pill.classList.add('bg-obsidian', 'text-bone', 'border-obsidian');
            pill.classList.remove('bg-transparent', 'text-ink', 'border-ink/20');
          } else {
            pill.classList.remove('bg-obsidian', 'text-bone', 'border-obsidian');
            pill.classList.add('bg-transparent', 'text-ink', 'border-ink/20');
          }
        });
        updateQuoterEstimate();
      }

      function updateQuoterEstimate() {
        const guests = parseInt(guestSlider.value, 10);
        guestCountDisplay.textContent = guests;

        if (guests <= 70) {
          layoutRecommendation.textContent = 'Formato sugerido: Cena Íntima / Lounge';
        } else if (guests <= 150) {
          layoutRecommendation.textContent = 'Formato sugerido: Banquete Imperial';
        } else {
          layoutRecommendation.textContent = 'Formato sugerido: Gran Gala / Planta Total';
        }

        let addonsTotal = 0;
        addonChecks.forEach((chk) => {
          if (chk.checked) addonsTotal += parseInt(chk.dataset.tier || '0', 10);
        });

        const base = baseRates[selectedAtmosphere] || 18000;
        const guestFactor = Math.max(0, guests - 60) * 55;
        const minEst = Math.round((base + guestFactor + addonsTotal) / 500) * 500;
        const maxEst = Math.round((minEst * 1.24) / 500) * 500;

        estimateRangeEl.textContent = `$${minEst.toLocaleString('es-MX')} – $${maxEst.toLocaleString('es-MX')} MXN`;
        summaryTagText.textContent = `${selectedAtmosphere} · ${guests} inv.`;
      }

      quoterPills.forEach((pill) => {
        pill.addEventListener('click', () => selectQuoterAtmosphere(pill.dataset.atmoVal));
      });
      guestSlider.addEventListener('input', updateQuoterEstimate);
      addonChecks.forEach((chk) => chk.addEventListener('change', updateQuoterEstimate));

      flexibleDateCheck.addEventListener('change', () => {
        eventDateInput.disabled = flexibleDateCheck.checked;
        eventDateInput.classList.toggle('opacity-40', flexibleDateCheck.checked);
      });

      // Contextual Links from Phase 3 -> Pre-select Atmosphere & Smooth Scroll to Quoter
      function jumpToQuoterWithAtmo(atmoVal) {
        selectQuoterAtmosphere(atmoVal || 'Bodas & Galas');
        document.getElementById('fase-5').scrollIntoView({ behavior: 'smooth' });
      }
      desktopAtmoCta.addEventListener('click', () => jumpToQuoterWithAtmo(desktopAtmoCta.dataset.targetAtmo));
      mobileAtmoCta.addEventListener('click', () => jumpToQuoterWithAtmo(mobileAtmoCta.dataset.targetAtmo));

      // Secondary Button: Quick Private Visit Mode
      document.getElementById('schedule-visit-btn').addEventListener('click', () => {
        const visitCheck = Array.from(addonChecks).find(c => c.value.includes('Recorrido'));
        if (visitCheck) visitCheck.checked = true;
        document.getElementById('client-name').focus();
        formFeedback.textContent = 'Modo recorrido privado activado: déjanos tu nombre y contacto para coordinar tu visita al atardecer.';
        formFeedback.className = 'block text-xs px-4 py-3 rounded-sm border border-bronze/40 bg-bronze/10 text-ink';
      });

      // Form Submission (Custom Inline Confirmation, Never alert())
      const conciergeForm = document.getElementById('concierge-form');
      const conciergeConfirmation = document.getElementById('concierge-confirmation');
      const confirmName = document.getElementById('confirm-name');
      const confirmSummaryBox = document.getElementById('confirm-summary-box');
      let lastSummaryPlainText = '';

      conciergeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('client-name').value.trim();
        const contact = document.getElementById('client-contact').value.trim();

        if (!name || !contact) {
          formFeedback.textContent = 'Por favor comparte tu nombre y un medio de contacto (WhatsApp o correo) para responderte.';
          formFeedback.className = 'block text-xs px-4 py-3 rounded-sm border border-red-800/30 bg-red-900/5 text-red-900';
          return;
        }

        formFeedback.classList.add('hidden');
        const guests = guestSlider.value;
        const dateText = flexibleDateCheck.checked ? 'Fecha flexible (Temporada Inaugural)' : (eventDateInput.value || 'Por definir');
        const scheduleText = scheduleSelect.value;
        const selectedAddons = Array.from(addonChecks).filter(c => c.checked).map(c => c.value);
        const estRange = estimateRangeEl.textContent;

        confirmName.textContent = name;
        confirmSummaryBox.innerHTML = `
          <p><strong class="font-medium text-ink">Atmósfera:</strong> ${selectedAtmosphere}</p>
          <p><strong class="font-medium text-ink">Aforo estimado:</strong> ${guests} invitados</p>
          <p><strong class="font-medium text-ink">Fecha & Horario:</strong> ${dateText} · ${scheduleText}</p>
          <p><strong class="font-medium text-ink">Complementos:</strong> ${selectedAddons.length ? selectedAddons.join(', ') : 'Renta base exclusiva'}</p>
          <p><strong class="font-medium text-ink">Referencia estimada:</strong> ${estRange}</p>
          <p><strong class="font-medium text-ink">Contacto:</strong> ${contact}</p>
        `;

        lastSummaryPlainText = `SOLICITUD MAGNOLIA CHILPANCINGO\nAnfitrión: ${name}\nContacto: ${contact}\nAtmósfera: ${selectedAtmosphere}\nAforo: ${guests} invitados\nFecha: ${dateText} (${scheduleText})\nComplementos: ${selectedAddons.join(', ') || 'Renta base'}\nEstimado referencial: ${estRange}`;

        conciergeForm.classList.add('hidden');
        conciergeConfirmation.classList.remove('hidden');
      });

      // Clipboard Copy via Safe Fallback (document.execCommand('copy'))
      document.getElementById('copy-summary-btn').addEventListener('click', () => {
        const tempArea = document.createElement('textarea');
        tempArea.value = lastSummaryPlainText;
        tempArea.style.position = 'fixed';
        tempArea.style.opacity = '0';
        document.body.appendChild(tempArea);
        tempArea.select();
        try {
          document.execCommand('copy');
          const toast = document.getElementById('copy-toast');
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 3000);
        } catch (err) {
          // Silent fallback
        }
        document.body.removeChild(tempArea);
      });

      document.getElementById('reset-form-btn').addEventListener('click', () => {
        conciergeConfirmation.classList.add('hidden');
        conciergeForm.classList.remove('hidden');
      });

      updateQuoterEstimate();

      /* -----------------------------------------------------------------------
         7. PHASE 5: EDITORIAL FAQ ACCORDION
         ----------------------------------------------------------------------- */
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach((item) => {
        const btn = item.querySelector('.faq-trigger');
        btn.addEventListener('click', () => {
          const isOpen = item.getAttribute('data-open') === 'true';
          // Close others for a serene single-open editorial rhythm
          faqItems.forEach((other) => {
            other.setAttribute('data-open', 'false');
            other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            item.setAttribute('data-open', 'true');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
    });
