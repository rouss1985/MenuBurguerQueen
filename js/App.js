import React from "react"
import ReactDOM from "react-dom"
import js from "Nav.js"
import js from "Logo.js"
import js from "Carrusel.js"
import js from "Ubicacion.js"
import js from "Footer.js"


function App(){
    return(
        <div>
            <Nav/>
            <Logo/>
            <Carrusel/>
            <Ubicacion/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("react-container"));
