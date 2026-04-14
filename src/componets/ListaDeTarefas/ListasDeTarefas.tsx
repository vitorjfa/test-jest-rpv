export function ListaDeTarefas({ tarefas, onExcluir }) {
  return (
    <div>
      <h2>Minhas Tarefas</h2>
      {tarefas.length && (
        <ul>
          {tarefas.map((tarefa) => (
            <li key={tarefa.id}>
              <span>{tarefa.texto}</span>
              <button onClick={() => onExcluir(tarefa.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}

      {tarefas.length === 0 && <p>Nenhuma tarefa pendente!</p>}
    </div>
  );
}
