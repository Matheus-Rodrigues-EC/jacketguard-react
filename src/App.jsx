import styled from "styled-components"
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import BackGround from './assets/background.jpg'

function App() {

  return (
    <Containter>
      <Navbar />
      <Home />
    </Containter>
  )
}

export default App


const Containter = styled.div`
  background-image: url(${BackGround});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`