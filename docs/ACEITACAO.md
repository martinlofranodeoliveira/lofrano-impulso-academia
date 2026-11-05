# Critérios do modelo Impulso

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **impulso-01** — No grupo “Dia da grade demonstrativa”, clicar QUA.
  Resultado: QUA recebe aria-pressed=true e a grade passa a 06:30 RIDE CLUB, 11:00 FORÇA TOTAL e 19:00 BOXE LAB.
- **impulso-02** — Com QUA ativo, clicar no button de aula que contém “06:30” e “RIDE CLUB”.
  Resultado: O button recebe aria-pressed=true e role=status mostra “Aula selecionada nesta demonstração. Nenhuma vaga reservada.”.
- **impulso-03** — Depois de selecionar uma aula, clicar SEX.
  Resultado: A seleção anterior é limpa e todos os buttons de aula ficam false. A grade mostra 08:00 MOBILIDADE, 10:00 BOXE LAB e 17:00 FORÇA TOTAL; o status volta a “Escolha a aula que combina com seu ritmo.”.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
