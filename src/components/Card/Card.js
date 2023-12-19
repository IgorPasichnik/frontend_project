// import Styles from "./card.module.css";
import { CardWrapper } from "./Styled.card.js";

const Card = (props) => {
  const { title } = props;
  return (
    <CardWrapper>
      <h2 className="card_header">{title}</h2>
    </CardWrapper>
  );
};

export default Card;
