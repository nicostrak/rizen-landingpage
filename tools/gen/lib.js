const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const SITE = 'https://www.rizen.cl';
const WA = 'https://wa.me/56962589727?text=';
const WA_CTA = WA + 'Hola%20RIZEN%2C%20quiero%20mi%20asesor%C3%ADa%20sin%20costo';
const BEACON = '<script defer src=\'https://static.cloudflareinsights.com/beacon.min.js\' data-cf-beacon=\'{"token": "3566a8b93d9f45409938aaf523a05b63"}\'></script>';
const TODAY = '2026-09-28';
const TEL = '+56962589727';
const TEL_HUMAN = '+56 9 6258 9727';
const INSTAGRAM = 'https://www.instagram.com/rizen.contadores/';
const EMAIL = 'contacto@rizen.cl';

const WA_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
const CHEVRON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';

function crumbs(items) {
  return '<nav aria-label="Ruta de navegación"><ol class="breadcrumb">' +
    items.map((it, i) => it.href
      ? `<li><a href="${it.href}">${it.label}</a></li>`
      : `<li><span aria-current="page">${it.label}</span></li>`).join('') +
    '</ol></nav>';
}

function head(p) {
  return `<!DOCTYPE html>
<html lang="es-CL">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${p.title}</title>
  <meta name="description" content="${p.desc}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="RIZEN - Contabilidad e Impuestos">
  <meta name="theme-color" content="#006780">
  <link rel="canonical" href="${SITE}${p.url}">

  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
  <link rel="icon" type="image/png" href="/favicon-192x192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">

  <meta property="og:type" content="${p.ogType || 'website'}">
  <meta property="og:site_name" content="RIZEN - Contabilidad e Impuestos">
  <meta property="og:locale" content="es_CL">
  <meta property="og:url" content="${SITE}${p.url}">
  <meta property="og:title" content="${p.title}">
  <meta property="og:description" content="${p.desc}">
  <meta property="og:image" content="${SITE}/img/og-rizen.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="RIZEN - Contabilidad e Impuestos, asesoría contable y tributaria en Chile">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${p.title}">
  <meta name="twitter:description" content="${p.desc}">
  <meta name="twitter:image" content="${SITE}/img/og-rizen.jpg">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/styles.css">
  <link rel="stylesheet" href="/css/pages.css">
  <script src="/js/main.js" defer></script>
  ${BEACON}
</head>
<body>

  <div class="progress-bar"></div>

  <!-- HEADER -->
  <header class="header">
    <div class="container">
      <a href="/" class="header__logo" aria-label="RIZEN - Inicio">
        <img src="/img/logo.png" width="2521" height="900" alt="RIZEN, contabilidad y asesoría tributaria para empresas en Chile">
      </a>
      <nav class="header__nav" aria-label="Navegación principal">
        <a href="/#servicios">Servicios</a>
        <a href="/#emprendedores">Emprendedores</a>
        <a href="/#empresas">Empresas</a>
        <a href="/#nosotros">Nosotros</a>
        <a href="/blog/">Blog</a>
      </nav>
      <a href="${WA_CTA}" class="header__cta" target="_blank" rel="noopener">
        ${WA_ICON}
        <span>Hablar por WhatsApp</span>
      </a>
      <button class="header__hamburger" aria-label="Abrir menú">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </header>

  <!-- MOBILE DRAWER -->
  <div class="drawer__overlay"></div>
  <aside class="drawer" aria-label="Menú móvil">
    <div class="drawer__header">
      <img src="/img/logo.png" width="2521" height="900" alt="RIZEN - Contabilidad e Impuestos">
      <button class="drawer__close" aria-label="Cerrar menú">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <nav class="drawer__nav">
      <a href="/#servicios">Servicios</a>
      <a href="/#emprendedores">Emprendedores</a>
      <a href="/#empresas">Empresas</a>
      <a href="/#nosotros">Nosotros</a>
      <a href="/#precios">Precios</a>
      <a href="/blog/">Blog</a>
      <a href="/contabilidad-para-pymes/">Contabilidad para pymes</a>
      <a href="/constitucion-de-empresa/">Constitución de empresa</a>
      <a href="/regularizar-deudas-sii/">Regularizar deudas SII</a>
      <a href="/contacto/">Contacto</a>
      <a href="${WA_CTA}" class="btn btn--whatsapp" target="_blank" rel="noopener">Quiero mi asesoría gratis</a>
    </nav>
  </aside>
`;
}

