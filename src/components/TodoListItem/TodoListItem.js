import './TodoListItem.css';

export function TodoListItem({ titulo, descricao, concluido, dataConclusao, handleRemover, handleAlternarConclusao }) {
  return (
    <div className="card">
      <header className="titulo">
        <h2>{titulo}</h2>
        <button className='btn-del' onClick={handleRemover}>Del</button>
      </header>

      <main className="conteudo">
        <p>{descricao}</p>
        <input type="checkbox" name="" id="" value={"Concluída"} checked={concluido} onClick={handleAlternarConclusao} />
      </main>

      {
        concluido &&
        <footer className="rodape">
          <p>{`Data de conclusão: ${dataConclusao.toLocaleDateString()} - ${dataConclusao.toLocaleTimeString()}`}</p>
        </footer>
      }
    </div>
  )
};