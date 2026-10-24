import React from 'react';
import Container from 'react-bootstrap/Container';

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const GoogleMaps = () => {
  return (
    <Element name="map">
      <div className="section-dragon section-dragon-alt map-section">
        <Container>
          <div className="section-header">
            <h2>Find Us</h2>
            <p className="subtitle">Come visit us in Gympie</p>
          </div>
          <div className="map-container">
            <iframe
              title="Dragon Garden Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.682535684256!2d152.6566924!3d-26.1915088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDExJzI5LjQiUyAxNTLCsDM5JzI0LjEiRQ!5e0!3m2!1sen!2sau!4v1"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
            target="_blank"
            rel="noreferrer"
            className="map-address-link"
          >
            <i className="fa fa-map-marker" aria-hidden="true" /> 18 Wickham Street, Bruce Highway, GYMPIE
          </a>
        </Container>
      </div>
    </Element>
  );
};

export default GoogleMaps;