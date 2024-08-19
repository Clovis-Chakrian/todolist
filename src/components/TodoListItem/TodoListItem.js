import './TodoListItem.css';

export function TodoListItem({ title, description, done, doneAt, handleRemover, handleAlternarConclusao }) {
  return (
    <div className="card">
      <header className="titulo">
        <h2>{title}</h2>
        <button className='btn-del' onClick={handleRemover}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F00"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
        </button>
      </header>

      <main className="conteudo">
        <p>{description}</p>
        <input type="checkbox" name="" id="" checked={done} onClick={handleAlternarConclusao} />
      </main>
      {
        done &&
        <footer className="rodape">
          <p>{`Data de conclusão: ${new Date(doneAt).toLocaleDateString()} - ${new Date(doneAt).toLocaleTimeString()}`}</p>
        </footer>
      }
    </div>
  )
};