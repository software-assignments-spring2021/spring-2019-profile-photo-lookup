import React, { Component } from "react";
import "./politician.css";

class Politician extends Component {

    renderServiceSpan() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble servicespan-bubble"><div className="servicespan-bubble-service">Service</div><div>Span</div></div></div>
                <div className="info-content">{this.props.celeb.info.service_span.join(', ')}</div>
            </section>
        );
    }

    renderBirthday() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble birthday-bubble">Birthday</div></div>
                <div className="info-content">{this.props.celeb.info.birthday}</div>
            </section>
        );
    }

    renderParty() {
        return (
            <section className="info">
                <div className="info-header"><div className="info-bubble party-bubble">Party</div></div>
                <div className="info-content">{this.props.celeb.info.party}</div>
            </section>
        );
    }

    render() {
        let celeb = this.props.celeb;
        return (
            <div className="politician-section container">
                {celeb.info.service_span ? this.renderServiceSpan() : null}
                {celeb.info.party ? this.renderParty() : null}
                {celeb.info.birthday ? this.renderBirthday() : null}
            </div>
        );
    }
}

export default Politician;
