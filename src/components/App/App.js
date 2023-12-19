import { useState } from "react";
import Styles from "./app.module.css";
import Main from "../Main/Main.js";
import Modal from "../Modal/Modal.js";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHendler = () => {
    setIsModalOpen(true);
  };
  const closeModalHendler = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={Styles["wrapper"]}>
      <Main openModal={openModalHendler}></Main>
      {isModalOpen === true && <Modal closeModal={closeModalHendler}></Modal>}
    </div>
  );
}

export default App;
