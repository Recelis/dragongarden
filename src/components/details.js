import React from 'react';
import Container from 'react-bootstrap/Container';

const Details = () => {
    return (
        <div className="section-dragon section-dragon-alt contact-section">
            <Container>
                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p className="subtitle">Call or visit — we'd love to hear from you</p>
                </div>
                <div className="contact-item">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <a 
                        href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        18 Wickham Street, Bruce Highway, GYMPIE
                    </a>
                    <br />
                    <span style={{ opacity: 0.6, fontSize: '0.9rem' }}>(Opposite Super Cheap Auto)</span>
                </div>
                <div className="contact-item">
                    <i className="fa fa-phone" aria-hidden="true" />
                    Phone: <a href="tel:0754825700" className="phone-number">(07) 5482 5700</a>
                </div>
                <div className="contact-item">
                    <i className="fa fa-mobile" aria-hidden="true" />
                    Mobile: <a href="tel:+61-413-889-889">0413 889 889</a> (Douglas)
                </div>
                <div className="contact-item">
                    <i className="fa fa-facebook" aria-hidden="true" />
                    Like us on{' '}
                    <a href="https://www.facebook.com/DragonGardenRestaurant/" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default Details;