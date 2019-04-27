import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
    root: {
        width: "80%",
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    social: {
        padding: "5px 5px"
    },

    name: {
        padding: "0px 30px",
        textAlign: "center",
        color: "black",
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
    },

    info: {
        padding: "0px 30px",
        textAlign: "center",
        color: "black",
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    }

});


class InfoCard extends Component {

    renderStudents = (students) => {
        const classes = this.props.classes
        if(students){
            var html = []
            for (var i = 0; i < students.length; i++){
                const s = students[i]
                if (s.error !== "None"){
                    return <p className = "student-info"> {s.error} </p>
                }
                const imgURL = "http://graph.facebook.com/" + s.uid + "/picture?type=large"
                const profileURL = "http://www.facebook.com/" + s.uid
                html.push(
                    <Grid item key={i}>
                        <Paper className = {classes.paper}>
                            <div >
                                <img src={imgURL} alt="profile"/>
                            </div>
                            <div className = {classes.social}>
                                <SocialIcon url={profileURL} target="_blank"/>
                            </div>
                            <div> 
                                <Typography className={classes.name}>
                                    {s.first} {s.last} <br/>
                                </Typography>
                                <Typography className={classes.info}>
                                    College of Arts and Science <br/>
                                    Class of {s.year} <br/>
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                )
            }
            return html
        }
    }

    renderInner(){
        if(this.props.students){
            var students = this.props.students
            return this.renderStudents(students)
        }
    }

    render() {
        const classes = this.props.classes
        return(
            <div className = {classes.root}>
                <Grid container spacing={24} justify="center" alignItems="center">
                    {this.renderInner()}
                </Grid>
            </div>
        )
        
    }

}

InfoCard.propTypes = {
    classes: PropTypes.object.isRequired
};
  
export default withStyles(styles)(InfoCard);
  