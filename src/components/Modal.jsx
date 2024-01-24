import PropTypes from "prop-types";
import "./Modal.scss";

function Modal({ mostrar, handleClose }) {

    const estiloModal = {
        display: mostrar ? 'block' : 'none',
        position: 'fixed',
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: '50px'
    };

    const estiloConteudo = {
        backgroundColor: '#fefefe',
        margin: '15% auto',
        padding: '20px',
        border: '1px solid #888',
        width: '758px',
        height: '436px',
    };

   

    return (
        <div style={estiloModal}>
            <div style={estiloConteudo}>
                <h2 id='titulo'>Livro adicionado com sucesso!</h2>
                <br />
                <button className='ok' onClick={handleClose}>OK</button>
            </div>
        </div>
    );
}


Modal.propTypes = {
    mostrar: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleConfirmar: PropTypes.func.isRequired,
};

export default Modal;
