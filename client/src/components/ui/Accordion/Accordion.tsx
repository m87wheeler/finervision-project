import Button from "../Button/Button";
import { Container, Section, Content, Banner } from "./Accordion.style";
import { IAccordionProps } from "./Accordion.types";

const Accordion: React.FC<IAccordionProps> = ({
  onNext,
  onSubmit,
  onSelect,
  views,
  activeView = 0,
}) => {
  return (
    <Container>
      {views && views.length
        ? views.map(({ _id, title, component }, i) => (
            <Section key={_id}>
              <Banner onClick={() => onSelect(i)}>{title}</Banner>
              <Content active={activeView === i}>
                {component}
                <Button
                  onClick={i === views.length - 1 ? onSubmit : onNext}
                  style={{ alignSelf: "flex-end" }}
                >
                  Next &gt;
                </Button>
              </Content>
            </Section>
          ))
        : null}
    </Container>
  );
};

export default Accordion;
