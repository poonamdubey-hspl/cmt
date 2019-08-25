import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import { UpcomingEvent } from './Style';

class UpcomingEvents extends Component {
  state = {};
  render() {
    return (
      <UpcomingEvent>
        <Card body>
          <span className="ue-date">July - 2019</span>
          <CardTitle>Morbi nec nunc condimentum</CardTitle>
          <CardText>
            <span>Wed - 3</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <CardTitle>Lorem ipsum dolor sit amet, consectetur</CardTitle>
          <CardText>
            <span>Thu - 11</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <span className="ue-date">July - 2019</span>
          <CardTitle>Morbi nec nunc condimentum</CardTitle>
          <CardText>
            <span>Wed - 3</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <CardTitle>Lorem ipsum dolor sit amet, consectetur</CardTitle>
          <CardText>
            <span>Thu - 11</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <span className="ue-date">July - 2019</span>
          <CardTitle>Morbi nec nunc condimentum</CardTitle>
          <CardText>
            <span>Wed - 3</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <CardTitle>Lorem ipsum dolor sit amet, consectetur</CardTitle>
          <CardText>
            <span>Thu - 11</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <span className="ue-date">July - 2019</span>
          <CardTitle>Morbi nec nunc condimentum</CardTitle>
          <CardText>
            <span>Wed - 3</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
        <Card body>
          <CardTitle>Lorem ipsum dolor sit amet, consectetur</CardTitle>
          <CardText>
            <span>Thu - 11</span>
            <span>
              <i class="fas fa-clock" />10:30 AM - 11:30 AM
            </span>
          </CardText>
        </Card>
      </UpcomingEvent>
    );
  }
}

export default UpcomingEvents;
