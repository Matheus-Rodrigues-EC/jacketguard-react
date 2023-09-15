/* eslint-disable react/prop-types */
import styled from "styled-components";
import axios from "axios";

function Search(props){

    const {cityName, setCityName, colorbackground, colortext, setCoordenates, LoadLocalCoord, LoadForecastCoord, setDays} = props;

    function LoadCityName(){
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},BR&limit=1&appid=2ce3909f502db67377b6f769db60fcfd`)
            .then((res) => {
                const result = res.data[0];
                setCoordenates({lat: result.lat, lon: result.lon});
                LoadLocalCoord({lat: result.lat, lon: result.lon});
                LoadForecastCoord({lat: result.lat, lon: result.lon});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <Container>
            <Form>
                <Busca>
                    <Input placeholder='Digite o nome da sua cidade.' value={cityName} onChange={(e) => setCityName(e.target.value)} />
                    <Button colorbackground={colorbackground} colortext={colortext} onClick={() => LoadCityName()} >Buscar</Button>
                </Busca>
            </Form>
            <Busca>
                <Label>Escolha a previsão em dias. </Label>
                <Select name="Escolha a previsão em dias" onClick={(e) => setDays((e.target.value))}>
                    <Option value={5} selected > 5 dias </Option>
                    <Option value={4} > 4 dias </Option>
                    <Option value={3} > 3 dias </Option>
                    <Option value={2} > 2 dias </Option>
                    <Option value={1} > 1 dia </Option>
                </Select>
            </Busca>
        </Container>
    )
}

export default Search;


const Container = styled.div`
    transition: 2.5s;
`
const Form = styled.div`
`

const Busca = styled.div`
    display: flex;
    margin: 25px auto 0 auto;
    width: 100%;
    height: 50px;
    align-items: center;
`
const Input = styled.input`
    display: flex;

    margin: 50px 5px 50px auto;
    width: 35%;
    height: 30px;

    border-radius: 5px;

    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 20px;
`
const Button = styled.button`
    display: flex;

    margin: 50px auto 50px 5px;
    width: 14%;
    height: 35px;
    background-color: ${props => props.colorbackground};
    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};

    border-radius: 5px;
    border: none;
    box-sizing: border-box;

    align-items: center;
    justify-content: center;

    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 20px;

    cursor: pointer;
    transition: 2s;
`
const Label = styled.p`
    display: flex;
    color: #FFFFFF;
    align-items: center;
    margin:10px 5px 5px auto;

    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 15px;
`
const Select = styled.select`
    display: flex;
    margin: 10px auto 5px 5px;
    width: 30%;
    height: 30px;

    border-radius: 5px;

    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 15px;
`
const Option = styled.option`
`