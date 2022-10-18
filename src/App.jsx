import { About, Hero, NavBar, Projects, Skills, Particles, Footers } from './components';
import styled from 'styled-components';

const App = () => (
  <Container>
    <Particles />
    <NavBar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Footers />
  </Container>
);

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  background-color: #121212 !important;
  color: #fff !important;
`;

export default App