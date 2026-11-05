import React from "react";
import { ArrowUpRight, Check, Plus } from "./Icons.jsx";
import image_impulso from "../assets/impulso.webp";
function ModelImage({ alt }) {
  return <img src={image_impulso} alt={alt} width={1400} height={1000} />;
}

const DemoNote = ({ prefix: e }) => (
  <p className={`${e}-note`}>
    Experiência demonstrativa · marca, serviços e valores ilustrativos. Suas
    escolhas ficam apenas nesta tela.
  </p>
);
function ImpulsoDemo() {
  let [day, setDay] = React.useState(`SEG`),
    [selectedClass, setSelectedClass] = React.useState(``),
    i =
      day === `SEG`
        ? [
            [`07:00`, `FORÇA TOTAL`, `45 min · sala 01`],
            [`12:30`, `MOBILIDADE`, `30 min · studio`],
            [`18:00`, `RIDE CLUB`, `50 min · sala 02`],
          ]
        : day === `QUA`
          ? [
              [`06:30`, `RIDE CLUB`, `50 min · sala 02`],
              [`11:00`, `FORÇA TOTAL`, `45 min · sala 01`],
              [`19:00`, `BOXE LAB`, `45 min · studio`],
            ]
          : [
              [`08:00`, `MOBILIDADE`, `30 min · studio`],
              [`10:00`, `BOXE LAB`, `45 min · sala 01`],
              [`17:00`, `FORÇA TOTAL`, `45 min · sala 01`],
            ];
  return (
    <div id={`demo-top`} className={`im-page`}>
      <div className={`im-nav`}>
        <a href={`#demo-top`} className={`im-logo`}>
          impulso
          <span>
            <ArrowUpRight
              size={24}
              style={{
                display: `inline-block`,
                verticalAlign: `middle`,
              }}
            />
          </span>
        </a>
        <span>TRAINING CLUB / DEMO</span>
        <a href={`#im-agenda`}>
          {`Encontre seu ritmo `}
          <ArrowUpRight size={17} />
        </a>
      </div>
      <section className={`im-hero`}>
        <div className={`im-copy`}>
          <p className={`im-kicker`}>O SEU MOVIMENTO COMEÇA AQUI</p>
          <h1>
            SAIA DO
            <br />
            AUTOMÁ<em>TICO.</em>
          </h1>
          <p>
            Treino com presença. Energia em boa companhia. Um novo jeito de
            colocar você em movimento.
          </p>
          <a className={`im-cta`} href={`#im-agenda`}>
            {`EXPLORE AS AULAS `}
            <ArrowUpRight />
          </a>
          <span className={`im-coordinate`}>FORÇA. FOCO. SEU RITMO.</span>
        </div>
        <div className={`im-photo`}>
          <ModelImage
            slug={`impulso`}
            alt={`Espaço de treinamento contemporâneo do conceito Impulso`}
          />
          <div className={`im-photo-stamp`}>
            MAIS
            <br />
            MOVIMENTO.
            <ArrowUpRight size={38} />
          </div>
        </div>
      </section>
      <div className={`im-ticker`} aria-hidden={`true`}>
        {`MOVE YOUR WAY `}
        <span>✳</span>
        {` ENCONTRE SEU IMPULSO `}
        <span>✳</span>
        {` MOVE YOUR WAY`}
      </div>
      <section className={`im-method`}>
        <p className={`im-kicker`}>NÃO É SÓ SOBRE TREINAR.</p>
        <h2>
          É sobre encontrar
          <br />
          {`o que `}
          <em>move você.</em>
        </h2>
        <div>
          {[
            [
              `01`,
              `FORÇA`,
              `Do primeiro movimento ao próximo desafio. Um espaço para construir sua rotina.`,
            ],
            [
              `02`,
              `ENERGIA`,
              `Aulas coletivas, música e uma dose extra de vontade de estar aqui.`,
            ],
            [
              `03`,
              `EQUILÍBRIO`,
              `Mobilidade e pausas também fazem parte do movimento.`,
            ],
          ].map(([e, t, n]) => (
            <article key={e}>
              <span>{e}</span>
              <h3>{t}</h3>
              <p>{n}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`im-agenda`} id={`im-agenda`}>
        <div>
          <p className={`im-kicker`}>GRADE ILUSTRATIVA</p>
          <h2>
            SEU DIA.
            <br />
            SEU TREINO.
          </h2>
          <p>
            Teste a seleção de uma aula.
            <br />
            Nenhuma inscrição será realizada.
          </p>
        </div>
        <div>
          <div className={`im-days`} aria-label={`Dia da grade demonstrativa`}>
            {[`SEG`, `QUA`, `SEX`].map((n) => (
              <button
                key={n}
                aria-pressed={day === n}
                onClick={() => {
                  (setDay(n), setSelectedClass(``));
                }}
              >
                {n}
              </button>
            ))}
          </div>
          {i.map(([e, t, i]) => (
            <button
              key={e}
              className={`im-class`}
              aria-pressed={selectedClass === t + e}
              onClick={() => setSelectedClass(t + e)}
            >
              <time>{e}</time>
              <span>
                <strong>{t}</strong>
                <small>{i}</small>
              </span>
              {selectedClass === t + e ? <Check /> : <Plus />}
            </button>
          ))}
          <p className={`im-feedback`} role={`status`}>
            {selectedClass
              ? `Aula selecionada nesta demonstração. Nenhuma vaga reservada.`
              : `Escolha a aula que combina com seu ritmo.`}
          </p>
        </div>
      </section>
      <DemoNote prefix={`im`} />
    </div>
  );
}

export default ImpulsoDemo;
