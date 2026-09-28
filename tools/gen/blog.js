const { writePage, ctaBand, SITE, TODAY } = require('./lib');

function postLd(p) {
  return {
    '@type': 'BlogPosting',
    '@id': `${SITE}${p.url}#article`,
    headline: p.h1.replace(/<[^>]+>/g, ''),
    description: p.desc,
    inLanguage: 'es-CL',
    datePublished: p.dateISO,
    dateModified: p.dateISO,
    author: { '@id': `${SITE}/#organization` },
    publisher: { '@id': `${SITE}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}${p.url}` },
    image: `${SITE}/img/og-rizen.jpg`,
    articleSection: p.category,
    isPartOf: { '@id': `${SITE}/#website` }
  };
}

function meta(p) {
  return `<p class="post-header__meta">Publicado el ${p.dateHuman} · ${p.read} de lectura · ${p.category}</p>`;
}

const POSTS = [
  {
    url: '/blog/como-pagar-f29-chile/',
    title: 'Cómo Pagar el F29 en Chile, Paso a Paso | RIZEN',
    desc: 'Qué es el Formulario 29, quién debe presentarlo, cuándo vence y cómo declararlo y pagarlo en el portal del SII sin cometer errores.',
    h1: 'Cómo pagar el F29 en Chile, paso a paso',
    lead: 'El Formulario 29 es la declaración mensual de impuestos que más dudas genera. Te explicamos qué es, quién debe presentarlo y cómo hacerlo sin errores.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Impuestos',
    excerpt: 'Qué es el F29, quién debe presentarlo, cuándo vence y cómo declararlo y pagarlo sin errores.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Si tienes una empresa o actividad comercial en Chile, el <strong>Formulario 29</strong> probablemente sea el documento tributario con el que más veces vas a tratar en el año. Es mensual, y por lo mismo, es también el que más fácilmente se atrasa.</p>

          <h2>¿Qué es el Formulario 29?</h2>
          <p>El F29 es la <strong>declaración mensual de impuestos</strong> que se presenta ante el Servicio de Impuestos Internos. En un mismo formulario se declaran y pagan distintos impuestos que pueden afectar a tu actividad, entre ellos:</p>
          <ul>
            <li>El <strong>IVA</strong> de tus ventas y servicios afectos.</li>
            <li>Los <strong>PPM</strong> (pagos provisionales mensuales) que abonan a tu impuesto a la renta anual.</li>
            <li>Las <strong>retenciones</strong> que hayas practicado a terceros, por ejemplo en ciertos pagos a proveedores.</li>
            <li>Otros impuestos específicos según el giro de tu empresa.</li>
          </ul>
          <p>La lógica es simple: todo lo que se declara y paga mes a mes, se declara en el F29. Lo que se declara una vez al año, va en el F22.</p>

          <h2>¿Quién debe presentar el F29?</h2>
          <p>En general, quienes desarrollan actividades afectas a IVA y quienes están obligados a pagar PPM o practicar retenciones. Eso incluye a la mayoría de las empresas, comercios y prestadores de servicios afectos.</p>
          <p>Existen situaciones particulares: hay contribuyentes de menor tamaño que quedan relevados de ciertas obligaciones, y hay quienes, aun facturando poco, deben presentar el formulario igualmente. <strong>La obligación de declarar no desaparece porque el monto sea cero.</strong> Un F29 sin movimiento igual se presenta.</p>

          <h2>¿Cuándo vence el F29?</h2>
          <p>El F29 corresponde al mes anterior y se presenta dentro de los primeros días del mes siguiente. Los plazos exactos varían según el tipo de contribuyente y el medio de declaración, por lo que conviene confirmarlos cada mes en el calendario oficial del SII.</p>
          <p>Lo importante: <strong>anota la fecha en tu calendario con anticipación</strong>. Sobre eso, tu contador debería avisarte antes de cada vencimiento, no después.</p>

          <h2>Cómo presentarlo y pagarlo, paso a paso</h2>
          <ol>
            <li><strong>Reúne la información del mes.</strong> Ventas, compras, facturas emitidas y recibidas, boletas y documentos de servicios.</li>
            <li><strong>Registra y clasifica los documentos.</strong> Aquí es donde se define el resultado: un documento mal clasificado cambia el impuesto a pagar.</li>
            <li><strong>Calcula el resultado.</strong> Diferencia entre el IVA débito y el crédito fiscal, más los PPM y retenciones que correspondan.</li>
            <li><strong>Ingresa al portal del SII</strong> con tu RUT y clave, y accede a la declaración del F29.</li>
            <li><strong>Completa el formulario</strong> con los valores y verifica el resultado antes de enviar.</li>
            <li><strong>Envía y paga.</strong> Puedes pagar en línea o generar el documento para pago presencial, según prefieras.</li>
            <li><strong>Guarda el comprobante.</strong> Es tu respaldo de que la declaración se presentó y se pagó dentro de plazo.</li>
          </ol>

          <h2>Los errores más comunes con el F29</h2>
          <ul>
            <li><strong>Olvidar el formulario porque "no hubo movimiento".</strong> Se declara igual, aunque el monto sea cero.</li>
            <li><strong>Clasificar mal un documento.</strong> Un gasto mal registrado puede significar pagar más IVA del que correspondía.</li>
            <li><strong>No aprovechar el crédito fiscal</strong> de facturas de compra que sí eran utilizables.</li>
            <li><strong>Presentarlo tarde.</strong> Genera multas, reajustes e intereses que se acumulan mes a mes.</li>
            <li><strong>No revisar antes de enviar.</strong> Corregir después implica declaraciones rectificatorias y, a veces, costos adicionales.</li>
          </ul>

          <h2>Qué pasa si no presentas el F29</h2>
          <p>Además de las multas por la declaración no presentada, el incumplimiento reiterado puede derivar en giros, notificaciones y retención de devoluciones. Y sobre todo: <strong>las opciones de regularizar de forma conveniente se reducen con el tiempo</strong>.</p>
          <p>Si ya tienes formularios atrasados, lo más importante es no seguir acumulando meses. Revisa nuestra guía sobre <a href="/regularizar-deudas-sii/">cómo regularizar deudas con el SII</a> o escríbenos directamente.</p>

          <h2>¿Y si prefieres no encargarte de esto?</h2>
          <p>Es una decisión razonable. El F29 no es difícil solo por el formulario: es difícil por lo que hay detrás, que es la contabilidad del mes bien llevada. Cuando esa base está ordenada, declarar toma minutos.</p>
          <p>En RIZEN preparamos y presentamos el F29 todos los meses, revisando antes de enviar. Revisa nuestro servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los plazos, tasas y obligaciones vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Qué pasa si presento el F29 fuera de plazo?', 'El formulario se puede presentar igual, pero se generan multas, reajustes e intereses por el atraso. Mientras antes regularices, menor es el costo acumulado.'],
      ['¿Debo presentar el F29 si no tuve ventas ese mes?', 'En general sí: la obligación de declarar no depende de si hubo movimiento. Si tu situación particular te releva de hacerlo, conviene confirmarlo con un profesional.'],
      ['¿El F29 reemplaza al F22?', 'No. El F29 es mensual y cubre impuestos como IVA, PPM y retenciones. El F22 es la declaración anual de renta. Son formularios distintos y complementarios.'],
      ['¿Puedo corregir un F29 ya presentado?', 'Sí, mediante una declaración rectificatoria. Si la corrección aumenta el impuesto a pagar, pueden aplicarse multas e intereses.'],
      ['¿Pueden hacerlo por mí todos los meses?', 'Sí. En RIZEN preparamos, revisamos y presentamos el F29 mensualmente, con precio fijo y sin cobros por documento.']
    ],
    related: [
      ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'F29 atrasados, giros y multas: cómo volver a la normalidad.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'La base ordenada que hace que declarar sea simple.'],
      ['/blog/multas-y-giros-impagos-sii/', 'Multas y giros impagos del SII', 'Qué son, cuándo aparecen y cómo enfrentarlos.'],
      ['/blog/cuando-necesito-un-contador/', '¿Cuándo necesitas un contador?', 'Señales claras de que es momento de delegar.'],
    ],
    cta: ctaBand('Deja el F29 en manos de profesionales', 'Preparamos, revisamos y presentamos tu F29 todos los meses, dentro de plazo.', 'Quiero delegar mi F29')
  },

  {
    url: '/blog/multas-y-giros-impagos-sii/',
    title: 'Multas y Giros Impagos del SII: Qué Son y Qué Hacer | RIZEN',
    desc: 'Qué son los giros y las multas del SII, por qué aparecen, cómo se calculan y cuál es la estrategia correcta para enfrentarlos y regularizarse.',
    h1: 'Multas y giros impagos del SII: qué son y qué hacer',
    lead: 'Recibir un giro o una notificación del SII asusta, pero tiene solución. Te explicamos qué son, por qué aparecen y cómo enfrentarlos con criterio.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Impuestos',
    excerpt: 'Qué son los giros y multas del SII, por qué aparecen y cómo regularizarse con criterio.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Pocas cosas generan más ansiedad en un emprendedor que abrir el portal del SII y encontrar un giro o una notificación. La reacción habitual es cerrar la pestaña y esperar que se resuelva solo. Nunca se resuelve solo.</p>

          <h2>¿Qué es un giro del SII?</h2>
          <p>Un giro es una <strong>liquidación de impuestos</strong> que emite el SII cuando determina que existe una diferencia de impuestos a pagar. Es el resultado de una revisión: puede originarse en una declaración mal ingresada, en una diferencia detectada entre lo que declaraste y la información que el SII tiene de terceros, o en una fiscalización.</p>
          <p>Un giro no es lo mismo que una multa. Un giro cobra el <strong>impuesto</strong> que se habría dejado de pagar; la multa es la <strong>sanción</strong> asociada al incumplimiento. Muchas veces llegan juntos.</p>

          <h2>¿Qué es una multa del SII?</h2>
          <p>Las multas se aplican por incumplimientos formales o de fondo: no presentar una declaración, presentarla fuera de plazo, no emitir documentos, no llevar contabilidad cuando corresponde, o declarar información incorrecta.</p>
          <p>Según el caso, las multas pueden expresarse en <strong>unidades tributarias mensuales</strong> o como un porcentaje del impuesto involucrado. El monto concreto depende de la norma aplicable y de las circunstancias.</p>

          <h2>Las causas más frecuentes</h2>
          <ul>
            <li><strong>Declaraciones no presentadas</strong>, especialmente F29 de meses en que el negocio estuvo detenido.</li>
            <li><strong>Diferencias entre lo declarado y la información de terceros</strong>: facturas emitidas a tu nombre que no registraste, por ejemplo.</li>
            <li><strong>Contabilidad no llevada al día</strong>, que impide respaldar las cifras declaradas.</li>
            <li><strong>Errores en la clasificación</strong> de documentos y crédito fiscal mal utilizado.</li>
            <li><strong>Ventas no declaradas</strong>, que el SII puede detectar por cruce de información.</li>
          </ul>

          <h2>Por qué no conviene ignorar un giro</h2>
          <p>El SII otorga plazos acotados para responder o reclamar. Si no se hace nada dentro de esos plazos:</p>
          <ul>
            <li>El giro puede quedar <strong>firme</strong> y pasar a cobro.</li>
            <li>Se suman reajustes e intereses.</li>
            <li>Se pierde la posibilidad de presentar antecedentes que pudieran modificar la determinación.</li>
            <li>La situación puede escalar a procedimientos de cobro más intensos.</li>
          </ul>
          <p>La diferencia entre un caso simple y un caso complicado casi siempre es el tiempo transcurrido.</p>

          <h2>Cómo enfrentarlos, paso a paso</h2>
          <ol>
            <li><strong>No improvisar la respuesta.</strong> Un giro se contesta con respaldo contable, no con explicaciones generales.</li>
            <li><strong>Revisar el fundamento.</strong> Entender exactamente qué período cubre, qué impuesto determina y en qué se basó el SII.</li>
            <li><strong>Verificar la procedencia.</strong> No todo giro está correctamente determinado. A veces hay diferencias que se pueden aclarar con antecedentes.</li>
            <li><strong>Evaluar los plazos.</strong> Definir si corresponde presentar antecedentes, reclamar o regularizar.</li>
            <li><strong>Analizar rebajas.</strong> En ciertos casos la ley contempla mecanismos de condonación o rebaja de multas e intereses.</li>
            <li><strong>Regularizar y prevenir.</strong> Una vez resuelto, dejar un sistema que evite que vuelva a ocurrir.</li>
          </ol>

          <h2>¿Se pueden rebajar las multas y los intereses?</h2>
          <p>En algunos casos sí. La normativa tributaria contempla mecanismos de condonación y rebaja que se aplican bajo ciertas condiciones, habitualmente cuando el contribuyente regulariza voluntariamente su situación y antes de que exista una notificación o determinación previa.</p>
          <p>Por eso la regla es simple: <strong>mientras antes se aborde el problema, mejores son las opciones</strong>. Cada mes de silencio reduce el margen de acción.</p>

          <h2>El costo real de no regularizar</h2>
          <p>Más allá del monto, el costo más alto suele ser otro: dejar de facturar con tranquilidad, postergar proyectos, perder acceso a financiamiento y vivir con la sensación de que algo te va a explotar.</p>
          <p>Hemos visto muchas empresas pasar meses evitando sus cartas del SII. La conversación de una hora que ordena todo casi nunca es tan mala como se imagina. Y en la mayoría de los casos, existe una ruta concreta de solución.</p>
          <p>Si estás en esta situación, revisa nuestro servicio para <a href="/regularizar-deudas-sii/">regularizar deudas y multas con el SII</a> o escríbenos directamente.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada ni garantiza resultados. Las multas, rebajas y condonaciones dependen de la normativa vigente y de las circunstancias de cada caso. Verifica en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Qué diferencia hay entre un giro y una multa?', 'El giro determina y cobra el impuesto que se considera adeudado. La multa es la sanción pecuniaria por el incumplimiento. Pueden emitirse juntos o por separado.'],
      ['¿Cuánto tiempo tengo para responder un giro?', 'Existen plazos acotados definidos en la normativa para presentar antecedentes o reclamar. Como varían según el caso, conviene revisarlos de inmediato al recibir la notificación.'],
      ['¿Puedo reclamar si no estoy de acuerdo con el giro?', 'Sí, existen instancias administrativas y judiciales para reclamar giros improcedentes. Requiere argumentación técnica y respaldo documental.'],
      ['Si no tuve ventas, ¿igual debo declarar?', 'En general sí. La obligación de declarar no desaparece por no tener movimiento, y el incumplimiento es una de las causas más comunes de multas.'],
      ['¿Pueden revisar mi caso antes de que crezca?', 'Sí, y es exactamente lo que recomendamos. La primera evaluación de tu situación tributaria es sin costo.']
    ],
    related: [
      ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'El servicio completo para volver a la normalidad.'],
      ['/blog/como-pagar-f29-chile/', 'Cómo pagar el F29 paso a paso', 'La declaración mensual que evita muchos de estos problemas.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'Revisa tu situación y evita que se repita.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'La base ordenada que te protege ante el SII.'],
    ],
    cta: ctaBand('Resolvamos tu situación con el SII', 'Revisamos tu caso sin costo y te decimos exactamente qué está pendiente y cómo enfrentarlo.', 'Quiero revisar mi caso')
  },

  {
    url: '/blog/cuando-necesito-un-contador/',
    title: '¿Cuándo Necesita un Contador tu Pyme? 7 Señales | RIZEN',
    desc: 'Siete señales concretas de que tu pyme necesita un contador en Chile: F29 atrasados, decisiones sin datos, régimen mal elegido y más.',
    h1: '¿Cuándo necesita un contador tu pyme? 7 señales claras',
    lead: 'No hay un tamaño mínimo para necesitar un contador. Hay señales. Estas son las siete que vemos con más frecuencia en pymes chilenas.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '5 minutos',
    category: 'Pymes',
    excerpt: 'Siete señales concretas de que tu pyme ya necesita un contador, y qué puedes esperar al contratar uno.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>La pregunta no es si tu pyme es suficientemente grande para tener un contador. La pregunta es si estás tomando decisiones importantes sin información suficiente. Si la respuesta es sí, el tamaño es lo de menos.</p>

          <h2>1. Tienes formularios atrasados</h2>
          <p>Si en algún momento dejaste de declarar el F29 porque "el mes fue malo", ya hay un problema. Los formularios no presentados acumulan multas, reajustes e intereses, y la única forma de detener el crecimiento de esa deuda es enfrentarla.</p>

          <h2>2. No sabes cuánto ganas realmente</h2>
          <p>Puedes facturar mucho y no tener ganancias. Puedes tener buena caja y mal margen. La diferencia entre facturar y ganar solo aparece cuando la contabilidad está al día y alguien la traduce en números que entiendas.</p>

          <h2>3. Tomas decisiones mirando el saldo del banco</h2>
          <p>La cuenta bancaria no dice si te alcanza para pagar el IVA del mes, cuánto reservar para los PPM, ni si el proyecto que evalúas conviene tributariamente. Es un muy mal panel de control.</p>

          <h2>4. Nunca revisaste tu régimen tributario</h2>
          <p>Si elegiste tu régimen el día del inicio de actividades y no lo volviste a mirar, es muy probable que exista espacio de mejora. Este es, de lejos, el punto donde encontramos los ahorros más grandes.</p>

          <h2>5. Tienes trabajadores y el proceso de sueldos es un caos</h2>
          <p>Cuando hay contratos, cotizaciones, licencias y bonos, el margen de error se estrecha. Un cálculo equivocado no solo incomoda: genera diferencias previsionales y eventuales conflictos laborales.</p>

          <h2>6. Recibiste una carta, un giro o un requerimiento</h2>
          <p>Este es el momento en que muchas pymes contratan su primer contador. Es válido, pero habría salido mucho más económico hacerlo antes. Si ya tienes una notificación, los plazos de respuesta son acotados.</p>

          <h2>7. Estás postergando crecer por miedo a lo tributario</h2>
          <p>Quieres contratar, comprar maquinaria, abrir un segundo local o incorporar un socio, pero la sola idea de la estructura tributaria te frena. Eso es una señal de que necesitas un asesor más que un contador de escritorio.</p>

          <h2>Qué puedes esperar al contratar un contador</h2>
          <p>Un buen servicio contable te entrega cuatro cosas concretas:</p>
          <ul>
            <li><strong>Cumplimiento:</strong> declaraciones presentadas en plazo, sin multas evitables.</li>
            <li><strong>Claridad:</strong> reportes mensuales que puedes leer y usar para decidir.</li>
            <li><strong>Criterio:</strong> alguien que te diga cuándo conviene una decisión y cuándo no.</li>
            <li><strong>Respaldo:</strong> contabilidad ordenada y disponible si el SII pregunta algo.</li>
          </ul>

          <h2>¿Y cuánto cuesta?</h2>
          <p>Menos de lo que la gente supone. En RIZEN el plan para pymes parte <strong>desde 2 UF mensuales</strong>, con precio fijo y sin cobros por documento ni por consulta. Comparado con el costo de una multa, un giro impago o un mes de sueldo de un contador interno, la aritmética es clara.</p>
          <p>Si dudas si tu pyme ya lo necesita, la conversación inicial es gratis y sin compromiso. Revisa también nuestro servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría contable o tributaria personalizada. Verifica la normativa vigente en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Mi pyme es muy chica para tener contador?', 'La necesidad no depende del tamaño sino de la complejidad y del riesgo. Si tienes trabajadores, obligaciones mensuales o dudas tributarias, ya hay razones suficientes.'],
      ['¿Puedo tener contador y seguir emitiendo boletas de honorarios?', 'Sí. Muchos profesionales lo hacen y aprovechan la asesoría para proyectar cuándo conviene dar el paso a empresa.'],
      ['¿Es más barato un contador que hacerlo yo mismo?', 'Depende del valor de tu tiempo y del riesgo. Si tu contabilidad está bien y al día, quizás. Si tienes atrasos, el costo de aprender por prueba y error suele ser mayor.'],
      ['¿Cuánto cuesta el servicio de contabilidad de RIZEN?', 'El plan Emprende parte desde 2 UF mensuales. Los planes Pyme y Empresa se cotizan según el tamaño y la complejidad de cada operación.'],
      ['¿Puedo empezar solo con una revisión y decidir después?', 'Sí. La primera evaluación es gratuita y sin compromiso. Te decimos qué encontraríamos y qué se puede mejorar.']
    ],
    related: [
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual, F29 y reportes claros con precio fijo.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'El punto donde aparecen los ahorros más grandes.'],
      ['/remuneraciones/', 'Remuneraciones y liquidaciones', 'Si tienes trabajadores, esto no debería ser un caos.'],
      ['/blog/', 'Blog RIZEN', 'Todas las guías prácticas de contabilidad y tributos.']
    ],
    cta: ctaBand('¿Tu pyme ya necesita un contador?', 'Hagamos el diagnóstico: te decimos con honestidad si necesitas un servicio completo o solo una revisión puntual.', 'Quiero el diagnóstico gratis')
  },

  {
    url: '/blog/cambio-de-contador/',
    title: 'Cómo Cambiar de Contador sin Dolores de Cabeza | RIZEN',
    desc: 'Cambiar de contador en Chile es más simple de lo que parece. Qué documentos pedir, cómo hacer la transición y qué no debes aceptar de un estudio contable.',
    h1: 'Cómo cambiar de contador sin dolores de cabeza',
    lead: 'Cambiar de estudio contable no debería ser un drama. Te explicamos cómo hacer la transición ordenada y qué exigir para no perder información en el camino.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '5 minutos',
    category: 'Pymes',
    excerpt: 'Qué documentos pedir, cómo hacer la transición y qué no aceptar al cambiar de estudio contable.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Muchas pymes siguen con el mismo contador durante años, no porque estén conformes, sino porque cambiar parece complicado. La transición a un nuevo estudio contable suele ser más ordenada y rápida de lo que la gente teme.</p>

          <h2>Señales de que es momento de cambiar</h2>
          <ul>
            <li>Entregas tu documentación y <strong>no recibes reportes</strong>: solo te avisan cuánto pagar.</li>
            <li>Las declaraciones se presentan <strong>a último minuto o fuera de plazo</strong>.</li>
            <li>Preguntas algo y la respuesta es <strong>"eso se ve en la operación renta"</strong>.</li>
            <li>No tienes claridad de <strong>qué régimen tributario</strong> tiene tu empresa ni por qué.</li>
            <li>Aparecen multas o giros que <strong>nadie te había advertido</strong>.</li>
            <li>Tu contador no responde o responde tarde, justo cuando lo necesitas.</li>
          </ul>
          <p>Ninguna de estas cosas es normal. La contabilidad es un servicio profesional, y como tal debería tener estándares de respuesta y calidad.</p>

          <h2>Qué documentos te tienen que entregar</h2>
          <p>Esta es la parte que más preocupa, y en la que no se debe ceder. Al terminar la relación, el estudio contable debe entregarte la información que es tuya:</p>
          <ul>
            <li><strong>Balance y estados financieros</strong> de los períodos cerrados.</li>
            <li><strong>Libros contables</strong>: libro diario, libro mayor e inventarios.</li>
            <li><strong>Declaraciones presentadas</strong>: F29, F22, F50 y demás formularios del período.</li>
            <li><strong>Comprobantes de pago</strong> de impuestos y cotizaciones.</li>
            <li><strong>Documentación de respaldo</strong>: facturas, boletas y conciliaciones bancarias.</li>
            <li><strong>Respaldo de remuneraciones</strong>: liquidaciones, libro de remuneraciones y finiquitos, si aplica.</li>
          </ul>
          <p>Todo esto es información de tu empresa. Un cambio de contador no debería implicar perder el historial ni empezar de cero.</p>

          <h2>Cómo hacemos la transición en RIZEN</h2>
          <ol>
            <li><strong>Nosotros pedimos la información.</strong> Tú nos autorizas y nosotros gestionamos el traspaso con tu contador anterior. No tienes que ser el mensajero incómodo.</li>
            <li><strong>Auditamos lo que llegó.</strong> Revisamos que la información esté completa y cuadre. Si falta algo, lo pedimos nosotros.</li>
            <li><strong>Hacemos un diagnóstico.</strong> Revisamos tu situación tributaria real antes de retomar la rutina, para detectar cualquier pendiente oculto.</li>
            <li><strong>Definimos el calendario.</strong> Establecemos plazos, responsables y el canal de comunicación contigo.</li>
            <li><strong>Continuamos sin interrupciones.</strong> El cambio no debería afectar tus declaraciones ni tu calendario tributario.</li>
          </ol>

          <h2>¿Qué pasa si mi contador anterior no entrega la información?</h2>
          <p>Es una situación incómoda pero que se puede abordar. Existen vías para reconstruir la contabilidad a partir de la documentación tributaria disponible —tus declaraciones, tus documentos electrónicos, la información que el propio SII mantiene— y para solicitar formalmente lo que corresponde.</p>
          <p>Cuéntanos el caso concreto: es más común de lo que imaginas y tenemos experiencia resolviéndolo.</p>

          <h2>Cuándo es buen momento para cambiar</h2>
          <p>No hay un mes ideal universal, pero conviene evitar cambiar justo en medio de una operación renta o de una fiscalización en curso, salvo que la situación lo exija. En el resto de los casos, mientras antes mejor: cada mes que pasa con un servicio que no funciona es un mes de información que hay que ordenar después.</p>
          <p>Si estás evaluando el cambio, revisa nuestro servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a> y conversemos sin compromiso.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría legal o tributaria personalizada. Verifica los procedimientos vigentes en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> o con un profesional.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Es complicado cambiar de contador?', 'No, si el nuevo estudio se encarga del traspaso. En RIZEN solicitamos la documentación al contador anterior y auditamos que llegue completa antes de continuar.'],
      ['¿Tengo que avisarle a mi contador anterior?', 'Sí, es lo correcto y suele facilitar el traspaso. Nosotros coordinamos los detalles técnicos para que tú no tengas que gestionarlos.'],
      ['¿Pierdo información si cambio de contador?', 'No deberías. La información contable y tributaria es de tu empresa y debe entregarse al cierre de la relación. Si no lo hacen, existen vías para reconstruirla.'],
      ['¿Puedo cambiarme en cualquier momento del año?', 'Sí, aunque conviene evitar hacerlo en medio de una operación renta o una fiscalización en curso, salvo que la situación lo requiera.'],
      ['¿Cuánto demora la transición?', 'Depende del volumen de documentación y de la rapidez con que se obtenga del estudio anterior. En la mayoría de los casos, el proceso se completa dentro de las primeras semanas.']
    ],
    related: [
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Lo que deberías esperar de tu servicio de contabilidad.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'Para que el cambio venga acompañado de criterio, no solo de tareas.'],
      ['/regularizar-deudas-sii/', 'Regularizar deudas con el SII', 'Por si al hacer el traspaso aparecen pendientes.'],
      ['/blog/cuando-necesito-un-contador/', '¿Cuándo necesitas un contador?', 'Siete señales para tomar la decisión.'],
    ],
    cta: ctaBand('Cámbiate a RIZEN sin complicaciones', 'Nosotros pedimos la información a tu contador actual y hacemos la transición sin interrumpir tu operación.', 'Quiero cambiarme de contador')
  }
];