function footer() {
  return `
  <!-- FOOTER -->
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <img src="/img/logo.png" width="2521" height="900" alt="RIZEN, contabilidad y asesoría tributaria para empresas en Chile" loading="lazy">
          <p>Contabilidad, impuestos y remuneraciones al día, gestionados por profesionales con +10 años de experiencia. Atención en todo Chile.</p>
          <p class="footer__nap"><strong>RIZEN SpA</strong><br>Servicio 100% online en todo Chile<br>Lunes a viernes, 9:00 a 18:00 hrs</p>
        </div>
        <div>
          <h4 class="footer__col-title">Servicios</h4>
          <ul class="footer__links">
            <li><a href="/constitucion-de-empresa/">Constitución de empresas</a></li>
            <li><a href="/contabilidad-para-pymes/">Contabilidad mensual</a></li>
            <li><a href="/asesoria-tributaria/">Impuestos y F29</a></li>
            <li><a href="/remuneraciones/">Remuneraciones</a></li>
            <li><a href="/asesoria-tributaria/">Asesoría tributaria</a></li>
            <li><a href="/regularizar-deudas-sii/">Regularizar deudas SII</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__col-title">Empresa</h4>
          <ul class="footer__links">
            <li><a href="/#nosotros">Nosotros</a></li>
            <li><a href="/contador-para-emprendedores/">Emprendedores</a></li>
            <li><a href="/contabilidad-para-pymes/">Pymes</a></li>
            <li><a href="/#precios">Precios</a></li>
            <li><a href="/blog/">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__col-title">Contacto</h4>
          <ul class="footer__links">
            <li><a href="https://wa.me/56962589727?text=Hola%20RIZEN%2C%20quiero%20una%20asesor%C3%ADa" target="_blank" rel="noopener">WhatsApp ${TEL_HUMAN}</a></li>
            <li><a href="tel:${TEL}">Llamar ${TEL_HUMAN}</a></li>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li><a href="${INSTAGRAM}" target="_blank" rel="noopener">Instagram @rizen.contadores</a></li>
            <li><a href="/contacto/">Página de contacto</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span data-year>2026</span> RIZEN Contabilidad e Impuestos. Todos los derechos reservados.</span>
        <span>Hecho en Chile</span>
      </div>
    </div>
  </footer>

  <!-- FLOATING WHATSAPP (desktop) -->
  <a href="${WA_CTA}" class="float-wa" aria-label="Hablar por WhatsApp" target="_blank" rel="noopener">
    ${WA_ICON}
  </a>

  <!-- MOBILE WHATSAPP BAR -->
  <div class="wa-bar">
    <a href="${WA_CTA}" target="_blank" rel="noopener">
      ${WA_ICON}
      Quiero mi asesoría gratis
    </a>
  </div>

  <script type="application/ld+json">
${JSON.stringify(p2ld, null, 2)}
  </script>

</body>
</html>
`;
}

let p2ld = null;

function faqBlock(items) {
  return `<section class="page-section page-section--alt">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Preguntas frecuentes</span>
        <h2>Preguntas frecuentes</h2>
      </div>
      <div class="faq__list">
${items.map(([q, a]) => `        <div class="faq-item" data-reveal>
          <button class="faq-item__question" type="button">
            ${q}
            ${CHEVRON}
          </button>
          <div class="faq-item__answer">
            <div class="faq-item__answer-inner">${a}</div>
          </div>
        </div>`).join('\n')}
      </div>
    </div>
  </section>`;
}

