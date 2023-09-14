import { useEffect } from "react";

function App() {

  type messageError = { code: number, message: string};

  function success(pos: GeolocationPosition){
    const coordenadas = pos.coords;
    console.log(pos)

    console.log("Sualocalização atual é:");
    console.log(`Latitude: ${coordenadas.latitude}`);
    console.log(`Longitude: ${coordenadas.longitude}`);
    console.log(`Mais ou menos ${coordenadas.accuracy} metros`);
  }

  function errors(error: messageError){
    console.warn(`ERROR(${error.code}): ${error.message}`);
  }

  const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0};

  useEffect(() => {
    if (navigator.geolocation){
      navigator.permissions .query({ name: "geolocation" }) .then(function (result) { console.log(result); 
        if(result.state === "granted"){
          navigator.geolocation.getCurrentPosition(success, errors, options);
        }else if(result.state === "prompt"){
          navigator.geolocation.getCurrentPosition(success, errors, options);
        }else if(result.state === "denied"){
          console.log("Negado");
        }
      }); 
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
  }, []);

  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App


// useEffect(() => { 
  // if (navigator.geolocation) {
    // navigator.permissions .query({ name: "geolocation" }).then(function (result) { console.log(result);
    //   if (result.state === "granted") {
           //If granted then you can directly call your function here 
    //   } else if (result.state === "prompt") {
           //If prompt then the user will be asked to give permission 
    //   } else if (result.state === "denied") {
           //If denied then you have to show instructions to enable location } }); 
    //   } else { console.log("Geolocation is not supported by this browser."); } 
  // }, []);









