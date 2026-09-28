const { ctaBand } = require('./lib');

/* ============================================================
   BLOG · TRIBUTARIO Y LABORAL
   Datos verificados a sept-2026 contra SII, Superintendencia de
   Pensiones, Direccion del Trabajo, Previred y el Diario Oficial.
   ATENCION: las tasas previsionales se ajustan por Oficio durante
   el ano (SIS y aportes de la Ley 21.735). Si editas estos
   articulos mas adelante, revisa esos valores primero.
============================================================ */

module.exports = [

  /* ---------- IVA Y CREDITO FISCAL ---------- */
  {
    url: '/blog/iva-credito-fiscal/',
    title: 'IVA y Crédito Fiscal en Chile: Cómo Funcionan | RIZEN',
    desc: 'Qué son el débito y el crédito fiscal, cuándo la compra da derecho a crédito, cómo funciona el remanente y los errores que hacen pagar IVA de más.',
    h1: 'IVA y crédito fiscal: cómo funcionan en la práctica',
    lead: 'El IVA no es una utilidad tuya ni un gasto: es un impuesto que recaudas y entregas. Entender el débito y el crédito es la diferencia entre pagar lo correcto y pagar de más.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Impuestos',
    excerpt: 'Débito fiscal, crédito fiscal, remanente y los errores que cuestan plata cada mes.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>El <strong>IVA</strong> (Impuesto al Valor Agregado) es un impuesto de <strong>19%</strong> que se aplica a las ventas y servicios afectos. Y hay una confusión que le cuesta plata a mucha gente que recién emprende: <strong>ese 19% no es tuyo</strong>.</p>
          <p>Cuando vendes con IVA, estás recaudando un impuesto por cuenta del Estado. Cuando compras con IVA, estás soportando ese impuesto. La diferencia entre lo uno y lo otro es lo que pagas al SII cada mes.</p>

          <h2>Débito fiscal y crédito fiscal</h2>
          <p>Estos dos conceptos son la base de todo:</p>
          <table>
            <thead><tr><th></th><th>Qué es</th><th>Cuándo nace</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Débito fiscal</strong></td>
                <td>El IVA que recargas en tus ventas y servicios afectos</td>
                <td>Al emitir la factura o boleta</td>
              </tr>
              <tr>
                <td><strong>Crédito fiscal</strong></td>
                <td>El IVA que soportaste en tus compras y que puedes descontar</td>
                <td>Al recibir la factura de compra</td>
              </tr>
            </tbody>
          </table>
          <p>La cuenta mensual es directa: <strong>débito menos crédito</strong>. Si el resultado es positivo, pagas esa diferencia. Si el crédito supera al débito, no pagas nada y esa diferencia queda a tu favor.</p>

          <h2>El crédito fiscal no es automático</h2>
          <p>Este es el punto donde más se pierde dinero. <strong>No toda compra con IVA te da derecho a crédito.</strong> Para que el crédito sea procedente deben cumplirse condiciones:</p>
          <ul class="check-list">
            <li><strong>Documento válido.</strong> Tiene que ser una factura (o documento que dé derecho a crédito) emitida conforme a la ley. Una boleta de compra no sirve.</li>
            <li><strong>Relación con el giro.</strong> La compra debe estar vinculada a tu actividad económica. El IVA de tus gastos personales no es crédito fiscal.</li>
            <li><strong>Registro correcto.</strong> Debe estar incorporado en tu Registro de Compras y Ventas en el período que corresponde.</li>
          </ul>
          <p>Si falla alguno de esos requisitos, ese IVA es un costo tuyo y no lo puedes descontar. Por eso, cuando alguien dice "compré con factura, así que no me costó el IVA", está equivocado en la mitad de los casos.</p>

          <h2>Qué pasa cuando el crédito es mayor que el débito</h2>
          <p>Pasa seguido, sobre todo cuando haces una inversión fuerte: compras maquinaria, equipos o mercadería antes de empezar a vender. En ese caso, el excedente se transforma en <strong>remanente de crédito fiscal</strong>.</p>
          <p>Ese remanente <strong>no se pierde</strong>: se arrastra al mes siguiente para seguir descontándolo, y se reajusta conforme a la normativa del IVA. Se acumula hasta que tengas débito suficiente para absorberlo.</p>
          <p>Dos aclaraciones importantes: el remanente no se paga ni se devuelve automáticamente, y por eso es clave que tu contabilidad lo vaya siguiendo mes a mes. Un remanente mal registrado es plata que quedó en el camino.</p>

          <h2>Cómo se declara: el F29</h2>
          <p>Todo esto se declara en el <strong>Formulario 29</strong>, que es la declaración mensual de impuestos. Ahí se informan las ventas afectas, el débito fiscal, las compras, el crédito fiscal y el remanente del mes anterior.</p>
          <p>Sobre los plazos, hay que distinguir el medio de presentación:</p>
          <table>
            <thead><tr><th>Forma de declaración</th><th>Plazo</th></tr></thead>
            <tbody>
              <tr><td>Declaración general (papel / manual)</td><td>Hasta el <strong>día 12</strong> del mes siguiente</td></tr>
              <tr><td>Declaración electrónica acogida al Decreto 1001</td><td>Hasta el <strong>día 20</strong> del mes siguiente</td></tr>
            </tbody>
          </table>
          <p>Tienes que revisar tu calendario, porque el plazo que te aplica depende de tu situación particular. Si tienes dudas, revisa nuestra guía sobre <a href="/blog/como-pagar-f29-chile/">cómo pagar el F29 paso a paso</a>.</p>

          <h2>El RCV: tu mejor herramienta</h2>
          <p>Como el SII recibe electrónicamente todos tus documentos, va construyendo automáticamente tu <strong>Registro de Compras y Ventas (RCV)</strong> y, con esa información, te presenta una <strong>propuesta de F29</strong> cada mes.</p>
          <p>Esto cambia por completo la naturaleza del trabajo: ya no se trata de digitar documentos, sino de <strong>verificar que el registro esté completo y bien clasificado</strong>. Y ahí está el detalle que importa: si una factura de compra no quedó registrada, o quedó en el período equivocado, tu crédito fiscal se pierde o se desfasa.</p>

          <h2>Los errores que te hacen pagar de más</h2>
          <ul>
            <li><strong>No revisar el RCV antes de declarar.</strong> Es la causa número uno de crédito perdido.</li>
            <li><strong>Usar crédito de gastos personales.</strong> Genera observaciones y, si se reitera, requerimientos del SII.</li>
            <li><strong>No registrar facturas de compra del período</strong>, dejándolas "para el mes siguiente". Eso desfasa la declaración.</li>
            <li><strong>Creer que el IVA es tu plata.</strong> Si facturas $1.190.000, solo $1.000.000 es tu ingreso; los $190.000 son del Estado y hay que enterarlos.</li>
            <li><strong>Declarar "sin movimiento" cuando no lo hay.</strong> Aunque no tengas operaciones en el mes, la declaración igual se presenta. No hacerlo genera multas por no presentación.</li>
            <li><strong>No considerar el remanente</strong> que venías arrastrando.</li>
          </ul>

          <h2>La relación con el impuesto a la renta</h2>
          <p>Un punto que confunde a muchos: el IVA y el impuesto a la renta son <strong>impuestos distintos e independientes</strong>. Puedes tener IVA a pagar todos los meses y, al mismo tiempo, tener pérdidas y no pagar impuesto a la renta. O al revés.</p>
          <p>El IVA se declara mensualmente en el F29; el impuesto a la renta se declara anualmente en el F22. Y además, en el mismo F29 van los <a href="/blog/que-es-el-ppm/">PPM</a>, que son el anticipo de ese impuesto anual. Es un formulario que hace más cosas de las que su nombre sugiere.</p>

          <h2>Cómo lo trabajamos</h2>
          <p>En RIZEN revisamos tu RCV cada mes, verificamos el crédito fiscal antes de declarar y controlamos el remanente acumulado para que no se pierda. Es parte del servicio de <a href="/contabilidad-para-pymes/">contabilidad para pymes</a>.</p>
          <p>Si tu régimen tributario no te acomoda o no sabes cuál tienes, revisa la <a href="/asesoria-tributaria/">asesoría tributaria</a>: el régimen también incide en cuánto terminas pagando.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las normas del IVA están contenidas en el DL N° 825, de 1974. Verifica los requisitos y plazos vigentes en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Qué diferencia hay entre débito y crédito fiscal?', 'El débito fiscal es el IVA que recargas en tus ventas afectas. El crédito fiscal es el IVA que soportaste en compras que cumplen los requisitos para ser descontadas. El F29 calcula la diferencia entre ambos.'],
      ['¿Toda compra con factura me da crédito fiscal?', 'No necesariamente. Se requiere un documento válido, que la compra esté relacionada con tu giro y que esté correctamente registrada. El IVA de gastos personales no da derecho a crédito.'],
      ['¿Qué pasa si mi crédito fiscal es mayor que mi débito?', 'El excedente se convierte en remanente de crédito fiscal, que se arrastra a los meses siguientes para seguir descontándolo. No se pierde, pero tampoco se devuelve automáticamente.'],
      ['¿Cuál es el plazo para declarar el F29?', 'Depende del medio de presentación: hasta el día 12 del mes siguiente en la modalidad general y hasta el día 20 para las declaraciones electrónicas acogidas al Decreto 1001. Conviene confirmar el plazo que te aplica.'],
      ['¿Si no tuve ventas ni compras igual debo declarar?', 'Sí. Aunque no haya movimiento, corresponde presentar una declaración sin movimiento. No hacerlo genera multas por declaración no presentada.']
    ],
    related: [
      ['/blog/que-es-el-ppm/', '¿Qué es el PPM?', 'El otro impuesto que se declara en el mismo F29.'],
      ['/blog/como-pagar-f29-chile/', 'Cómo pagar el F29 paso a paso', 'La declaración mensual donde se informa el IVA.'],
      ['/blog/factura-electronica/', 'Factura electrónica', 'El RCV que el SII construye con tus documentos.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Revisamos tu crédito fiscal antes de cada declaración.']
    ],
    cta: ctaBand('¿Sospechas que estás pagando IVA de más?', 'Revisamos tu registro de compras y ventas, tu crédito fiscal y tu remanente acumulado.', 'Quiero mi asesoría gratis')
  },

  /* ---------- RENTA PRESUNTA ---------- */
  {
    url: '/blog/renta-presunta-2026/',
    title: 'Renta Presunta 2026: Requisitos y Cuándo Conviene | RIZEN',
    desc: 'Régimen de renta presunta en Chile: qué actividades pueden acogerse, los límites de ventas y capital, cómo se calcula la renta y cuándo conviene frente a la renta efectiva.',
    h1: 'Renta presunta 2026: requisitos y cuándo conviene',
    lead: 'Solo tres actividades pueden acogerse a este régimen, y no siempre es la opción más barata. Te explicamos los límites vigentes y cómo evaluarlo.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '7 minutos',
    category: 'Impuestos',
    excerpt: 'Límites por actividad, cómo se calcula la renta presunta y cuándo conviene frente a la efectiva.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>La <strong>renta presunta</strong> es un régimen en el que el SII calcula tu renta según parámetros objetivos —el avalúo de un predio, el valor de los vehículos, las ventas de minerales— en lugar de exigirte determinar tu renta real con balance y contabilidad completa.</p>
          <p>Es un régimen atractivo por su simpleza, pero tiene dos particularidades que conviene entender antes: <strong>solo aplica a tres actividades</strong> y <strong>no siempre es la opción más conveniente</strong>.</p>

          <h2>Solo tres actividades pueden acogerse</h2>
          <p>Este es el primer filtro, y elimina a la mayoría de los contribuyentes. El <strong>artículo 34 de la Ley sobre Impuesto a la Renta</strong> permite optar por renta presunta únicamente a quienes desarrollan:</p>
          <ul>
            <li>Explotación de <strong>bienes raíces agrícolas</strong>.</li>
            <li><strong>Minería</strong>.</li>
            <li><strong>Transporte terrestre de carga o de pasajeros</strong>.</li>
          </ul>
          <p>Un comercio, un consultor, una empresa de servicios tecnológicos o un restaurante <strong>no pueden acogerse</strong>, por mucho que les convenga. El régimen está cerrado a esas tres actividades.</p>
          <p>Además, tratándose de comunidades, cooperativas y sociedades, los comuneros, socios o accionistas deben ser <strong>personas naturales</strong>.</p>

          <h2>Los límites de ventas: el requisito operativo</h2>
          <p>Para optar y para mantenerse, tus ventas o ingresos netos anuales de primera categoría no pueden superar los siguientes topes, según la actividad:</p>
          <table>
            <thead><tr><th>Actividad</th><th>Límite de ventas o ingresos anuales</th><th>Capital efectivo al iniciar</th></tr></thead>
            <tbody>
              <tr><td><strong>Agrícola</strong></td><td>Hasta 9.000 UF</td><td>Hasta 18.000 UF</td></tr>
              <tr><td><strong>Transporte</strong></td><td>Hasta 5.000 UF</td><td>Hasta 10.000 UF</td></tr>
              <tr><td><strong>Minería</strong></td><td>Hasta 17.000 UF</td><td>Hasta 34.000 UF</td></tr>
            </tbody>
          </table>
          <p>Para calcular el límite se computan <strong>todas</strong> tus ventas e ingresos de primera categoría, provengan de actividades con renta efectiva o presunta. No se consideran las enajenaciones ocasionales de bienes del activo inmovilizado, y las ventas de cada mes se expresan en UF según el valor del último día de ese mes.</p>
          <p>Y un punto que se pasa por alto: <strong>hay que sumar los ingresos de las empresas relacionadas</strong>. Si al hacerlo se excede el límite, tanto tú como los relacionados quedan obligados a determinar la renta sobre base efectiva.</p>

          <h2>Un detalle del SII que sorprendió a varios</h2>
          <p>Existe la intuición de que, si inicias actividades a mitad de año, el límite de ventas debería proporcionalizarse. El SII se pronunció en contra mediante el <strong>Oficio N° 2628, del 18 de diciembre de 2025</strong>.</p>
          <p>En ese oficio, frente a una sociedad de transporte que inició actividades en septiembre de 2025, el Servicio concluyó que <strong>la ley no contempla proporcionalizar el límite</strong>: para mantenerse en renta presunta en 2026 debía verificar que sus ventas o ingresos anuales del ejercicio anterior no excedieran las 5.000 UF, sin prorrateo por los meses en que estuvo activa.</p>
          <p>Es un criterio relevante para quien parte a mitad de año con expectativas de venta altas.</p>

          <h2>Cómo se determina la renta presunta</h2>
          <p>La base sobre la que pagas el impuesto se calcula según la actividad:</p>
          <ul>
            <li><strong>Agrícola:</strong> el 10% del avalúo fiscal del predio, referido al 1 de enero del año en que se declara.</li>
            <li><strong>Transporte:</strong> el 10% del valor de los vehículos, determinado según las reglas de tasación aplicables.</li>
            <li><strong>Minería:</strong> una escala que va aproximadamente entre el 4% y el 20% aplicada sobre las ventas netas de productos mineros, según el mineral y las condiciones de la explotación.</li>
          </ul>
          <p>Como ves, la lógica es muy distinta a la de la renta efectiva: <strong>no importa cuánto ganaste realmente ni cuánto gastaste</strong>.</p>

          <h2>La letra chica: no se deducen gastos</h2>
          <p>Aquí está la trampa para muchos. En renta presunta:</p>
          <ul>
            <li><strong>No se deducen tus gastos reales.</strong> Puedes haber gastado mucho en combustible, arriendos, sueldos o insumos, y eso no reduce tu base imponible.</li>
            <li><strong>Las pérdidas no te sirven.</strong> Si el negocio tuvo un mal año, igual pagas impuesto sobre la renta presunta.</li>
            <li>No se aplica corrección monetaria, depreciación ni el resto del aparato de la contabilidad completa.</li>
          </ul>
          <p>A cambio, la carga formal es mucho menor: basta con controlar ingresos y egresos.</p>

          <h2>¿Cuándo conviene y cuándo no?</h2>
          <table>
            <thead><tr><th>Situación</th><th>Suele convenir</th></tr></thead>
            <tbody>
              <tr><td>Costos de operación bajos y activo con avalúo o valor reducido, pero ventas razonables</td><td><strong>Renta presunta</strong></td></tr>
              <tr><td>Gastos altos y deducibles (combustible, arriendos, personal, insumos) que reducirían la base</td><td><strong>Renta efectiva</strong></td></tr>
              <tr><td>Años con pérdidas o resultados irregulares</td><td><strong>Renta efectiva</strong></td></tr>
              <tr><td>Quieres simplificar al máximo la carga contable</td><td><strong>Renta presunta</strong></td></tr>
              <tr><td>Buscas reinvertir y aprovechar depreciación acelerada</td><td><strong>Renta efectiva</strong> (Pro Pyme)</td></tr>
            </tbody>
          </table>
          <p>La comparación hay que hacerla con números, año a año. Y ojo: incluso estando en renta presunta, puedes <strong>optar voluntariamente</strong> por tributar sobre renta efectiva, avisando al SII entre el 1 de enero y el 30 de abril.</p>

          <h2>Cómo se entra y cómo se sale</h2>
          <ul class="check-list">
            <li>La opción se ejerce <strong>avisando al SII entre el 1 de enero y el 30 de abril</strong> del año calendario en que te incorporas al régimen.</li>
            <li>Si inicias actividades, el plazo para ejercer la opción es el que establece el Código Tributario, siempre que no superes los topes de capital efectivo inicial de tu actividad.</li>
            <li>Si <strong>incumples un requisito y debes abandonar</strong> el régimen, lo haces a contar del 1 de enero del año comercial siguiente al del incumplimiento.</li>
            <li>En principio <strong>no puedes volver</strong> a renta presunta, salvo que dejes de desarrollar la actividad agrícola, minera o de transporte por <strong>cinco ejercicios consecutivos o más</strong>.</li>
          </ul>
          <p>Es decir: la decisión es prácticamente irreversible. No es un régimen que se pruebe un año y se abandone si no resultó.</p>

          <h2>Los errores que vemos</h2>
          <ul>
            <li><strong>Creer que cualquier pyme puede acogerse.</strong> Solo las tres actividades del artículo 34.</li>
            <li><strong>No sumar los ingresos de relacionadas</strong> y exceder el límite sin darse cuenta, quedando fuera del régimen.</li>
            <li><strong>No proyectar los gastos</strong> antes de decidir, y terminar pagando más que en renta efectiva.</li>
            <li><strong>Suponer que el límite se proporcionaliza</strong> si se inicia actividades a mitad de año, como aclaró el SII en el Oficio N° 2628.</li>
            <li><strong>Olvidar el plazo del 30 de abril</strong> para ejercer la opción o para cambiarse.</li>
          </ul>

          <h2>Vale la pena simular antes de opinar</h2>
          <p>Este es un régimen donde la única forma seria de decidir es <strong>simular tres años con ambos escenarios</strong>: renta presunta contra renta efectiva, con tus propios números. Cambiar después tiene restricciones importantes.</p>
          <p>Si estás en agricultura, minería o transporte y quieres saber qué te conviene, revisa nuestra <a href="/asesoria-tributaria/">asesoría tributaria</a>. Si además necesitas el respaldo contable, lo hacemos junto con la <a href="/contabilidad-para-pymes/">contabilidad mensual</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Los límites y requisitos del artículo 34 de la Ley sobre Impuesto a la Renta deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a>.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Qué actividades pueden acogerse a renta presunta?', 'Solo la explotación de bienes raíces agrícolas, la minería y el transporte terrestre de carga o de pasajeros. Un comercio o una empresa de servicios no puede acogerse, aunque cumpla los límites de ventas.'],
      ['¿Cuáles son los límites de ventas?', 'Hasta 9.000 UF anuales en la actividad agrícola, hasta 5.000 UF en transporte y hasta 17.000 UF en minería. Además, el capital efectivo al iniciar no puede exceder 18.000 UF, 10.000 UF y 34.000 UF respectivamente.'],
      ['¿En renta presunta puedo deducir mis gastos?', 'No. Esa es la principal desventaja: no se deducen los gastos reales, no se aplica depreciación ni corrección monetaria, y las pérdidas no reducen el impuesto. Igual pagas sobre la renta presunta aunque el año haya sido malo.'],
      ['¿Puedo cambiarme de renta presunta a renta efectiva?', 'Sí, puedes optar voluntariamente por renta efectiva avisando al SII entre el 1 de enero y el 30 de abril. Pero si abandonas el régimen por incumplimiento, en principio no puedes volver salvo que dejes de desarrollar la actividad por cinco ejercicios consecutivos o más.'],
      ['¿El límite de ventas se proporcionaliza si inicio actividades a mitad de año?', 'No. El SII aclaró mediante el Oficio N° 2628 del 18 de diciembre de 2025 que la ley no contempla proporcionalizar el límite de ventas por el tiempo en que el contribuyente estuvo activo durante el año.']
    ],
    related: [
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'Simulamos si te conviene renta presunta o efectiva.'],
      ['/blog/regimen-pro-pyme-2026/', 'Régimen Pro Pyme 2026', 'La alternativa de renta efectiva para las pymes.'],
      ['/blog/operacion-renta-2026/', 'Operación Renta 2026', 'Dónde se declara finalmente el impuesto a la renta.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Si optas por renta efectiva, llevamos tu contabilidad.']
    ],
    cta: ctaBand('¿Renta presunta o renta efectiva?', 'Simulamos tu caso con proyecciones reales antes de que tomes una decisión difícil de revertir.', 'Quiero simular mi caso')
  },

  /* ---------- OPERACION RENTA ---------- */
  {
    url: '/blog/operacion-renta-2026/',
    title: 'Operación Renta 2026: Quién Debe Declarar el F22 | RIZEN',
    desc: 'Operación Renta 2026: quién está obligado a declarar el F22, el plazo del 30 de abril, las fechas de devolución y qué pasa si no declaras.',
    h1: 'Operación Renta 2026: quién debe declarar y qué fechas importan',
    lead: 'Todos los años en abril hay que rendir cuentas ante el SII. La duda típica no es cómo, sino si te toca. Aquí está la respuesta.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '6 minutos',
    category: 'Impuestos',
    excerpt: 'Quién está obligado, el plazo del 30 de abril y las fechas de devolución del año tributario 2026.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>La <strong>Operación Renta</strong> es el proceso anual en el que el SII te presenta una propuesta de declaración, tú la revisas y la envías. Se declara en el <strong>Formulario 22</strong> y en él se informan las rentas obtenidas en el <strong>año comercial anterior</strong>.</p>
          <blockquote>Ojo con un dato que confunde a muchos: la <strong>Operación Renta 2026</strong> (Año Tributario 2026) declara las rentas que obtuviste durante <strong>2025</strong>.</blockquote>
          <p>El proceso se realiza durante el mes de <strong>abril</strong> y el plazo general para quienes deben pagar impuestos vence el <strong>30 de abril</strong>.</p>

          <h2>¿Te toca declarar?</h2>
          <p>Hay que distinguir dos situaciones: quienes están <strong>obligados</strong> y quienes pueden declarar <strong>voluntariamente</strong> para acceder a un beneficio o pedir una devolución.</p>

          <h3>Estás obligado si durante 2025:</h3>
          <ul class="check-list">
            <li>Tuviste <strong>ingresos anuales superiores a $11.265.804</strong> (13,5 UTA al 31 de diciembre de 2025), salvo que correspondan a sueldos pagados por un solo empleador.</li>
            <li>Tuviste <strong>más de un empleador o pagador</strong>.</li>
            <li>Trabajaste a <strong>honorarios</strong> y quieres optar a cobertura parcial para tus cotizaciones previsionales.</li>
            <li>Solicitaste el <strong>Préstamo Solidario 2021</strong> (en esta Operación Renta se calcula y paga la última cuota).</li>
            <li><strong>Creaste un emprendimiento en 2025</strong> y recibiste ingresos por venta de productos o servicios.</li>
            <li>Eres una <strong>empresa</strong>. Todas las empresas deben presentar su declaración de renta, sin excepción.</li>
          </ul>

          <h3>Puedes declarar voluntariamente si:</h3>
          <ul>
            <li>Quieres acceder a un <strong>beneficio tributario</strong>, como el crédito por gastos en educación o la rebaja de intereses por créditos con garantía hipotecaria.</li>
            <li>Quieres solicitar la <strong>devolución</strong> de retenciones, PPM o créditos con derecho a devolución.</li>
            <li>Tienes rentas exentas o ingresos bajo el umbral y te conviene declarar para recuperar lo retenido.</li>
          </ul>
          <p>Caso típico de devolución: quienes tienen sueldos variables (bonos, incentivos) o dejaron de percibir ingresos en algunos meses del año. Si en esos meses te aplicaron una tasa mayor a la que corresponde por tu renta anual, la diferencia se te devuelve.</p>

          <h2>Las fechas de devolución importan</h2>
          <p>La fecha en que te pagan la devolución depende de cuándo declaraste. Mientras antes declaras, antes cobras:</p>
          <table>
            <thead><tr><th>Fecha de declaración</th><th>Depósito</th><th>Cheque</th></tr></thead>
            <tbody>
              <tr><td>1 al 8 de abril</td><td>Miércoles 29 de abril</td><td>Viernes 29 de mayo</td></tr>
              <tr><td>9 al 23 de abril</td><td>Viernes 15 de mayo</td><td>Viernes 29 de mayo</td></tr>
              <tr><td>24 de abril al 8 de mayo</td><td>Miércoles 27 de mayo</td><td>Viernes 29 de mayo</td></tr>
            </tbody>
          </table>
          <p>La diferencia entre declarar el 5 de abril y el 20 de abril puede ser más de dos semanas en el depósito. Si estás esperando la devolución, eso pesa.</p>
          <p>La Tesorería General de la República paga mediante <strong>depósito</strong> en cuenta corriente, de ahorro, vista o Cuenta RUT, o mediante <strong>cheque</strong> enviado al domicilio. Conviene revisar que tus datos bancarios estén correctos: un error en el número de cuenta retrasa el pago.</p>

          <h2>Cómo declarar</h2>
          <ol>
            <li>Ingresa a <strong>sii.cl</strong> → <em>Servicios online</em> → <em>Declaración de renta</em> → <em>Declarar renta (F22)</em>.</li>
            <li>Autentícate con RUT y Clave Tributaria, o con ClaveÚnica.</li>
            <li>Selecciona el <strong>año tributario</strong> que corresponda (las rentas de 2025 se declaran en el Año Tributario 2026).</li>
            <li>Revisa la <strong>propuesta del SII</strong>. Está construida con la información que tus agentes retenedores y otras fuentes informaron al Servicio.</li>
            <li>Corrige o completa lo que falte: ingresos no informados, gastos deducibles, beneficios.</li>
            <li>Envía la declaración y guarda el comprobante.</li>
          </ol>
          <p>Existe además la aplicación móvil <strong>e-Renta</strong>, que permite revisar y aceptar la propuesta, ingresar los datos para la devolución y consultar el estado de tu declaración.</p>

          <h2>Un consejo antes de enviar: revisa lo que el SII ya sabe</h2>
          <p>El SII cruza mucha información. Antes de declarar conviene revisar las <strong>declaraciones juradas</strong> en las que apareces, porque ahí está lo que el Servicio ya tiene sobre ti:</p>
          <ul>
            <li>La <strong>DJ 1959</strong>, sobre transferencias bancarias.</li>
            <li>La <strong>DJ 1955</strong>, con información de ingresos.</li>
          </ul>
          <p>Declarar un ingreso que aparece informado por un tercero y que tú omitiste es la forma más rápida de que tu declaración quede observada. Si algo no cuadra, conviene aclararlo antes de enviar, no después.</p>

          <h2>Lo que pasa si no declaras estando obligado</h2>
          <ul>
            <li>Se generan <strong>multas e intereses</strong> sobre los impuestos que correspondía pagar.</li>
            <li>El SII puede <strong>citar</strong> al contribuyente a las unidades del servicio para presentar la anotación tributaria de <strong>"No Declarante F22"</strong>.</li>
            <li>Esa anotación <strong>impide realizar varios trámites</strong> con el SII hasta regularizar la situación.</li>
          </ul>
          <p>Es una consecuencia que sorprende, porque el trámite bloqueado casi nunca tiene relación obvia con la declaración pendiente. Regularizar es rápido si se hace a tiempo.</p>

          <h2>Operación Renta no es lo mismo que el F29</h2>
          <p>Para evitar confusiones frecuentes:</p>
          <table>
            <thead><tr><th></th><th>F29</th><th>F22</th></tr></thead>
            <tbody>
              <tr><td><strong>Frecuencia</strong></td><td>Mensual</td><td>Anual</td></tr>
              <tr><td><strong>Qué declara</strong></td><td>IVA, <a href="/blog/que-es-el-ppm/">PPM</a>, retenciones</td><td>Impuesto a la renta del año anterior</td></tr>
              <tr><td><strong>Cuándo</strong></td><td>Día 12 o 20 del mes siguiente</td><td>Abril</td></tr>
            </tbody>
          </table>
          <p>Y una excepción relevante: si hiciste el <a href="/blog/termino-de-giro/">término de giro</a>, el impuesto se paga dentro de los dos meses siguientes al cese, sin esperar a abril.</p>

          <h2>Prepararse es más fácil que improvisar</h2>
          <p>La Operación Renta deja de ser un dolor de cabeza cuando el año se llevó bien. La mayor parte de los problemas de abril se originan en meses anteriores: PPM mal calculados, retenciones no registradas o ingresos sin respaldo.</p>
          <p>Controlando el <a href="/blog/que-es-el-ppm/">PPM</a> mes a mes se evita la diferencia inesperada. Y si ya tienes diferencias pendientes, revisa cómo <a href="/regularizar-deudas-sii/">regularizar tu situación con el SII</a>.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría tributaria personalizada. Las fechas, montos y requisitos vigentes deben verificarse en <a href="https://www.sii.cl" target="_blank" rel="noopener nofollow">sii.cl</a> y en ChileAtiende.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿La Operación Renta 2026 declara las rentas de qué año?', 'Las rentas obtenidas durante el año comercial 2025. El Año Tributario 2026 corresponde a las rentas de 2025.'],
      ['¿Cuál es el plazo para declarar la renta?', 'El proceso se realiza en abril y el plazo general para quienes deben pagar impuestos vence el 30 de abril. Los contribuyentes con término de giro tienen una regla especial: pagan dentro de los dos meses siguientes al cese.'],
      ['¿Tengo que declarar si mi único ingreso fue un sueldo de un solo empleador?', 'Si tus ingresos provienen de sueldos pagados por un solo empleador, no estás obligado a declarar aunque superen el umbral. Puedes hacerlo voluntariamente si quieres acceder a beneficios o solicitar devoluciones.'],
      ['¿Cuándo me devuelven los impuestos?', 'Depende de la fecha en que declares. Quienes declaran entre el 1 y el 8 de abril reciben el depósito el 29 de abril; entre el 9 y el 23 de abril, el 15 de mayo; y entre el 24 de abril y el 8 de mayo, el 27 de mayo. Los pagos con cheque se realizan el 29 de mayo.'],
      ['¿Qué pasa si no declaro estando obligado?', 'Se generan multas e intereses, y el SII puede citarte para la anotación tributaria de "No Declarante F22", que bloquea varios trámites con el Servicio hasta que regularices.']
    ],
    related: [
      ['/blog/que-es-el-ppm/', '¿Qué es el PPM?', 'Controlarlo durante el año evita la sorpresa de abril.'],
      ['/blog/iva-credito-fiscal/', 'IVA y crédito fiscal', 'El impuesto que se declara mes a mes en el F29.'],
      ['/blog/termino-de-giro/', 'Término de giro', 'La excepción al plazo de abril.'],
      ['/contabilidad-para-pymes/', 'Contabilidad para pymes', 'Preparamos tu F22 y controlamos tu PPM durante el año.']
    ],
    cta: ctaBand('Que la Operación Renta no te tome por sorpresa', 'Revisamos tu situación, preparamos el F22 y controlamos tu PPM durante todo el año.', 'Quiero mi asesoría gratis')
  },

  /* ---------- CONTRATAR PRIMER TRABAJADOR ---------- */
  {
    url: '/blog/contratar-primer-trabajador/',
    title: 'Contratar tu Primer Trabajador en Chile: Guía 2026 | RIZEN',
    desc: 'Pasos y obligaciones para contratar tu primer trabajador en Chile: contrato en 15 días, AFP, salud, seguro de cesantía, mutual y el costo real del empleador.',
    h1: 'Contratar tu primer trabajador: obligaciones y costo real',
    lead: 'Es el paso en que dejas de operar solo y te transformas en empleador. Activa obligaciones que no avisan y que conviene conocer antes de firmar.',
    dateHuman: '28 de septiembre de 2026',
    dateISO: '2026-09-28',
    read: '7 minutos',
    category: 'Remuneraciones',
    excerpt: 'Contrato, plazos legales, cotizaciones, mutual y el costo real que casi nadie presupuesta.',
    body: `    <section class="page-section">
      <div class="container">
        <article class="prose">
          <p>Contratar al primer trabajador es más caro y más formal de lo que la mayoría anticipa. No por mala fe, sino porque el costo no es el sueldo: es el sueldo <strong>más una serie de obligaciones</strong> que se activan el mismo día en que la persona empieza a trabajar.</p>
          <p>La buena noticia es que el proceso está bien definido y, ordenado, toma pocos días.</p>

          <h2>La relación laboral nace antes del contrato</h2>
          <p>Este es el punto que más sorprende. El contrato de trabajo es <strong>consensual</strong>: existe desde el momento en que una persona presta servicios bajo subordinación y dependencia a cambio de una remuneración, <strong>haya o no firma</strong>.</p>
          <p>Lo que la ley exige es <strong>escriturarlo</strong> dentro de un plazo:</p>
          <ul>
            <li><strong>15 días corridos</strong> desde el inicio de las labores, como regla general.</li>
            <li><strong>5 días corridos</strong> si el contrato es por obra o faena, o si dura menos de 30 días.</li>
          </ul>
          <p>No cumplir ese plazo tiene dos consecuencias, y la multa es la menor:</p>
          <ul>
            <li>La Dirección del Trabajo puede aplicar una <strong>multa de 1 a 5 UTM por trabajador</strong>.</li>
            <li>Y lo más peligroso: sin contrato escrito, la ley <strong>presume verdaderas las condiciones que declare el trabajador</strong>. Si él sostiene que acordaron un sueldo mayor o funciones distintas, la carga de probar lo contrario es tuya.</li>
          </ul>

          <h2>Qué debe contener el contrato</h2>
          <p>El artículo 10 del Código del Trabajo exige un contenido mínimo. Si falta algún elemento, el contrato queda expuesto en una fiscalización:</p>
          <ul class="check-list">
            <li>Individualización de las partes: nombre, RUT, domicilio, fecha de nacimiento y de ingreso.</li>
            <li>Naturaleza de los servicios y el <strong>lugar</strong> donde se prestarán.</li>
            <li><strong>Remuneración</strong>: monto, forma y período de pago. No puede ser inferior al ingreso mínimo mensual vigente (proporcional si la jornada es parcial).</li>
            <li><strong>Jornada</strong>: duración y distribución de las horas.</li>
            <li><strong>Plazo</strong> del contrato: indefinido, a plazo fijo o por obra o faena.</li>
            <li>Los demás pactos que acuerden las partes.</li>
          </ul>
          <p>Dos recomendaciones prácticas: firma el primer día, no el décimo, y agrega lo que la ley no exige pero la experiencia sí —confidencialidad, propiedad intelectual de lo que se desarrolle y reglas claras sobre bonos.</p>

          <h2>Registra el contrato en la Dirección del Trabajo</h2>
          <p>Además de firmarlo, hay que <strong>registrarlo en el Registro Electrónico Laboral</strong> del portal <em>Mi DT</em>, con ClaveÚnica, dentro de los <strong>15 días hábiles</strong> siguientes a su celebración.</p>
          <p>Es un trámite aparte del contrato y se olvida con frecuencia.</p>

          <h2>La jornada y el sueldo mínimo vigente</h2>
          <p>Dos valores que conviene tener claros al fijar condiciones:</p>
          <ul>
            <li><strong>Jornada ordinaria máxima:</strong> la Ley N° 21.561 redujo gradualmente la jornada, y hoy el máximo es de <strong>42 horas semanales</strong>, con una nueva reducción a 40 horas prevista para 2028. La reducción no puede significar rebaja de remuneraciones.</li>
            <li><strong>Ingreso mínimo mensual:</strong> para trabajadores de 18 a 65 años es de <strong>$553.553</strong> desde el 1 de mayo de 2026 (Ley N° 21.830). Para menores de 18 y mayores de 65 años es de $412.938.</li>
          </ul>
          <p>El sueldo pactado no puede ser inferior al mínimo para una jornada completa. En jornada parcial, el mínimo se proporcionaliza.</p>

          <h2>Las cotizaciones: aquí está el costo real</h2>
          <p>Al sueldo bruto hay que sumarle las cotizaciones. La estructura general es la siguiente, y es importante distinguir <strong>qué descuenta el trabajador de su sueldo</strong> y <strong>qué paga la empresa como costo adicional</strong>:</p>
          <table>
            <thead><tr><th>Concepto</th><th>Tasa</th><th>Quién lo paga</th></tr></thead>
            <tbody>
              <tr><td>AFP (pensión)</td><td>10% + comisión de la AFP</td><td>Se descuenta del trabajador</td></tr>
              <tr><td>Salud (Fonasa o Isapre)</td><td>7%</td><td>Se descuenta del trabajador</td></tr>
              <tr><td>Seguro de cesantía — contrato indefinido</td><td>2,4%</td><td><strong>Empleador</strong> (más 0,6% del trabajador)</td></tr>
              <tr><td>Seguro de cesantía — plazo fijo u obra</td><td>3%</td><td><strong>Empleador</strong> (el trabajador no aporta)</td></tr>
              <tr><td>Mutualidad Ley 16.744</td><td>0,90% base + adicional según riesgo</td><td><strong>Empleador</strong></td></tr>
              <tr><td>Seguro de Invalidez y Sobrevivencia (SIS)</td><td>Se ajusta por Oficio del SII</td><td><strong>Empleador</strong></td></tr>
              <tr><td>Aporte de la reforma previsional (Ley 21.735)</td><td>Escalonado, en aumento</td><td><strong>Empleador</strong></td></tr>
            </tbody>
          </table>
          <p><strong>Importante:</strong> las tasas del SIS y el aporte de la Ley N° 21.735 <strong>cambian durante el año</strong> y se actualizan por resolución. Durante 2026 el SIS fue modificado más de una vez y la reforma previsional sumó nuevos aportes a partir de agosto de 2026. Antes de calcular una liquidación, conviene confirmar la tasa vigente del mes en el sitio de la Superintendencia de Pensiones o de Previred.</p>

          <h2>La mutualidad: no la dejes para después</h2>
          <p>Toda empresa con trabajadores dependientes debe estar adherida a una <strong>mutualidad de la Ley N° 16.744</strong> para cubrir accidentes del trabajo y enfermedades profesionales. Las opciones son ACHS, IST, Mutual de Seguridad o el ISL.</p>
          <p>Si no haces la adhesión expresa, quedas en el <strong>Instituto de Seguridad Laboral por defecto</strong>. La adhesión se puede hacer en línea y el mismo día, pero tiene que estar lista <strong>antes del primer día de trabajo</strong>: si el trabajador sufre un accidente y la empresa no estaba adherida, la cobertura simplemente no existe.</p>

          <h2>Pagar las cotizaciones</h2>
          <p>Las cotizaciones se declaran y pagan mensualmente en <strong>Previred</strong>, y el plazo depende del medio:</p>
          <ul>
            <li><strong>Día 10</strong> del mes siguiente, si el pago es manual. Si el día 10 cae sábado, domingo o festivo, se prorroga al primer día hábil siguiente.</li>
            <li><strong>Día 13</strong> del mes siguiente, si declaras y pagas electrónicamente. Este plazo <strong>no se prorroga</strong> aunque el día 13 caiga fin de semana o festivo.</li>
          </ul>
          <p>Pagar fuera de plazo genera reajustes, intereses y multas. Y hay una consecuencia grave que pocos conocen: un despido con cotizaciones impagas puede quedar sin efecto para fines remuneracionales.</p>

          <h2>Otras obligaciones que se activan</h2>
          <ul>
            <li><strong>Libro de Remuneraciones Electrónico (LRE):</strong> obligatorio para empresas con <strong>5 o más trabajadores</strong>. Se carga en <em>Mi DT</em> dentro de los primeros 15 días hábiles del mes siguiente al pago.</li>
            <li><strong>Reglamento Interno de Orden, Higiene y Seguridad:</strong> obligatorio desde que ocupas normalmente <strong>10 o más trabajadores permanentes</strong>.</li>
            <li><strong>Protocolo de la Ley Karin (Ley N° 21.643):</strong> obligatorio desde el <strong>primer trabajador</strong>. Exige un protocolo de prevención del acoso sexual, laboral y la violencia en el trabajo, y un procedimiento de investigación de denuncias. No hay umbral de tamaño.</li>
            <li><strong>Registro de asistencia:</strong> en libro, reloj control o sistema electrónico autorizado.</li>
            <li><strong>Gratificación legal:</strong> si la empresa tiene utilidades, debe repartir al menos el 30% de ellas. La práctica más común es pagar el 25% de lo devengado mensualmente, con un tope anual equivalente a 4,75 ingresos mínimos.</li>
          </ul>

          <h2>El costo que casi nadie presupuesta</h2>
          <p>Un sueldo bruto de $1.500.000 no cuesta $1.500.000. Sumando las cotizaciones de cargo del empleador y la gratificación garantizada, el costo mensual real ronda bastante más, y si a eso agregas la provisión de vacaciones e indemnizaciones, la diferencia es mayor.</p>
          <p>La regla práctica es simple: <strong>presupuesta el cargo, no el sueldo</strong>. Y hazlo antes de comprometer la contratación, porque ajustar después es incómodo para ambas partes.</p>

          <h2>Los errores más comunes al partir</h2>
          <ul>
            <li><strong>Firmar el contrato fuera del plazo legal</strong> y quedar con la presunción en contra.</li>
            <li><strong>No adherir a la mutualidad antes del primer día.</strong></li>
            <li><strong>Pagar un sueldo bajo el mínimo</strong>, que es nulo para jornada completa.</li>
            <li><strong>Atrasarse con las cotizaciones</strong>, que generan intereses por trabajador.</li>
            <li><strong>Olvidar el registro de asistencia</strong>, sin el cual no puedes contradecir horas extra reclamadas.</li>
            <li><strong>No entregar copia del contrato al trabajador.</strong></li>
            <li><strong>Cruzar el umbral de 10 trabajadores sin tener el Reglamento Interno.</strong> Lo razonable es redactarlo cuando el equipo llega a 7 u 8.</li>
          </ul>

          <h2>Nosotros nos encargamos</h2>
          <p>Si tienes trabajadores o estás por contratar al primero, el servicio de <a href="/remuneraciones/">remuneraciones y liquidaciones</a> cubre el cálculo mensual, las cotizaciones, el libro de remuneraciones electrónico y los finiquitos cuando corresponde.</p>
          <p>Y si tienes dudas sobre el costo real de una contratación antes de decidir, revisa nuestra <a href="/asesoria-tributaria/">asesoría tributaria</a> o escríbenos directamente.</p>
          <p class="disclaimer">Contenido informativo. No constituye asesoría laboral o previsional personalizada. Las tasas de cotización, el ingreso mínimo y los plazos vigentes deben verificarse en el <a href="https://www.dt.gob.cl" target="_blank" rel="noopener nofollow">Código del Trabajo</a>, la Superintendencia de Pensiones y Previred.</p>
        </article>
      </div>
    </section>`,
    faq: [
      ['¿Cuánto tiempo tengo para firmar el contrato de trabajo?', '15 días corridos desde el inicio de las labores como regla general, y 5 días corridos si el contrato es por obra o faena o dura menos de 30 días (artículo 9 del Código del Trabajo).'],
      ['¿Cuánto cuesta realmente contratar a un trabajador?', 'El sueldo bruto más las cotizaciones de cargo del empleador (seguro de cesantía, mutualidad, SIS y aportes de la reforma previsional) y la gratificación garantizada. Una regla práctica es presupuestar el cargo y no el sueldo.'],
      ['¿Tengo que adherirme a una mutual?', 'Sí, es obligatorio para toda empresa con trabajadores dependientes. Debes hacerlo antes del primer día de trabajo; si no lo haces, quedas en el Instituto de Seguridad Laboral por defecto.'],
      ['¿Cuándo tengo que pagar las cotizaciones?', 'Hasta el día 10 del mes siguiente si el pago es manual, y hasta el día 13 si declaras y pagas electrónicamente en Previred. El plazo del día 13 no se prorroga aunque caiga fin de semana o festivo.'],
      ['¿Qué obligaciones aplican desde el primer trabajador?', 'Además del contrato y las cotizaciones, la Ley Karin exige un protocolo de prevención del acoso y un procedimiento de investigación desde el primer trabajador. El Libro de Remuneraciones Electrónico es obligatorio desde 5 trabajadores y el Reglamento Interno desde 10 trabajadores permanentes.']
    ],
    related: [
      ['/remuneraciones/', 'Remuneraciones y liquidaciones', 'Calculamos sueldos, cotizaciones y finiquitos mes a mes.'],
      ['/blog/como-calcular-finiquito/', 'Cómo calcular un finiquito', 'Qué corresponde pagar cuando termina una relación laboral.'],
      ['/blog/patente-municipal/', 'Patente municipal', 'Presupuesta el cargo completo: sueldo, cotizaciones y local.'],
      ['/asesoria-tributaria/', 'Asesoría tributaria', 'El tratamiento tributario de bonos y asignaciones.']
    ],
    cta: ctaBand('Contrata sin sorpresas', 'Revisamos el costo real de tu primera contratación y nos encargamos de las liquidaciones y cotizaciones.', 'Quiero asesoría para contratar')
  }

];