// Articulos adicionales (boletas de honorarios, PPM, finiquito, Pro Pyme).
// Se agregan aqui para que aparezcan tambien en el indice del blog.
POSTS.push(...require('./blog-extra'));

POSTS.forEach(p => {
  p.ogType = 'article';
  p.postMeta = meta(p);
  p.breadcrumb = [{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: p.h1.replace(/<[^>]+>/g, '') }];
  p.ldExtra = [postLd(p)];
  writePage(p);
});

/* ============================================================
   INDICE DEL BLOG
============================================================ */
writePage({
  url: '/blog/',
  title: 'Blog de Contabilidad y Tributación para Pymes | RIZEN',
  desc: 'Guías prácticas sobre contabilidad, F29, multas del SII, remuneraciones y pymes en Chile, explicadas simple por contadores de RIZEN.',
  h1: 'Blog RIZEN: <em>contabilidad y tributos, explicados simple</em>',
  lead: 'Guías prácticas para dueños de pymes y emprendedores en Chile. Sin tecnicismos innecesarios: lo que necesitas entender para tomar mejores decisiones y no tener problemas con el SII.',
  breadcrumb: [{ label: 'Inicio', href: '/' }, { label: 'Blog' }],
  ldExtra: [
    {
      '@type': 'Blog',
      '@id': `${SITE}/blog/#blog`,
      name: 'Blog RIZEN',
      description: 'Guías prácticas sobre contabilidad, impuestos y gestión para pymes y emprendedores en Chile.',
      url: `${SITE}/blog/`,
      inLanguage: 'es-CL',
      publisher: { '@id': `${SITE}/#organization` },
      blogPost: POSTS.map(p => ({ '@type': 'BlogPosting', '@id': `${SITE}${p.url}#article`, headline: p.h1.replace(/<[^>]+>/g, ''), url: `${SITE}${p.url}`, datePublished: p.dateISO }))
    }
  ],
  body: `    <section class="page-section">
      <div class="container">
        <div class="post-list">
${POSTS.map(p => `          <a class="post-card" href="${p.url}">
            <span class="post-card__meta">${p.category} · ${p.read}</span>
            <h2 class="post-card__title">${p.h1.replace(/<[^>]+>/g, '')}</h2>
            <p class="post-card__excerpt">${p.excerpt}</p>
          </a>`).join('\n')}
        </div>

        <h2 style="font-family:var(--font-display);font-size:clamp(22px,2.6vw,28px);font-weight:700;letter-spacing:-.015em;margin-top:52px;">¿Prefieres que lo hagamos por ti?</h2>
        <p style="font-size:16.5px;line-height:1.75;color:#38505A;margin-top:12px;">Llevamos tu contabilidad mensual, declaramos tus impuestos y te acompañamos en las decisiones. Precio fijo y asesor dedicado.</p>
        <div class="related-grid">
          <a class="related-card" href="/contabilidad-para-pymes/"><strong>Contabilidad para pymes</strong><span>Contabilidad mensual, F29 y reportes claros desde 2 UF.</span></a>
          <a class="related-card" href="/asesoria-tributaria/"><strong>Asesoría tributaria</strong><span>Revisa tu régimen y deja de pagar más de lo necesario.</span></a>
          <a class="related-card" href="/regularizar-deudas-sii/"><strong>Regularizar deudas SII</strong><span>F29 atrasados, giros y multas: vuelve a la normalidad.</span></a>
          <a class="related-card" href="/remuneraciones/"><strong>Remuneraciones</strong><span>Sueldos, cotizaciones y finiquitos bien calculados.</span></a>
        </div>
      </div>
    </section>`,
  related: [],
  cta: ctaBand('¿Te ayudamos con tu caso?', 'Agenda una asesoría gratuita y conversemos sobre la situación real de tu empresa.', 'Quiero mi asesoría gratis')
});
