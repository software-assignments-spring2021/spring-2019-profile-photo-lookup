import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import InfoCard from './other/card.js'
import PoliticianCard from './politician/politician.js'
import ActorCard from './actor/actor.js'
import MusicianCard from './musician/musician.js'
import AthleteCard from './athlete/athlete.js'
import _ from 'lodash';
import './resultPage.css';

class ResultPage extends Component {

    componentDidMount() {
        if (this.props.bbox) {
            var reader = new FileReader();
            reader.readAsDataURL(this.props.bbox.image.get("image"));

            const canvas = this.refs.resultcanvas;
            const ctx = canvas.getContext('2d');
            var bbox = this.props.bbox.data.bbox;

            reader.onloadend = function (e) {
                var img = new Image();
                img.onload = function(){
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img,0,0);

                    bbox.forEach((b) => {
                        b.Left = b.Left * canvas.width;
                        b.Top = b.Top * canvas.height;
                        b.Width = b.Width * canvas.width;
                        b.Height = b.Height * canvas.height;
                    })

                    bbox.forEach((b) => {
                        ctx.strokeStyle = "#FF0000";
                        ctx.lineWidth = 3;
                        ctx.rect(b.Left, b.Top, b.Width, b.Height);
                        ctx.stroke();
                    });
                }
                img.src = e.target.result;
            };
        }
    }

    renderInfoCards() {
        var html = []
        let celebrities = this.props.celebs

        for (var i = 0; i < celebrities.length; i++){
            let celeb = celebrities[i]
            switch(celeb.occID) {
                case "actor":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <ActorCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "athlete":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <AthleteCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "musician":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <MusicianCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "politician":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <PoliticianCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                case "other":
                    html.push(
                        <Grid item xs={4} key={i}>
                            <InfoCard celeb={celeb} />
                        </Grid>
                    );
                    break;
                default:
                    break;
            }
        }
        return html
    }

    render() {
        if (_.isEmpty(this.props.celebs)) {
            return <Redirect to='/celebrity' />
        }
        return (
            <div id="main-page">
                <div id="bbox-image">
                    <canvas ref="resultcanvas" id="result-uploaded-img" />
                </div>
                <div id="result-section">
                    <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
                        {this.renderInfoCards()}
                    </Grid>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        bbox: state.analysis.bbox,
        celebs: state.analysis.celebs
    };
}

export default connect(mapStateToProps, null)(ResultPage);
