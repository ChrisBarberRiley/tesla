import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        standfirst='1% Company Car Tax. Learn More'
        image='/assets/images/m3-homepage-desktop.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model S'
        standfirst='1% Company Car Tax. Learn More'
        image='/assets/images/ms-homepage-desktop.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
      <Section
        title='Model Y'
        standfirst='1% Company Car Tax. Learn More'
        image='/assets/images/Desktop-ModelY.jpg'
        leftBtnText='Custom Order'
        rightBtnText='Existing Inventory'
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;
