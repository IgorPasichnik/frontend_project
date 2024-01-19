import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

export const EntryPage = () => {
  const { Title } = Typography;
  return (
    <div style={{ margin: "0 auto" }}>
      <Typography>
        <Title level={2}>Welcome to this site</Title>
      </Typography>
      <Button>
        <Link to="/login">Назад</Link>
      </Button>
    </div>
  );
};
