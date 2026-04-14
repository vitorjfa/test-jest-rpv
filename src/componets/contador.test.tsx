import { use } from "react";
import { Contador } from "./contador";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Contador", () => {
  it("Renderiz o componente com o valor inicial de 0", () => {
    render(<Contador />);
    expect(screen.getByText("Contador: 0")).toBeInTheDocument;
  });

  it("Incrementa o contador ao clicar no botão Incrementar", async () => {
    render(<Contador />);
    await userEvent.click(screen.getByText("Incrementar"));
    expect(screen.getByText("Contador: 1")).toBeInTheDocument;
  });
});
