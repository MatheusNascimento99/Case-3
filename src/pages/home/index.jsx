import './index.scss';
import book from '../../../assets/Imagens/book.svg';
const Home = () =>{
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
            <input placeholder='buscar livro...' type="text" /><br />
            </div>
            <br />
            <div className='btn_busca'>
            <button >BUSCAR</button>
            </div>
            
            <div className='footer'>
            </div>
        </div>
    )
}

export default Home;