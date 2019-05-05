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
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import YouTube from 'react-youtube';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SocialIcon } from 'react-social-icons';

import _ from "lodash";

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
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textDecoration: "underline",
        paddingBottom: 10,
        paddingTop: 15
    },
    poster: {
        width: "100%",
        height: "auto"
    },
    title: {
        textAlign: "center",
        fontSize: 17,
        paddingTop: 8,
        lineHeight: 1.1
    },
    social: {
        textAlign: "center"
    },
    social_icon: {
        paddingLeft: 5,
        paddingRight: 10,
        display: "inline",
    },
    upcoming: {
        fontSize: 20,
        textAlign: "center"
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

class ActorCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    renderTitles() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        if (!_.isEmpty(celeb.info["known titles"])) {
            const titles =  celeb.info["known titles"];
            const posters = celeb.info["known posters"];
            return (
                <div className={classes.info}>
                    <Typography className={classes.heading}>
                        Known For
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <img src= {posters[0]} className = {classes.poster} alt="poster1"></img>
                            <p className = {classes.title}> {titles[0]} </p>
                        </Grid>
                        <Grid item xs={4} >
                            <img src= {posters[1]} className = {classes.poster} alt="poster2"></img>
                            <p className = {classes.title}> {titles[1]} </p>
                        </Grid>
                        <Grid item xs={4}>
                            <img src= {posters[2]} className = {classes.poster} alt="poster2"></img>
                            <p className = {classes.title}> {titles[2]}</p>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }

    renderUpcoming() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        if (!_.isEmpty(celeb.info["upcoming titles"])) {
            return (
                <div>
                    <Typography className={classes.heading}>
                        Upcoming
                    </Typography>
                    <Typography>
                        {celeb.info["upcoming titles"].map((item, i) =>
                            <div className={classes.upcoming} key={i}>{item}</div>
                        )}
                    </Typography>
                </div>
            );
        }
    }


    renderTrailerVideo() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
            if (!_.isEmpty(celeb.info["trailer"])) {
            return (
                <div className={classes.info}>
                    <Typography className={classes.heading}>
                        Recent Trailer
                    </Typography>
                    <Typography component="div">
                        <YouTube
                            videoId={celeb.info.trailer}
                            opts={opts}
                            onReady={this._onReady}
                        />
                    </Typography>
                </div>
            );
        }
    }
    renderSocial() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        const twitter = "http://twitter.com/" + celeb.info.twitter;
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
                title="Actor"
            />
            <CardContent>
                <Typography className={classes.name}>
                    {celeb.name}
                </Typography>
                <Typography component="p">
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
                    {celeb.info["known titles"] ? this.renderTitles() : null}
                    {celeb.info["upcoming titles"] ? this.renderUpcoming() : null}
                    {celeb.info["trailer"] ? this.renderTrailerVideo() : null}
                </CardContent>
            </Collapse>
        </Card>
        );
    }
}

ActorCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ActorCard);
