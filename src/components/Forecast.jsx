/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function Forecast(props){

    const { colorbackground, colortext, data } = props;

    return (
        <Container colorbackground={colorbackground} colortext={colortext}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart   data={data} margin={{ top: 10, left: 0, right: 15, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey=""/>
                    <Tooltip />
                    <Line type="monotone" amplitude="ºC" dataKey="temp" stroke="#FF0000" />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Forecast;

const Container = styled.div`
    display: flex;
    width: 95%;
    height: 12.5rem;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    border-radius: 25px;
    box-sizing: border-box;
    background-color: black;
    transition: 3s;
`