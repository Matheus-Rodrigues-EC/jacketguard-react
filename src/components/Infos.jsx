/* eslint-disable react/prop-types */

import styled from "styled-components";
import Arrow from "../assets/arrow.svg";

function Infos(props){
    
    const {city, temp, wind, weather, colorbackground, colortext} = props;


    return (
        <Container colorbackground={colorbackground}>
            <HeaderInfos>
                <City colortext={colortext}>Local: {city ? city : 'Carregando...'}</City>
                <TemperatureData>
                    <Min_Max colortext={colortext}>Mínima: {temp ? temp.min : 'Carregando...'} ºC</Min_Max>
                    <Min_Max colortext={colortext}>Máxima: {temp ? temp.max : 'Carregando...'} ºC</Min_Max>
                    <Min_Max colortext={colortext}>Umidade: {temp ? temp.humidity : 'Carregando...'}%</Min_Max>
                </TemperatureData>
            </HeaderInfos>
            <Wind>
                <Speed colortext={colortext}>Vento</Speed>
                <Speed colortext={colortext}>{wind.speed}km/h</Speed>
                <Direction>
                    <Row>
                        <SecondaryDirection colortext={colortext} >NO</SecondaryDirection>
                        <PrimaryDirection colortext={colortext} >N</PrimaryDirection>
                        <SecondaryDirection colortext={colortext} >NE</SecondaryDirection>
                    </Row>
                    <Row>
                        <PrimaryDirection colortext={colortext} >O</PrimaryDirection>
                        <ArrowDirection src={Arrow} wind={wind} colortext={colortext}/>
                        <PrimaryDirection colortext={colortext} >L</PrimaryDirection>
                    </Row>
                    <Row>
                        <SecondaryDirection colortext={colortext} >SO</SecondaryDirection>
                        <PrimaryDirection colortext={colortext} >S</PrimaryDirection>
                        <SecondaryDirection colortext={colortext} >SE</SecondaryDirection>
                    </Row>
                </Direction>
            </Wind>
            <Temperature>
                <WeatherNow colortext={colortext}> {weather ? weather.description : 'Carregando...' } </WeatherNow>
                <TemperatureNow colortext={colortext}>
                    {temp ? temp.temp : 'Carregando...'}ºC 🌡️
                </TemperatureNow>
            </Temperature>
        </Container>
    )
}

export default Infos;



const Container = styled.div`
    display: flex;
    margin: auto;
    width: 50%;
    height: 200px;
    justify-content: space-around;
    border-radius: 25px;

    box-sizing: border-box;
    padding: 15px;
    

    background-color: ${props => props.colorbackground};
    transition: 1.5s;
`
const HeaderInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 275px;
    justify-content: space-between;
    transition: 1.5s;
`
const City = styled.h1`
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 20px;

    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};
    margin: 0;
    transition: 2.5s;
`
const WeatherNow = styled.p`
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 15px;
    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};
    margin: 0;
`
const Temperature = styled.div`
    display: flex;
    flex-direction: column;
    width: 275px;
    justify-content: space-between;
    align-items: end;
    padding-bottom: 15px;
`
const TemperatureData = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 5px;
`
const Wind = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;;
    gap: 15px;
    width: 100px;
`
const Speed = styled.p`
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 20px;
    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};
    width: fit-content;
`
const Direction = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`
const Row = styled.div`
    display: flex;
    justify-content: space-around;
`
const PrimaryDirection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: ${props => props.colortext};
    transition: 1.5s;
`
const SecondaryDirection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: ${props => props.colortext};
    transition: 1.5s;
`
const ArrowDirection = styled.img`
    display: flex;
    width: 35px;
    transform: rotate(${props => props.wind.deg}deg);
    transition: 1.5s;
    color: ${props => props.colortext};
    box-shadow: 0px 2.5px  5px ${props => props.colortext};
`
const Min_Max = styled.p`
    font-family: 'Merriweather', serif;
    font-weight: 300;
    font-size: 15px;
    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};
    width: fit-content;
`
const TemperatureNow = styled.div`
font-family: 'Merriweather', serif;
    font-weight: 500;
    font-size: 35px;
    color: ${props => props.colortext};
    -webkit-text-stroke: 5%;
    -webkit-text-stroke-color: ${props => props.colortext === 'black' ? 'white' : 'black'};
`