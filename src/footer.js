import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const hours = {
  Monday:"Closed",
  Tuesday:"11am–2:30pm, 4:30–9:30pm",
  Wednesday:"11am–2:30pm, 4:30–9:30pm",
  Thursday:"11am–2:30pm, 4:30–9:30pm",
  Friday:"11am–2:30pm, 4:30–9:30pm",
  Saturday:"11am–2:30pm, 4:30–9:30pm",
  Sunday:"12pm-2:30pm, 4:30pm-9pm",
  Public_Holidays:"Check Upcoming Notices on Facebook"
}

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xs={4}><h3>Opening Times</h3>
          <OpeningHours />
        </Col>
        <Col xs={4}>
          <p>18 Wickham St, Gympie QLD 4570</p>
          <p>directions</p>
          <p>map</p>
        </Col>
        <Col xs={4}>
          <p>Please call us to make a booking</p>
          <div><a href="tel:+61754825700">54825700</a></div>
          <div><a href="tel:+61-413-889-889">+61413889889</a></div> {/*check that this works*/}
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <p>Copyright Dragon Garden Restaurant, created by Jacky Lui</p>
        </Col>
        <Col xs={4}>facebook</Col>
      </Row>
    </Container>
  );
};

const OpeningHours = props => {
  // map object and create component
  let openingtimes = Object.keys(hours).map((day)=>{
    // remove the underline + replace with space
    let tag = day.replace(/_/, " ");
    return <HourLine 
      day={tag}
      hours={hours[day]}
    />
  })
  return (
    <div>
      {openingtimes}
    </div>
  );
};

const HourLine = (props) => {
  return(
    <Container>
      <Row>
        <Col>
          <p>{props.day}</p>
        </Col>
        <Col xs={6}>
          <p>{props.hours}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;
