const { writePage, ctaBand, WA, WA_CTA, WA_ICON } = require('./lib');

/* ============================================================
   1. CONTABILIDAD PARA PYMES
============================================================ */
writePage({
  url: '/contabilidad-para-pymes/',
  title: 'Contabilidad para Pymes en Chile | RIZEN Contadores',
  desc: 'Contabilidad mensual para pymes en Chile: declaración de impuestos, F29, reportes claros y asesoría permanente. Precio fijo desde 2 UF. Primera evaluación gratis.',
  h1: 'Contabilidad para pymes en Chile, <em>sin sustos con el SII</em>',
  lead: 'Llevamos tu contabilidad mensual al día, declaramos tus impuestos en plazo y te entregamos reportes que sí se entienden. Tú te dedicas a hacer crecer el negocio; nosotros nos encargamos del SII.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Contabilidad para pymes' }],
  service: {
    '@type': 'Service',
    name: 'Contabilidad mensual para pymes',
    serviceType: 'Contabilidad para pymes',
    description: 'Contabilidad mensual, declaración de impuestos y reportes de resultados para pymes en Chile, con precio fijo y asesor dedicado.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Si tienes una pyme en Chile, probablemente ya te pasó: el mes se llena de boletas, facturas, transferencias y correos, y la contabilidad queda siempre para después. El problema es que el SII no espera. Cuando menos lo piensas, tienes un <strong>Formulario 29 atrasado</strong>, un giro impago o una multa que podría haberse evitado con una simple llamada.</p>
          <p>En <strong>RIZEN</strong> hacemos contabilidad mensual para pymes chilenas con una idea simple: que tengas claridad de tus números y que nunca más te enteres de un problema tributario por carta del SII.</p>

          <h2>Qué incluye nuestro servicio de contabilidad para pymes</h2>
          <ul class="check-list">
            <li><strong>Registro contable mensual</strong> de todas tus operaciones: ventas, compras, gastos y documentos tributarios.</li>
            <li><strong>Declaración y pago del F29</strong> todos los meses, dentro de plazo y con la información revisada antes de enviar.</li>
            <li><strong>Cálculo y control de PPM</strong> para que no te sorprenda la operación renta del año siguiente.</li>
            <li><strong>Conciliación bancaria</strong>: cuadramos tus movimientos con la contabilidad real del negocio.</li>
            <li><strong>Reporte mensual de resultados</strong> explicado en simple: cuánto vendiste, cuánto gastaste, cuánto debes y cuánto ganas.</li>
            <li><strong>Asesor dedicado</strong>, con nombre y apellido, disponible por WhatsApp para tus dudas del día a día.</li>
            <li><strong>Preparación del F22</strong> y de la información anual cuando corresponda a tu régimen tributario.</li>
            <li><strong>Apoyo en fiscalizaciones</strong> y requerimientos del SII si llegan.</li>
          </ul>

          <h2>Por qué las pymes tercerizan su contabilidad</h2>
          <p>Contratar un contador interno para una pyme rara vez tiene sentido económico: es un sueldo completo, más cotizaciones, más espacio, más capacitación. Y muchas pymes no tienen el volumen de operaciones que justifique ese costo.</p>
          <p>Tercerizar con un estudio contable te da tres cosas concretas:</p>
          <ol>
            <li><strong>Costo fijo y predecible.</strong> Sabes exactamente cuánto pagas cada mes, sin sorpresas.</li>
            <li><strong>Criterio tributario experto.</strong> No es solo digitar documentos: es decidir bien, a tiempo, cómo se estructura cada operación.</li>
            <li><strong>Continuidad.</strong> Si la persona encargada se va de vacaciones o renuncia, tu contabilidad no se detiene.</li>
          </ol>

          <h2>¿Cuánto cuesta un contador para pymes en Chile?</h2>
          <p>El precio depende del volumen de documentos, de si tienes trabajadores y de la complejidad de tu régimen tributario. En RIZEN trabajamos con <strong>precio fijo mensual</strong>: el plan Emprende parte <strong>desde 2 UF mensuales</strong> y los planes Pyme y Empresa se cotizan según el tamaño de tu operación.</p>
          <p>Lo importante es que sepas de antemano cuánto vas a pagar. Nada de cobros por documento, por hora o por consulta extra. Si necesitas una referencia de mercado, te la damos en la primera reunión sin compromiso.</p>

          <h2>Señales de que tu pyme necesita un contador ahora</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Tienes F29 atrasados</h3>
              <p>Los formularios impagos generan reajustes, intereses y multas que crecen cada mes. Mientras antes se regularice, más barato sale.</p>
            </div>
            <div class="info-card">
              <h3>No sabes si ganas o pierdes</h3>
              <p>Si tomas decisiones sin saber tu margen real ni tu flujo de caja, no tienes un negocio: tienes una apuesta.</p>
            </div>
            <div class="info-card">
              <h3>Tu régimen no te conviene</h3>
              <p>Muchas pymes pagan más impuestos de los necesarios simplemente porque nadie revisó su régimen tributario.</p>
            </div>
            <div class="info-card">
              <h3>Llegó una carta del SII</h3>
              <p>Una notificación o una fiscalización no se responde improvisando. Se responde con respaldo contable y criterio.</p>
            </div>
          </div>

          <h2>Cómo trabajamos mes a mes</h2>
          <p>Trabajamos 100% online, con un flujo simple y sin reuniones obligatorias:</p>
          <ol>
            <li><strong>Recibes tu calendario de plazos.</strong> Sabes qué documentos enviarnos y hasta cuándo.</li>
            <li><strong>Nos envías tus documentos</strong> por la vía que te acomode: WhatsApp, correo o carpeta compartida.</li>
            <li><strong>Nosotros procesamos y revisamos</strong> todo antes de declarar. Si algo no cuadra, te preguntamos antes de enviar.</li>
            <li><strong>Declaramos y pagamos en plazo.</strong> Te confirmamos cada declaración con su comprobante.</li>
            <li><strong>Recibes tu reporte mensual</strong> con los números de tu negocio explicados en lenguaje humano.</li>
          </ol>
          <p>Ese ciclo se repite todos los meses, sin que tú tengas que recordar nada. Y si tienes dudas en el camino, tu asesor está a un WhatsApp de distancia.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los plazos y montos vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> o con un profesional.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Trabajan con pymes de todo Chile?', 'Sí. Todo nuestro servicio es 100% remoto y digital: atendemos clientes desde Arica hasta Punta Arenas, con WhatsApp, videollamadas y documentos digitales. Tu ubicación no es una limitación.'],
    ['¿Puedo cambiarme de mi contador actual a RIZEN?', 'Sí, y es más simple de lo que imaginas. Nosotros pedimos la documentación a tu contador anterior y hacemos la transición sin interrumpir la operación de tu empresa. Tú solo nos avisas.'],
    ['¿Qué pasa si tengo contabilidad atrasada?', 'Es uno de nuestros casos más frecuentes. Revisamos el estado real de tu situación, ordenamos lo pendiente, regularizamos las declaraciones y dejamos todo al día antes de retomar la rutina mensual.'],
    ['¿Necesito tener mis documentos ordenados para empezar?', 'No. Trabajamos con lo que tengas disponible. Si falta información, te ayudamos a reconstruirla o a obtenerla de las fuentes correspondientes.'],
    ['¿Hay contrato de permanencia mínima?', 'No atamos a nadie. Puedes terminar el servicio cuando quieras y te entregamos toda tu documentación en orden para que continúes donde prefieras.']
  ],
  related: [
    ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'De la idea a facturar: SpA, EIRL y Ltda explicado paso a paso.'],
    ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'F29 atrasados, giros y multas: cómo poner tu empresa al día.'],
    ['/remuneraciones/', 'Remuneraciones y liquidaciones', 'Sueldos, AFP, salud e imposiciones calculadas y pagadas a tiempo.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Revisa tu régimen, optimiza tu carga tributaria y decide con datos.']
  ],
  cta: ctaBand('¿Listo para dejar tu contabilidad en orden?', 'Agenda tu asesoría gratuita y te mostramos exactamente qué necesita tu pyme para estar al día con el SII.', 'Quiero mi asesoría gratis')
});

