/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Forecast(props){

    const { colorbackground, colortext, data } = props;

    return (
        <Container colorbackground={colorbackground} colortext={colortext}>
            <LineChart  width={1000} height={230} data={data} margin={{ top: 25, left: 15, right: 60, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey=""/>
                <Tooltip />
                <Line type="monotone" amplitude="ºC" dataKey="temp" stroke="#FF0000" />
            </LineChart>
        </Container>
    )
}

export default Forecast;

const Container = styled.div`
    display: flex;
    width: 65%;
    height: 250px;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    border-radius: 25px;
    box-sizing: border-box;
    background-color: black;
    transition: 5s;
`