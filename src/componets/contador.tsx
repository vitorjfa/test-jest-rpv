import { useState } from "react";

export function Contador() {
  const [Contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {Contador}</h1>;
      <button onClick={() => setContador(Contador + 1)}>Incrementar</button>;
      <button onClick={() => setContador(Contador - 1)}>Decrementar</button>;
    </div>
  );
}
