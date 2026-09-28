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
- ✅ HTTPS activo con certificado de Let's Encrypt y *Enforce HTTPS*
- 🔲 Enviar el sitemap manualmente en GSC y pedir indexación de las páginas clave → **Paso 1 abajo**

### Fase 3 — Páginas por keyword ✅
| URL | Keyword objetivo |
|---|---|
| `/contabilidad-para-pymes/` | contabilidad / contador para pymes Chile |
| `/constitucion-de-empresa/` | constitución de empresa Chile, SpA, EIRL |
| `/regularizar-deudas-sii/` | F29 atrasados, giros impagos, multas SII |
| `/contador-para-emprendedores/` | contador para emprendedores |
| `/remuneraciones/` | remuneraciones y liquidaciones |
| `/asesoria-tributaria/` | asesoría y planificación tributaria |
| `/contacto/` | contacto, NAP, SEO local |
| `/blog/` | índice del blog |
| `/blog/como-pagar-f29-chile/` | cómo pagar el F29 |
| `/blog/multas-y-giros-impagos-sii/` | multas y giros del SII |
| `/blog/cuando-necesito-un-contador/` | cuándo contratar contador |
| `/blog/cambio-de-contador/` | cambio de contador |
| `/blog/boleta-de-honorarios-2026/` | retención boletas de honorarios 15,25% |
| `/blog/que-es-el-ppm/` | qué es el PPM / pagos provisionales |
| `/blog/como-calcular-finiquito/` | finiquito, feriado proporcional, indemnización |
| `/blog/regimen-pro-pyme-2026/` | régimen Pro Pyme, 14 D N°3 vs N°8 |
| `/blog/como-iniciar-actividades-sii/` | inicio de actividades en el SII |
| `/blog/patente-municipal/` | patente municipal, costo y trámite |
| `/blog/factura-electronica/` | factura electrónica, obligatoriedad |
| `/blog/termino-de-giro/` | término de giro, cerrar empresa |
| `/blog/iva-credito-fiscal/` | IVA, débito y crédito fiscal |
| `/blog/renta-presunta-2026/` | renta presunta, requisitos y límites |
| `/blog/operacion-renta-2026/` | Operación Renta / F22 |
| `/blog/contratar-primer-trabajador/` | contratar primer trabajador |

Cada página: title y description únicos, canonical, un H1, JSON-LD propio, breadcrumbs, FAQ, CTA y enlazado interno.

### Fase 4 — SEO local ✅ (en el sitio)
- Página `/contacto/` con el NAP completo en texto visible
- Schema `ContactPage` + `AccountingService` con `openingHoursSpecification` y `sameAs`
- Enlaces `tel:` clickeables y bloque NAP en el footer de las **25 páginas**
- `sitemap.xml` con **25 URLs**

### Mantenimiento del sitio
- Generador en `tools/gen/` → `node tools/gen/build.js` regenera las 24 páginas internas.
  El HTML generado **se commitea**: GitHub Pages no compila nada.
- Artículos nuevos del blog: crear un módulo en `tools/gen/` y sumarlo a los
  `POSTS.push(...)` de `tools/gen/blog.js`. El índice se genera solo.
- **Valores volátiles**: el SIS, los aportes de la Ley 21.735 y el ingreso mínimo cambian
  durante el año. Al editar `/blog/contratar-primer-trabajador/` hay que revisarlos primero
  (hay un aviso al inicio de `tools/gen/blog-impuestos.js`).

---

## Paso a paso — lo que falta hacer a mano

| # | Tarea | Tiempo | Impacto | Requiere |
|---|---|---|---|---|
| 1 | Google Search Console: enviar sitemap | 5 min | Alto (indexación) | Cuenta Google |
| 2 | Google Business Profile | 45 min + espera | **Máximo** (búsquedas locales) | Cuenta Google + verificación |
| 3 | Bing Places | 10 min | Medio | Cuenta Microsoft |
| 4 | Apple Business Connect | 10 min | Bajo-medio | Apple ID |
| 5 | Waze | 5 min | Bajo | — |
| 6 | Directorios chilenos | 2 h | Medio (NAP + enlaces) | Fichas por sitio |
| 7 | Reseñas reales | Continuo | **Máximo** (local) | Clientes reales |
| 8 | Backlinks | Continuo | Alto (a largo plazo) | Gestión directa |
| 9 | Monitoreo | 15 min / 2 semanas | — | — |

