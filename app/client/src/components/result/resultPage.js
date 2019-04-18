import React, { Component } from 'react';
import './resultPage.css';
import { connect } from 'react-redux';
import Celeb from './celeb.js';

class ResultPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            celebs: [
                {
                    name: "Lady Gaga",
                    occ_id: "musician",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Actress",
                        "Record Producer"],
                    info: {
                        biography: "Stefani Joanne Angelina Germanotta (born March 28, 1986), known professionally as Lady Gaga, is an American singer, songwriter and actress. She is known for her unconventionality, provocative work, and visual experimentation. She began performing as a teenager, singing at open mic nights and acting in school plays. She studied at Collaborative Arts Project 21, through New York University's Tisch School of the Arts, before dropping out to pursue a music career. When Def Jam Recordings canceled her contract, she worked as a songwriter for Sony/ATV Music Publishing, where Akonhelped her sign a joint deal with Interscope Records and his own label KonLive Distribution in 2007. She rose to prominence the following year with her debut album, the electropop record The Fame, and its chart-topping singles \"Just Dance\" and \"Poker Face\". A follow-up EP, The Fame Monster (2009), featuring the singles \"Bad Romance\", \"Telephone\" and \"Alejandro\"uccessful.",
                        genre: "Heavy metal",
                        release: "Poker Face",
                        awards: "Best country singer",
                        playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                },
                {
                    name: "David Bowie",
                    occ_id: "politician",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Rock God"],
                    info: {
                        biography: "David Robert Jones (8 January 1947 – 10 January 2016), known professionally as David Bowie was an English singer, songwriter and actor. He was a leading figure in the music industry and is considered one of the most influential musicians of the 20th century, acclaimed by critics and musicians, particularly for his innovative work during the 1970s. His career was marked by reinvention and visual presentation, with his music and stagecraft having a significant impact on popular music. During his lifetime, his record sales, estimated at 140 million albums worldwide, made him one of the world's best-selling music artists. In the UK, he was awarded ten platinum album certifications, eleven gold and eight silver, and released eleven number-one albums. In the US, he received five platinum and nine gold certifications. He was inducted into the Rock and Roll Hall of Fame in 1996.",
                        playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                },
                {
                    name: "Axl Rose",
                    occ_id: "actor",
                    occupation: [
                        "Singer",
                        "Songwriter",
                        "Rock God"],
                    info: {
                        biography: "W. Axl Rose (born William Bruce Rose Jr.; raised as William Bruce Bailey; born February 6, 1962) is an American singer, songwriter, record producer and musician. He is the lead vocalist of the hard rock band Guns N' Roses, and has also been the band's sole constant member since its inception in 1985. In addition to Guns N' Roses, he also toured with Australian rock band AC/DC in 2016 during their Rock or Bust World Tour when Brian Johnson took a break due to hearing problems. Rose has been named one of the greatest singers of all time by various media outlets, including Rolling Stone and NME.",
                        playlist: "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                    }
                }
            ]
        };
    }

    renderAccordionContent() {
        return this.state.celebs.map((celeb, i) => {
            return (
                <div className="card" key={i}>
                    <button type="button" className="btn text-white accordion-card" data-toggle="collapse" data-target={`#celeb${i}`}>{celeb.name}</button>
                    <div id={`celeb${i}`} className={i === 0 ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body celeb-card">
                            <Celeb celeb={celeb} />
                        </div>
                    </div>
                </div>
            );
        })
    }

    render() {
        return (
            <div id="result-page">
                <div id="accordion">
                    {this.renderAccordionContent()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        names: state.analysis.names,
        info: state.analysis.info
    };
}

export default connect(mapStateToProps, null)(ResultPage);
