import React, {Component} from "react";
import MainContainer from "./MainContainer.jsx";
import styles from '../stylesheet/style.module.css'



const App = () => {
    return (
        <div className = {styles.container}>
        <Box blah = {styles.yay}/>
        <Button/>
        </div>
    )
}


const Box = (props) => {
return (
<div className = {props.blah}>Weather app</div>
);

}
const Button = (props) => {
    return (
        <button onClick = {() => console.log('hello!')}className = {styles.weatherBtn}>Click Me for Weather</button>
    )
}

export default App;