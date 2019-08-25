import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import {
  Cardblock,
  NotificationUL,
  NotificationLI,
  NotificationSpan,
  ButtonDateBlock,
  Paybutton,
  Datespan,
  CardNotification,
  A
} from "./Style";

class Notifications extends Component {
  state = {};
  render() {
    return (
      <div>   
          <Cardblock>
            <NotificationUL>
              <NotificationLI>
                <NotificationSpan>2019 Active Members Dues</NotificationSpan>
                <i className="fas fa-times disabled-btn " />

                <ButtonDateBlock>
                  <Paybutton>Pay Dues & Late Fees</Paybutton>
                  <Datespan>Jul 18, 2019</Datespan>
                </ButtonDateBlock>
              </NotificationLI>
              <NotificationLI>
                <NotificationSpan>2019 Active Members Dues</NotificationSpan>
                <i className="fas fa-times  disabled-btn" />

                <ButtonDateBlock>
                  <Paybutton>Pay Dues & Late Fees</Paybutton>
                  <Datespan>Jul 18, 2019</Datespan>
                </ButtonDateBlock>
              </NotificationLI>
              <NotificationLI>
                <NotificationSpan>2019 Active Members Dues</NotificationSpan>
                <i className="fas fa-times" />

                <ButtonDateBlock>
                  <span />
                  <Datespan>Jul 18, 2019</Datespan>
                </ButtonDateBlock>
              </NotificationLI>
            </NotificationUL>
          </Cardblock>
          <CardNotification>
            <A href="#" target="_blank" className="click-link">
              <span>2 More Unread Notifications</span>
            </A>
          </CardNotification>
          </div>
    );
  }
}

export default Notifications;
