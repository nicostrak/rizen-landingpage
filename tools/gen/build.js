/*
 * Generador de las paginas internas de www.rizen.cl
 *
 *   node tools/gen/build.js
 *
 * Escribe HTML estatico en disco (carpetas con index.html).
 * IMPORTANTE: el HTML generado SE COMMITEA. El sitio no tiene build en CI:
 * GitHub Pages sirve los archivos tal como estan en el repo.
 * Si editas una pagina generada a mano, el proximo build la sobrescribe.
 * Edita el generador, no el HTML.
 *
 * Modulos (cada uno escribe sus paginas al ser requerido):
 *   lib.js        plantillas: head SEO, header, footer, JSON-LD, CTA, FAQ
 *   services.js   las 6 paginas de servicio
 *   contact.js    /contacto/ (NAP para SEO local)
 *   blog.js       8 articulos + indice /blog/ (toma los extra de blog-extra.js)
 *
 * Recordar despues de generar:
 *   1. agregar las URLs nuevas a sitemap.xml
 *   2. revisar que cada pagina tenga 1 solo <h1> y su canonical correcto
 *   3. commit
 */
require('./services');
require('./contact');
require('./blog');

console.log('\nListo. Acuerdate de actualizar sitemap.xml y hacer commit del HTML generado.');
