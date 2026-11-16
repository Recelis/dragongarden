import React from 'react';
import Container from 'react-bootstrap/Container';

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const OpenHours = () => {
    return (
        <div className="section-dragon" id="hours">
            <Container>
                <Element name="hours">
                    <div className="section-header">
                        <h2>Opening Hours</h2>
                    </div>
                    <div className="hours-card">
                        <div className="hours-row">
                            <span className="hours-day">Monday</span>
                            <span className="hours-time" style={{ color: '#CC6666' }}>Closed</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-day">Tuesday — Saturday</span>
                            <span className="hours-time">11am – 2:30pm, 4:30 – 9pm</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-day">Sunday</span>
                            <span className="hours-time">12pm – 2:30pm, 4:30 – 9pm</span>
                        </div>
                        <div className="hours-row">
                            <span className="hours-day">Public Holidays</span>
                            <span className="hours-time">
                                Check{' '}
                                <a href="https://www.facebook.com/DragonGardenRestaurant/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                            </span>
                        </div>
                        <p className="holiday-surcharge">Public Holiday Surcharge — 15%</p>
                    </div>
                </Element>
            </Container>
        </div>
    );
}

export default OpenHours;