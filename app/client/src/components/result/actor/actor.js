import React, { Component } from "react";
import "./actor.css";

class Actor extends Component {

    renderAward() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble award-bubble">Awards</div></div>
                <div className="info-content">{this.props.celeb.info.award}</div>
            </section>
        )
    }

    renderUpcoming() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble upcoming-bubble">Upcoming</div></div>
                <div className="info-content">{this.props.celeb.info.upcoming.join(', ')}</div>
            </section>
        )
    }

    renderTitles() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble title-bubble">Titles</div></div>
                <div className="info-content">{this.props.celeb.info.titles.join(', ')}</div>
            </section>
        );
    }

    render() {
        let celeb = this.props.celeb;
        return (
            <div>
                {celeb.info.titles ? this.renderTitles() : null}
                {celeb.info.upcoming ? this.renderUpcoming() : null}
                {celeb.info.award ? this.renderAward() : null}
            </div>
        );
    }
}

export default Actor;
