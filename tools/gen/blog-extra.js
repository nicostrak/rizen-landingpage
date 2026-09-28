const { ctaBand } = require('./lib');

/* ============================================================
   ARTICULOS ADICIONALES DEL BLOG
   Datos verificados a sept-2026:
   - Retencion boletas honorarios: Ley 21.133 (15,25% en 2026)
   - PPM / IDPC Pro Pyme: Ley 21.755 (rebaja transitoria 2025-2027)
   - Finiquito: Codigo del Trabajo arts. 73, 161, 162, 163, 169, 177
   Cada articulo: title, desc, h1, lead, fecha, categoria, excerpt,
   body, faq, related y cta.
============================================================ */

module.exports = [

  /* ---------- 1. BOLETA DE HONORARIOS 2026 ---------- */
  {
    url: '/blog/boleta-de-honorarios-2026/',
    title: 'Boleta de Honorarios 2026: Retención 15,25% | RIZEN',
    desc: 'En 2026 la retención de boletas de honorarios es 15,25%. Revisa la tabla de alzas hasta 2028, quién retiene, cómo se declara en el F29 y qué pasa con tus cotizaciones.',
    h1: 'Boleta de honorarios 2026: la retención sube a 15,25%',
    lead: 'Cada año el porcentaje cambia, y usar una tabla antigua te hace calcular mal tu líquido. Te explicamos cuánto te descuentan en 2026, por qué, y cómo se declara.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Boletas de honorarios',
    excerpt: 'La retención llega a 15,25% en 2026. Tabla de alzas hasta 2028, quién retiene y cómo se declara.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Si trabajas a honorarios en Chile, cada año te descuentan un porcentaje distinto de tus boletas. Y no es un detalle menor: usar la tasa de un año anterior te hace calcular mal el monto líquido que vas a recibir, y también el anticipo de impuestos que estás pagando.</p>
          <p>En <strong>2026 la retención de boletas de honorarios es de 15,25%</strong> sobre el monto bruto. Te explicamos de dónde sale ese número y qué significa en la práctica.</p>

          <h2>Por qué la retención sube todos los años</h2>
          <p>La <strong>Ley N° 21.133</strong> incorporó a los trabajadores independientes al sistema de protección social (salud, pensiones y seguro de accidentes del trabajo). Para financiar esa cobertura, estableció un <strong>aumento gradual de la retención</strong>: comenzó en 10% y sube 0,75 puntos cada año hasta llegar a 17% en 2028, con un último salto de 1 punto.</p>

          <h2>Tabla de retención por año</h2>
          <table>
            <thead>
              <tr><th>Año de emisión</th><th>Retención</th></tr>
            </thead>
            <tbody>
              <tr><td>2023</td><td>13%</td></tr>
              <tr><td>2024</td><td>13,75%</td></tr>
              <tr><td>2025</td><td>14,5%</td></tr>
              <tr><td><strong>2026</strong></td><td><strong>15,25%</strong></td></tr>
              <tr><td>2027</td><td>16%</td></tr>
              <tr><td>2028</td><td>17%</td></tr>
            </tbody>
          </table>
          <p>Después de 2028 la tasa se mantiene en 17%, salvo que una nueva ley la modifique.</p>

          <h2>Un detalle que casi todos confunden</h2>
          <blockquote>La tasa depende del <strong>año en que emites la boleta</strong>, no del "año tributario".</blockquote>
          <p>Son dos cosas distintas y mezclarlas lleva a errores de cálculo:</p>
          <ul>
            <li>Las boletas emitidas <strong>durante 2026</strong> llevan 15,25% y se declararán en la Operación Renta de <strong>2027</strong>.</li>
            <li>La Operación Renta de <strong>2026</strong> (la que se hace en abril de 2026) liquida las rentas obtenidas en <strong>2025</strong>, cuyas boletas llevaron 14,5%.</li>
          </ul>
          <p>Por eso, cuando alguien dice "la tasa del año tributario 2026 es 14,5%", está describiendo el año anterior. Para todo lo que emitas este año, la referencia correcta es <strong>15,25%</strong>.</p>

          <h2>Cómo se calcula en la práctica</h2>
          <p>La fórmula es simple:</p>
          <ul>
            <li><strong>Retención</strong> = monto bruto × 15,25%</li>
            <li><strong>Líquido que recibe</strong> = monto bruto − retención</li>
          </ul>
          <p>Ejemplo: por una boleta de <strong>$500.000</strong> brutos, la retención es <strong>$76.250</strong> y recibes aproximadamente <strong>$423.750</strong>. Por una de <strong>$1.000.000</strong>, la retención es $152.500 y recibes $847.500.</p>
          <p>Ojo con un punto práctico: si acordaste un monto <strong>líquido</strong> con tu cliente, tienes que calcular el bruto "hacia arriba" para que la retención no salga de tu bolsillo. Es el error de cotización más común al boletar.</p>

          <h2>Quién practica la retención</h2>
          <p>No todos los clientes retienen. Están obligados a hacerlo las instituciones fiscales y semifiscales, las municipalidades, las personas jurídicas en general y las personas que obtengan rentas de primera categoría obligadas a llevar contabilidad.</p>
          <p>Si tu cliente <strong>no</strong> tiene la calidad de agente retenedor, recibes el monto bruto completo. En ese caso <strong>tú</strong> debes declarar y pagar el equivalente al 15,25% como <strong>PPM</strong> a través del Formulario 29.</p>

          <h2>Qué pasa con la plata retenida</h2>
          <p>La retención no es un impuesto que "se pierde". Cumple dos funciones:</p>
          <ol>
            <li><strong>Financia tus cotizaciones previsionales</strong> obligatorias como trabajador independiente (AFP, salud y seguro de accidentes).</li>
            <li><strong>Se imputa como crédito</strong> en tu Operación Renta, contra el impuesto global complementario que te corresponda.</li>
          </ol>
          <p>Es decir, es un <strong>pago a cuenta</strong>. Si en el año retuvieron más de lo que terminó siendo tu impuesto, la diferencia se te devuelve.</p>

          <h2>Errores frecuentes al boletar</h2>
          <ul>
            <li><strong>Usar una tasa desactualizada</strong> en cotizaciones y presupuestos. En 2026 es 15,25%, no 14,5%.</li>
            <li><strong>Calcular el líquido desde un valor bruto cuando acordaste líquido.</strong> Terminas recibiendo menos de lo pactado.</li>
            <li><strong>No declarar el PPM</strong> cuando tu cliente no es agente retenedor.</li>
            <li><strong>No guardar el registro de boletas emitidas y retenciones.</strong> Sin ese detalle no puedes verificar el crédito en abril.</li>
            <li><strong>Asumir que la retención reemplaza la Operación Renta.</strong> Igual debes declarar tu renta anual.</li>
          </ul>

          <h2>¿Te conviene seguir a honorarios o dar el paso a empresa?</h2>
          <p>Depende de tus ingresos, de quiénes son tus clientes y de si quieres separar tu patrimonio del negocio. Con la retención subiendo año a año y la cotización obligatoria, cada vez más profesionales revisan la aritmética de constituir una empresa.</p>
          <p>Hacemos ese cálculo contigo: revisa nuestra <a href="/asesoria-tributaria/">asesoría tributaria</a> o, si estás evaluando formalizarte, el servicio de <a href="/constitucion-de-empresa/">constitución de empresa</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las tasas y obligaciones vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>. El calendario descrito corresponde a la Ley N° 21.133.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuál es la retención de boletas de honorarios en 2026?', '15,25% sobre el monto bruto de la boleta, conforme al calendario gradual de la Ley N° 21.133. En 2027 sube a 16% y en 2028 llega a 17%.'],
      ['¿La tasa depende del año tributario o del año de emisión?', 'Del año en que emites la boleta. Las boletas emitidas durante 2026 llevan 15,25% y se liquidan en la Operación Renta de 2027.'],
      ['¿Qué pasa si mi cliente no me retiene?', 'Si no tiene la calidad de agente retenedor, recibes el monto bruto y eres tú quien debe declarar y pagar el equivalente a 15,25% como PPM en el Formulario 29.'],
      ['¿La retención se pierde?', 'No. Financia tus cotizaciones previsionales obligatorias y además se imputa como crédito contra tu impuesto en la Operación Renta. Si retuvieron de más, se te devuelve.'],
      ['¿Puedo dejar de boletar y pasar a empresa?', 'Es una decisión que depende de tus ingresos, tus clientes y tu patrimonio. En una asesoría evaluamos con números si te conviene constituir una empresa y acogerte al régimen Pro Pyme.']
    ],
    related: [
      ['/blog/que-es-el-ppm/', '¿Qué es el PPM y cómo se calcula?', 'El anticipo mensual de impuestos que pagas junto al F29.'],
      ['/blog/regimen-pro-pyme-2026/', 'Régimen Pro Pyme 2026', 'Requisitos y tasas si estás evaluando formalizarte.'],
      ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'De la idea a facturar: SpA, EIRL y Ltda explicado.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'Calcula con números si te conviene empresa u honorarios.']
    ],
    cta: ctaBand('¿Te está quedando claro cuánto pagas de impuestos?', 'Revisamos tu situación, proyectamos tus retenciones y te decimos qué figura te conviene.', 'Quiero mi asesoría gratis')
  },

  /* ---------- 2. QUE ES EL PPM ---------- */
  {
    url: '/blog/que-es-el-ppm/',
    title: '¿Qué es el PPM y Cómo se Calcula en 2026? | RIZEN',
    desc: 'El PPM es el anticipo mensual del impuesto a la renta que pagas con el F29. Revisa las tasas 2026 según tu régimen, la base de cálculo y cuándo te devuelven lo pagado de más.',
    h1: '¿Qué es el PPM y cómo se calcula en 2026?',
    lead: 'Es el anticipo mensual del impuesto a la renta que se paga junto al F29. Si se calcula bien, la Operación Renta deja de ser una sorpresa de abril.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '7 minutos',
    category: 'Impuestos',
    excerpt: 'Tasas de PPM vigentes en 2026 según tu régimen, la base de cálculo y por qué a veces te devuelven.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>El <strong>PPM</strong> (Pago Provisional Mensual) es un <strong>anticipo del impuesto a la renta</strong>. En vez de pagar todo tu impuesto anual de una sola vez en abril, el sistema te obliga a ir abonando mes a mes un porcentaje de tus ventas.</p>
          <p>Se paga junto con el <a href="/blog/como-pagar-f29-chile/">Formulario 29</a>, así que si ya declaras F29, es muy probable que ya estés pagando PPM sin llamarlo por su nombre.</p>

          <h2>Cuál es la base de cálculo</h2>
          <p>Este es el punto donde más errores se cometen: <strong>la base son tus ventas netas, sin IVA</strong>.</p>
          <ul>
            <li>Facturas, boletas y documentos emitidos del mes: se suman.</li>
            <li>El <strong>IVA débito no forma parte de la base</strong>. Ese IVA no es tuyo, es un impuesto que recaudas y entregas al Estado.</li>
            <li>Sobre el total neto se aplica la tasa que corresponda a tu régimen.</li>
          </ul>
          <p>Si calculas el PPM sobre el total con IVA, vas a estar pagando de más todos los meses. Parece poco, pero un 19% de diferencia en la base se acumula año a año.</p>

          <h2>Tasas de PPM vigentes en 2026</h2>
          <p>La tasa depende de tu régimen tributario:</p>
          <table>
            <thead>
              <tr><th>Régimen</th><th>Tasa PPM 2026</th></tr>
            </thead>
            <tbody>
              <tr><td>Pro Pyme General (art. 14 D N°3), ingresos hasta 50.000 UF</td><td>0,125% <small>(normal 0,25%)</small></td></tr>
              <tr><td>Pro Pyme General, ingresos sobre 50.000 UF</td><td>0,25% <small>(normal 0,5%)</small></td></tr>
              <tr><td>Pro Pyme Transparente (art. 14 D N°8), hasta 50.000 UF</td><td>0,2%</td></tr>
              <tr><td>Pro Pyme Transparente, sobre 50.000 UF</td><td>0,5%</td></tr>
              <tr><td>Régimen General (art. 14 A)</td><td>Variable: se recalcula cada año</td></tr>
            </tbody>
          </table>
          <p>En el <strong>año de inicio de actividades</strong> se aplican las tasas de entrada: 0,25% en Pro Pyme General y 0,2% en Transparente.</p>

          <h2>Por qué algunas tasas están a la mitad</h2>
          <p>La <strong>Ley N° 21.755</strong>, publicada en julio de 2025, rebajó transitoriamente a la mitad el PPM y el Impuesto de Primera Categoría de las empresas acogidas al régimen Pro Pyme, para los ejercicios <strong>2025, 2026 y 2027</strong>. Por eso ves 0,125% en vez de 0,25%.</p>
          <p>Dos precisiones importantes:</p>
          <ul>
            <li>La rebaja <strong>solo aplica al Pro Pyme General</strong> (14 D N°3). El Transparente (14 D N°8) mantiene su 0,2%, porque a nivel de empresa está liberado del Impuesto de Primera Categoría.</li>
            <li>El beneficio está <strong>condicionado</strong> a que se cumplan los hitos de cotización previsional adicional de la reforma de pensiones (1% en 2025, 3,5% en 2026, 4,25% en 2027).</li>
          </ul>

          <h2>Ejemplo de cálculo</h2>
          <p>Una pyme en Pro Pyme General factura <strong>$7.000.000 netos</strong> en el mes:</p>
          <ul>
            <li>IVA débito (19%): $1.330.000 — <strong>no entra en la base</strong>.</li>
            <li>Base del PPM: $7.000.000.</li>
            <li>Tasa 2026: 0,125%.</li>
            <li><strong>PPM a pagar: $8.750</strong>.</li>
          </ul>
          <p>Con la tasa normal (0,25%) habría sido $17.500. La rebaja transitoria, en este caso, ahorra $8.750 al mes.</p>

          <h2>El PPM no es un impuesto extra</h2>
          <p>Es un <strong>pago a cuenta</strong>. Todo lo que pagaste de PPM durante el año se descuenta de tu impuesto a la renta anual en la Operación Renta (Formulario 22). De ahí salen tres escenarios posibles:</p>
          <ul>
            <li><strong>Pagaste de menos:</strong> te corresponde una diferencia a pagar en abril.</li>
            <li><strong>Pagaste justo:</strong> no pasa nada.</li>
            <li><strong>Pagaste de más:</strong> el SII te devuelve la diferencia.</li>
          </ul>
          <p>Y aquí está el punto: un PPM mal calculado no te hace pagar más impuesto, pero <strong>te descuadra el flujo de caja</strong>. Si pagas de menos durante el año, en abril llega una cuenta que no tenías presupuestada. Si pagas de mucho más, le prestaste plata al Estado sin intereses.</p>

          <h2>Errores frecuentes con el PPM</h2>
          <ul>
            <li><strong>Incluir el IVA en la base.</strong> Es el error más común y el más caro.</li>
            <li><strong>No actualizar la tasa</strong> cuando el SII la recalcula (ocurre después de tu primer F22 declarado).</li>
            <li><strong>Olvidar que el año de inicio</strong> tiene una tasa distinta a la de los años siguientes.</li>
            <li><strong>No revisar el saldo</strong> durante el año, y llevarse la sorpresa en abril.</li>
            <li><strong>Confundir el PPM con las retenciones de boletas de honorarios</strong>, que siguen su propia tabla.</li>
          </ul>

          <h2>Cómo lo manejamos nosotros</h2>
          <p>En RIZEN calculamos el PPM cada mes, sobre la base correcta y con la tasa que te corresponde, y revisamos el saldo acumulado para anticiparte si va a haber diferencia en abril. Es parte de nuestro servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a>.</p>
          <p>Si tu régimen no te convence o no sabes cuál tienes, revisa la <a href="/asesoria-tributaria/">asesoría tributaria</a>: muchas pymes descubren ahí que estaban pagando más de lo necesario.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las tasas y condiciones vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> y en la Circular N° 53 de 2025 del SII.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿El PPM es un impuesto que se pierde?', 'No. Es un pago a cuenta del impuesto a la renta anual: se descuenta en la Operación Renta y, si pagaste de más, el SII te devuelve la diferencia.'],
      ['¿Sobre qué monto se calcula el PPM?', 'Sobre las ventas netas del mes, es decir sin el IVA débito. Incluir el IVA en la base es el error más frecuente y hace que pagues de más.'],
      ['¿Cuál es la tasa de PPM en 2026 para una Pro Pyme?', 'En el régimen Pro Pyme General es 0,125% (la mitad de la tasa normal de 0,25%) por la rebaja transitoria de la Ley 21.755. En el Pro Pyme Transparente es 0,2%.'],
      ['¿Por qué mi tasa de PPM cambió respecto del año pasado?', 'Depende de tu régimen y de tus ingresos. El SII recalcula la tasa después de tu primer F22 declarado, y la Ley 21.755 redujo transitoriamente la tasa del Pro Pyme General para 2025-2027.'],
      ['¿Qué pasa si no pago el PPM?', 'El PPM es obligatorio. Su omisión genera reajustes, intereses y multas, además de una diferencia a pagar en la Operación Renta. Si tienes PPM atrasados, conviene revisar tu situación a la brevedad.']
    ],
    related: [
      ['/blog/boleta-de-honorarios-2026/', 'Retención de boletas de honorarios 2026', 'La tabla de alzas de la Ley 21.133, año por año.'],
      ['/blog/regimen-pro-pyme-2026/', 'Régimen Pro Pyme 2026', 'Requisitos y tasas: 12,5% transitorio en Primera Categoría.'],
      ['/blog/como-pagar-f29-chile/', 'Cómo pagar el F29 paso a paso', 'El formulario donde se declara y paga el PPM.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Calculamos tu PPM y controlamos el saldo del año.']
    ],
    cta: ctaBand('Que abril no te tome por sorpresa', 'Revisamos tus PPM, tu régimen y te decimos si vas camino a pagar de más o de menos.', 'Quiero mi asesoría gratis')
  },

  /* ---------- 3. FINIQUITO ---------- */
  {
    url: '/blog/como-calcular-finiquito/',
    title: 'Finiquito en Chile 2026: Qué Incluye y Cómo se Calcula | RIZEN',
    desc: 'Qué debe incluir un finiquito, cómo se calcula el feriado proporcional y la indemnización por años de servicio, y qué cambia según la causal de término.',
    h1: 'Finiquito en Chile: qué incluye y cómo se calcula',
    lead: 'La causal de término lo cambia todo: no todos los despidos pagan indemnización por años de servicio. Te explicamos qué corresponde en cada caso.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '7 minutos',
    category: 'Remuneraciones',
    excerpt: 'Los conceptos que incluye, cómo se calculan el feriado proporcional y la indemnización, y los topes legales.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>El <strong>finiquito</strong> es el documento que liquida todo lo que la empresa le debe al trabajador hasta el último día de la relación laboral. Bien hecho, cierra el vínculo sin conflictos. Mal hecho, es la antesala de una demanda.</p>
          <p>Y hay un dato que sorprende a muchos: <strong>la causal que aparece en la carta de despido no es un detalle administrativo</strong>. Es la variable que determina si corresponde indemnización por años de servicio, si hay mes de aviso y cuánto vale cada uno.</p>

          <h2>El plazo legal para pagarlo</h2>
          <p>Según el <strong>artículo 177 del Código del Trabajo</strong>, el finiquito debe otorgarse y ponerse su pago a disposición del trabajador dentro de los <strong>10 días hábiles siguientes</strong> a la separación. Solo si ambas partes lo acuerdan se puede pactar pago en cuotas, y ese acuerdo debe ratificarse ante un ministro de fe.</p>
          <p>Si el empleador no paga dentro de plazo, el trabajador puede exigir un <strong>recargo del 150%</strong> sobre el monto adeudado (artículo 169).</p>

          <h2>Qué debe incluir un finiquito</h2>
          <ul>
            <li><strong>Remuneraciones pendientes:</strong> los días trabajados del último mes que no se alcanzaron a pagar.</li>
            <li><strong>Feriado proporcional:</strong> las vacaciones devengadas y no tomadas.</li>
            <li><strong>Gratificación proporcional</strong> y bonos o comisiones devengadas, cuando correspondan.</li>
            <li><strong>Indemnización sustitutiva del aviso previo</strong>, si el empleador no avisó con 30 días de anticipación (artículo 161).</li>
            <li><strong>Indemnización por años de servicio</strong>, cuando la causal la genera.</li>
            <li><strong>Descuentos legales o pactados</strong>, como anticipos de sueldo, cuando procedan.</li>
          </ul>

          <h2>La causal de término es la variable clave</h2>
          <table>
            <thead>
              <tr><th>Causal</th><th>Indemnización por años</th><th>Mes de aviso</th></tr>
            </thead>
            <tbody>
              <tr><td>Mutuo acuerdo (art. 159 N°1)</td><td>No, salvo pacto</td><td>No</td></tr>
              <tr><td>Renuncia voluntaria (art. 159 N°2)</td><td>No</td><td>No</td></tr>
              <tr><td>Vencimiento del plazo (art. 159 N°4)</td><td>No, salvo pacto</td><td>No</td></tr>
              <tr><td><strong>Necesidades de la empresa (art. 161)</strong></td><td><strong>Sí</strong></td><td><strong>Sí, si no avisó con 30 días</strong></td></tr>
              <tr><td>Falta grave (art. 160)</td><td>No, si se acredita</td><td>No</td></tr>
            </tbody>
          </table>
          <p>En otras palabras: si el contrato termina por <strong>renuncia o mutuo acuerdo</strong>, se pagan los haberes pendientes y el feriado proporcional, pero <strong>no</strong> corresponde indemnización por años de servicio. Y el feriado proporcional, en cambio, <strong>se paga siempre</strong>, cualquiera sea la causal.</p>

          <h2>Cómo se calcula el feriado proporcional</h2>
          <p>En Chile corresponden <strong>15 días hábiles de vacaciones por año</strong>, lo que equivale a <strong>1,25 días hábiles por cada mes trabajado</strong>. El procedimiento del artículo 73 del Código del Trabajo es:</p>
          <ol>
            <li>Dividir los días de feriado anual por 12: <strong>15 ÷ 12 = 1,25</strong> días por mes.</li>
            <li>Multiplicar por los meses y fracciones acumulados desde la contratación (o desde la última anualidad).</li>
            <li>Contar esos días <strong>en el calendario</strong> a partir del día siguiente al término del contrato, <strong>sumando también sábados, domingos y festivos</strong> que caigan en ese período.</li>
            <li>Multiplicar el total por el <strong>valor diario</strong> de la remuneración.</li>
          </ol>
          <p>El paso 3 es el que más se omite. Los días hábiles se "estiran" al contarlos en el calendario, así que el monto final suele ser mayor a lo que un cálculo apurado sugiere.</p>
          <p>El valor diario depende del tipo de remuneración: el sueldo, si es fija; el promedio de los últimos tres meses trabajados, si es variable; o el sueldo más el promedio de lo variable, si es mixta.</p>

          <h2>Cómo se calcula la indemnización por años de servicio</h2>
          <p>Regulada en el <strong>artículo 163</strong>, equivale a <strong>30 días de la última remuneración mensual por cada año de servicio</strong>, considerando como año completo la fracción superior a seis meses. Tiene dos topes que conviene memorizar:</p>
          <ul>
            <li><strong>Tope de años:</strong> máximo <strong>11 años</strong> de indemnización.</li>
            <li><strong>Tope de la base:</strong> la remuneración mensual usada para el cálculo tiene un límite de <strong>90 UF</strong>.</li>
          </ul>
          <p>Si el trabajador tiene remuneraciones variables, la base es el promedio de las últimas tres remuneraciones mensuales.</p>

          <h2>El mes de aviso</h2>
          <p>Cuando el término es por necesidades de la empresa, el empleador debe avisar con <strong>30 días de anticipación</strong>. Si no lo hace, debe pagar la <strong>indemnización sustitutiva del aviso previo</strong>: un mes de remuneración completo. No se prorratea por los días que faltaron.</p>

          <h2>La firma del finiquito</h2>
          <p>Para que el finiquito sea legalmente oponible, debe firmarse ante un <strong>ministro de fe</strong>: notario, inspector del trabajo o un dirigente sindical. Firmarlo solo con dos testigos es válido únicamente en los casos que la ley permite, y es una fuente frecuente de conflictos posteriores.</p>
          <p>Si al revisar el finiquito hay diferencias, conviene dejar constancia escrita antes de firmar. Existe la figura de la <strong>firma con reserva de derechos</strong>, que permite cobrar diferencias después.</p>

          <h2>Plazos para reclamar</h2>
          <ul>
            <li><strong>60 días hábiles</strong> desde el despido para impugnar un despido injustificado o la causal aplicada.</li>
            <li><strong>2 años</strong> para cobrar remuneraciones, feriado y gratificaciones adeudadas.</li>
            <li><strong>60 días hábiles</strong> para reclamar cotizaciones previsionales impagas.</li>
          </ul>

          <h2>Los errores que más plata cuestan</h2>
          <ul>
            <li><strong>Calcular la indemnización solo sobre el sueldo base</strong>, omitiendo bonos y comisiones habituales.</li>
            <li><strong>No incluir la gratificación proporcional</strong> cuando la empresa la paga.</li>
            <li><strong>Olvidar el paso del calendario</strong> en el feriado proporcional.</li>
            <li><strong>Ignorar los topes</strong> de 11 años y 90 UF, pagando más o menos de lo que corresponde.</li>
            <li><strong>No avisar con 30 días</strong> y llevarse la sorpresa del mes de aviso.</li>
          </ul>

          <h2>Si tienes trabajadores, esto se calcula todos los meses</h2>
          <p>El finiquito es la parte visible, pero el trabajo de fondo es tener las liquidaciones, cotizaciones y contratos al día mes a mes. Eso es lo que evita las diferencias que después aparecen en un finiquito o en una fiscalización. Revisa nuestro servicio de <a href="/remuneraciones/">remuneraciones y liquidaciones</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría laboral o legal personalizada. Los montos y procedimientos deben verificarse en el <a href="https://www.dt.gob.cl" target="_blank" rel="noopener nofollow">Código del Trabajo y la Dirección del Trabajo</a> o con un profesional.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Siempre corresponde indemnización por años de servicio?', 'No. Solo cuando la causal la genera, principalmente por necesidades de la empresa (artículo 161). En renuncia voluntaria, mutuo acuerdo o vencimiento del plazo, no corresponde como regla general.'],
      ['¿Cuál es el tope de la indemnización por años de servicio?', 'Tiene dos topes: máximo 11 años de servicio indemnizables, y la remuneración usada como base tiene un tope de 90 UF (artículos 163 y 172 del Código del Trabajo).'],
      ['¿En cuánto tiempo deben pagarme el finiquito?', 'Dentro de los 10 días hábiles siguientes al término de la relación laboral, salvo acuerdo de pago en cuotas ratificado ante ministro de fe. Si no se paga en plazo, procede un recargo del 150%.'],
      ['Si renuncio, ¿me pagan las vacaciones?', 'Sí. El feriado proporcional se paga siempre, cualquiera sea la causal de término, incluida la renuncia. Lo que cambia según la causal es la indemnización por años de servicio.'],
      ['¿Es obligatorio firmar el finiquito ante notario?', 'Para que sea plenamente oponible debe firmarse ante un ministro de fe: notario, inspector del trabajo o dirigente sindical. Si tienes dudas sobre los montos, puedes firmar con reserva de derechos y reclamar las diferencias después.']
    ],
    related: [
      ['/remuneraciones/', 'Remuneraciones y liquidaciones', 'Sueldos, cotizaciones y finiquitos bien calculados.'],
      ['/blog/cambio-de-contador/', 'Cómo cambiar de contador', 'Qué revisar en el traspaso, incluidas liquidaciones y finiquitos.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'El tratamiento tributario de bonos y asignaciones.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'El respaldo contable que evita sorpresas laborales.']
    ],
    cta: ctaBand('¿Finiquitos y liquidaciones te quitan tiempo?', 'Nos encargamos del cálculo mensual, las cotizaciones y los finiquitos cuando corresponda.', 'Quiero ordenar mis remuneraciones')
  },

  /* ---------- 4. REGIMEN PRO PYME ---------- */
  {
    url: '/blog/regimen-pro-pyme-2026/',
    title: 'Régimen Pro Pyme 2026: Tasas y Requisitos | RIZEN',
    desc: 'Requisitos del Régimen Pro Pyme y diferencias entre el 14 D N°3 y el N°8. Tasas 2026: 12,5% transitorio de Primera Categoría y PPM reducido a la mitad.',
    h1: 'Régimen Pro Pyme 2026: requisitos y tasas de cada opción',
    lead: 'Dentro del Pro Pyme viven dos regímenes distintos, y la diferencia de impuestos es grande. Te explicamos cómo elegir y por qué la tasa está rebajada ahora.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '8 minutos',
    category: 'Pymes',
    excerpt: '14 D N°3 vs N°8, requisitos para ser Pyme y las tasas rebajadas de 2026. Cómo elegir bien.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Si tienes una pyme en Chile, es muy probable que estés en el <strong>Régimen Pro Pyme</strong>. El problema es que casi nadie revisa si eligió la opción que le convenía, y ahí es donde se paga la diferencia.</p>
          <p>Porque "Pro Pyme" no es un solo régimen: dentro del <strong>artículo 14 letra D</strong> de la Ley sobre Impuesto a la Renta conviven <strong>dos números</strong> con lógicas tributarias distintas. Y además, durante 2025-2027 hay una <strong>rebaja transitoria de tasas</strong> que muchos contribuyentes no están aprovechando bien.</p>

          <h2>Primero: ¿califica tu empresa como Pyme?</h2>
          <p>Antes de elegir régimen, hay que cumplir los requisitos generales:</p>
          <ul class="check-list">
            <li><strong>Capital efectivo inicial</strong> no superior a <strong>85.000 UF</strong> al iniciar actividades.</li>
            <li><strong>Ingresos brutos:</strong> el promedio de los últimos tres ejercicios no debe superar las <strong>75.000 UF</strong>.</li>
            <li><strong>Tolerancia:</strong> ese promedio puede excederse <strong>una sola vez</strong>, y en ningún caso los ingresos de un ejercicio pueden superar las <strong>85.000 UF</strong>.</li>
            <li><strong>Rentas pasivas</strong> (intereses, dividendos, arriendos ajenos al giro) no pueden representar más del <strong>35%</strong> de los ingresos.</li>
            <li>Los límites se calculan <strong>sumando los ingresos de empresas relacionadas</strong>.</li>
          </ul>
          <p>En el año de inicio de actividades, al no existir promedio de tres años, los ingresos de ese ejercicio no deben exceder las 75.000 UF.</p>

          <h2>Los dos regímenes del Pro Pyme</h2>
          <table>
            <thead>
              <tr><th></th><th>14 D N°3 — Pro Pyme General</th><th>14 D N°8 — Pro Pyme Transparente</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Impuesto en la empresa</strong></td>
                <td>Paga Impuesto de Primera Categoría</td>
                <td>Liberada de Impuesto de Primera Categoría</td>
              </tr>
              <tr>
                <td><strong>Cuándo tributan los dueños</strong></td>
                <td>Cuando retiran utilidades</td>
                <td>En el mismo ejercicio en que la empresa genera la renta, aunque no la retiren</td>
              </tr>
              <tr>
                <td><strong>Contabilidad</strong></td>
                <td>Completa o simplificada</td>
                <td>Control de ingresos y gastos</td>
              </tr>
              <tr>
                <td><strong>Quiénes pueden ser dueños</strong></td>
                <td>Sin restricción especial</td>
                <td>Todos deben ser contribuyentes de impuestos finales (personas naturales)</td>
              </tr>
              <tr>
                <td><strong>Suele convenir a</strong></td>
                <td>Empresas que reinvierten utilidades o difieren retiros</td>
                <td>Empresas de uno o dos dueños que retiran todo cada año</td>
              </tr>
            </tbody>
          </table>
          <p>Ojo con la última fila del Transparente: si entre los dueños hay una sociedad chilena, el acceso al 14 D N°8 se complica. Es un requisito que elimina a muchos contribuyentes sin que lo sepan.</p>

          <h2>Las tasas en 2026 (y la rebaja transitoria)</h2>
          <p>La <strong>Ley N° 21.755</strong>, publicada en julio de 2025, rebajó transitoriamente el Impuesto de Primera Categoría y el PPM del Pro Pyme:</p>
          <table>
            <thead>
              <tr><th>Concepto</th><th>2026</th><th>2028</th><th>Tasa permanente</th></tr>
            </thead>
            <tbody>
              <tr><td>Impuesto 1ª Categoría — Pro Pyme General</td><td><strong>12,5%</strong></td><td>15%</td><td>25%</td></tr>
              <tr><td>PPM — Pro Pyme General (hasta 50.000 UF)</td><td><strong>0,125%</strong></td><td>—</td><td>0,25%</td></tr>
              <tr><td>PPM — Pro Pyme Transparente (hasta 50.000 UF)</td><td><strong>0,2%</strong></td><td>0,2%</td><td>0,2%</td></tr>
              <tr><td>Impuesto 1ª Categoría — Transparente</td><td>No aplica</td><td>No aplica</td><td>No aplica</td></tr>
            </tbody>
          </table>
          <p>Tres cosas importantes sobre esta rebaja:</p>
          <ol>
            <li>Rige para los ejercicios <strong>2025, 2026 y 2027</strong>.</li>
            <li><strong>Solo aplica al Pro Pyme General</strong> (14 D N°3). El Transparente ya está liberado del impuesto en la empresa, así que no tiene qué rebajar.</li>
            <li>Está <strong>condicionada</strong> a que se cumplan los hitos de cotización previsional adicional de la reforma de pensiones (1% en 2025, 3,5% en 2026, 4,25% en 2027). Si no se cumplen, el beneficio no aplica.</li>
          </ol>

          <h2>Cómo elegir entre uno y otro</h2>
          <p>No hay una respuesta universal, pero estas preguntas ordenan la decisión:</p>
          <ul>
            <li><strong>¿Retiras toda la utilidad cada año o la reinviertes?</strong> Si retiras todo, el Transparente puede ser más simple y eficiente. Si reinviertes, la postergación del impuesto del General suele valer más.</li>
            <li><strong>¿Quiénes son tus socios?</strong> Si hay una sociedad entre los dueños, el Transparente probablemente queda descartado.</li>
            <li><strong>¿Cuál es tu tasa personal de impuesto?</strong> En el Transparente la utilidad tributa en tu impuesto global complementario, que es progresivo. Con tasas personales bajas el resultado es muy distinto que con tasas altas.</li>
            <li><strong>¿Cuánta contabilidad quieres llevar?</strong> El Transparente simplifica mucho la carga formal.</li>
          </ul>
          <p>La única forma seria de decidir es <strong>proyectar con números</strong>: ingresos estimados, utilidad esperada, retiros previstos y tasa personal de cada socio.</p>

          <h2>Cómo se entra y cómo se sale</h2>
          <p>Para acogerse al Pro Pyme, los contribuyentes deben informar al SII según lo que instruya mediante resolución. Y hay una restricción que conviene conocer: quien se retira del régimen <strong>no puede volver a incorporarse hasta que transcurran cinco ejercicios comerciales consecutivos</strong>.</p>
          <p>Es decir, cambiarse no es una decisión reversible a voluntad. Vale la pena hacerla bien la primera vez.</p>

          <h2>Los errores que vemos con más frecuencia</h2>
          <ul>
            <li><strong>Nunca haber revisado el régimen</strong> desde el día del inicio de actividades.</li>
            <li><strong>Superar el límite de ingresos</strong> sin darse cuenta, quedando excluido del régimen al año siguiente.</li>
            <li><strong>Ignorar el límite de rentas pasivas del 35%.</strong></li>
            <li><strong>Olvidar que los ingresos de relacionadas se suman</strong> para calcular los topes.</li>
            <li><strong>No aprovechar la rebaja transitoria</strong> mientras está vigente.</li>
          </ul>

          <h2>Revisemos tu caso</h2>
          <p>Si tienes dudas sobre tu régimen actual, en RIZEN hacemos el análisis con proyecciones y te decimos si estás pagando más de lo necesario. Es parte de la <a href="/asesoria-tributaria/">asesoría tributaria</a>, y va de la mano con la <a href="/contabilidad-para-pymes/">contabilidad mensual</a>.</p>
          <p>Y si recién estás partiendo, este es exactamente el momento de elegir bien: revisa el servicio de <a href="/constitucion-de-empresa/">constitución de empresa</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los requisitos, tasas y condiciones deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>, en la Ley N° 21.755 y en la Circular N° 53 de 2025 del SII.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuál es la tasa de Impuesto de Primera Categoría para una Pro Pyme en 2026?', 'Para las empresas acogidas al Pro Pyme General (art. 14 D N°3) la tasa es 12,5% durante los ejercicios 2025, 2026 y 2027, por la rebaja transitoria de la Ley N° 21.755. La tasa permanente es 25%.'],
      ['¿Cuál es la diferencia entre el 14 D N°3 y el 14 D N°8?', 'El N°3 (Pro Pyme General) paga Impuesto de Primera Categoría y los dueños tributan al retirar utilidades. El N°8 (Transparente) no paga impuesto en la empresa: la utilidad se atribuye y tributa en los dueños en el mismo ejercicio.'],
      ['¿Qué requisitos necesito para ser Pro Pyme?', 'Capital efectivo inicial de hasta 85.000 UF, promedio de ingresos brutos de los últimos tres años de hasta 75.000 UF (excedible una vez, sin superar 85.000 UF en un año), rentas pasivas de hasta 35% de los ingresos y considerar los ingresos de empresas relacionadas.'],
      ['¿Por qué está rebajado el impuesto ahora?', 'La Ley N° 21.755, publicada en julio de 2025, rebajó transitoriamente al 12,5% el Impuesto de Primera Categoría y a la mitad el PPM de las Pro Pyme Generales para los ejercicios 2025, 2026 y 2027. El beneficio está condicionado al cumplimiento de los hitos de cotización previsional de la reforma de pensiones.'],
      ['¿Puedo cambiarme de régimen cuando quiera?', 'Puedes cambiar, pero si te retiras del régimen no puedes volver a incorporarte hasta que transcurran cinco ejercicios comerciales consecutivos. Por eso conviene evaluar el cambio con proyecciones antes de decidir.']
    ],
    related: [
      ['/blog/que-es-el-ppm/', '¿Qué es el PPM y cómo se calcula?', 'Tasas 2026 y la base de cálculo correcta.'],
      ['/constitucion-de-empresa/', 'Constitución de empresa en Chile', 'El régimen se elige al partir. Elígelo bien.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'Analizamos tu régimen con proyecciones reales.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Contabilidad mensual y control de tu carga tributaria.']
    ],
    cta: ctaBand('¿Sabes si tu régimen te está costando plata?', 'Revisamos tu situación con proyecciones y te decimos si conviene cambiarse o si ya estás bien encaminado.', 'Quiero revisar mi régimen')
  }

];
