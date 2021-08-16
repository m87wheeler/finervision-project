import Button from "../../components/ui/Button/Button";
import { Container } from "./Header.style";
import { IHeaderProps } from "./Header.types";

const Header: React.FC<IHeaderProps> = ({ onClick, currentPage }) => {
  return (
    <Container>
      <Button onClick={onClick}>
        {currentPage === "index" ? "View Comments" : "Home"}
      </Button>
    </Container>
  );
};

export default Header;
