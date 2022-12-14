import './modal.css';
import React from 'react';
//import { AiOutlineCloseCircle} from "react-icons/ai"; //<AiOutlineCloseCircle/>

function Modal({isOpen, closeModal, contenido}) { 
 const handleModalDialogClick = (e) => {
    e.stopPropagation();
    
}
  return (
     <div className={isOpen?'modal modal-open':'modal'} onClick={closeModal}> 
      <section className="modal_dialog" onClick={handleModalDialogClick}>
      <div className='titleModalContainer'> 
      <div></div>

      <button onClick={closeModal} className="closeIcon">cerrar</button>
      </div>  
      <article>{contenido}</article>
      </section>
    </div>
  );
}

export default Modal;
