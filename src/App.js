import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { TodoListForm } from './components/TodoListForm/TodoListForm';
import { TodoListItem } from './components/TodoListItem/TodoListItem';
import { taskService } from './services/taskService';
import { ToastContainer, toast } from 'react-toastify';
import { httpClient } from './services/httpClient';

function App() {
  const [novaTask, setNovaTask] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);

  async function handleAddTask() {
    const response = await toast.promise(
      httpClient.post('/tasks', novaTask),
      {
        pending: 'Carregando...',
        success: 'Tarefa adicionada com sucesso',
        error: 'Houve um erro ao adicionar a tarefa'
      })

    if (!response?.data?.success) {
      return;
    }

    handleGetTasks();

    setNovaTask({ title: "", description: "" });
  };

  async function handleAlternarConclusaoTask(taskId) {
    const response = await toast.promise(
      taskService.concluirDesconcluirTask(taskId),
      {
        pending: 'Carregando...',
        success: 'Conclusão alterada com sucesso',
        error: 'Houve um erro ao alterar conclusão da tarefa'
      }
    );

    await handleGetTasks();
  };

  async function handleRemoveTask(taskId) {
    await toast.promise(
      httpClient.delete(`/tasks/${taskId}`),
      {
        pending: 'Carregando...',
        success: 'Tarefa removida com sucesso',
        error: 'Houve um erro ao remover a tarefa. Verifique se ela já foi concluída e tente removê-la novamente.'
      });

    await handleGetTasks();
  }

  async function handleGetTasks() {
    try {
      const response = (await httpClient.get("/tasks")).data;

      if (!response.success) {
        return;
      }

      setTasks(response?.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetTasks();
  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <h1>Bem vindo a sua lista de tarefas</h1>

      <h2>Adicione uma tarefa</h2>
      <TodoListForm novaTask={novaTask} setNovaTask={setNovaTask} salvarTask={handleAddTask} />

      <h2>Suas Tarefas</h2>
      {
        tasks.map(task => {
          return (
            <TodoListItem
              key={task?.taskId}
              title={task?.title}
              description={task?.description}
              doneAt={task?.doneAt}
              done={task?.done}
              handleRemover={() => handleRemoveTask(task?.taskId)}
              handleAlternarConclusao={() => handleAlternarConclusaoTask(task?.taskId)}
            />
          );
        })
      }
    </div>
  );
};

export default App;