/* ============================================================
   2. CONSTITUCION DE EMPRESA
============================================================ */
writePage({
  url: '/constitucion-de-empresa/',
  title: 'Constitución de Empresa en Chile: SpA, EIRL y Ltda | RIZEN',
  desc: 'Constituye tu empresa en Chile en días: SpA, EIRL o Ltda. Escritura, RUT, inicio de actividades, patente y facturación electrónica. Todo resuelto por RIZEN.',
  h1: 'Constitución de empresa en Chile: <em>de la idea a facturar</em>',
  lead: 'Nos encargamos de todo el papeleo: constitución, escritura, RUT, inicio de actividades ante el SII, patente municipal y facturación electrónica. Tú eliges el nombre; nosotros hacemos el resto.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Constitución de empresa' }],
  service: {
    '@type': 'Service',
    name: 'Constitución de empresas',
    serviceType: 'Constitución de empresas',
    description: 'Constitución de empresas en Chile: SpA, EIRL y Limitada. Escritura, RUT, inicio de actividades, patente municipal y facturación electrónica.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Formalizar tu negocio es una de esas decisiones que se postergan porque parecen complicadas. Trámites, notaría, SII, municipalidad, facturación electrónica… y en el medio, el miedo a equivocarse en la estructura y arrastrar el error por años.</p>
          <p>En <strong>RIZEN</strong> hacemos la constitución completa. Nosotros ejecutamos; tú solo tomas las decisiones importantes: qué tipo de empresa crear, cómo se llamará y quiénes serán los socios.</p>

          <h2>¿Qué tipo de empresa te conviene en Chile?</h2>
          <p>La estructura correcta depende de si tendrás socios, de cómo planeas repartir utilidades y de cuánto patrimonio quieres proteger. Estas son las tres figuras más usadas:</p>
          <table>
            <thead>
              <tr><th>Tipo</th><th>Ideal si…</th><th>Socios</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>SpA</strong> (Sociedad por Acciones)</td><td>Eres uno o varios socios, quieres flexibilidad para entrar o salir y planeas crecer.</td><td>1 o más</td></tr>
              <tr><td><strong>EIRL</strong> (Empresa Individual de Responsabilidad Limitada)</td><td>Emprendes solo, quieres separar tu patrimonio personal del negocio y mantenerlo simple.</td><td>1</td></tr>
              <tr><td><strong>Ltda</strong> (Sociedad de Responsabilidad Limitada)</td><td>Son pocos socios, se conocen bien y quieren una estructura tradicional y estable.</td><td>2 o más</td></tr>
            </tbody>
          </table>
          <p>Si no estás seguro, no pasa nada: revisamos tu caso en la primera asesoría y te recomendamos la figura que mejor calza con tu proyecto. Equivocarse aquí se paga caro después.</p>

          <h2>Los pasos de la constitución, en orden</h2>
          <ol>
            <li><strong>Definición de la estructura y el giro.</strong> Elegimos el tipo societario y redactamos el objeto social de forma que cubra tus planes futuros, no solo lo que haces hoy.</li>
            <li><strong>Constitución y escritura.</strong> Tramitamos la constitución (incluida la modalidad exprés cuando aplica) y la reducción a escritura pública ante notario.</li>
            <li><strong>Inscripción y publicación.</strong> Cumplimos los trámites registrales y de publicación que correspondan al tipo societario.</li>
            <li><strong>Obtención del RUT</strong> de la empresa ante el SII.</li>
            <li><strong>Inicio de actividades.</strong> Declaramos el inicio de actividades, los códigos de actividad económica y el régimen tributario que te corresponde.</li>
            <li><strong>Patente municipal</strong> y demás permisos según tu comuna y tu giro.</li>
            <li><strong>Habilitación de facturación electrónica</strong> y firma electrónica avanzada para que puedas emitir documentos desde el día uno.</li>
            <li><strong>Apertura de cuenta bancaria</strong> de la empresa, con la carpeta societaria lista para el banco.</li>
          </ol>

          <h2>¿Cuánto demora constituir una empresa en Chile?</h2>
          <p>En la mayoría de los casos, <strong>entre 5 y 10 días hábiles</strong> desde que tenemos todos los datos y documentos. El plazo varía según el tipo societario, si hay socios que firman de forma remota y la comuna donde se tramita la patente.</p>
          <p>Si tienes urgencia porque necesitas facturar ya, dínoslo: ordenamos los pasos para que puedas emitir tus primeros documentos lo antes posible.</p>

          <h2>Qué documentos necesitas tener a mano</h2>
          <ul class="check-list">
            <li>Cédula de identidad de cada socio (y de sus cónyuges, si aplica régimen de sociedad conyugal).</li>
            <li>Nombre y al menos dos alternativas de razón social, para evitar conflictos de nombre.</li>
            <li>Domicilio de la empresa (puede ser tu casa o una oficina; también existen domicilios comerciales).</li>
            <li>Descripción clara de a qué te vas a dedicar, para definir bien el giro y los códigos de actividad.</li>
            <li>Capital inicial estimado y forma de reparto entre socios.</li>
          </ul>
          <p>Si te falta algo, lo resolvemos juntos. No es necesario tener todo perfecto para empezar a conversar.</p>

          <h2>Los errores que más caro salen al constituir</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Elegir mal el régimen tributario</h3>
              <p>El régimen se elige al iniciar actividades y cambiarlo después tiene costo. Conviene decidirlo con proyecciones, no al azar.</p>
            </div>
            <div class="info-card">
              <h3>Giro demasiado estrecho</h3>
              <p>Si el objeto social no cubre lo que harás en dos años más, tendrás que modificar la sociedad antes de lo esperado.</p>
            </div>
            <div class="info-card">
              <h3>No separar patrimonio</h3>
              <p>Usar la cuenta personal para todo es el camino más rápido a un problema tributario y a perder el beneficio de la responsabilidad limitada.</p>
            </div>
            <div class="info-card">
              <h3>Dejar el inicio de actividades para después</h3>
              <p>Emitir boletas o facturas sin inicio de actividades vigente genera observaciones desde el primer día.</p>
            </div>
          </div>
          <p class="disclaimer">Contenido informativo. No constituye asesoría legal o tributaria personalizada. Los requisitos y plazos vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> o con un profesional.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Puedo constituir una empresa sin tener oficina?', 'Sí. Puedes usar tu domicilio particular como domicilio tributario o contratar un domicilio comercial. Lo definimos según tu comuna y tu giro.'],
    ['¿Es mejor una SpA o una EIRL?', 'Depende. La EIRL es simple y adecuada para un solo titular. La SpA es más flexible si planeas incorporar socios o inversionistas. Lo revisamos en la asesoría inicial según tu proyecto.'],
    ['¿Cuánto demora la constitución de una empresa?', 'Entre 5 y 10 días hábiles en la mayoría de los casos, dependiendo del tipo societario y de los trámites requeridos. Te mantenemos informado del avance en cada etapa.'],
    ['¿Puedo constituir la empresa con socios que viven en otra ciudad?', 'Sí. Usamos firma electrónica avanzada y trámites digitales, así que los socios no necesitan estar físicamente en la misma ciudad.'],
    ['¿Qué pasa después de constituir? ¿También llevan la contabilidad?', 'Sí. La mayoría de nuestros clientes continúan con nosotros para la contabilidad mensual y las declaraciones. Puedes partir con el plan Emprende desde 2 UF mensuales.']
  ],
  related: [
    ['/contador-para-emprendedores/', 'Contador para emprendedores', '¿Boleta de honorarios o empresa? Te ayudamos a decidir con números.'],
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual, F29 y reportes claros con precio fijo.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Elige bien tu régimen desde el primer día y no pagues de más.'],
    ['/blog/', 'Blog RIZEN', 'Guías prácticas sobre F29, SII y contabilidad para pymes.']
  ],
  cta: ctaBand('Constituye tu empresa sin perder días en trámites', 'Cuéntanos tu proyecto y te decimos qué estructura te conviene y cuánto demora tu constitución.', 'Quiero constituir mi empresa')
});

