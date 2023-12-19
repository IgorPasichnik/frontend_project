import Styles from "./modal.module.css";

const Modal = (props) => {
  const closeModalHendler = () => {
    props.closeModal();
  };

  return (
    <div className={Styles.modal}>
      <div className={Styles.modalContent}>
        <button onClick={closeModalHendler}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
