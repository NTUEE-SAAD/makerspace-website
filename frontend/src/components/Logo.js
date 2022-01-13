import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Link to="/home">
      <LogoImage src="/mkslogo.png" />
    </Link>
  );
};

const LogoImage = styled.img`
  height: 54px;
  width: auto;
  transform: translate(-20px, -2px);
`;
