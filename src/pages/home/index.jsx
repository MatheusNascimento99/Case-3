import './index.scss';
import book from '../../../assets/Imagens/book.svg';
import livros from '../../../mock/dataFake';
import { useRef, useState } from 'react';
import Modal from "../../components/Modal1";
import Modal2 from "../../components/Modal2";


const Home = () => {
    const valorRef = useRef();  //*Ref para campo input
    const [livroEscolhido, setLivroEscolhido] = useState([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [modal2Aberto, setModal2Aberto] = useState(false);


    const ConfirmarJaLido = () => {
        setModal2Aberto(true);
    }

    const ConfirmarQueroLer = () => {
        setModalAberto(true);
    }

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
            <header className="search_header">
                <img src={book} alt="foto livro" />
            </header>

            <div className='search'>
                <div className='search_title'>
                    <h1 >Qual livro você quer <br />conhecer hoje?</h1>
                </div>

                <br />
                <div className='search_input' >
                    <input placeholder='buscar livro...' ref={valorRef} type="text" /><br />
                </div>

                <br />

                <div className='search_btn'>
                    <button onClick={pegarValor} >BUSCAR</button>
                </div>
            </div>

            <div className='search_footer'>
            </div>

            <div className='change'>
                <div className='div_livros'>
                    {livroEscolhido.map((elemento, index) => (
                        <div key={index} className='livro'>
                            <img src={elemento.imagem} alt="error" />
                            <div className='leitura'>
                                <button id='ok' onClick={() => ConfirmarJaLido() }>Já Li!</button> <br /> <br />
                                <button id='not' onClick={() => ConfirmarQueroLer()}>Quero ler!</button>
                            </div>
                            
                            <h2 className='livro_info'>{elemento.nome}</h2>
                            <p className='livro_info'>{elemento.autor}</p>
                            <p className='livro_info'><strong>Gênero:</strong> {elemento.categoria}</p>
                            <p className='descricao'>{elemento.descrição}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Modal2 mostrar={modal2Aberto} handleClose={() => setModal2Aberto(false)}/>
            <Modal mostrar={modalAberto} handleClose={() => setModalAberto(false)}/>
        </div>
    )
}

export default Home;