/* ============================================================
   3. REGULARIZAR DEUDAS SII
============================================================ */
writePage({
  url: '/regularizar-deudas-sii/',
  title: 'Regularizar Deudas y Multas con el SII | RIZEN Chile',
  desc: '¿F29 atrasados, giros impagos o multas del SII? Regularizamos tu situación tributaria, gestionamos rebajas cuando corresponde y dejamos tu empresa al día.',
  h1: 'Regulariza tus deudas y multas con el SII',
  lead: '¿Formularios 29 atrasados, giros impagos o multas acumuladas? Revisamos tu situación real, ordenamos lo pendiente y dejamos tu empresa limpia ante el SII.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Regularizar deudas SII' }],
  service: {
    '@type': 'Service',
    name: 'Regularización tributaria ante el SII',
    serviceType: 'Regularización de deudas y multas con el SII',
    description: 'Regularización de declaraciones atrasadas, giros impagos y multas ante el SII, con gestión de rebajas cuando corresponde por ley.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Es una situación mucho más común de lo que la gente admite. Un mes no se alcanzó a declarar, después el negocio se complicó, llegaron los giros y, cuando te diste cuenta, la deuda con el SII ya era una bola que daba miedo mirar. Entonces empieza lo peor: dejar de abrir las cartas.</p>
          <p>Queremos decirte algo con claridad: <strong>tener deudas con el SII no es el fin del negocio</strong>. Lo que realmente te complica es no regularizar. Mientras más tiempo pasa, más crecen los reajustes e intereses y más difícil se vuelve retomar la normalidad.</p>

          <h2>Qué pasa si no regularizas tu situación tributaria</h2>
          <ul>
            <li><strong>Reajustes e intereses.</strong> La deuda original se actualiza y suma intereses mes a mes.</li>
            <li><strong>Multas por declaración no presentada.</strong> Cada formulario que no se presenta puede generar multas independientes.</li>
            <li><strong>Giros y notificaciones.</strong> El SII puede emitir giros de impuestos y notificarte, iniciando procedimientos de cobro.</li>
            <li><strong>Retención de devoluciones.</strong> Si tienes una devolución de impuestos pendiente, puede quedar retenida para cubrir la deuda.</li>
            <li><strong>Problemas con facturación y proveedores.</strong> Un contribuyente con declaraciones pendientes puede quedar en una situación incómoda al momento de facturar u operar.</li>
            <li><strong>Bancos y créditos.</strong> La información tributaria es parte de tu comportamiento financiero y puede afectar el acceso a financiamiento.</li>
          </ul>

          <h2>Cómo regularizamos tu situación, paso a paso</h2>
          <ol>
            <li><strong>Diagnóstico real.</strong> Revisamos tu situación tributaria vigente para saber exactamente qué está pendiente: declaraciones, giros, multas, notificaciones. Sin dramas y sin juicios.</li>
            <li><strong>Orden de la contabilidad atrasada.</strong> Reconstruimos la información necesaria para poder declarar con respaldo real y no a ciegas.</li>
            <li><strong>Presentación de declaraciones pendientes.</strong> Ingresamos los formularios atrasados en el orden que resulta más conveniente para tu situación.</li>
            <li><strong>Gestión de multas e intereses.</strong> Revisamos si corresponden rebajas o condonaciones por aplicación de las normas vigentes, y las gestionamos cuando es posible.</li>
            <li><strong>Regularización de la deuda.</strong> Evaluamos opciones de pago, convenios y facilidades, considerando tu flujo de caja real.</li>
            <li><strong>Prevención.</strong> Una vez al día, dejamos un calendario y un flujo de trabajo para que esto no se repita.</li>
          </ol>

          <h2>¿Se pueden rebajar las multas del SII?</h2>
          <p>En ciertos casos existen mecanismos legales que permiten <strong>rebajar o condonar multas e intereses</strong>, especialmente cuando el contribuyente regulariza su situación de forma voluntaria y antes de que el SII haya notificado o determinado diferencias. No siempre aplica, y no depende solo de la voluntad.</p>
          <p>Por eso lo primero que hacemos es evaluar <strong>en qué etapa está tu caso</strong>: hay mucha diferencia entre un F29 que nunca se presentó y un procedimiento de fiscalización ya iniciado. Mientras antes conversemos, más opciones tienes.</p>

          <h2>Señales de que deberías regularizar ahora</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Dejaste de mirar el portal del SII</h3>
              <p>Si evitas entrar para no enfrentar la noticia, la deuda sigue creciendo igual. Mirarla es el primer paso.</p>
            </div>
            <div class="info-card">
              <h3>Quieres postular a financiamiento</h3>
              <p>Bancos y fondos revisan tu situación tributaria. Regularizar te abre puertas que hoy están cerradas.</p>
            </div>
            <div class="info-card">
              <h3>Recibiste notificación o giro</h3>
              <p>Los plazos de respuesta ante el SII son acotados. Un giro no contestado a tiempo complica la defensa.</p>
            </div>
            <div class="info-card">
              <h3>Estás postergando un proyecto</h3>
              <p>No puedes crecer, vender la empresa o incorporar socios mientras arrastras una deuda sin resolver.</p>
            </div>
          </div>

          <h2>Lo que necesitas para empezar</h2>
          <p>Mucho menos de lo que crees. Con tu RUT y las claves de acceso al portal del SII podemos revisar el estado de tu situación. Si tienes informes, balances o declaraciones anteriores, mejor; si no, reconstruimos la información a partir de tus documentos tributarios.</p>
          <p>La primera evaluación es sin costo y sin compromiso. No importa el tamaño del problema: importa cuánto antes lo tomemos.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada ni garantiza resultados. Las rebajas y condonaciones dependen de la normativa vigente y de las circunstancias de cada caso. Verifica en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> o con un profesional.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Es grave tener el F29 atrasado?', 'Es frecuente y tiene solución, pero no conviene dejarlo pasar: los reajustes, intereses y multas aumentan con el tiempo, y las opciones de rebaja son mejores mientras antes regularices.'],
    ['¿Van a retar por tener la contabilidad desordenada?', 'No. Nuestro trabajo es resolver, no juzgar. Revisamos la situación real y te explicamos con claridad qué pasos siguen y cuánto cuesta cada uno.'],
    ['¿Puedo regularizar si ya tengo giros emitidos?', 'Sí. Se puede revisar el estado de los giros, evaluar su procedencia y definir la estrategia de pago o de presentación de antecedentes según corresponda.'],
    ['¿Se pueden condonar las multas?', 'En algunos casos existen rebajas o condonaciones contempladas en la ley, especialmente si la regularización es voluntaria y no existe una notificación previa. Evaluamos tu caso concreto antes de prometer nada.'],
    ['¿Qué necesito para que revisen mi situación?', 'Tu RUT y acceso al portal del SII. Con eso podemos revisar declaraciones pendientes, giros y notificaciones, y hacer una primera evaluación sin costo.']
  ],
  related: [
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Una vez al día, mantén tu contabilidad mensual con precio fijo.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Revisa tu régimen y evita que la situación se repita.'],
    ['/constitucion-de-empresa/', 'Constitución de empresa', '¿Vas a partir de cero? Hazlo bien desde el primer día.'],
    ['/blog/', 'Blog RIZEN', 'Guías sobre F29, giros, multas y plazos del SII.']
  ],
  cta: ctaBand('Deja de postergar tu situación con el SII', 'Revisamos tu caso sin costo y te decimos exactamente qué está pendiente y cómo ponerlo al día.', 'Quiero regularizar mi situación')
});

