# SEO — Checklist y estado de RIZEN

Sitio: https://www.rizen.cl · Repo: `nicostrak/rizen-landingpage` (GitHub Pages + Cloudflare DNS)

---

## Datos del negocio (NAP) — usar EXACTAMENTE igual en todos lados

| Campo | Valor |
|---|---|
| Razón social | `RIZEN SpA` |
| Nombre comercial | `RIZEN - Contabilidad e Impuestos` |
| Teléfono / WhatsApp | `+56 9 6258 9727` (`+56962589727`) |
| Correo | `contacto@rizen.cl` |
| Instagram | `https://www.instagram.com/rizen.contadores/` |
| Sitio web | `https://www.rizen.cl/` |
| Cobertura | Servicio 100% online en todo Chile |
| Horario | Lunes a viernes, 9:00 a 18:00 hrs |
| Dirección | No se publica (negocio de área de servicio) |

> Cualquier directorio, ficha o mención debe replicar estos datos **carácter por carácter**. Si un directorio no permite corregir el NAP, es mejor no aparecer ahí.

---

## Estado de lo implementado en el sitio

### Fase 1 — SEO técnico ✅
- `lang="es-CL"`, canonical, `meta robots`, `theme-color`
- Open Graph + Twitter Card + imagen OG 1200×630 (`/img/og-rizen.jpg`)
- JSON-LD: `Organization`, `WebSite`, `AccountingService`, `Service` ×6, `FAQPage`
- `robots.txt`, `sitemap.xml`, `404.html`, `site.webmanifest`
- Favicons completos (`favicon.ico` + 16/32/48/192 + apple-touch-icon)
- `width`/`height` en imágenes (evita CLS)
- Copy de la home optimizado (title, description, H1, H2)

### Fase 2 — Indexación y medición 🟡
- ✅ Cloudflare Web Analytics instalado (sin cookies, sin banner)
- ✅ Verificación de dominio en Google Search Console (TXT en Cloudflare)
- ✅ `robots.txt` incluye `Sitemap: https://www.rizen.cl/sitemap.xml` → Google lo descubre solo
- 🔲 Enviar el sitemap manualmente en GSC (opcional pero recomendado, acelera la indexación)

### Fase 3 — Páginas por keyword ✅
| URL | Keyword objetivo |
|---|---|
| `/contabilidad-para-pymes/` | contabilidad / contador para pymes Chile |
| `/constitucion-de-empresa/` | constitución de empresa Chile, SpA, EIRL |
| `/regularizar-deudas-sii/` | F29 atrasados, giros impagos, multas SII |
| `/contador-para-emprendedores/` | contador para emprendedores |
| `/remuneraciones/` | remuneraciones y liquidaciones |
| `/asesoria-tributaria/` | asesoría y planificación tributaria |
| `/blog/` | índice del blog |
| `/blog/como-pagar-f29-chile/` | cómo pagar el F29 |
| `/blog/multas-y-giros-impagos-sii/` | multas y giros del SII |
| `/blog/cuando-necesito-un-contador/` | cuándo contratar contador |
| `/blog/cambio-de-contador/` | cambio de contador |

Cada página: title y description únicos, canonical, un H1, JSON-LD propio, breadcrumbs, FAQ, CTA y enlazado interno.

### Fase 4 — SEO local ✅ (en el sitio)
- Página `/contacto/` con el NAP completo en texto visible
- Schema `ContactPage` + `AccountingService` con `openingHoursSpecification` y `sameAs`
- Enlaces `tel:` clickeables y bloque NAP en el footer de las 13 páginas
- `sitemap.xml` con 13 URLs

---

## Pendiente — acciones externas (requieren cuentas propias)

