import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SpotifyPlaylist from "./spotifyplaylist";
import Grid from '@material-ui/core/Grid';
import YouTube from 'react-youtube';
import { SocialIcon } from 'react-social-icons';
import _ from "lodash";

import './musician.css'


const styles = theme => ({
    card: {
        maxWidth: 700,
        margin: "auto",
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10
    },
    bio: {
        fontSize: 15
    },
    social: {
        textAlign: "center"
    },
    social_icon: {
        paddingLeft: 5,
        paddingRight: 10,
        display: "inline",
    },
    info: {
        paddingBottom: 15
    },
    heading: {
        fontSize: 25,
        fontWeight: "bold",
        textDecoration: "underline",
        paddingBottom: 10,
        paddingTop: 15
    },
    relatedImg: {
        marginLeft:"auto",
        marginRight: "auto",
        width: "100%",
        height: "auto",
        paddingBottom: 5
    },
    relatedName: {
        textAlign: "center",
        fontSize: 20
    },
    genres: {
        paddingTop: 20
    },
    actions: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
});

const opts = {
    width: '100%',
    playerVars: {autoplay: 0}
};

class MusicianCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    _onReady(event) {
        event.target.pauseVideo();
    }

    renderTopTracks() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
            <div className={classes.info}>
                <Typography className={classes.heading}>
                    Top Tracks
                </Typography>
                <SpotifyPlaylist url={celeb.info['top tracks']} />
            </div>
        );
    }

    renderRelatedTracks() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
            <div className={classes.info}>
                <Typography className={classes.heading}>
                    Related Tracks
                </Typography>
                <SpotifyPlaylist url={celeb.info['related tracks']} />
            </div>
        );
    }

    renderGenres() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        if (!_.isEmpty(celeb.info['genres'])) {
            return (
                <div className={classes.info}>
                    <Typography className={classes.heading}>
                        Genres
                    </Typography>
                    <Typography className={classes.genres}>
                        {celeb.info['genres'].map((item, index) =>
                            <div className="layers" key={index}>
                                <h1 title={item}>{item}</h1>
                            </div>
                        )}
                    </Typography>
                </div>
            );
        }
    }

    renderMusicVideo() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
            if (!_.isEmpty(celeb.info["video"])) {
            return (
                <div className={classes.info}>
                    <Typography className={classes.heading}>
                        Music Video
                    </Typography>
                    <YouTube
                        videoId={celeb.info.video}
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
            );
        }
    }

    renderRelatedArtists() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
            if (!_.isEmpty(celeb.info["related artists"])) {
                const artists =  celeb.info["related artists"];
                return (
                    <div className={classes.info}>
                        <Typography className={classes.heading}>
                            Related Artists
                        </Typography>
                        <Grid container spacing={24} justify="flex-start" alignItems="flex-start">
                            <Grid item xs={4}>
                                <img src= {artists[0].image.url} className = {classes.relatedImg} alt="related1" ></img>
                                <p className = {classes.relatedName}> {artists[0].name} </p>
                            </Grid>
                            <Grid item xs={4} >
                                <img src= {artists[1].image.url} className = {classes.relatedImg} alt="related2"></img>
                                <p className = {classes.relatedName}> {artists[1].name} </p>
                            </Grid>
                            <Grid item xs={4}>
                                <img src= {artists[2].image.url} className = {classes.relatedImg} alt="related3"></img>
                                <p className = {classes.relatedName}> {artists[2].name} </p>
                            </Grid>
                        </Grid>
                    </div>
                );
        }
    }
    renderSocial() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        const twitter = "http://twitter.com/" + celeb.info.twitter
        const instagram = "http://instagram.com/" + celeb.info.insta
        return (
            <div className={classes.social}>
                <div className={classes.social_icon}>
                    <SocialIcon url={twitter} />
                </div>
                <div className={classes.social_icon}>
                    <SocialIcon url={instagram} />
                </div>
            </div>
        );
    }

    render() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={celeb.info.image}
                title="Musician"
            />
            <CardContent>
                <Typography className={classes.name}>
                    {celeb.name}
                </Typography>
                <Typography className={classes.bio}>
                    {celeb.info.bio}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
            {this.renderSocial()}
                <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {celeb.info['top tracks'] ? this.renderTopTracks() : null}
                    {celeb.info.genres ? this.renderGenres() : null}
                    {celeb.info.video ? this.renderMusicVideo() : null}
                    {celeb.info["related artists"] ? this.renderRelatedArtists() : null}
                    {celeb.info['related tracks'] ? this.renderRelatedTracks() : null}
                </CardContent>
            </Collapse>
        </Card>
        );
    }
}

MusicianCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MusicianCard);
