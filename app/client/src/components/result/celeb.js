import React, { Component } from "react";
import "./celeb.css";
import Actor from './actor/actor.js';
import Athlete from './athlete/athlete.js';
import Musician from './musician/musician.js';
import Politician from './politician/politician.js';

class Celeb extends Component {

    renderOccupation = (occupation) => {
        return occupation.map((occ, i) => {
            return <h2 key={i}>{occ}</h2>
        });
    }

    renderInfo = () => {
        const celeb = this.props.celeb;
        switch(celeb.occ_id) {
            case "actor":
                return <Actor />;
            case "athlete":
                return <Athlete />;
            case "musician":
                return <Musician />;
            case "politician":
                return <Politician />;
            default:
                break;
        }
    }

    render() {
        const celeb = this.props.celeb;
        return (
            <div className="container">
                <h1>{celeb.name}</h1>
                {this.renderOccupation(celeb.occupation)}
                {this.renderInfo()}
            </div>
        )
    }
}

export default Celeb;
