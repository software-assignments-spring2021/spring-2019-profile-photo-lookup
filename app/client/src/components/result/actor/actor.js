import React, { Component } from "react";
import "./actor.css";

class Actor extends Component {

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
            </div>
        );
    }
}

export default Actor;
