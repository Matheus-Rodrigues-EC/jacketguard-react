/* eslint-disable react/prop-types */

import styled from "styled-components";


function Infos(props){
    
    const {city, temp, wind, weather, colorbackground, colortext} = props;


    return (
        <Container colorbackground={colorbackground}>
            <HeaderInfos>
                <City colortext={colortext}>Local: {city ? city : 'Carregando...'}</City>
                <WeatherNow colortext={colortext}> {weather ? weather.description : 'Carregando...' } </WeatherNow>
            </HeaderInfos>
            <Temperature>
                <TemperatureData>
                    <Min_Max colortext={colortext}>Mínima: {temp ? temp.min : 'Carregando...'} ºC</Min_Max>
                    <Min_Max colortext={colortext}>Máxima: {temp ? temp.max : 'Carregando...'} ºC</Min_Max>
                    <Min_Max colortext={colortext}>Umidade: {temp ? temp.humidity : 'Carregando...'}%</Min_Max>
                </TemperatureData>
                <Wind>
                    <Speed colortext={colortext}>Vento</Speed>
                    <Speed colortext={colortext}>{wind.speed}km/h</Speed>
                </Wind>
                <TemperatureNow colortext={colortext}>
                    {temp ? temp.temp : 'Carregando...'}ºC
                </TemperatureNow>
            </Temperature>
        </Container>
    )
}

export default Infos;



const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 50%;
    height: 150px;
    border-radius: 25px;

    box-sizing: border-box;
    padding: 25px;

    background-color: ${props => props.colorbackground};
    transition: 1.5s;
`
const HeaderInfos = styled.div`
    display: flex;
    width: 100%;
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
    width: 100%;
    justify-content: space-between;
    margin: auto auto 0 0;
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
    align-items: center;
    gap: 15px;
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