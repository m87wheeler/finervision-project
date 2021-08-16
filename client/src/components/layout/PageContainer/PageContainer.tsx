import { Container } from "./PageContainer.style";

const PageContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
