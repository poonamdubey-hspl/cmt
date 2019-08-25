import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import downarrow from "../../../assets/images/down-arrow.svg";
import MyactivModals from "./../modals/modals";
import {
  ActivityTitle,
  CollapesBlock,
  CollapesText,
  Text,
  Heading,
  TabContent,
  StyledProgress,
  TabHeading,
  TabText,
  BtnPrimary,
  RedBtn,
  TabMain,
  DueDate,
  GreenBtn,
  GreyBtn
} from "./Style";

class MyactivCollapse extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      collapse1: false,
      collapse2: false,
      collapse3: false
    };
  }

  toggle(num) {
    if (num === 0) {
      this.setState(state => ({ collapse: !state.collapse }));
    } else if (num === 1) {
      this.setState(state => ({ collapse1: !state.collapse1 }));
    } else if (num === 2) {
      this.setState(state => ({ collapse2: !state.collapse2 }));
    } else if (num === 3) {
      this.setState(state => ({ collapse3: !state.collapse3 }));
    }
  }

  render() {
    return (
      <CollapesBlock>
        <ActivityTitle onClick={this.toggle.bind(this, 0)}>
          <CollapesText>
            <Text>2019 Continuous Certification</Text>
            <Heading>Maintenance of Certification</Heading>
          </CollapesText>
          <CollapesText>
            <StyledProgress value="25" />
            <Text>2 of 3 parts completed</Text>
          </CollapesText>
          <img src={downarrow} />
        </ActivityTitle>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
        <ActivityTitle onClick={this.toggle.bind(this, 1)}>
          <CollapesText>
            <Text>2019 General Surgery Continuous Certification</Text>
            <Heading>General Surgery Continuous Certification</Heading>
          </CollapesText>
          <CollapesText>
            <StyledProgress value="35" />
            <Text>2 of 6 parts completed</Text>
          </CollapesText>
          <img src={downarrow} />
        </ActivityTitle>
        <Collapse isOpen={this.state.collapse1}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
        <ActivityTitle onClick={this.toggle.bind(this, 2)}>
          <CollapesText>
            <Text>2019 Core Competencies Certification</Text>
            <Heading>Core Competencies Certification</Heading>
          </CollapesText>
          <CollapesText>
            <StyledProgress value="30" />
            <Text>1 of 4 parts completed</Text>
          </CollapesText>
          <img src={downarrow} />
        </ActivityTitle>
        <Collapse isOpen={this.state.collapse2}>
          <Card>
            <CardBody>
              <TabMain>
                <TabContent>
                  <TabHeading>
                    Part I Professionalism and Professional Standing
                  </TabHeading>
                  <TabText>
                    Standing with Licensing and Professional Organizations
                  </TabText>
                  <MyactivModals>Begin</MyactivModals>
                </TabContent>
                <TabContent>
                  <GreyBtn>Not Started</GreyBtn>
                  <DueDate>Due: 12/31/2019</DueDate>
                </TabContent>
              </TabMain>
              <TabMain>
                <TabText>Chief of Staff Questionnaire</TabText>
                <TabContent>
                  <GreenBtn>Completed</GreenBtn>
                </TabContent>
              </TabMain>
              <TabMain>
                <TabContent>
                  <TabHeading>
                    Part II Life-Long Learning and Self-Assessment
                  </TabHeading>
                  <TabText>Continuing Medical Education</TabText>
                  <BtnPrimary>Begin</BtnPrimary>
                </TabContent>
                <TabContent>
                  <RedBtn>Past Due</RedBtn>
                </TabContent>
              </TabMain>
            </CardBody>
          </Card>
        </Collapse>
        <ActivityTitle onClick={this.toggle.bind(this, 3)}>
          <CollapesText>
            <Text>2019 Surgical Leadership Certification</Text>
            <Heading>Surgical Leadership Certification</Heading>
          </CollapesText>
          <CollapesText>
            <Text>Not Started</Text>
          </CollapesText>
          <img src={downarrow} />
        </ActivityTitle>
        <Collapse isOpen={this.state.collapse3}>
          <Card>
            <CardBody>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </CollapesBlock>
    );
  }
}

export default MyactivCollapse;
