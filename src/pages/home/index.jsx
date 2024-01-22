import './index.scss';
import book from '../../../assets/Imagens/book.svg';
const Home = () =>{
    return (
        <div>
            <header className="header">
            <img src={book} alt="foto livro" />
            </header>
            <h1 className='title_busca'>Qual livro você quer <br />conhecer hoje?</h1>
            <input className='input_busca' placeholder='buscar livro...' type="text" /><br />
            <button className='btn_busca'>BUSCAR</button>
            <div className='footer'>
            </div>
        </div>
    )
}

export default Home;