/* ============================================================
   4. CONTADOR PARA EMPRENDEDORES
============================================================ */
writePage({
  url: '/contador-para-emprendedores/',
  title: 'Contador para Emprendedores en Chile | RIZEN',
  desc: 'Contador para emprendedores en Chile: boleta de honorarios o empresa, inicio de actividades, régimen Pro Pyme y contabilidad simple desde 2 UF mensuales.',
  h1: 'Contador para emprendedores: <em>parte bien desde el día uno</em>',
  lead: 'Te ayudamos a decidir si conviene boleta de honorarios o empresa, formalizamos tu negocio y llevamos tu contabilidad para que crezcas sin sustos tributarios.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Contador para emprendedores' }],
  service: {
    '@type': 'Service',
    name: 'Contabilidad para emprendedores',
    serviceType: 'Asesoría contable para emprendedores',
    description: 'Acompañamiento contable y tributario para emprendedores en Chile: elección de figura, inicio de actividades, régimen Pro Pyme y contabilidad mensual.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Emprender en Chile tiene una parte emocionante y una parte que nadie te cuenta: decidir cómo facturar, cuándo formalizar, qué régimen elegir y cómo no terminar pagando más impuestos de los necesarios por una decisión tomada a la rápida.</p>
          <p>En <strong>RIZEN</strong> acompañamos a emprendedores desde antes de constituir. Nuestro objetivo no es solo cumplir con el SII: es que entiendas tus números y tomes decisiones con información.</p>

          <h2>¿Boleta de honorarios o empresa? La pregunta del primer día</h2>
          <p>Es la decisión que más dudas genera, y la respuesta depende de tu situación real, no de una regla universal:</p>
          <table>
            <thead>
              <tr><th>Situación</th><th>Alternativa que suele convenir</th></tr>
            </thead>
            <tbody>
              <tr><td>Prestas servicios profesionales, trabajas solo y tus clientes no exigen factura de empresa.</td><td>Boleta de honorarios</td></tr>
              <tr><td>Vas a vender productos, tener trabajadores o quieres separar tu patrimonio del negocio.</td><td>Constituir empresa</td></tr>
              <tr><td>Tus clientes son empresas grandes que piden factura y contratos formales.</td><td>Constituir empresa</td></tr>
              <tr><td>Estás partiendo y aún no sabes si el proyecto va a escalar.</td><td>Depende: lo revisamos con proyecciones</td></tr>
            </tbody>
          </table>
          <p>Ojo con un punto clave: la boleta de honorarios tiene retención de impuestos y, según tu nivel de ingresos, puede terminar siendo menos conveniente que una empresa con régimen Pro Pyme. Hacer el cálculo antes de decidir te ahorra dinero real.</p>

          <h2>Qué hacemos por ti como emprendedor</h2>
          <ul class="check-list">
            <li><strong>Diagnóstico inicial.</strong> Revisamos tu proyecto, tus ingresos proyectados y tus clientes para recomendarte la figura correcta.</li>
            <li><strong>Formalización completa.</strong> Constitución de empresa, RUT, inicio de actividades, patente y facturación electrónica.</li>
            <li><strong>Elección del régimen tributario.</strong> Analizamos si te conviene el régimen Pro Pyme u otro, con proyecciones a 3 años.</li>
            <li><strong>Contabilidad mensual simple.</strong> Sin tecnicismos: cuánto entra, cuánto sale, cuánto debes y cuánto te queda.</li>
            <li><strong>Declaración del F29 y del F22</strong> dentro de plazo, siempre revisados antes de enviar.</li>
            <li><strong>Acompañamiento en tus primeras boletas y facturas.</strong> Te enseñamos a emitir y a registrar correctamente desde el principio.</li>
          </ul>

          <h2>Los tres errores que más le cuestan a un emprendedor</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Mezclar las cuentas personales con las del negocio</h3>
              <p>Es el error más común y el que más tiempo cuesta ordenar después. La cuenta bancaria separada no es un lujo: es la base de una contabilidad sana.</p>
            </div>
            <div class="info-card">
              <h3>No guardar los respaldos de gastos</h3>
              <p>Sin boletas y facturas de compra, no hay gasto acreditable. Ese dinero que ya gastaste termina transformándose en impuesto a pagar.</p>
            </div>
            <div class="info-card">
              <h3>Dejar el inicio de actividades para más adelante</h3>
              <p>Facturar sin inicio de actividades vigente genera observaciones desde el primer mes. Formalizarse toma días, no meses.</p>
            </div>
          </div>

          <h2>Emprender no debería costar un sueldo en contabilidad</h2>
          <p>Sabemos que al principio cada peso cuenta. Por eso trabajamos con <strong>precio fijo mensual</strong> y un plan de entrada pensado para emprendedores: el plan Emprende parte <strong>desde 2 UF mensuales</strong> e incluye contabilidad, declaraciones y soporte por WhatsApp.</p>
          <p>Y si todavía no decides si constituir empresa, la primera conversación es gratis. Te decimos con números qué te conviene, sin compromiso y sin venderte lo que no necesitas.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las conveniencias dependen de cada situación particular; verifica la normativa vigente en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Puedo seguir emitiendo boletas de honorarios y tener contador?', 'Sí. Muchos emprendedores parten con boletas de honorarios y nos contratan para ordenar su situación, proyectar impuestos y saber cuándo conviene dar el paso a empresa.'],
    ['¿Qué es el régimen Pro Pyme y me conviene?', 'Es un régimen tributario simplificado pensado para empresas de menor tamaño. Si te conviene o no depende de tus ingresos, tus costos y si tienes socios. Lo calculamos con proyecciones antes de que elijas.'],
    ['¿Cuánto cuesta partir con contabilidad?', 'El plan Emprende parte desde 2 UF mensuales e incluye contabilidad, declaraciones y soporte por WhatsApp. Si tu operación es muy pequeña, te lo decimos con honestidad en la primera reunión.'],
    ['¿Tengo que ir a una oficina?', 'No. Todo el proceso es 100% remoto: firma electrónica, documentos digitales y comunicación por WhatsApp o videollamada.'],
    ['¿Me ayudan si ya empecé mal?', 'Sí. Revisamos lo que hiciste, ordenamos lo que esté pendiente y dejamos tu situación al día antes de retomar la rutina mensual.']
  ],
  related: [
    ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'SpA, EIRL y Ltda explicado simple, con plazos y documentos.'],
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual, F29 y reportes claros con precio fijo.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Elige bien tu régimen y no pagues más impuestos de los necesarios.'],
    ['/blog/', 'Blog RIZEN', 'Guías prácticas para emprendedores y pymes.']
  ],
  cta: ctaBand('Parte bien y crece tranquilo', 'Conversemos sobre tu proyecto: te decimos si conviene boleta de honorarios o empresa, y cuánto te costaría tener todo en orden.', 'Quiero mi asesoría gratis')
});