---

### PASO 1 — Google Search Console: enviar el sitemap

1. Entra a **https://search.google.com/search-console** con la cuenta de Google con la que verificaste el dominio.
2. En el selector superior elige la propiedad **Dominio: rizen.cl**.
3. Menú izquierdo → **Sitemaps**.
4. En "Añadir un sitemap nuevo" escribe **solo `sitemap.xml`** y presiona **Enviar**.
   - ⚠️ **NO pegues la URL completa.** En una propiedad de tipo Dominio, Search Console
     ya antepone el dominio. Si pegas `https://www.rizen.cl/sitemap.xml`, queda
     `https://www.rizen.cl/https://www.rizen.cl/sitemap.xml`, que devuelve **404** y
     produce el error *"No se ha podido leer el sitemap"* con 0 páginas descubiertas.
   - El campo debe terminar mostrando exactamente `https://www.rizen.cl/sitemap.xml`.
5. Debe aparecer con estado **Correcto** y 25 URLs detectadas. (Puede tardar de horas hasta 48 h en procesar.)
6. **Pide indexación de las páginas clave** (acelera mucho):
   - Arriba, en la barra "Inspeccionar cualquier URL", pega una URL, espera el análisis y presiona **Solicitar indexación**.
   - Hazlo con: `https://www.rizen.cl/`, `/contabilidad-para-pymes/`, `/constitucion-de-empresa/`, `/regularizar-deudas-sii/`, `/contacto/` y `/blog/`.
   - Hay un límite diario de solicitudes; si te frena, continúa al día siguiente.
7. **Revisa en 7 y 30 días**: *Páginas* (cuántas están indexadas) y *Rendimiento* (consultas, impresiones, CTR).
   - En *Rendimiento* → pestaña **Consultas** verás por qué búsquedas ya apareces. Esas son las que conviene cubrir con más contenido.

#### Si aparece "No se ha podido leer el sitemap"

Verificado que el sitemap está correcto (200, `application/xml`, XML válido, 25 URLs,
Googlebot ve lo mismo, `robots.txt` lo declara), las causas posibles son dos:

1. **La URL quedó mal registrada en GSC** (lo más frecuente). Revisa qué URL aparece en
   la lista de sitemaps. Si tiene el dominio duplicado, bórrala (⋮ → *Quitar sitemap*) y
   vuelve a agregarla escribiendo **solo `sitemap.xml`**.
2. **Google lo leyó en un momento malo.** El sitio pasó por estados de despliegue con
   error durante las primeras horas. Google reintenta solo; si a las 48 h sigue igual,
   vuelve a enviarlo.

Para comprobar que Google puede leerlo, usa **Inspeccionar cualquier URL** con
`https://www.rizen.cl/sitemap.xml`.

> **Tranquilidad:** aunque la carga manual falle, `robots.txt` ya declara
> `Sitemap: https://www.rizen.cl/sitemap.xml`, así que Google lo descubre igual.
> La indexación no está bloqueada por esto.

---

### PASO 2 — Google Business Profile ⭐ el más importante

Es lo que te hace aparecer en Google Maps y en el bloque local de las búsquedas. Es también lo que más tarda por la verificación, así que parte por aquí.

1. Ve a **https://business.google.com** e inicia sesión con tu cuenta de Google.
2. Clic en **Añadir empresa**.
3. **Nombre de la empresa:** `RIZEN - Contabilidad e Impuestos`
   - Debe ser **exactamente** así. **No agregues palabras clave** ("contabilidad Santiago", etc.): eso puede suspender el perfil.
4. **Categoría principal:** `Servicio de contabilidad`.
   - Secundarias: `Asesoría fiscal`, `Servicio de nóminas`.
5. Cuando pregunte *"¿Quieres añadir una ubicación que los clientes puedan visitar?"* → elige **No**.
   - Así queda como **negocio de área de servicio** y no se publica dirección.
6. **Áreas de servicio:** agrega **Chile** (o las regiones/comunas donde quieras aparecer).
7. **Teléfono:** `+56 9 6258 9727`
   **Sitio web:** `https://www.rizen.cl/`
8. **Verificación:** Google te ofrecerá un método (en negocios de área de servicio suele ser **video**).
   - Para el video: ten a mano tu cédula, el RUT de la empresa y algún documento que muestre el nombre (una factura, un certificado del SII, tu escritorio de trabajo). Graba un video continuo mostrando eso.
   - Alternativa: verificación por **postal** (llega una tarjeta con un código a una dirección; más lento).
