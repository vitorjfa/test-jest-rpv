// Faremos aqui nossos testes.

// 1. Ação -> Renderize o component passando um array [] na prop tarefas
// 1.1 Validação -> Verifique se o texto "Nenhuma tarefa pendente!" está no documento
// 1.2 Validação -> Garantir que o número 0 não está sendo renderizado em tela

// 2. Ação -> Renderize o componente passando um array com pelo menos 2 tarefas mockadas (ex: id 1 e id 2) e crie um mock para a prop onExcluir (jest.fn()). Não simule nenhum clique ainda.

// 2.1 Validação: Verifique se a função mockada onExcluir NÃO foi chamada nenhuma vez (not.toHaveBeenCalled()).

// 3. Ação ->  Após corrigir o bug do botão no arquivo ListaDeTarefas.jsx (transformando em uma arrow function), faça o teste renderizar a lista com 2 tarefas.
// 3.1 Ação do Usuário -> Use o userEvent.click para clicar no botão "Excluir" da primeira tarefa.
// 3.2 Validação -> Verifique se a função mockada onExcluir foi chamada exatamente 1 vez, e se ela recebeu como argumento o id correto da tarefa que você clicou (toHaveBeenCalledWith(idDaTarefa)).

import { render, screen } from "@testing-library/react";
import { ListaDeTarefas } from "./ListasDeTarefas";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Componente ListaDeTarefas", () => {
  it("deve renderizar o texto 'Nenhuma tarefa pendente!' quando a lista de tarefas estiver vazia", () => {
    render(<ListaDeTarrefas tarefas={[]} onExcluir={() => {}} />);

    const texto = screen.getByText("Nenhuma tarefa pendente!");
    const numeroZero = screen.queryByText("0");

    expect(texto).toBeInTheDocument();
    expect(numeroZero).not.toBeInTheDocument();
  });

  it("deve renderizar a lista de tarefas e chamar a função onExcluir corretamente", async () => {
    const tarefasMock = [
      { id: 1, texto: "Tarefa 1" },
      { id: 2, texto: "Tarefa 2" },
    ];
    const funcaoEspian = jest.fn();
    render(<ListaDeTarrefas tarefas={tarefasMock} onExcluir={funcaoEspian} />);

    const botaoExcluirTarefa1 = screen.getByRole("button", {
      name: "Excluir",
      hidden: true,
    });

    expect(funcaoEspian).not.toHaveBeenCalled();

    await userEvent.click(botaoExcluirTarefa1);
    expect(funcaoEspian).toHaveBeenCalledWith(1);
  });
});