/* ============================================================
   5. REMUNERACIONES
============================================================ */
writePage({
  url: '/remuneraciones/',
  title: 'Remuneraciones y Liquidaciones de Sueldo en Chile | RIZEN',
  desc: 'Liquidaciones de sueldo, AFP, salud, AFC e imposiciones calculadas y pagadas a tiempo. Remuneraciones y finiquitos sin errores ni multas.',
  h1: 'Remuneraciones y liquidaciones de sueldo, <em>al día todos los meses</em>',
  lead: 'Calculamos y pagamos las remuneraciones de tus trabajadores: liquidaciones, AFP, salud, AFC, libro de remuneraciones electrónico y finiquitos cuando corresponda.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Remuneraciones' }],
  service: {
    '@type': 'Service',
    name: 'Remuneraciones y liquidaciones de sueldo',
    serviceType: 'Remuneraciones',
    description: 'Cálculo y pago de remuneraciones en Chile: liquidaciones de sueldo, cotizaciones previsionales, libro de remuneraciones electrónico y finiquitos.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Cuando tienes trabajadores, el día 30 deja de ser una fecha más. Hay sueldos que pagar, cotizaciones que enterar, liquidaciones que entregar y un calendario de obligaciones previsionales que no perdona atrasos.</p>
          <p>Un error de cálculo no solo incomoda a tu equipo: genera diferencias previsionales, problemas con los organismos fiscalizadores y, en el peor caso, multas y demandas laborales. En <strong>RIZEN</strong> hacemos este proceso completo, mes a mes, con revisión antes de cada pago.</p>

          <h2>Qué incluye nuestro servicio de remuneraciones</h2>
          <ul class="check-list">
            <li><strong>Cálculo de remuneraciones</strong> según contrato, jornada, sueldo base y haberes variables.</li>
            <li><strong>Liquidaciones de sueldo</strong> individuales, emitidas y entregadas a cada trabajador.</li>
            <li><strong>Cotizaciones previsionales</strong>: AFP, salud (Fonasa o Isapre), AFC, indemnización a todo evento y demás descuentos legales.</li>
            <li><strong>Declaración y pago</strong> de las obligaciones previsionales en las fechas correspondientes.</li>
            <li><strong>Libro de Remuneraciones Electrónico</strong> actualizado y disponible.</li>
            <li><strong>Horas extra, bonos, comisiones y gratificaciones</strong> calculados correctamente.</li>
            <li><strong>Finiquitos y cartas de aviso</strong> cuando termina una relación laboral, con los descuentos y pagos que correspondan.</li>
            <li><strong>Certificados de renta y de cotizaciones</strong> para tus trabajadores cuando los necesiten.</li>
          </ul>

          <h2>Por qué conviene no improvisar con las remuneraciones</h2>
          <p>La legislación laboral y previsional chilena cambia con frecuencia, y los errores se acumulan silenciosamente. Un sueldo mal calculado durante ocho meses no es solo un problema de ocho meses: son ocho meses de diferencias previsionales, con reajustes e intereses.</p>
          <p>Además, hay obligaciones que suelen pasarse por alto:</p>
          <ul>
            <li>La <strong>gratificación legal</strong> cuando corresponde, que tiene reglas propias de cálculo y topes.</li>
            <li>El <strong>feriado proporcional</strong> al momento del finiquito.</li>
            <li>Los <strong>descuentos autorizados</strong>, que requieren cumplir formalidades específicas para ser válidos.</li>
            <li>El <strong>tratamiento tributario</strong> de ciertos bonos y asignaciones, que no siempre están exentos.</li>
          </ul>
          <p>Nada de esto es imposible, pero requiere a alguien que lo revise todos los meses con criterio. Eso es exactamente lo que hacemos.</p>

          <h2>Un servicio de remuneraciones, con o sin contabilidad</h2>
          <p>Algunos clientes contratan solo el servicio de remuneraciones y mantienen su contabilidad en otra parte. Otros toman el paquete completo, que es lo más eficiente porque evitamos duplicar información y ambos mundos quedan cuadrados.</p>
          <div class="info-grid">
            <div class="info-card">
              <h3>Solo remuneraciones</h3>
              <p>Calculamos, generamos liquidaciones y enteramos cotizaciones. Ideal si ya tienes contabilidad y solo necesitas esta pieza resuelta.</p>
            </div>
            <div class="info-card">
              <h3>Remuneraciones + contabilidad</h3>
              <p>El paquete completo: los costos de tu personal quedan integrados en tu contabilidad y en tu F29 sin traspasos manuales.</p>
            </div>
          </div>

          <h2>Cómo trabajamos</h2>
          <ol>
            <li><strong>Onboarding.</strong> Levantamos tus contratos, tus trabajadores y las condiciones de cada uno.</li>
            <li><strong>Calendario mensual.</strong> Te indicamos hasta cuándo necesitamos tus novedades del mes: nuevos ingresos, salidas, horas extra, bonos, licencias.</li>
            <li><strong>Cálculo y revisión.</strong> Procesamos y revisamos antes de emitir cualquier pago o declaración.</li>
            <li><strong>Envío y pago.</strong> Te entregamos las liquidaciones y ejecutamos el pago de cotizaciones.</li>
            <li><strong>Respaldo disponible.</strong> Todo queda archivado y accesible para fiscalizaciones o solicitudes de tus trabajadores.</li>
          </ol>
          <p>Si tienes trabajadores y estás llevando las remuneraciones por tu cuenta o con dudas, conversemos. La primera revisión de tu situación laboral no tiene costo.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría laboral o previsional personalizada. Las obligaciones y montos vigentes deben verificarse en los organismos correspondientes o con un profesional.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Puedo contratar solo remuneraciones y no la contabilidad?', 'Sí. Ofrecemos el servicio de remuneraciones de forma independiente. Si más adelante quieres integrarlo con tu contabilidad, la transición es simple.'],
    ['¿Qué pasa si tengo un trabajador con contrato part-time?', 'Se calculan sus remuneraciones y cotizaciones según jornada y contrato, con los proporcionales que correspondan. Trabajamos con contratos de todo tipo de jornada.'],
    ['¿Hacen finiquitos y cartas de aviso?', 'Sí. Preparamos la carta de aviso y el finiquito con los cálculos correspondientes: feriado proporcional, indemnizaciones si aplican y descuentos legales.'],
    ['¿Se encargan del Libro de Remuneraciones Electrónico?', 'Sí. Lo mantenemos actualizado y disponible, junto con los certificados que tus trabajadores puedan necesitar.'],
    ['¿Qué necesitan para partir?', 'Los contratos vigentes de tus trabajadores, sus datos previsionales y de salud, y el detalle de sus remuneraciones actuales. Con eso hacemos el onboarding.']
  ],
  related: [
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'El paquete completo: contabilidad, impuestos y remuneraciones integrados.'],
    ['/asesoria-tributaria/', 'Asesoría tributaria', 'Revisa el tratamiento tributario de bonos y asignaciones.'],
    ['/regularizar-deudas-sii/', 'Regularizar deudas SII', 'Pon al día declaraciones atrasadas y evita multas.'],
    ['/blog/', 'Blog RIZEN', 'Guías prácticas sobre contabilidad y obligaciones laborales.']
  ],
  cta: ctaBand('Ordena tus remuneraciones de una vez', 'Revisamos tu situación con trabajadores y te mostramos cómo quedaría el proceso mensual.', 'Quiero ordenar mis remuneraciones')
});

