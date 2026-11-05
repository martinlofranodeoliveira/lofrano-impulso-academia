---
name: "Impulso"
description: "Sistema visual implementado — Academia & movimento"
colors:
  primary: "#d9ff44"
  blue: "#123cdd"
  background: "#f2f3ef"
  text: "#202520"
  surface: "#121b19"
  on-primary: "#182115"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(56px, 6.5vw, 93px)"
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: "-6px"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    lineHeight: 1.5
---

# Design System: Impulso

## Overview

Academia conceitual de linguagem enérgica: azul intenso, amarelo esverdeado, tipografia pesada e fotografia em movimento. Faixa tipográfica e carimbo inclinado reforçam o ritmo.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/impulso). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Azul ocupa navegação e hero; o acento acende ação, carimbo, faixa e seleções da agenda. A agenda usa superfície escura e o método retorna ao fundo claro. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

O corpo usa Arial/Helvetica; títulos herdam Manrope da base. O peso declarado do hero é (900). A partir de (1400px), o hero usa (100px); até (760px), usa clamp(34px, 10.5vw, 56px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero em colunas (1.1fr 1fr), método em três e agenda em duas. Até (760px), ficam em uma coluna; a foto recebe (330px), método margens de (7%) e faixa reduz tipografia e lacunas.

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Gradiente azul cobre a foto; carimbo e texto sobrepostos criam camadas. O restante usa planos de cor e linhas, sem sombras estruturais.

## Shapes

Predominam retângulos de cantos retos; carimbo inclinado (-5deg) e letras compactas. A agenda conserva linhas abertas em vez de cartões arredondados. A imagem conceitual está em [`assets/impulso.webp`](../assets/impulso.webp); preservar seu recorte definido pelo CSS.

## Components

- Agenda: SEG e demais dias disponíveis trocam a lista e limpam a aula selecionada. O dia ativo recebe fundo de acento.
- Aulas: linhas clicáveis usam `aria-pressed`; a selecionada ganha fundo translúcido de acento e mensagem de status.
- Ação de abertura: âncora retangular com acento e texto escuro.
- Estados compartilhados: Âncoras, botões e seletores da demonstração sobrescrevem o foco para contorno da cor corrente (3px), afastado (5px); a moldura usa rosa. A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Manter planos fortes, escala tipográfica e contraste entre hero azul e agenda escura.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Suavizar a identidade em cartões pastel ou apresentar escolha de aula como inscrição efetiva.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
