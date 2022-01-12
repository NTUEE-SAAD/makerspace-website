import { Link } from "react-router-dom";
import { Typography } from "antd";

export const Logo = () => {
  return (
    <Link to="/home">
      <Typography style={{ color: "white" }}>NTUEE MakerSpace</Typography>
    </Link>
  );
};