/* ============================================================
   6. ASESORIA TRIBUTARIA
============================================================ */
writePage({
  url: '/asesoria-tributaria/',
  title: 'Asesoría Tributaria para Empresas en Chile | RIZEN',
  desc: 'Asesoría tributaria permanente para empresas y pymes en Chile: revisión de régimen, planificación, PPM, F22 y decisiones con respaldo técnico.',
  h1: 'Asesoría tributaria para <em>decidir con criterio y no pagar de más</em>',
  lead: 'Revisamos tu régimen tributario, planificamos tus impuestos dentro de la ley y te acompañamos en las decisiones importantes de tu empresa.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Asesoría tributaria' }],
  service: {
    '@type': 'Service',
    name: 'Asesoría tributaria',
    serviceType: 'Asesoría tributaria',
    description: 'Asesoría tributaria permanente para pymes y empresas en Chile: análisis de régimen, planificación, PPM, F22 y apoyo en fiscalizaciones.',
    provider: { '@id': 'https://www.rizen.cl/#business' },
    areaServed: { '@type': 'Country', name: 'Chile' }
  },
  body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Pagar impuestos es inevitable. Pagar más de lo que correspondía por no revisar tu régimen tributario, por no aprovechar un beneficio o por decidir sin números, es opcional.</p>
          <p>La asesoría tributaria no es solo para empresas grandes. De hecho, los mayores ahorros suelen aparecer en pymes y emprendedores que nunca revisaron si su estructura estaba bien armada para lo que realmente hacen.</p>

          <h2>Qué hacemos en asesoría tributaria</h2>
          <ul class="check-list">
            <li><strong>Diagnóstico de tu situación tributaria.</strong> Revisamos tu régimen, tus declaraciones y detectamos inconsistencias o riesgos.</li>
            <li><strong>Análisis de conveniencia de régimen.</strong> Evaluamos si el régimen que tienes es el que mejor te calza, con proyecciones numéricas.</li>
            <li><strong>Planificación tributaria dentro de la ley.</strong> Ordenamos tus decisiones —inversiones, retiros, estructura de costos— para que el resultado tributario sea el correcto, no el accidental.</li>
            <li><strong>Control de PPM.</strong> Ajustamos tus pagos provisionales para que la operación renta no te tome por sorpresa.</li>
            <li><strong>Preparación del F22</strong> y de la información anual exigida por tu régimen.</li>
            <li><strong>Análisis de beneficios e incentivos tributarios</strong> que puedan aplicar a tu actividad.</li>
            <li><strong>Apoyo en fiscalizaciones y requerimientos</strong> del SII, con respaldo contable y argumentación técnica.</li>
            <li><strong>Consultas del día a día</strong>, respondidas por un profesional, no por un foro de internet.</li>
          </ul>

          <h2>Por qué revisar el régimen tributario puede cambiar tus números</h2>
          <p>En Chile existen distintos regímenes tributarios para las empresas, con reglas diferentes de tributación, retiros y contabilidad. Elegir bien —y reevaluarlo cuando la empresa crece— puede significar diferencias relevantes en tu carga tributaria anual.</p>
          <p>El problema es que la mayoría de las pymes eligió su régimen el día del inicio de actividades, en cinco minutos, sin proyecciones. Y no volvió a mirarlo nunca. Ese es exactamente el tipo de decisión que conviene revisar al menos una vez al año, especialmente cuando:</p>
          <ul>
            <li>Tus ingresos crecieron o cambiaron de composición.</li>
            <li>Incorporaste socios o cambió la forma de repartir utilidades.</li>
            <li>Empezaste a invertir en activos o a contratar personal.</li>
            <li>Recibes ingresos de distintas fuentes o del exterior.</li>
          </ul>

          <h2>Asesoría puntual o acompañamiento permanente</h2>
          <div class="info-grid">
            <div class="info-card">
              <h3>Revisión puntual</h3>
              <p>Un análisis acotado de tu situación tributaria y recomendaciones concretas. Útil si solo quieres una segunda opinión profesional.</p>
            </div>
            <div class="info-card">
              <h3>Acompañamiento mensual</h3>
              <p>Asesoría continua integrada a tu contabilidad. Consultas respondidas en el día, control de PPM y revisión anual del régimen.</p>
            </div>
          </div>
          <p>Si tomas la asesoría junto con la contabilidad mensual, el costo marginal es bajo y el beneficio es mayor: el asesor ya conoce tu negocio en detalle y las recomendaciones dejan de ser genéricas.</p>

          <h2>Cuándo conviene conversar con un asesor tributario</h2>
          <ul>
            <li>Antes de pedir financiamiento o incorporar un socio.</li>
            <li>Antes de hacer una inversión importante.</li>
            <li>Cuando recibes una notificación o requerimiento del SII.</li>
            <li>Cuando tus ventas crecieron fuerte y no sabes si tu estructura sigue siendo adecuada.</li>
            <li>Cuando quieres entender, de una vez, por qué pagas lo que pagas.</li>
          </ul>
          <p>La primera evaluación es sin costo. Nos cuentas cómo está tu empresa y te decimos, con honestidad, si hay algo que revisar o si ya estás bien encaminado.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los regímenes, beneficios y efectos dependen de la normativa vigente y de cada caso particular. Verifica en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
  faq: [
    ['¿Qué es la planificación tributaria y es legal?', 'Es organizar tus decisiones de negocio de manera consistente con la ley, para que el resultado tributario sea el que corresponde. Planificar no es evadir: la evasión es un delito. Trabajamos exclusivamente dentro del marco legal.'],
    ['¿Cómo sé si mi régimen tributario es el correcto?', 'Se analiza con proyecciones: ingresos esperados, estructura de costos, si tienes socios y cómo planeas retirar utilidades. En una reunión te mostramos si tu régimen actual te conviene o no.'],
    ['¿Cada cuánto conviene revisar la situación tributaria?', 'Al menos una vez al año, y siempre que ocurra un cambio relevante: crecimiento fuerte, nuevos socios, inversiones o financiamiento.'],
    ['¿Me representan ante el SII?', 'Acompañamos y preparamos la respuesta técnica a requerimientos y fiscalizaciones. Para representación formal con mandato específico, lo definimos según el caso.'],
    ['¿La asesoría tributaria incluye la contabilidad?', 'Son servicios distintos, pero se pueden tomar juntos. De hecho, cuando van juntos las recomendaciones son mucho más precisas porque conocemos tu operación completa.']
  ],
  related: [
    ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'La base sobre la que se construye cualquier buena decisión tributaria.'],
    ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'F29 atrasados, giros y multas: cómo volver a la normalidad.'],
    ['/constitucion-de-empresa/', 'Constitución de empresa', 'El régimen se elige al partir. Elígelo bien.'],
    ['/blog/', 'Blog RIZEN', 'Guías sobre F29, F22, regímenes y plazos del SII.']
  ],
  cta: ctaBand('Revisemos tu situación tributaria sin costo', 'Conversemos y te decimos si tu régimen, tus PPM o tu estructura tienen espacio de mejora.', 'Quiero mi asesoría gratis')
});
