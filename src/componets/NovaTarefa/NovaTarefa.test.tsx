import { render, screen } from "@testing-library/react";
import { NovaTarefa } from "./NovaTarefa";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Componente NovaTarefa", () => {
  it("deve renderizar o input e o botão corretamente na tela", () => {
    render(<NovaTarefa onAdicionar={() => {}} />);

    const input = screen.getByPlaceholderText("Digite a nova tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("deve chamar a função onAdicionar com o valor do input quando o botão for clicado", async () => {
    const funcaoEspian = jest.fn();
    render(<NovaTarefa onAdicionar={funcaoEspian} />);

    const input = screen.getByPlaceholderText("Digite a nova tarefa");
    const button = screen.getByRole("button", { name: "Adicionar" });

    await userEvent.type(input, "Estudar React");
    await userEvent.click(button);

    expect(funcaoEspian).toHaveBeenCalledTimes(1);
    expect(funcaoEspian).toHaveBeenCalledWith("Estudar React");

    expect(input).toHaveValue("");
  });
});
