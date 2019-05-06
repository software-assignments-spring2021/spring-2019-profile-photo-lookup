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
import { SocialIcon } from 'react-social-icons';
import Democrat from "./democrat.png"
import Republican from "./republican.png"
import Other from "./other.jpg"


const styles = theme => ({
    card: {
        maxWidth: 700,
        margin: "auto",
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9 aspect ratio
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
        paddingBottom: 5,
        paddingTop: 15
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 10
    },
    party: {
        textAlign: "center",
        color: "grey",
        fontSize: 25
    },
    party_symbol: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "100px",
    },
    social: {
        textAlign: "center"
    },
    social_icon: {
        paddingLeft: 5,
        paddingRight: 10,
        display: "inline",
    },
    map: {
        textAlign: "center",
    },
    website: {
        fontSize: 15
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

class PoliticianCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    renderTitle() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
            <div>
                <Typography component="div">
                    <div className={classes.title}>{celeb.info['title']}</div>
                </Typography>
            </div>
        );
    }

    renderState() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
            <div>
                <Typography className={classes.heading}>
                    State Represented
                </Typography>
                <Typography component="div">
                    <div className={classes.content}>{celeb.info['state']}</div>
                </Typography>
            </div>
        );
    }

    renderTerms() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        const terms= celeb.info['terms'];
        var num_terms= "Number of Presidential Terms: " + terms.length;
        var term_span1= "From " + terms[0]['start'] + " to " + terms[0]['end'];
        var term_span2= "";
        
        if(terms.length>1)
        {
            term_span2= "From " + terms[1]['start'] + " to " + terms[1]['end'];
        }

        return (
            <div>
                <Typography className={classes.heading}>
                    Presidential Terms 
                </Typography>
                <Typography component="div">
                    <div className={classes.content}>{num_terms}</div>
                </Typography>
                <Typography component="div">
                    <div className={classes.content}>{term_span1}</div>
                </Typography>
                <Typography component="div">
                    <div className={classes.content}>{term_span2}</div>
                </Typography>
            </div>
        );    
    }

    renderWebsite(){
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        if(celeb.info['website'] !== "" && celeb.info['website'] !== null)
        {
            return (
                <div>
                    <Typography className={classes.heading}>
                        Website
                    </Typography>
                    <Typography component="div">
                        <div className={classes.website}>
                            <a href = {celeb.info['website']}> {celeb.info['website']} </a>
                        </div>
                    </Typography>
                </div>
            );
        }
    }

    renderSocial() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        const twitter = "http://twitter.com/" + celeb.info.twitter
        const instagram = "http://instagram.com/" + celeb.info.insta
        const facebook = "http://facebook.com/" + celeb.info.facebook

        return (
            <div className={classes.social}>
                <div className={classes.social_icon}>
                    <SocialIcon url={facebook} />
                </div>
                <div className={classes.social_icon}>
                    <SocialIcon url={twitter} />
                </div>
                <div className={classes.social_icon}>
                    <SocialIcon url={instagram} />
                </div>
            </div>
        ); 
    }

    renderParty() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        if (celeb.info['party'] === "Republican"){
            return(
                <div>
                    <img src={Republican} alt="bbox" className={classes.party_symbol}/>
                    <h1 className={classes.party}>Republican Party </h1>
                </div>
            );
        } else if (celeb.info['party'] === "Democrat") {
            return(
                <div>
                    <img src={Democrat} alt="bbox" className={classes.party_symbol}/>
                    <h1 className={classes.party}> Democrat Party </h1>
                </div>
            );
        }
        return (
            <div>
                <img src={Other} alt="bbox" className={classes.party_symbol}/>
                <h1 className={classes.party}> Independent/Third Party </h1>
            </div>
        );
    }

    renderBirthday() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        return (
            <div>
                <Typography className={classes.heading}>
                    Birthday
                </Typography>
                <Typography component="div">
                    <div className={classes.content}>{celeb.info['birthday']}</div>
                </Typography>
            </div>
        );
    }

    renderOffice() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;
        const address = celeb.info.address;
        const API_KEY = "AIzaSyBK2czXLGiGmzUv5vgwJVIdpSo7G37omzQ";
        const url = "https://www.google.com/maps/embed/v1/place?key=" + API_KEY + "&q=" + address

        return (
            <div>
                <Typography className={classes.heading}>
                    Office Address
                </Typography>
                <div className={classes.map}>
                    <iframe
                        title="office"
                        width="500"
                        height="600"
                        frameBorder="0"
                        src={url} allowFullScreen>
                    </iframe>
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
                title="Politician"
            />
            <CardContent>
                <Typography className={classes.name}>
                    {celeb.name}
                </Typography>
                <Typography>
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
                    {celeb.info.title ? this.renderTitle() : null}
                    {celeb.info.party ? this.renderParty() : null}
                    {celeb.info.state ? this.renderState(): null}
                    {celeb.info.terms ? this.renderTerms(): null}
                    {celeb.info.birthday ? this.renderBirthday() : null}
                    {celeb.info.website ? this.renderWebsite() : null}
                    {celeb.info.address ? this.renderOffice() : null}
                </CardContent>
            </Collapse>
        </Card>
        );
    }
}

PoliticianCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PoliticianCard);