### 1. Google Business Profile ⭐ prioridad máxima
Ir a https://business.google.com → Agregar empresa.
- Tipo: **negocio de área de servicio** (marcar "no mostrar dirección al público")
- Áreas servidas: Chile
- Nombre: `RIZEN - Contabilidad e Impuestos` — **igual, sin agregar palabras clave** (agregarlas puede suspender el perfil)
- Categoría principal: **Servicio de contabilidad**
- Categorías secundarias: Asesoría fiscal · Servicio de nóminas
- Sitio web: `https://www.rizen.cl/`
- Teléfono: `+56 9 6258 9727`
- Horario: Lun–Vie 9:00–18:00
- Descripción: "Contadores para pymes y empresas en Chile: contabilidad mensual, impuestos, F29 y remuneraciones al día. Primera asesoría sin costo y 100% online."
- Servicios: Constitución de empresas · Contabilidad mensual · Impuestos y F29 · Remuneraciones y liquidaciones · Asesoría legal · Asesoría tributaria
- Atributo: atención online / en línea
- Verificación: normalmente **por video** en negocios de área de servicio
- **Reseñas:** pedirlas a clientes reales. Es el factor local que más mueve la aguja en el mapa.

### 2. Bing Places y Apple
- https://www.bingplaces.com — permite importar directo desde Google Business Profile
- https://businessconnect.apple.com — ficha para Apple Maps
- Waze: https://www.waze.com/venue (opcional)

### 3. Directorios chilenos (NAP idéntico)
Páginas Amarillas (`amarillas.cl`) · Cámara de Comercio de Santiago · Empresite · Guía Empresas · Yapo · directorios gremiales de contadores.
Calidad antes que cantidad: 8 fichas correctas valen más que 40 incorrectas.

### 4. Backlinks (los que realmente sirven)
- Cámaras de comercio y asociaciones gremiales (membresía → enlace del socio)
- Páginas de partners de tu software contable
- Prensa de pymes y emprendimiento (notas de experto, columnas)
- Podcasts de emprendimiento
- **Nunca** comprar enlaces ni usar granjas/PBN: es la vía más rápida a una penalización manual.

### 5. Contenido continuo
- Publicar 2 a 4 artículos al mes en `/blog/`
- Actualizar `<lastmod>` en `sitemap.xml` al editar páginas
- Revisar en GSC qué consultas ya traen impresiones y escribir sobre esas

### 6. Monitoreo (cada 2–4 semanas)
- Google Search Console → *Páginas* (indexación) y *Rendimiento* (consultas, CTR, posición)
- Cloudflare Web Analytics → visitas y páginas más vistas
- Revisar que el NAP siga idéntico en todos los directorios

---

## Notas técnicas

### HTTPS
El certificado de GitHub Pages para `www.rizen.cl` aún no se había emitido al cierre de esta etapa (límite de GitHub: hasta 24 h). Diagnóstico descartado como error de configuración:
- Sin registros CAA que bloqueen a Let's Encrypt
- Registros A/AAAA (apex) y CNAME (www) correctos
- Apex redirige 301 → www
- Ruta ACME responde correctamente

**Acción:** cuando el certificado esté listo, activar *Enforce HTTPS* en Settings → Pages (o vía API).

### Sobre las reseñas
**No** se implementó schema `Review`/`AggregateRating`. Los testimonios del sitio son anónimos, y marcarlos como reseñas no verificables viola las políticas de Google (riesgo de acción manual). Cuando existan reseñas reales en Google Business Profile, se puede implementar correctamente.

### Cómo se mantiene el sitio
El HTML es estático puro, sin build. Al crear o editar páginas, recordar:
- Rutas **absolutas** desde la raíz (`/css/styles.css`, `/img/logo.png`) porque las páginas viven a distinta profundidad
- Mismo `<head>` SEO, footer y schema en todas las páginas
- Añadir la URL nueva a `sitemap.xml`
- Verificar: 1 solo `<h1>`, canonical apuntando a la URL real, JSON-LD válido

### Expectativas realistas
Indexación: días. Primeras mejoras: 4–12 semanas. Competir por términos genéricos ("contador pymes Chile"): 6–12 meses, según competencia local y autoridad de dominio. Ningún proveedor serio puede garantizar posiciones.
