import React, { Component } from "react";
import { makeStyles, lighten, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import { muiStyles } from "./Style";

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten("#ff6c5c", 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "#ff6c5c"
  }
})(LinearProgress);

const Certificate = props => {
  const classes = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6"> Certifications </div>
        <div className="col-md-6">
          <span class="float-right">All (4)</span>
        </div>
      </div>
      <Divider />
      <div className="col-md-3">
        <Card className={classes.card}>
          <center>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                2019 MOC Continuous Certification
              </Typography>
              <Typography variant="h5" component="h2">
                MOC Maintenance of Certification
              </Typography>
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <BorderLinearProgress
                      className={classes.margin}
                      variant="determinate"
                      color="secondary"
                      value={70}
                    />
                  </div>
                  <div className="col-md-4"> 70% </div>
                </div>
                3 of 4 parts completed
              </div>
            </CardContent>

            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Continue
              </Button>
            </CardActions>
          </center>
        </Card>
      </div>
    </div>
  );
};

export default withStyles(muiStyles)(Certificate);