function ctaBand(title, text, ctaLabel) {
  return `<section class="cta-band">
    <div class="container">
      <h2>${title}</h2>
      <p>${text}</p>
      <a class="btn--light" href="${WA_CTA}" target="_blank" rel="noopener">
        ${WA_ICON} ${ctaLabel || 'Quiero mi asesoría gratis'}
      </a>
    </div>
  </section>`;
}

function relatedBlock(items) {
  return `<section class="page-section">
    <div class="container">
      <h2 style="font-family:var(--font-display);font-size:clamp(22px,2.6vw,28px);font-weight:700;letter-spacing:-.015em;">Sigue explorando</h2>
      <div class="related-grid">
${items.map(([href, title, text]) => `        <a class="related-card" href="${href}">
          <strong>${title}</strong>
          <span>${text}</span>
        </a>`).join('\n')}
      </div>
    </div>
  </section>`;
}

function faqLd(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({
      '@type': 'Question',
      name: q.replace(/<[^>]+>/g, '').trim(),
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '').trim() }
    }))
  };
}

function crumbLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: it.href ? SITE + it.href.replace(/^\/$/, '/') : SITE + CUR_URL
    }))
  };
}

let CUR_URL = '';

function writePage(p) {
  CUR_URL = p.url;
  const bc = p.breadcrumb;
  const graph = [
    { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'RIZEN', legalName: 'RIZEN SpA', alternateName: 'RIZEN Contabilidad e Impuestos', url: `${SITE}/`, logo: { '@type': 'ImageObject', '@id': `${SITE}/#logo`, url: `${SITE}/img/logo.png`, width: 2521, height: 900 }, email: EMAIL, telephone: TEL, sameAs: [INSTAGRAM] },
    { '@type': 'AccountingService', '@id': `${SITE}/#business`, name: 'RIZEN - Contabilidad e Impuestos', url: `${SITE}/`, image: `${SITE}/img/og-rizen.jpg`, email: EMAIL, telephone: TEL, sameAs: [INSTAGRAM], priceRange: 'Desde 2 UF mensuales', currenciesAccepted: 'CLP', areaServed: { '@type': 'Country', name: 'Chile' }, address: { '@type': 'PostalAddress', addressLocality: 'Santiago', addressCountry: 'CL' }, openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:00' } }
  ];
  if (bc) graph.push(crumbLd(bc));
  if (p.service) graph.push(p.service);
  if (p.ldExtra) graph.push(...p.ldExtra);
  if (p.faq && p.faq.length) graph.push(faqLd(p.faq));

  p2ld = { '@context': 'https://schema.org', '@graph': graph };

  const dir = path.join(ROOT, p.url.replace(/^\//, ''), p.url.endsWith('/') && p.url !== '/' ? '' : '');
  const outDir = path.join(ROOT, p.url.replace(/^\//, '').replace(/\/$/, ''));
  fs.mkdirSync(outDir, { recursive: true });

  const html = head(p) + `
  <main>
    <section class="subpage-hero">
      <div class="container">
        ${bc ? crumbs(bc) : ''}
        ${p.postMeta || ''}
        <h1>${p.h1}</h1>
        <p class="subpage-hero__lead">${p.lead}</p>
        <div class="subpage-hero__actions">
          <a href="${WA_CTA}" class="btn btn--whatsapp btn--lg" target="_blank" rel="noopener">${WA_ICON} Quiero mi asesoría gratis</a>
          <a href="/#precios" class="btn btn--outline btn--lg">Ver precios</a>
        </div>
      </div>
    </section>

${p.body}

    ${p.faq && p.faq.length ? faqBlock(p.faq) : ''}
  </main>

${p.related ? relatedBlock(p.related) : ''}
${p.cta || ''}
` + footer();

  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
  console.log('wrote ' + p.url);
}

module.exports = { writePage, ctaBand, SITE, WA, WA_CTA, TODAY, WA_ICON, CHEVRON, faqBlock, relatedBlock, TEL, TEL_HUMAN, INSTAGRAM, EMAIL };
