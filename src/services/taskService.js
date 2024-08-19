import { httpClient } from "./httpClient";

const taskService = {
  async obterTasks() {
    try {
      const response = JSON.parse(await httpClient.get("/tasks")).data;

      return response;
    } catch (error) {

      console.log(error);
    }
  },

  async criarTask(task) {
    try {
      const response = JSON.parse((await httpClient.post("/tasks", task)).data);

      return response;
    } catch (error) {
      console.log({ error2: error });
    }
  },

  async concluirDesconcluirTask(taskId) {
    return httpClient.patch(`/tasks/${taskId}/done-undone`);
  },

  async removerTask() { },

  async atualizarTask() { }
};

export { taskService };