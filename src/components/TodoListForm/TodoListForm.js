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
        <label htmlFor="title">Título</label>
        <input placeholder='Atividade da disciplina...' className='form-input txt-input' type="text" name="title" value={novaTask?.title} onChange={handleChange} />
      </div>

      <div className='form-element'>
        <label htmlFor="description">Descrição</label>
        <textarea
          placeholder='Deve ser construída uma aplicação que...'
          className='form-input txt-area'
          type="text"
          rows="5"
          name="description"
          value={novaTask?.description}
          onChange={handleChange}
        />

      </div>

      <button className='submit-button' type='submit' onClick={handleSubmit}>Adicionar tarefa</button>
    </form>
  );
}