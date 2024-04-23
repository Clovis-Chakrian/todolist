import './TodoListForm.css';

export function TodoListForm({ novaTask, setNovaTask, salvarTask }) {

  function handleChange(evt) {
    setNovaTask({
      ...novaTask,
      [evt.target.name]: evt.target.value
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    salvarTask();
  }

  return (
    <form id='todo-list-form'>
      <div className='form-element'>
        <label htmlFor="titulo">Título</label>
        <input className='form-input' type="text" name="titulo" value={novaTask.titulo} onChange={handleChange} />
      </div>

      <div className='form-element'>
        <label htmlFor="descricao">Descrição</label>
        <textarea
          className='form-input'
          type="text"
          rows="5"
          name="descricao"
          value={novaTask.descricao}
          onChange={handleChange}
        />

      </div>

      <button type='submit' onClick={handleSubmit}>Adicionar tarefa</button>
    </form>
  );
}