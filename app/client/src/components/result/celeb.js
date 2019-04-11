import React, { Component } from "react";
import "./celeb.css";
import { Redirect } from 'react-router-dom';
import Actor from './actor/actor.js';
import Athlete from './athlete/athlete.js';
import Musician from './musician/musician.js';
import Politician from './politician/politician.js';

class Celeb extends Component {

    // use local storage?
    // Clear upon loading home page?
    // Show info not found page if user routes back again

    renderOccupation = (occupation) => {
        return occupation.map((occ, i) => {
            return <h2 key={i}>{occ}</h2>
        });
    }

    renderInfo = () => {
        const celeb = this.props.location.celeb;
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
        if (!this.props.location.celeb) {
            return <Redirect to='/home' />
        }
        const celeb = this.props.location.celeb;
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
