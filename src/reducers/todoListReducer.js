export function todoListReducer(tasks, action) {
  switch (action.type) {
    case 'add': {
      let id = gerarId();
      while (tasks.filter(task => task.id === id).length > 0) {
        id = gerarId();
      };
      
      return [
        ...tasks,
        {
          ...action.task,
          id,
          concluido: false,
          dataConclusao: null
        }
      ]
    }

    case 'concluir': {
      const tasksAtualizadas = tasks.map(task => {
        if (task.id !== action.taskId) {
          return task;
        }

        return {
          ...task,
          concluido: true,
          dataConclusao: new Date()
        }
      });

      return tasksAtualizadas;
    }

    case 'desconcluir': {
      const tasksAtualizadas = tasks.map(task => {
        if (task.id !== action.taskId) {
          return task;
        }

        return {
          ...task,
          concluido: false,
          dataConclusao: null
        }
      });

      return tasksAtualizadas;
    }

    case 'remover': {
      return tasks.filter(task => task.id !== action.taskId);
    }

    default:
      throw Error(`Funcionalidade desconhecida: ${action.type}`);
  };
}

function gerarId(tamanho = 1000000) {
  return Math.floor(Math.random() * tamanho);
}