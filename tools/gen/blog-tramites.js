const { ctaBand } = require('./lib');

/* ============================================================
   BLOG · TRAMITES DE FORMALIZACION
   Datos verificados a sept-2026 contra SII, ChileAtiende y
   el Diario Oficial. Fuentes citadas en cada articulo.
============================================================ */

module.exports = [

  /* ---------- INICIAR ACTIVIDADES ---------- */
  {
    url: '/blog/como-iniciar-actividades-sii/',
    title: 'Cómo Iniciar Actividades en el SII Paso a Paso (2026) | RIZEN',
    desc: 'Guía paso a paso del inicio de actividades en el SII: plazo de dos meses, Formulario 4415, documentos, verificación de actividad y qué pasa si no lo haces.',
    h1: 'Cómo iniciar actividades en el SII, paso a paso',
    lead: 'Es el trámite que convierte tu idea en una actividad formal. Se hace por internet, no tiene costo y tiene un plazo que conviene respetar.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Formalización',
    excerpt: 'Plazo de dos meses, Formulario 4415, documentos y la verificación de actividad explicados.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>El <strong>inicio de actividades</strong> es la declaración con la que le avisas al SII que estás empezando a desarrollar una actividad económica. Sin él, técnicamente no existes para efectos tributarios: no puedes emitir documentos de forma válida ni vas a poder acreditar tus ingresos.</p>
          <p>Es un trámite gratuito, se hace en línea y toma minutos. El problema es que mucha gente lo posterga, y postergarlo genera observaciones desde el primer mes.</p>

          <h2>El plazo: dos meses</h2>
          <p>Debes declarar el inicio de actividades <strong>dentro de los dos meses siguientes</strong> a aquel en que comenzaste tus operaciones. Por ejemplo, si empezaste el 15 de septiembre, tu plazo vence a fines de noviembre.</p>
          <p>La relación laboral con tus clientes no espera a este trámite: si emites una boleta o factura antes de tener el inicio de actividades vigente, el documento queda sin respaldo y el SII lo detecta por cruce de información.</p>

          <h2>Es obligatorio hacerlo por internet</h2>
          <p>Desde el <strong>1 de junio de 2020</strong>, la Ley N° 21.210 estableció que este trámite debe presentarse por internet. Solo quedan exceptuados quienes desarrollan su actividad en un lugar sin cobertura de datos móviles, sin acceso a energía eléctrica o en una zona declarada de catástrofe. Ellos pueden hacerlo en la oficina del SII correspondiente a su domicilio.</p>

          <h2>Qué necesitas tener a mano</h2>
          <ul class="check-list">
            <li>Tu <strong>RUT</strong> y <strong>Clave Tributaria</strong> del SII (o ClaveÚnica).</li>
            <li>El <strong>código de actividad económica</strong> que corresponda a lo que harás. Si eliges mal, el problema aparece después.</li>
            <li>La <strong>fecha de inicio</strong> de tus actividades.</li>
            <li>El <strong>domicilio</strong> donde desarrollarás la actividad.</li>
            <li>Un <strong>correo electrónico</strong> de contacto, donde llegarán el certificado y el resultado.</li>
            <li>Si eres de <strong>primera categoría</strong> (comercio, industria, servicios afectos a IVA): la calidad de ocupación del domicilio y, si es propio, el <strong>ROL de avalúo</strong> de la propiedad.</li>
          </ul>
          <p>Un detalle que simplifica las cosas: si inicias actividades de <strong>segunda categoría</strong> (boletas de honorarios), <strong>no se exige acreditar el domicilio</strong>. Para primera categoría sí, y ahí la exigencia depende de si el inmueble es propio, arrendado o cedido.</p>

          <h2>Los pasos en el portal</h2>
          <ol>
            <li>Ingresa a <strong>sii.cl</strong> y autentícate con RUT y Clave Tributaria, o con ClaveÚnica.</li>
            <li>Ve a <em>Servicios online</em> → <em>RUT e Inicio de Actividades</em> → <em>Iniciar actividades</em>.</li>
            <li>Registra tu RUT y completa la fecha de inicio y la descripción de tu actividad.</li>
            <li>Selecciona tus <strong>actividades económicas</strong> según el tipo de documento que vas a emitir. De esa elección dependen los códigos disponibles.</li>
            <li>Completa el <strong>domicilio</strong> y, si corresponde, adjunta los documentos que lo acrediten.</li>
            <li>Revisa el <strong>resumen</strong>, acepta los términos y presiona <em>Efectuar Inicio de Actividades</em>.</li>
            <li>Descarga el <strong>certificado de inicio de actividades</strong>, que también llega a tu correo.</li>
          </ol>
          <p>Si el trámite se hace en oficina (solo en los casos exceptuados), se usa el <strong>Formulario 4415</strong> de Inscripción al RUT y/o Declaración de Inicio de Actividades. Al reverso de ese formulario están los antecedentes adicionales que se piden a actividades de transporte y minería.</p>

          <h2>La verificación de actividad</h2>
          <p>Esto sorprende a muchos y es la principal causa de demora. Si tu inicio de actividades es de <strong>primera categoría</strong> y vas a necesitar emitir facturas, notas de crédito, notas de débito o guías de despacho, el SII aplica una <strong>verificación de actividad</strong> antes de autorizarte a timbrar esos documentos.</p>
          <ul>
            <li>La verificación la realiza un funcionario del SII y tiene un plazo de hasta <strong>10 días hábiles</strong>.</li>
            <li>Si el resultado es positivo, puedes emitir documentos con derecho a crédito fiscal.</li>
            <li>Si es negativa, se hace una verificación en terreno en el domicilio declarado.</li>
          </ul>
          <p>Por eso el domicilio declarado tiene que ser real y verificable. Un domicilio "de fantasía" es la forma más rápida de trabar el trámite. Para actividades de <strong>segunda categoría</strong> no hay verificación: puedes emitir boletas de honorarios electrónicas de inmediato.</p>

          <h2>Qué NO es el inicio de actividades</h2>
          <p>Conviene no confundir tres trámites que suelen mezclarse:</p>
          <table>
            <thead><tr><th>Trámite</th><th>Para qué sirve</th><th>Dónde</th></tr></thead>
            <tbody>
              <tr><td>Constitución de la sociedad</td><td>Crea la persona jurídica (SpA, EIRL, Ltda.)</td><td>Notaría / Registro de Empresas y Sociedades</td></tr>
              <tr><td><strong>Inicio de actividades</strong></td><td>Te habilita tributariamente y define tu régimen</td><td>SII</td></tr>
              <tr><td><a href="/blog/patente-municipal/">Patente municipal</a></td><td>Autoriza la actividad lucrativa en una comuna</td><td>Municipalidad</td></tr>
            </tbody>
          </table>
          <p>Los tres son necesarios si vas a operar con local u oficina. No son alternativas entre sí.</p>

          <h2>Errores que se pagan caro</h2>
          <ul>
            <li><strong>Elegir mal el código de actividad.</strong> De él dependen tus obligaciones y tus tasas. Cambiarlo después es un trámite aparte.</li>
            <li><strong>Elegir al azar el régimen tributario.</strong> El régimen se define en este momento, y cambiarlo tiene restricciones. Vale la pena decidirlo con proyecciones: revisa nuestra guía del <a href="/blog/regimen-pro-pyme-2026/">Régimen Pro Pyme</a>.</li>
            <li><strong>Declarar un domicilio no verificable.</strong> Traba la verificación de actividad y, con eso, tu capacidad de facturar.</li>
            <li><strong>No hacerlo dentro de plazo.</strong> Genera observaciones y complica tus primeros documentos.</li>
            <li><strong>Olvidar que hay que declarar todos los meses</strong> desde el inicio de actividades, incluso sin movimiento.</li>
          </ul>

          <h2>Si vas a constituir empresa</h2>
          <p>Si optas por el régimen simplificado, la empresa se constituye en el <strong>Registro de Empresas y Sociedades</strong> y luego se hace el inicio de actividades en línea, lo que toma solo unos minutos. Si vas por la vía tradicional, el RUT de la empresa se solicita al SII dentro de los 60 días siguientes al inicio de actividades.</p>
          <p>Hacemos todo este proceso completo —constitución, RUT, inicio de actividades, patente y facturación electrónica— en nuestro servicio de <a href="/constitucion-de-empresa/">constitución de empresa</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los requisitos y plazos vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> y en ChileAtiende.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuánto cuesta iniciar actividades?', 'Es un trámite gratuito. El SII no cobra por la declaración de inicio de actividades.'],
      ['¿Cuál es el plazo para iniciar actividades?', 'Dentro de los dos meses siguientes al inicio de tus operaciones, según lo establecido en el artículo 68 del Código Tributario.'],
      ['¿Puedo iniciar actividades como persona natural en lugar de constituir empresa?', 'Sí. Si prestas servicios profesionales, la vía más simple suele ser iniciar actividades de segunda categoría como persona natural y emitir boletas de honorarios. Lo evaluamos según tus ingresos y clientes.'],
      ['¿Qué es la verificación de actividad y cuánto demora?', 'Es la revisión que hace el SII cuando vas a emitir facturas y otros documentos con derecho a crédito fiscal. Un funcionario verifica tu actividad en un plazo de hasta 10 días hábiles.'],
      ['¿Qué pasa si emito boletas antes de tener inicio de actividades?', 'Los documentos quedan sin respaldo válido y el SII lo detecta por cruce de información. Puede generar observaciones y requerimientos. Conviene regularizar el inicio de actividades antes de facturar.']
    ],
    related: [
      ['/blog/patente-municipal/', 'Patente municipal', 'El siguiente paso: el permiso de la municipalidad.'],
      ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'SpA, EIRL y Ltda, con todo el papeleo resuelto.'],
      ['/blog/factura-electronica/', 'Factura electrónica', 'Cómo emitir, quién está obligado y el sistema gratis del SII.'],
      ['/blog/operacion-renta-2026/', 'Operación Renta 2026', 'Quién debe declarar y qué fechas importan.']
    ],
    cta: ctaBand('¿Prefieres que lo hagamos por ti?', 'Nos encargamos de la constitución, el RUT, el inicio de actividades, la patente y la facturación electrónica.', 'Quiero formalizar mi negocio')
  },

  /* ---------- PATENTE MUNICIPAL ---------- */
  {
    url: '/blog/patente-municipal/',
    title: 'Patente Municipal en Chile: Qué Es, Costo y Cómo Obtenerla | RIZEN',
    desc: 'Qué es la patente municipal, cuánto cuesta (0,25% a 0,5% del capital inicial), las categorías, la patente provisoria y cómo solicitarla paso a paso.',
    h1: 'Patente municipal: qué es, cuánto cuesta y cómo obtenerla',
    lead: 'El inicio de actividades te habilita ante el SII. La patente municipal te autoriza a operar en una comuna. Son dos permisos distintos y este es el que más se posterga.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Formalización',
    excerpt: 'Cuánto cuesta, las categorías de patente, la provisoria inmediata y cómo solicitarla.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>La <strong>patente municipal</strong> es el permiso que otorga la municipalidad para desarrollar una actividad lucrativa dentro de su comuna. Sin ella, un negocio con local, oficina o taller está funcionando al margen de la normativa, por muy en regla que esté frente al SII.</p>
          <p>Es probablemente el trámite que más se posterga, y el error típico es solicitarla <strong>después</strong> de instalar el local. La ley exige obtenerla <strong>antes</strong> de comenzar a operar.</p>

          <h2>Cuánto cuesta</h2>
          <p>El monto lo fija cada municipalidad, pero la ley establece un rango: la patente se calcula sobre el <strong>capital inicial declarado</strong> por la empresa, con un valor que va <strong>entre un 0,25% y un 0,5%</strong> de ese capital. Se paga una vez al año.</p>
          <p>Como el capital inicial es un dato que tú declaras al constituir, es un elemento que incide directamente en el costo anual del permiso. El monto exacto depende, además, del rubro y de la ordenanza de cada comuna.</p>

          <h2>Las categorías de patente</h2>
          <table>
            <thead><tr><th>Categoría</th><th>Para qué negocios</th></tr></thead>
            <tbody>
              <tr><td><strong>Microempresa Familiar (MEF)</strong></td><td>Personas naturales, familiares entre sí, que operan en su vivienda y cumplen los requisitos de la ley</td></tr>
              <tr><td><strong>Profesional</strong></td><td>Oficinas de profesionales: abogados, arquitectos, consultas médicas, estudios contables</td></tr>
              <tr><td><strong>Comercial</strong></td><td>Negocios y tiendas de venta en general</td></tr>
              <tr><td><strong>Industrial</strong></td><td>Producción, manufactura, fábricas y talleres</td></tr>
              <tr><td><strong>De alcoholes</strong></td><td>Botillerías, restaurantes y todo giro con venta de alcohol</td></tr>
            </tbody>
          </table>
          <p>La categoría no es un detalle: determina el valor y también los permisos adicionales que te van a exigir. Un restaurante necesita permisos muy distintos a los de un estudio contable.</p>

          <h2>La patente provisoria: lo que casi nadie sabe</h2>
          <p>Aquí está la buena noticia. La <strong>Ley N° 20.494</strong>, vigente desde enero de 2011, obliga a la municipalidad a otorgar la <strong>patente provisoria en forma inmediata</strong> si presentas todos los permisos y documentos que exige la ley.</p>
          <p>Y hay algo mejor: esa patente provisoria <strong>se transforma en definitiva automáticamente</strong> si, en el plazo de <strong>30 días</strong>, ni la autoridad sanitaria ni la Dirección de Obras Municipales presentan observaciones.</p>
          <p>Es decir, si llegas con la carpeta completa, puedes empezar a operar de inmediato y la definitiva se resuelve sola.</p>

          <h2>Cómo solicitarla</h2>
          <ol>
            <li><strong>Ten el inicio de actividades vigente</strong> en el SII. Es un requisito previo.</li>
            <li><strong>Averigua los requisitos de tu comuna y tu rubro</strong> en el Departamento de Patentes de la municipalidad correspondiente a la dirección comercial. Esto varía mucho entre comunas y giros.</li>
            <li><strong>Reúne los permisos sectoriales</strong> que correspondan a tu actividad (revisa la sección siguiente).</li>
            <li><strong>Presenta la solicitud</strong> en la municipalidad, o por internet si tu comuna está habilitada en el módulo de patentes de <em>Tu Empresa en un Día</em>.</li>
            <li><strong>Obtén la patente provisoria</strong> y espera el plazo de 30 días para que se transforme en definitiva.</li>
          </ol>

          <h3>Solicitarla por internet</h3>
          <p>El sitio <strong>Tu Empresa en un Día</strong> tiene un módulo de patente comercial que permite solicitar la provisoria y enviarla directamente a la municipalidad. Requisitos:</p>
          <ul>
            <li>Que la empresa esté constituida en el <strong>Registro de Empresas y Sociedades</strong>.</li>
            <li>Que la solicitud la haga el <strong>representante legal</strong>.</li>
            <li>Que hayan pasado <strong>menos de 30 días</strong> desde la constitución.</li>
            <li>Que la empresa haya hecho su <strong>declaración de inicio de actividades</strong>.</li>
          </ul>
          <p>Ojo: no todas las municipalidades están adheridas al módulo. Conviene verificar si la tuya está en la lista antes de intentarlo.</p>

          <h2>Los permisos que te van a pedir según tu rubro</h2>
          <p>Según tu actividad, además de la patente te pueden exigir:</p>
          <ul>
            <li><strong>Autorización sanitaria</strong> de la SEREMI de Salud, para quien produzca, elabore, envíe, almacene o distribuya alimentos.</li>
            <li><strong>Informe sanitario</strong>, que establece si una actividad industrial o comercial reúne las condiciones técnicas para controlar sus riesgos. Se resuelve con una inspección previa al funcionamiento.</li>
            <li><strong>Permisos de la Dirección de Obras Municipales</strong>, según el emplazamiento del local.</li>
            <li><strong>Permisos especiales</strong> de cada municipalidad: estacionamientos, carteles, patentes de alcohol, entre otros.</li>
          </ul>
          <p>Una excepción útil: la <strong>Microempresa Familiar no necesita Informe Sanitario</strong>.</p>

          <h2>Si eres MEF</h2>
          <p>La Microempresa Familiar tiene un procedimiento simplificado. El microempresario va primero a la municipalidad, donde completa junto a un funcionario municipal el <strong>formulario único de inscripción, declaración jurada e inicio de actividades</strong>, y lo presenta en la misma municipalidad para inscribirse en el registro municipal. Después lleva las copias visadas al SII.</p>
          <p>Un dato relevante para quien ya tiene inicio de actividades: <strong>acogerse a la normativa MEF en la municipalidad no requiere ningún trámite adicional ante el SII</strong>. Para efectos tributarios, la calidad de contribuyente y el régimen de tributación no cambian.</p>

          <h2>Errores frecuentes</h2>
          <ul>
            <li><strong>Instalar el local antes de tener la patente.</strong> Es la infracción más común y la más fácil de detectar.</li>
            <li><strong>Creer que el inicio de actividades del SII reemplaza la patente.</strong> Son permisos distintos, de autoridades distintas.</li>
            <li><strong>No averiguar los requisitos del rubro antes de arrendar.</strong> Hay locales que no cumplen la normativa sanitaria o de obras y no hay forma de habilitarlos.</li>
            <li><strong>Olvidar el pago anual.</strong> La patente se paga todos los años y su no pago tiene consecuencias.</li>
            <li><strong>No revisar el capital inicial declarado</strong>, que es la base de cálculo del permiso.</li>
          </ul>

          <h2>El orden correcto de la formalización</h2>
          <p>Para que no pierdas tiempo ni plata, el orden es:</p>
          <ol>
            <li>Definir la figura legal y <a href="/constitucion-de-empresa/">constituir la empresa</a>.</li>
            <li><a href="/blog/como-iniciar-actividades-sii/">Iniciar actividades en el SII</a>.</li>
            <li>Obtener la <strong>patente municipal</strong> y los permisos del rubro.</li>
            <li>Habilitar la <a href="/blog/factura-electronica/">facturación electrónica</a>.</li>
            <li>Abrir la cuenta bancaria de la empresa.</li>
          </ol>
          <p class="disclaimer">Contenido informativo. No constituye asesoría legal o municipal personalizada. Los requisitos, plazos y montos varían por comuna y rubro: verifícalos en la municipalidad correspondiente y en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuánto cuesta la patente municipal?', 'Cada municipalidad fija el monto dentro del rango legal: entre 0,25% y 0,5% del capital inicial declarado por la empresa. Se paga una vez al año.'],
      ['¿Es lo mismo que el inicio de actividades del SII?', 'No. El inicio de actividades es tributario y se tramita en el SII. La patente municipal es un permiso de la municipalidad para operar en su comuna. Necesitas ambos si tienes local u oficina.'],
      ['¿Puedo obtener la patente de inmediato?', 'Sí. Desde la Ley N° 20.494, la municipalidad debe otorgar la patente provisoria en forma inmediata si presentas todos los permisos exigidos. Esa provisoria se transforma en definitiva si en 30 días no hay observaciones.'],
      ['¿Necesito patente si trabajo desde mi casa?', 'Depende de si tu actividad requiere local y de la normativa de tu comuna. Existe la categoría de Microempresa Familiar justamente para quienes operan en su vivienda. Conviene consultar en la municipalidad.'],
      ['¿Qué pasa si opero sin patente?', 'Estás desarrollando una actividad lucrativa sin el permiso que la autoriza, lo que expone a multas y clausura del local. Además, complica otros trámites que exigen la patente vigente.']
    ],
    related: [
      ['/blog/como-iniciar-actividades-sii/', 'Cómo iniciar actividades en el SII', 'El paso previo obligatorio para solicitar la patente.'],
      ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'SpA, EIRL y Ltda explicado con plazos y documentos.'],
      ['/blog/termino-de-giro/', 'Término de giro', 'Cuando cierras: cancelar la patente también es parte del proceso.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual y declaraciones con precio fijo.']
    ],
    cta: ctaBand('Formalízate sin perder semanas en trámites', 'Nos encargamos de la constitución, el inicio de actividades y te guiamos en la patente municipal.', 'Quiero asesoría para formalizarme')
  },

  /* ---------- FACTURA ELECTRONICA ---------- */
  {
    url: '/blog/factura-electronica/',
    title: 'Factura Electrónica en Chile: Cómo Emitir (Guía 2026) | RIZEN',
    desc: 'Quién está obligado a facturar electrónicamente, los dos sistemas disponibles (el gratis del SII y el de mercado), qué se necesita y los cambios vigentes en 2026.',
    h1: 'Factura electrónica: quién está obligado y cómo emitirla',
    lead: 'En Chile la factura electrónica es obligatoria y universal. Existe un sistema gratuito del SII y otro de mercado, y no todos sirven para lo mismo.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Formalización',
    excerpt: 'Obligatoriedad, el sistema gratis del SII vs software de mercado y los cambios de 2026.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>La <strong>factura electrónica</strong> es un documento digital con la misma validez legal que la factura en papel, y en Chile su uso es <strong>obligatorio y universal</strong> para los contribuyentes de primera categoría desde la <strong>Ley N° 20.727 de 2014</strong>.</p>
          <p>La ley estableció una incorporación gradual según los ingresos anuales de cada empresa y su ubicación (zona urbana o rural): las grandes empresas entraron primero, y el resto se fue sumando por etapas. Si hoy tienes dudas de si estás obligado, la respuesta práctica es que sí.</p>

          <h2>Qué documentos son electrónicos</h2>
          <p>La obligación cubre <strong>facturas, facturas de compra, liquidaciones-factura, notas de débito y notas de crédito</strong>. A esto se suma la <strong>boleta electrónica de ventas y servicios</strong> para el comercio al público.</p>
          <p>Existen excepciones acotadas: lugares sin cobertura de datos móviles o fijos, sin acceso al suministro eléctrico, o declarados zona de catástrofe. En esos casos el SII puede autorizar el uso de documentos en papel mientras se mantenga la condición.</p>

          <h2>Los dos caminos para facturar electrónicamente</h2>
          <p>Aquí está la decisión práctica. Tienes dos alternativas y no son equivalentes:</p>
          <table>
            <thead><tr><th></th><th>Sistema gratuito del SII</th><th>Software propio o de mercado</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Costo</strong></td>
                <td>Sin costo de licencia. Solo necesitas certificado digital, internet y un computador.</td>
                <td>Depende del proveedor, más los mismos requisitos técnicos.</td>
              </tr>
              <tr>
                <td><strong>Certificación</strong></td>
                <td><strong>No requiere</strong>: puedes empezar a facturar apenas te inscribes.</td>
                <td>Requiere un proceso de <strong>certificación</strong> ante el SII antes de autorizarte.</td>
              </tr>
              <tr>
                <td><strong>Documentos que emite</strong></td>
                <td>Facturas afectas y exentas, notas de crédito y débito, guía de despacho y factura de compra.</td>
                <td>Además de lo anterior: facturas y notas de exportación, liquidación-factura, boletas y otros documentos.</td>
              </tr>
            </tbody>
          </table>
          <p>La conclusión: si tu operación es simple —facturas y boletas a clientes nacionales— el <strong>sistema gratuito del SII es totalmente suficiente</strong> y te ahorra el proceso de certificación. Si exportas, haces liquidaciones-factura o necesitas integración con tu sistema de inventario, vas a necesitar un software de mercado.</p>

          <h2>Qué necesitas para partir</h2>
          <ul class="check-list">
            <li>Un <strong>certificado digital</strong>, que se obtiene con cualquiera de las entidades proveedoras acreditadas.</li>
            <li><strong>Inicio de actividades vigente</strong> y, si emites facturas, la <a href="/blog/como-iniciar-actividades-sii/">verificación de actividad</a> ya aprobada.</li>
            <li>Un computador con conexión a internet (y una impresora si vas a imprimir representaciones).</li>
            <li>Para el sistema gratuito: instalarlo y configurarlo desde el portal del SII.</li>
            <li>Para el de mercado: completar la postulación y el proceso de <strong>certificación</strong>, tras el cual el SII emite una resolución que te autoriza como emisor electrónico.</li>
          </ul>

          <h2>Boletas electrónicas: el sistema gratuito y la app</h2>
          <p>Para las boletas de ventas y servicios, el SII dispone de un <strong>sistema gratuito en su sitio web</strong> y de una <strong>aplicación móvil</strong> para Android e iOS, que permiten emitir boletas electrónicas y boletas no afectas o exentas.</p>
          <p>Dos novedades recientes que vale la pena conocer:</p>
          <ul>
            <li><strong>Firma digital centralizada del SII.</strong> Mediante la Resolución Ex. N° 2 de 2026, el SII implementó una firma digital centralizada que certifica las boletas electrónicas emitidas desde su sistema gratuito y desde la aplicación móvil. En la práctica, facilita el trámite de solicitud de folios y la firma de los documentos para quienes emiten solo boletas.</li>
            <li><strong>El timbre ya no es obligatorio en el papel.</strong> La Resolución Ex. N° 207 de 2025 eliminó, <strong>a contar del 1 de enero de 2026</strong>, la obligación de imprimir el timbre electrónico en la representación impresa de las boletas electrónicas. Su inclusión quedó como <strong>opcional</strong>, porque el timbre sigue contenido en el XML del documento, que es el formato que el SII recibe y almacena.</li>
          </ul>

          <h2>Cómo se refleja en tu contabilidad</h2>
          <p>Una ventaja enorme del sistema electrónico que muchos no aprovechan: como el SII recibe el XML de cada documento, <strong>construye automáticamente tu Registro de Compras y Ventas</strong> y te presenta una propuesta de Formulario 29 cada mes.</p>
          <p>Eso significa que tu trabajo mensual ya no es "digitar documentos", sino <strong>verificar que el registro esté completo y bien clasificado</strong>. Y ahí es donde se cometen los errores caros: una factura de compra que no se registró es crédito fiscal que pierdes. Si vienes empezando, revisa nuestra guía de <a href="/blog/iva-credito-fiscal/">IVA y crédito fiscal</a>.</p>

          <h2>Errores frecuentes</h2>
          <ul>
            <li><strong>No revisar el RCV antes de declarar.</strong> El SII propone, pero la responsabilidad de que esté correcto es tuya.</li>
            <li><strong>Emitir con datos mal ingresados</strong> (RUT, giro, montos), lo que obliga a emitir notas de crédito.</li>
            <li><strong>No conservar los XML.</strong> Son tu respaldo tributario, igual que el papel lo era antes.</li>
            <li><strong>Elegir un software de mercado sin evaluar si necesitas la certificación</strong>, cuando el sistema gratuito bastaba.</li>
            <li><strong>Olvidar que las notas de crédito también son electrónicas</strong> y deben referenciar el documento original.</li>
          </ul>

          <h2>¿Y si tienes todo esto funcionando pero sin orden?</h2>
          <p>Tener facturación electrónica no es lo mismo que tener contabilidad al día. Si emites documentos pero nadie está conciliando tu registro de compras y ventas, las diferencias se acumulan hasta que aparecen en el F29 o en la Operación Renta. Revisa nuestro servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a> o, si recién estás partiendo, la <a href="/constitucion-de-empresa/">constitución de empresa</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las obligaciones y procedimientos vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Estoy obligado a facturar electrónicamente?', 'Sí. La Ley N° 20.727 de 2014 hizo universal y obligatoria la emisión electrónica de facturas, notas de crédito, notas de débito, facturas de compra y liquidaciones-factura para los contribuyentes de primera categoría. Solo hay excepciones acotadas por falta de cobertura, electricidad o zona de catástrofe.'],
      ['¿El sistema gratuito del SII sirve para todo?', 'Sirve para facturas afectas y exentas, notas de crédito y débito, guías de despacho y facturas de compra, que cubre a la mayoría de las pymes. Si necesitas emitir documentos de exportación, liquidaciones-factura u otros, necesitas un software de mercado con certificación.'],
      ['¿Necesito certificarme si uso el sistema del SII?', 'No. El sistema gratuito del SII no requiere certificación y puedes comenzar a facturar una vez inscrito. Los software de mercado sí requieren un proceso de certificación.'],
      ['¿Ya no hay que imprimir el timbre en las boletas?', 'Correcto. Desde el 1 de enero de 2026, la Resolución Ex. SII N° 207 de 2025 eliminó la obligación de imprimir el timbre electrónico en la representación impresa de las boletas. Sigue siendo obligatorio en el XML del documento.'],
      ['¿Qué es el Registro de Compras y Ventas?', 'Es el registro electrónico que el SII construye con los documentos que emites y recibes. Con esa información te presenta una propuesta de F29. Tu trabajo es verificar que esté completo y bien clasificado, porque de eso depende tu crédito fiscal.']
    ],
    related: [
      ['/blog/iva-credito-fiscal/', 'IVA y crédito fiscal', 'Cómo se relaciona lo que facturas con el impuesto que pagas.'],
      ['/blog/como-iniciar-actividades-sii/', 'Cómo iniciar actividades en el SII', 'La verificación de actividad que necesitas antes de facturar.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Que emitir documentos no es lo mismo que tener contabilidad al día.'],
      ['/constitucion-de-empresa/', 'Constitución de empresa', 'Habilitamos tu facturación electrónica desde el día uno.']
    ],
    cta: ctaBand('Deja tu facturación y contabilidad en orden', 'Revisamos tu registro de compras y ventas, tus declaraciones y tu situación frente al SII.', 'Quiero mi asesoría gratis')
  },

  /* ---------- TERMINO DE GIRO ---------- */
  {
    url: '/blog/termino-de-giro/',
    title: 'Término de Giro: Cómo Cerrar Correctamente una Empresa | RIZEN',
    desc: 'Término de giro en el SII: plazo de dos meses, el Formulario 2121, qué documentos se necesitan, el término simplificado de las Pro Pyme y qué pasa si no lo haces.',
    h1: 'Término de giro: cómo cerrar una empresa correctamente',
    lead: 'Cerrar una empresa no es solo dejar de facturar. Sin el término de giro sigues siendo contribuyente y las multas por no declarar siguen corriendo.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Formalización',
    excerpt: 'El Formulario 2121, el balance de cierre, los plazos del SII y el término simplificado Pro Pyme.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Cuando un negocio deja de funcionar, la reacción habitual es simple: dejar de facturar y seguir adelante. El problema es que, para el SII, <strong>seguir existiendo</strong> significa seguir obligado a presentar el Formulario 29 cada mes y la declaración de renta cada año, aunque no haya ningún movimiento.</p>
          <p>Las multas por declaraciones no presentadas se acumulan igual. Y la deuda previsional, si tienes trabajadores, también. El <strong>término de giro</strong> es el trámite que cierra ese círculo.</p>

          <h2>Qué es y en qué norma está</h2>
          <p>El término de giro está regulado en el <strong>artículo 69 del Código Tributario</strong>. Es el aviso formal que da todo contribuyente cuando termina su giro o sus actividades y, por esa razón, deja de estar afecto a impuestos. Junto con el aviso, se debe <strong>pagar el impuesto determinado a la fecha del balance final</strong>.</p>
          <p>Se declara con el <strong>Formulario 2121</strong> de Aviso y Declaración de Término de Giro.</p>

          <h2>El plazo: dos meses</h2>
          <p>El aviso y el pago del impuesto deben realizarse <strong>dentro de los dos meses siguientes</strong> a la fecha de término del giro. Por ejemplo, si la actividad termina el 10 de septiembre, el plazo vence el 10 de noviembre.</p>
          <p>Y del otro lado: una vez presentado el aviso, el SII tiene un plazo de <strong>seis meses</strong> para revisar, girar cualquier diferencia de impuestos y certificar el término de giro.</p>

          <h2>El trámite es exclusivamente por internet</h2>
          <p>Se hace en <strong>sii.cl</strong>, en la <em>carpeta tributaria electrónica</em> del contribuyente, con RUT y Clave Tributaria (o ClaveÚnica). Necesitas tener <strong>inicio de actividades vigente</strong> y no tener situaciones pendientes con el SII.</p>
          <p>El flujo es: <em>Servicios Online</em> → <em>Término de Giro</em> → <em>Declarar Término de Giro</em>. Se completa el F2121 —incluida la fecha "hasta" del cierre—, se adjuntan los documentos y se envía. Si pasa las validaciones, se emite el certificado; si no, el trámite queda pendiente hasta que adjuntes los antecedentes.</p>

          <h2>Qué documentos vas a necesitar</h2>
          <p>Depende de tu régimen y de tu tipo de contabilidad, pero el núcleo es:</p>
          <ul class="check-list">
            <li>El <strong>balance de término de giro</strong> a la fecha de cierre.</li>
            <li><strong>Inventario</strong> de activos y pasivos a esa fecha.</li>
            <li>Los <strong>antecedentes para la determinación de los impuestos</strong> que correspondan.</li>
            <li>Declaraciones <strong>F29 y F22 al día</strong>, sin deudas pendientes.</li>
            <li><strong>Libro de compras y ventas</strong> actualizado.</li>
            <li>Según el régimen: libro diario y mayor, renta líquida imponible, capital propio tributario y los registros que correspondan (RAI, RAP, REX, entre otros).</li>
            <li>Si tuviste trabajadores: <strong>finiquitos</strong> y certificado de cotizaciones al día.</li>
          </ul>

          <h2>El término de giro simplificado (Pro Pyme)</h2>
          <p>Este es un punto que muchos contribuyentes acogidos al <strong>artículo 14 letra D</strong> (Pro Pyme) no aprovechan. La ley permite solicitar un <strong>término de giro simplificado</strong> si, además de la declaración y los antecedentes, acompañas en la escritura una <strong>declaración donde el propietario, accionistas, socios o comuneros se hacen responsables solidariamente</strong> de todos los impuestos que se adeuden por la empresa.</p>
          <p>Con eso, el SII procede <strong>dentro del plazo de un mes</strong> a girar los impuestos conforme a tu propia declaración y a certificar el término de giro una vez verificado el pago. Es sustancialmente más rápido que el procedimiento general.</p>
          <p>El SII mantiene, eso sí, la facultad de girar diferencias o iniciar una fiscalización dentro de los seis meses siguientes a la solicitud, notificando en ese caso a los socios que asumieron la responsabilidad solidaria.</p>

          <h2>Qué pasa cuando el término de giro se acepta</h2>
          <p>Hay una consecuencia muy valiosa que casi nadie conoce: aceptada o teniéndose por aceptada la declaración, el SII <strong>queda inhibido para ejercer ulteriores fiscalizaciones</strong> y debe notificar el cierre definitivo del procedimiento <strong>dentro de 15 días</strong>.</p>
          <p>Si no se emite giro, se entiende aceptada tu presentación y se certifica el término de giro. Es decir, el trámite te da certeza jurídica sobre el período cerrado.</p>

          <h2>Cuidado con el abandono silencioso</h2>
          <p>Dejar la empresa "botada" no la cierra, y el SII tiene herramientas para actuar:</p>
          <ul>
            <li>Si presentas <strong>6 o más períodos tributarios continuos sin declarar</strong>, el SII puede iniciar acciones para establecer si cesaste actividades. Si tras seis meses no manifiestas tu decisión de continuar y no tienes deudas ni activos pendientes, puede <strong>presumir legalmente que terminaste el giro</strong> y declararlo por resolución.</li>
            <li>La misma presunción aplica si transcurren <strong>36 o más períodos tributarios sin operaciones</strong>, sin necesidad de acción previa del SII.</li>
          </ul>
          <p>En cualquiera de esos escenarios, los impuestos que resulten del cierre igual se van a determinar. No es una vía de escape.</p>

          <h2>Después del certificado: cerrar todo lo demás</h2>
          <p>El certificado del SII es el punto de partida, no el final. Con él en mano corresponde:</p>
          <ol>
            <li><strong>Cancelar la patente municipal</strong> y demás permisos sectoriales.</li>
            <li><strong>Cerrar la cuenta bancaria</strong> de la empresa.</li>
            <li>Inscribir la <strong>disolución</strong> de la sociedad si corresponde (es un trámite distinto al tributario).</li>
            <li>Guardar los <strong>libros y respaldos</strong>: la obligación de conservarlos se extiende por seis años.</li>
            <li>Conservar el <strong>certificado de término de giro</strong> de forma permanente.</li>
          </ol>

          <h2>Errores que complican el cierre</h2>
          <ul>
            <li><strong>Presentar con deudas tributarias pendientes.</strong> El SII no certifica hasta que se paguen.</li>
            <li><strong>Olvidar los impuestos sobre activos y existencias</strong> que quedan al cierre. Es la sorpresa más frecuente.</li>
            <li><strong>Dejar utilidades retenidas sin resolver</strong>, que tributan como impuesto final al cierre.</li>
            <li><strong>Tener cotizaciones impagas</strong> o finiquitos sin ratificar: bloquea el término de giro.</li>
            <li><strong>Confundir el término de giro con la disolución de la sociedad.</strong> Son trámites distintos y complementarios.</li>
            <li><strong>No hacerlo dentro de plazo</strong>, lo que agrega multas por presentación tardía.</li>
          </ul>

          <h2>Si estás pensando en cerrar</h2>
          <p>Antes de hacerlo vale la pena una conversación: a veces el negocio no necesita cerrarse, sino ordenarse. Y si efectivamente corresponde cerrar, hacerlo bien evita que el problema te siga por años. Revisa nuestro servicio para <a href="/regularizar-deudas-sii/">regularizar tu situación con el SII</a> o escríbenos directamente.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria o legal personalizada. Los plazos y requisitos deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> y en el Código Tributario (artículo 69).</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuál es el plazo para hacer el término de giro?', 'Dentro de los dos meses siguientes a la fecha de término de tu giro o actividades, según el artículo 69 del Código Tributario.'],
      ['¿Qué pasa si dejo de facturar pero no hago el término de giro?', 'Sigues siendo contribuyente y mantienes la obligación de presentar F29 mensual y la declaración de renta anual, aunque sean sin movimiento. Las multas por no declarar se acumulan.'],
      ['¿Qué es el término de giro simplificado?', 'Es una vía disponible para contribuyentes del artículo 14 letra D (Pro Pyme). Adjuntando una declaración en la escritura donde los dueños se hacen responsables solidariamente de los impuestos adeudados, el SII procede a girar y certificar dentro de un mes.'],
      ['¿Cuánto demora el SII en certificar el término de giro?', 'En el procedimiento general, el SII tiene seis meses para revisar, girar diferencias y certificar. En el simplificado de las Pro Pyme, el plazo es de un mes.'],
      ['¿Qué pasa con los activos que quedan al cierre?', 'El balance de término de giro determina los impuestos sobre los activos y existencias que quedan a esa fecha. Es una de las causas más frecuentes de giros inesperados, por lo que conviene prepararlo con la contabilidad ordenada.']
    ],
    related: [
      ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'Si hay F29 atrasados, giros o multas antes de cerrar.'],
      ['/blog/patente-municipal/', 'Patente municipal', 'También hay que cancelarla al cerrar el negocio.'],
      ['/blog/regimen-pro-pyme-2026/', 'Régimen Pro Pyme 2026', 'Quiénes pueden usar el término de giro simplificado.'],
      ['/remuneraciones/', 'Remuneraciones y liquidaciones', 'Finiquitos y cotizaciones al día son requisito para cerrar.']
    ],
    cta: ctaBand('¿Vas a cerrar tu empresa o tu giro?', 'Revisamos tu situación, preparamos el balance de término de giro y te acompañamos hasta el certificado.', 'Quiero cerrar mi giro correctamente')
  }

];
