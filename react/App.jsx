import React, {Component, useState} from "react";
import MainContainer from "./MainContainer.jsx";
import styles from '../stylesheet/style.module.css'
import {Routes, Route, useNavigate} from "react-router-dom"
import Boxes from "./Boxes.jsx"
// import fetch from 'node-fetch'



const App = () => {

const [inputValue, setInputValue] = useState('')
const [weather, setWeather] = useState('No weather yet!')
const [descValue, setdescValue] = useState(null)
const [isActive, setIsActive] = useState('none');

let navigate = useNavigate()

const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setdescValue(event.target.value);
  };

  const buttonClick = async () => {
    const response = await fetch(`/api/${inputValue}`)
    const data = await response.json()
    setWeather(data)
    // if(weather[0].description === "cloudy") {
    //     styles.container.style.backgroundcolor = 'red'
    // }
    console.log(data)
    console.log('Input value:', inputValue);
  };

  const addWeather = async () => {
    const response = await fetch('/addWeather', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // Specify JSON content type
          },
        body: JSON.stringify({
            name: inputValue,
            description: descValue,
        })
    }) 
    const data = await response.json()
    console.log(data)
  }
  const changeDesc = async () => {
    console.log("aye")
    const response = await fetch('/api', {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json', // Specify JSON content type
          },
        body: JSON.stringify({
            name: inputValue,
            description: descValue
        })
    }) 
    const data = await response.json()
    
  }

  const enterClick = (event) => {
    if(event.code === "Enter") {
        console.log(inputValue)
    }
  }

  const spaceClick = (event) => {
    navigate('/space')
  }

let weatherBackground
if(Array.isArray(weather) && weather.length >0) {
  if(weather[0].description === 'Cloudy') {
    weatherBackground = styles.weathercontainerCloud
  } else if(weather[0].description === 'Rainy') {
    weatherBackground = styles.weathercontainerRain
  } else if(weather[0].description === 'Sunny') {
    weatherBackground = styles.weathercontainerSun
 } else if(weather[0].description === 'Lightning') {
    weatherBackground = styles.weathercontainerLight
 } else if(weather[0].description === 'Snowing') {
    weatherBackground = styles.weathercontainerSnow
 }else {
    weatherBackground = styles.container
 }
}
else {
    weatherBackground = styles.container
   }
    return (
        <Routes>
        <Route path = '/' element = { 
        <div className= {weatherBackground}>
         <Box blah = {styles.yay}/>
         <Input change = {handleInputChange} pressed = {enterClick}/>
         <Input2 change2 = {handleInputChange2} pressed = {enterClick}/>
         <Button btn = {buttonClick}/>
         <WeatherButton wbtn = {addWeather}/>
         <ChangeButton cbtn = {changeDesc}/>
         <SpaceButton  sbtn = {spaceClick}/>
         <WeatherBox weather = {weather} className = {styles.text} wCont = {styles.weatherCont} />
        </div> 
        }/>
        <Route path = '/space' element = {
            <Final/>
        }/>
        </Routes>
    )
}


const Box = (props) => {
return (
<div className = {props.blah}>WeatherForYou</div>
);

}
const Button = (props) => {
    return (
        <button onClick = {props.btn}  className = {styles.weatherBtn}>Get the Weather</button>
    )
}


const WeatherButton = (props) => {
    return (
        <button onClick = {props.wbtn}  className = {styles.weatherBtn}>Add new Location/Description</button>
    )
}

const ChangeButton = (props) => {
    return (
        <button onClick = {props.cbtn}  className = {styles.weatherBtn}>Change the Weather Description</button>
    )
}

const SpaceButton = (props) => {
    return (
        <button onClick = {props.sbtn} className = {styles.weatherBtn}>Go To Space</button>
    )
}

const Input = (props) => {

    return (
        <input placeholder = "Type your Location" className = {styles.input} value = {props.inputValue} onChange = {props.change} onKeyDown={props.pressed} ></input>
    )
}
const Input2 = (props) => {

    return (
        <input placeholder = "What is the weather like here" className = {styles.input} value = {props.descValue} onChange = {props.change2} onKeyDown={props.pressed} ></input>
    )
}

const WeatherBox = (props) => {
    let populatedarr = []
    if(Array.isArray(props.weather) && props.weather.length > 0) {
        populatedarr.push(<div>{props.weather[0].name}</div>)
    }
    
 let descrip = []
    if(Array.isArray(props.weather) && props.weather.length > 0) {
        descrip.push(<div>{props.weather[0].description}</div>)
    }
    

    console.log(populatedarr)
    return (
        <div className = {props.wCont}>
            <div className = {styles.output}>
            <div className = {styles.outputData}>{populatedarr}</div>
            <div>Location</div>
            </div>
            <div className = {styles.output}>
            <div className = {styles.outputData}>{descrip}</div>
            <div>Weather</div>
            </div>
            </div>
    )
}

const Final = (props) => {
    return(
        <div className = {styles.space}>
            <p className = {styles.spaceItem}>WeatherForSpace</p>
            
            </div>
    )
}
export default App;



