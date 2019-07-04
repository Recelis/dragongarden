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
  let iframeStyle ={border:'0'};
  return (
    <Container>
      <Row>
        <Col sm={3}><h3>Opening Times</h3>
          <OpeningHours />
        </Col>
        <Col sm={7}>
          <p>18 Wickham St, Gympie QLD 4570</p>
          <p>If you are travelling north, we are right behind the Caltex</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d675.380842227602!2d152.6563513943052!3d-26.191543441487905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b94a340b00bffff%3A0xeed0605a31ed7ad2!2sDragon+Garden+Family+Restaurant!5e0!3m2!1sen!2sau!4v1562201542553!5m2!1sen!2sau" width="600" height="450" frameborder="0" style={iframeStyle} allowfullscreen></iframe>
        </Col>
        <Col sm={2}>
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
