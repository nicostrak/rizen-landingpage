const { writePage, ctaBand, SITE, TEL, TEL_HUMAN, INSTAGRAM, EMAIL, WA_CTA } = require('./lib');

/* ============================================================
   CONTACTO  (pagina NAP para SEO local y directorios)
============================================================ */
writePage({
  url: '/contacto/',
  title: 'Contacto | RIZEN Contabilidad e Impuestos en Chile',
  desc: 'Contacta a RIZEN por WhatsApp, teléfono o correo. Contabilidad y asesoría tributaria 100% online para pymes y empresas en todo Chile. Lun a Vie 9:00 a 18:00.',
  h1: 'Conversemos sobre <em>la contabilidad de tu empresa</em>',
  lead: 'Escríbenos por WhatsApp, llámanos o mándanos un correo. Respondemos en menos de 1 hora hábil y la primera evaluación es sin costo.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Contacto' }],
  ldExtra: [
    {
      '@type': 'ContactPage',
      '@id': `${SITE}/contacto/#webpage`,
      url: `${SITE}/contacto/`,
      name: 'Contacto | RIZEN Contabilidad e Impuestos',
      inLanguage: 'es-CL',
      about: { '@id': `${SITE}/#business` },
      isPartOf: { '@id': `${SITE}/#website` }
    }
  ],
  body: `    <section class="page-section">
      <div class="container">
        <div class="info-grid" style="margin-bottom:44px;">
          <a class="info-card" style="text-decoration:none;" href="${WA_CTA}" target="_blank" rel="noopener">
            <h3>WhatsApp (más rápido)</h3>
            <p>${TEL_HUMAN}<br>Respuesta en menos de 1 hora hábil.</p>
          </a>
          <a class="info-card" style="text-decoration:none;" href="tel:${TEL}">
            <h3>Teléfono</h3>
            <p>${TEL_HUMAN}<br>Lunes a viernes, 9:00 a 18:00 hrs.</p>
          </a>
          <a class="info-card" style="text-decoration:none;" href="mailto:${EMAIL}">
            <h3>Correo</h3>
            <p>${EMAIL}<br>Ideal para enviar documentos.</p>
          </a>
          <a class="info-card" style="text-decoration:none;" href="${INSTAGRAM}" target="_blank" rel="noopener">
            <h3>Instagram</h3>
            <p>@rizen.contadores<br>Tips contables y tributarios.</p>
          </a>
        </div>

        <article class="prose">
          <h2>Datos de contacto y de la empresa</h2>
          <p>Si necesitas nuestros datos para una factura, un contrato o un directorio, aquí están completos y actualizados.</p>

          <dl class="nap-block" style="margin-top:24px;">
            <dt>Razón social</dt>
            <dd>RIZEN SpA</dd>

            <dt>Nombre comercial</dt>
            <dd>RIZEN - Contabilidad e Impuestos</dd>

            <dt>Teléfono y WhatsApp</dt>
            <dd><a href="tel:${TEL}">${TEL_HUMAN}</a><small>Lunes a viernes, 9:00 a 18:00 hrs</small></dd>

            <dt>Correo electrónico</dt>
            <dd><a href="mailto:${EMAIL}">${EMAIL}</a></dd>

            <dt>Instagram</dt>
            <dd><a href="${INSTAGRAM}" target="_blank" rel="noopener">@rizen.contadores</a></dd>

            <dt>Cobertura</dt>
            <dd>Atención 100% online en todo Chile<small>Desde Arica hasta Punta Arenas, por WhatsApp, videollamada y documentos digitales</small></dd>

            <dt>Horario de atención</dt>
            <dd>Lunes a viernes, de 9:00 a 18:00 hrs<small>Los mensajes recibidos fuera de horario se responden el siguiente día hábil</small></dd>

            <dt>Sitio web</dt>
            <dd><a href="${SITE}/">www.rizen.cl</a></dd>
          </dl>

          <h2>¿Cómo trabajamos?</h2>
          <p>Todo el servicio es <strong>remoto y digital</strong>. No necesitas ir a una oficina ni llevar carpetas: trabajamos con documentos electrónicos, firma electrónica y videollamadas.</p>
          <ol>
            <li><strong>Nos escribes</strong> por WhatsApp, teléfono o correo contándonos tu situación.</li>
            <li><strong>Agendamos una evaluación sin costo</strong> de 20 a 30 minutos para entender tu caso.</li>
            <li><strong>Te enviamos una propuesta</strong> con el plan, el precio fijo mensual y qué incluye exactamente.</li>
            <li><strong>Hacemos el onboarding</strong>: pedimos la documentación necesaria y coordinamos el traspaso si vienes de otro contador.</li>
            <li><strong>Partimos</strong> con un calendario de plazos claro y un asesor dedicado.</li>
          </ol>

          <h2>¿Qué nos conviene que nos cuentes en el primer mensaje?</h2>
          <p>Para responderte con algo útil desde el inicio, nos ayuda saber:</p>
          <ul>
            <li>Si ya tienes empresa constituida o si estás empezando.</li>
            <li>Si tu situación tributaria está al día o tienes declaraciones pendientes.</li>
            <li>Cuántas personas trabajan contigo y si tienes trabajadores contratados.</li>
            <li>Qué te gustaría resolver: ordenar la contabilidad, bajar la carga tributaria, regularizar deudas o partir de cero.</li>
          </ul>
          <p>Con eso podemos decirte de inmediato si podemos ayudarte y qué plan te corresponde.</p>

          <h2>¿Prefieres WhatsApp?</h2>
          <p>Es el canal más rápido y el que usan la mayoría de nuestros clientes. Escríbenos y te responde una persona, no un bot.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Cuál es el horario de atención?', 'Atendemos de lunes a viernes, de 9:00 a 18:00 hrs. Los mensajes recibidos fuera de ese horario se responden el siguiente día hábil.'],
    ['¿Responden rápido por WhatsApp?', 'Sí. Garantizamos respuesta en menos de 1 hora hábil dentro del horario de atención.'],
    ['¿Atienden en todo Chile?', 'Sí. Todo el servicio es 100% remoto y digital, así que atendemos desde Arica hasta Punta Arenas sin que tengas que asistir a una oficina.'],
    ['¿La primera reunión tiene costo?', 'No. La primera evaluación de tu situación es gratuita y sin compromiso. Al terminarla te enviamos una propuesta con precio fijo si decides avanzar.'],
    ['¿Puedo enviarles documentos por WhatsApp o correo?', 'Sí. Trabajamos con documentos digitales. Puedes enviárnoslos por WhatsApp, correo o una carpeta compartida, según te resulte más cómodo.']
  ],
  related: [
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual, F29 y reportes claros desde 2 UF.'],
    ['/constitucion-de-empresa/', 'Constitución de empresa', 'De la idea a facturar en días, con todo el papeleo resuelto.'],
    ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'Si tienes F29 atrasados, giros o multas.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Revisa tu régimen y deja de pagar más de lo necesario.']
  ],
  cta: ctaBand('La primera evaluación es sin costo', 'Cuéntanos cómo está tu empresa y te decimos exactamente qué necesita para estar en orden.', 'Escribir por WhatsApp')
});
