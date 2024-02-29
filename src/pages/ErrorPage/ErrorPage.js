import img from "../../images/404error.svg";

export const ErrorPage = () => {
  return (
    <img
      style={{
        margin: "0 auto",
        maxWidth: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
      }}
      src={img}
    />
  );
};
