import './App.css';

import { useReducer, useState } from 'react';
import { TodoListForm } from './components/TodoListForm/TodoListForm';
import { TodoListItem } from './components/TodoListItem/TodoListItem';
import { todoListReducer } from './reducers/todoListReducer';

function App() {
  const [novaTask, setNovaTask] = useState({ titulo: "", descricao: "" });
  const [tasks, dispatch] = useReducer(todoListReducer, []);

  function handleAddTask() {
    dispatch({ type: "add", task: novaTask });
    setNovaTask({ titulo: "", descricao: "" });
  };

  function handleAlternarConclusaoTask(taskId, statusConclusaoAtual) {
    if (statusConclusaoAtual) {
      dispatch({ type: "desconcluir", taskId });
    } else {
      dispatch({ type: "concluir", taskId });
    }
  };

  function handleRemoveTask(taskId) {
    dispatch({ type: "remover", taskId });
  };

  return (
    <div className="App">
      <h1>Bem vindo a sua lista de tarefas</h1>

      <h2>Adicione uma tarefa</h2>
      <TodoListForm novaTask={novaTask} setNovaTask={setNovaTask} salvarTask={handleAddTask} />

      <h2>Suas Tarefas</h2>
      {
        tasks.map(task => {
          return (
            <TodoListItem
              key={task.id}
              titulo={task.titulo}
              descricao={task.descricao}
              dataConclusao={new Date()}
              concluido={task.concluido}
              handleRemover={() => handleRemoveTask(task.id)}
              handleAlternarConclusao={() => handleAlternarConclusaoTask(task.id, task.concluido)}
            />
          );
        })
      }
    </div>
  );
}

export default App;
