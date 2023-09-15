import axios from 'axios';
import { useEffect } from "react";
import { useState } from 'react';
import styled from 'styled-components';

import Search from '../components/Search';
import Infos from '../components/Infos';
import Forecast from '../components/Forecast';

function Home(){
    
    const [city, setCity] = useState('');
    const [temp, setTemp] = useState({temp: 0, min: 0, max: 0, humidity: 0});
    const [wind, setWind] = useState({speed: 0, deg: 0});
    const [weather, setWeather] = useState({status: '', description: ''});
    const [colorbackground, setColorBackground] = useState('lightGray');
    const [colortext, setColorText] = useState('black');
    const [data, setData] = useState([]);
    const [cityName, setCityName] = useState('');
    const [coordenates, setCoordenates] = useState({lat: '0', lon: '0'});
    const [days, setDays] = useState(5);

    function getCoordenates(pos){
        setCoordenates({lat: pos.coords.latitude.toFixed(2), lon: pos.coords.longitude.toFixed(2)});
        LoadLocalCoord({lat: pos.coords.latitude.toFixed(2), lon: pos.coords.longitude.toFixed(2)});
        LoadForecastCoord({lat: pos.coords.latitude.toFixed(2), lon: pos.coords.longitude.toFixed(2)});
    }

    function LoadLocalCoord(coordenates){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordenates.lat}&lon=${coordenates.lon}&units=metric&lang=pt_br&appid=2ce3909f502db67377b6f769db60fcfd`)
            .then((res) => {
                setCity(res.data.name);
                setCityName(res.data.name);
                setTemp({temp: res.data.main.temp, min: res.data.main.temp_min, max: res.data.main.temp_max, humidity: res.data.main.humidity})
                setWind({speed: res.data.wind.speed, deg: res.data.wind.deg})
                let tempo = ''
                if(res.data.weather[0].main === 'Clear') tempo = 'Céu aberto';
                if(res.data.weather[0].main === 'Clouds') tempo = 'Nublado';
                if(res.data.weather[0].main === 'Rain') tempo = 'Chovendo';
                if(res.data.weather[0].main === 'Snow') tempo = 'Nevando';
                if(res.data.weather[0].main === 'Thunderstorm') tempo = 'Tempestade';
                if(res.data.weather[0].main === 'Drizzle') tempo = 'Chuviscando';
                if(res.data.weather[0].main === 'Mist') tempo = 'Neblina';
                setWeather({status: res.data.weather[0].main, description: tempo})

                if(weather.status === 'Clear'){
                    setColorBackground('rgb(255, 255, 120, 0.75)');
                    setColorText('black');
                }
                if(weather.status === 'Clouds'){
                    setColorBackground('rgb(128, 128, 128, 0.75)');
                    setColorText('white');
                }
                if(weather.status === 'Rain'){
                    setColorBackground('rgb(0, 0, 200, 0.75)');
                    setColorText('white');
                }
                if(weather.status === 'Snow'){
                    setColorBackground('rgb(220, 220, 220, 0.75)');
                    setColorText('black');
                }
                if(weather.status === 'Thunderstorm'){
                    setColorBackground('rgb(200, 0, 200, 0.75)');
                    setColorText('white');
                }
                if(weather.status === 'Drizzle'){
                    setColorBackground('rgb(0, 90, 256, 0.75)');
                    setColorText('white');
                }
                if(weather.status === 'Mist'){
                    setColorBackground('rgb(220, 220, 220, 0.75)');
                    setColorText('white');
                }
            })
            .catch((error) => {
                console.log(error);
            })

            // LoadForecastCoord(coordenates);
    }

    function LoadForecastCoord(coordenates){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?lat='+coordenates.lat+'&lon='+coordenates.lon+'&units=metric&lang=pt_br&appid=2ce3909f502db67377b6f769db60fcfd')
            .then((res) => {
                const timer = days*8;
                const result = res.data.list.slice(0, timer);
                const array = result.map((item) => {
                    return ({name: item.dt_txt.slice(0, 10), temp: item.main.temp})
                })
                setData(array);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function errors(error){
        console.warn(`ERROR(${error.code}): ${error.message}`);
    }

    const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0};

    useEffect(() => {

        if (navigator.geolocation){
        navigator.permissions.query({ name: "geolocation" }).then(function (result) {
            if(result.state === "granted"){
            if(coordenates.lat == 0){
                navigator.geolocation.getCurrentPosition(getCoordenates, errors, options);
            }else{
                LoadLocalCoord(coordenates);
            }
            }else if(result.state === "prompt"){
            navigator.geolocation.getCurrentPosition(getCoordenates, errors, options);
            LoadLocalCoord(coordenates);
            }else if(result.state === "denied"){
            console.log("Negado");
            }
        }); 
        } else {
        console.log("Geolocation is not supported by this browser.");
        }

    }, [city]);

    return (
        <Container>
            <Search cityName={cityName} setCityName={setCityName} colorbackground={colorbackground} colortext={colortext} coordenates={coordenates} setCoordenates={setCoordenates} LoadLocalCoord={LoadLocalCoord} LoadForecastCoord={LoadForecastCoord} days={days} setDays={setDays} />
            <Infos city={city} temp={temp} wind={wind} weather={weather} colorbackground={colorbackground} colortext={colortext} />
            <Forecast colorbackground={colorbackground} colortext={colortext} data={data} />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`