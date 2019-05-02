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
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
    card: {
        maxWidth: 500,
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
        fontStyle: "bold",
        textDecoration: "underline",
        paddingBottom: 5,
        paddingTop: 15
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
    },
    content: {
        textTransform: "capitalize",
        fontSize: 15,
    }
});

class AthleteCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const classes = this.props.classes;
        const celeb = this.props.celeb;

        return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={celeb.info.image}
                title="Athlete"
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
            {/*}<IconButton aria-label="Add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
                <ShareIcon />
            </IconButton>*/}
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
                    <Typography className={classes.heading}>
                        Heading/Title
                    </Typography>
                    <Typography>
                        Info/Content blah blah blah
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        );
    }
}

AthleteCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AthleteCard);
