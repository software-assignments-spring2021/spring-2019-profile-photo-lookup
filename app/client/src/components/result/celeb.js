import React, { Component } from "react";
import "./celeb.css";
import Actor from './actor/actor.js';
import Athlete from './athlete/athlete.js';
import Musician from './musician/musician.js';
import Politician from './politician/politician.js';

class Celeb extends Component {

    renderOccupation = (celeb) => {
        return (
            <div className="occupation-section">
                <section>
                    <div className="occupation">{celeb.occupations.map((occ, i) => {
                        return (
                            <div key={i}>{occ}</div>
                        );
                    })}</div>
                    <div className="biography"><span className="biography-span">This is the biography section</span></div>
                </section>
            </div>
        )
    }

    renderInfo = () => {
        let celeb = this.props.celeb;
        switch(celeb.occID) {
            case "actor":
                return <Actor celeb={celeb}/>;
            case "athlete":
                return <Athlete celeb={celeb}/>;
            case "musician":
                return <Musician celeb={celeb}/>;
            case "politician":
                return <Politician celeb={celeb}/>;
            default:
                break;
        }
    }

    render() {
        const celeb = this.props.celeb;
        return (
            <div>
                {this.renderOccupation(celeb)}
                {this.renderInfo()}
            </div>
        )
    }
}

export default Celeb;
