import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Progress,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";
import ActivitiesLogo from "../../../assets/images/activities.svg";
import {
  StyleCardBody,
  StyledCard,
  StyledCarousal
} from "./Style";
class Activities extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      }
      // tablet: {
      //   breakpoint: { max: 1024, min: 464 },
      //   items: 2,
      //   slidesToSlide: 2, // optional, default to 1.
      // },
      // mobile: {
      //   breakpoint: { max: 464, min: 0 },
      //   items: 1,
      //   slidesToSlide: 1, // optional, default to 1.
      // },
    };

    let cardItems = [
      {
        id: 1,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 90,
        completedParts: 9,
        totalParts: 10
      },
      {
        id: 2,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 50,
        completedParts: 2,
        totalParts: 4
      },
      {
        id: 3,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 25,
        completedParts: 3,
        totalParts: 4
      },
      {
        id: 4,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 25,
        completedParts: 3,
        totalParts: 4
      },
      {
        id: 5,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 55,
        completedParts: 3,
        totalParts: 7
      },
      {
        id: 6,
        title: "2019 Continuous Certification",
        subTitle: "Maintenance of Certification",
        progress: 70,
        completedParts: 3,
        totalParts: 5
      }
    ];

    return (
        <StyledCarousal
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          //autoPlay={this.props.deviceType !== "mobile" ? true : false}
          //autoPlaySpeed={1000}
          keyBoardControl={true}
          //customTransition="all .5"
          // transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {cardItems.map(cardOptions => (
              <div key={cardOptions.id}>
                <StyledCard>
                  <StyleCardBody>
                    <cardTitle>{cardOptions.title}</cardTitle>
                    <CardSubtitle>{cardOptions.subTitle}</CardSubtitle>
                    <CardText>
                      <Progress value={cardOptions.progress} />
                      <div className="Progress-pre">
                        {cardOptions.progress}%
                      </div>
                    </CardText>
                    <span>
                      {cardOptions.completedParts} of {cardOptions.totalParts}{" "}
                      parts completed
                    </span>
                    <Button className="btn-primary">Continue</Button>
                  </StyleCardBody>
                </StyledCard>
              </div>
          ))}
        </StyledCarousal>
    );
  }
}

export default Activities;