9. Una vez verificado, **completa la ficha** (esto es lo que realmente posiciona):
   - **Horario:** Lunes a viernes, 9:00 a 18:00.
   - **Descripción:** `Contadores para pymes y empresas en Chile: contabilidad mensual, impuestos, F29 y remuneraciones al día. Primera asesoría sin costo y 100% online.`
   - **Servicios** (agrégalos uno por uno): Constitución de empresas · Contabilidad mensual · Impuestos y F29 · Remuneraciones y liquidaciones · Asesoría legal · Asesoría tributaria.
   - **Atributo:** activa "Atiende online" / "Atención en línea".
   - **Fotos:** sube el logo y 3-5 imágenes (puedes reutilizar las del sitio).
10. **Consigue el enlace corto de reseñas**: en la ficha → *Pedir reseñas*. Guárdalo, lo usarás en el Paso 7.
11. Publica novedades cada 1-2 semanas (una recomendación tributaria breve). Mantiene la ficha activa.

---

### PASO 3 — Bing Places (10 minutos)

1. Entra a **https://www.bingplaces.com** e inicia sesión con una cuenta Microsoft.
2. Elige **Importar desde Google Business Profile**.
3. Autoriza la conexión y selecciona la ficha de RIZEN.
4. Revisa que los datos hayan llegado idénticos y guarda.
5. Si no aparece la importación, agrega la empresa a mano con los mismos datos del NAP.

### PASO 4 — Apple Business Connect (10 minutos)

1. Entra a **https://businessconnect.apple.com** con tu Apple ID.
2. **Añadir ubicación** → busca "RIZEN" (si ya existe alguna ficha previa, reclámala).
3. Completa con los mismos datos del NAP. Marca que no se muestra dirección si te da la opción.
4. Agrega el logo y el enlace al sitio.

### PASO 5 — Waze (5 minutos, opcional)

1. Entra a **https://www.waze.com/venue**.
2. Busca si RIZEN ya existe; si no, créalo con el nombre y el sitio web.

---

### PASO 6 — Directorios chilenos

Regla única: **el NAP tiene que ser idéntico carácter por carácter** al del sitio. Si un directorio no te deja corregir el nombre, el teléfono o el sitio web, es mejor no aparecer ahí: la inconsistencia resta.

Orden sugerido (de mayor a menor valor):

1. **Páginas Amarillas** — `amarillas.cl`
2. **Cámara de Comercio de Santiago** — si te asocias, obtienes enlace desde su directorio de socios
3. **Empresite Chile** — `empresite.eleconomistaamerica.cl`
4. **Guía Empresas** — `guiaempresas.cl`
5. **Yapo** — `yapo.cl`
6. **Directorios sectoriales** de contadores y asesorías tributarias

Calidad antes que cantidad: **8 fichas correctas valen más que 40 incorrectas**.

---

### PASO 7 — Reseñas (lo que más mueve la aguja local)

1. Pide la reseña **por el enlace corto de Google** (Paso 2, punto 10), no por captura de pantalla.
2. Pídelas en el mejor momento: justo después de resolver algo concreto para el cliente (una regularización, una constitución, una declaración al día).
3. Pide reseñas a **clientes reales** y con nombre. Nunca las inventes ni las compres: Google las detecta y sanciona el perfil.
4. Responde **todas** las reseñas, incluidas las negativas. Una respuesta profesional a una crítica mejora la percepción más que diez reseñas de 5 estrellas.
5. Meta razonable: 1 a 2 reseñas nuevas al mes.

> Cuando tengas reseñas reales y verificables, avísame: ahí sí se puede implementar el schema `Review`/`AggregateRating` correctamente (ver *Sobre las reseñas* más abajo).

---

### PASO 8 — Backlinks (a largo plazo)

Los que realmente funcionan y no exponen a sanciones:

1. **Membresías** en cámaras de comercio y asociaciones gremiales → enlace desde la página de socios.
2. **Partners de software contable**: si usas una plataforma, revisa si tiene directorio de contadores asociados.
3. **Prensa de pymes**: ofrece una columna o nota de experto sobre temas tributarios (tienes 16 artículos que sirven de base).
4. **Podcasts de emprendimiento**: participa como invitado.
5. **Nunca** compres enlaces ni uses granjas/PBN: es la vía más rápida a una penalización manual difícil de revertir.

