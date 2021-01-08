import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../sass/About.scss"

const cardsArray = [
axios.get('https://api.github.com/users/zempo'),
axios.get('https://api.github.com/users/tarmes'),
axios.get('https://api.github.com/users/christophersutton'),
axios.get('https://api.github.com/users/joseph-vega12'),
axios.get('https://api.github.com/users/Samanthap82'),
axios.get('https://api.github.com/users/apfeif12'),
axios.get('https://api.github.com/users/blackcatwizard'),
]


const About = () => {
    return (
        <body>
            <h1 style="text-align:center">About Us!</h1>
            <ul>
                <div class="card" id="card">
                <img src="https://avatars3.githubusercontent.com/u/39205476?v=4" alt="Solomon" style="width:100%" />
                    <h2>Solomon Zelenko</h2>
                    <a href="https://github.com/zempo">Github</a>
                </div>

                <div class="card" id="card">
                <img src="https://avatars1.githubusercontent.com/u/229499?v=4" alt="Chris" style="width:100%" />
                    <h2>Chris Sutton</h2>
                    <a href="https://github.com/christophersutton">Github</a>
                </div>

                <div class="card" id="card">
                <img src="https://avatars3.githubusercontent.com/u/67523846?v=4" alt="Samantha" style="width:100%" />
                    <h2>Samantha Prewitt</h2>
                    <a href="https://github.com/Samanthap82">Github</a>
                </div>

                <div class="card" id="card">
                <img src="https://avatars1.githubusercontent.com/u/5865915?v=4" alt="Trevor" style="width:100%" />
                    <h2>Trevor Armes</h2>
                    <a href="https://github.com/tarmes">Github</a>
                </div>

                <div class="card" id="card">
                <img src="https://avatars3.githubusercontent.com/u/57374454?v=4" alt="Joseph" style="width:100%" />
                    <h2>Joseph Vega</h2>
                    <a href="https://github.com/joseph-vega12">Github</a>
                </div>

                <div class="card" id="card">
                <img src="https://avatars0.githubusercontent.com/u/73003199?v=4" alt="Alex" style="width:100%" />
                    <h2>Alex Pfeifer</h2>
                    <a href="https://github.com/apfeif12">Github</a>
                </div>
                
                <div class="card" id="card">
                <img src="https://avatars0.githubusercontent.com/u/73545965?v=4" alt="Adam" style="width:100%" />
                    <h2>Adam Selter</h2>
                    <a href="https://github.com/blackcatwizard">Github</a>
                </div>
            </ul>
        </body>
    )
}

return About