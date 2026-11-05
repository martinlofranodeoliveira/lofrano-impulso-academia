const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "impulso-01 — apresenta as aulas de quarta-feira",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "QUA", exact: true }));
      assert.equal(
        ui
          .getByRole("button", { name: "QUA", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      assert.equal(
        ui
          .getByRole("button", { name: "SEG", exact: true })
          .getAttribute("aria-pressed"),
        "false",
      );
      for (const name of [
        /06:30\s*RIDE CLUB/u,
        /11:00\s*FORÇA TOTAL/u,
        /19:00\s*BOXE LAB/u,
      ]) {
        assert.ok(ui.getByRole("button", { name }));
      }
      assert.equal(
        ui.queryByRole("button", { name: /07:00\s*FORÇA TOTAL/u }),
        null,
      );
    },
  },
  {
    name: "impulso-02 — seleciona RIDE CLUB na quarta-feira",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "QUA", exact: true }));
      const ride = ui.getByRole("button", { name: /06:30\s*RIDE CLUB/u });
      await user.click(ride);
      assert.equal(ride.getAttribute("aria-pressed"), "true");
      assert.equal(
        text(ui.getByRole("status")),
        "Aula selecionada nesta demonstração. Nenhuma vaga reservada.",
      );
    },
  },
  {
    name: "impulso-03 — troca para sexta-feira e limpa a aula escolhida",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "QUA", exact: true }));
      await user.click(ui.getByRole("button", { name: /06:30\s*RIDE CLUB/u }));
      await user.click(ui.getByRole("button", { name: "SEX", exact: true }));
      for (const name of [
        /08:00\s*MOBILIDADE/u,
        /10:00\s*BOXE LAB/u,
        /17:00\s*FORÇA TOTAL/u,
      ]) {
        assert.equal(
          ui.getByRole("button", { name }).getAttribute("aria-pressed"),
          "false",
        );
      }
      assert.equal(
        ui.queryByRole("button", { name: /06:30\s*RIDE CLUB/u }),
        null,
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Escolha a aula que combina com seu ritmo.",
      );
    },
  },
];
