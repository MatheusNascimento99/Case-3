import './index.scss';
import book from '../../../assets/Imagens/book.svg';
import livros from '../../../mock/dataFake';
import { useRef, useState } from 'react';

const Home = () => {
  const valorRef = useRef();  //*Ref para campo input
  const [livroEscolhido, setLivroEscolhido] = useState([]);  

  const pegarValor = () => {     //! função para pegar valor do input
    const valorInput = valorRef.current.value;

    
    const livrosFiltrados = livros.filter( 
      elemento =>
        valorInput === elemento.nome ||
        valorInput === elemento.autor ||
        valorInput === elemento.categoria
    );

    
    setLivroEscolhido(livrosFiltrados);

    valorRef.current.value = '';

  }

  return (
    <div className='full'>
      <header className="header">
        <img src={book} alt="foto livro" />
      </header>

      <div className='title_busca_title'>
        <h1 >Qual livro você quer <br />conhecer hoje?</h1>
      </div>

      <br />
      <div className='input_busca' >
        <input placeholder='buscar livro...' ref={valorRef} type="text" /><br />
      </div>

      <br />

      <div className='btn_busca'>
        <button onClick={pegarValor} >BUSCAR</button>
      </div>

      <div className='footer'>
      </div>

      <div className='div_livros'>
        {livroEscolhido.map((elemento, index) => (
          <div key={index} className='livro'>
            <h2>{elemento.nome}</h2>
            <p>Autor: {elemento.autor}</p>
            <p>Descrição: {elemento.descrição}</p>
            <p>Categoria: {elemento.categoria}</p>
            <img src={elemento.imagem} alt="error" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;
