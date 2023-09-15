import styled from "styled-components";

function Navbar(){
    return (
        <Container>
            <h2>Levo um Casaquinho?</h2>
        </Container>
    )
}

export default Navbar;

const Container = styled.div`
    background-color: #222222;
    color: #FFF;
    display: flex;
    height: 75px;
    margin: auto;
    align-items: center;
    justify-content: center;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    font-size: 25px;
`