import './index.scss';
import book from '../../../assets/Imagens/book.svg';
const Home = () =>{
    return (
        <div>
            <div className="header">
            <img src={book} alt="foto livro" />
            </div>
            <h1>Página  Central.</h1>
            <div className='footer'>

            </div>
        </div>
    )
}

export default Home;