---

### PASO 9 — Rutina de monitoreo (cada 2-4 semanas)

1. **Search Console → Rendimiento:** anota las consultas con impresiones. Si apareces para algo que no cubres bien, escribe un artículo sobre ese tema.
2. **Search Console → Páginas:** confirma cuántas de las 25 están indexadas. Si alguna no lo está, inspecciónala y solicita indexación.
3. **Cloudflare Web Analytics:** revisa visitas y páginas más vistas.
4. **Google Business Profile:** métricas de la ficha (búsquedas, llamadas, clics al sitio) y reseñas nuevas.
5. **Busca `rizen.cl` en Google** y verifica que no aparezca nada raro ni datos antiguos en otros directorios.

---

### Datos para copiar y pegar

```
Nombre de la empresa : RIZEN - Contabilidad e Impuestos
Razón social         : RIZEN SpA
Categoría            : Servicio de contabilidad
Teléfono / WhatsApp  : +56 9 6258 9727
Correo               : contacto@rizen.cl
Sitio web            : https://www.rizen.cl/
Instagram            : https://www.instagram.com/rizen.contadores/
Horario              : Lunes a viernes, 9:00 a 18:00 hrs
Cobertura            : Servicio 100% online en todo Chile
Dirección            : (no se publica - negocio de área de servicio)

Descripción:
Contadores para pymes y empresas en Chile: contabilidad mensual, impuestos,
F29 y remuneraciones al día. Primera asesoría sin costo y 100% online.

Servicios:
Constitución de empresas · Contabilidad mensual · Impuestos y F29
Remuneraciones y liquidaciones · Asesoría legal · Asesoría tributaria
```

---

## Notas técnicas

### HTTPS ✅ resuelto
Certificado de **Let's Encrypt** emitido para `www.rizen.cl` (válido hasta 27/12/2026) y
**Enforce HTTPS activo**. Estado verificado:

| Petición | Resultado |
|---|---|
| `http://www.rizen.cl/` | 301 → `https://www.rizen.cl/` |
| `http://rizen.cl/` | 301 → `https://www.rizen.cl/` |
| `https://rizen.cl/` | 301 → `https://www.rizen.cl/` |
| Las 25 páginas por HTTPS | 200 |

Nota: GitHub no emitió el certificado durante unas horas aunque el DNS era correcto.
El re-intento se forzó **quitando y volviendo a poner el dominio personalizado** en
*Settings → Pages*, lo que dispara un nuevo intento de aprovisionamiento ACME.

> Si alguna vez hay que reactivarlo, considerar que ese toggle hace que GitHub
> **commitee solo** al repo (`Create CNAME` / `Delete CNAME`): hay que hacer `git pull` después.

### Sobre las reseñas
**No** se implementó schema `Review`/`AggregateRating`. Los testimonios del sitio son anónimos, y marcarlos como reseñas no verificables viola las políticas de Google (riesgo de acción manual). Cuando existan reseñas reales en Google Business Profile, se puede implementar correctamente.

### Cómo se mantiene el sitio
El HTML es estático puro, sin build en CI: GitHub Pages sirve los archivos tal como están en el repo.

**Páginas internas y artículos del blog:** se generan desde `tools/gen/`.
```bash
node tools/gen/build.js     # regenera las 24 páginas internas
```
Si editas el HTML generado a mano, el próximo build lo sobrescribe: **edita el generador**.

Al crear una página nueva, recordar:
- Rutas **absolutas** desde la raíz (`/css/styles.css`, `/img/logo.png`), porque las páginas viven a distinta profundidad
- Mismo `<head>` SEO, footer y schema que las demás
- Añadir la URL a `sitemap.xml`
- Verificar: un solo `<h1>`, canonical apuntando a la URL real, JSON-LD válido
- También en `css/pages.css`: si una regla fija solo `height`, agregar `width: auto` (y viceversa),
  porque los `<img>` llevan atributos `width`/`height` que si no ganan y deforman la imagen

### Expectativas realistas
Indexación: días. Primeras mejoras: 4–12 semanas. Competir por términos genéricos ("contador pymes Chile"): 6–12 meses, según competencia local y autoridad de dominio. Ningún proveedor serio puede garantizar posiciones.
