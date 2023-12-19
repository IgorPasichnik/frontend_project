import Styles from "./main.module.css";

const Main = (props) => {
  const onClickHendler = () => {
    props.openModal();
  };
  return (
    <div className={Styles["wrapper"]}>
      <button onClick={onClickHendler}>Open</button>
    </div>
  );
};

export default Main;
