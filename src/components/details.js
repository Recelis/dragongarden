import React from 'react';
import Container from 'react-bootstrap/Container';
 
const Details = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center mb-2">
                <span><u>LICENSED</u>-</span>
                <span><u>AIR CONDITIONED</u>-</span>
                <span><u>TAKE AWAY</u></span>
            </div>
            <p className="d-flex justify-content-center my-0">Please call us to make a booking</p>
            <a
            href="https://www.google.com/maps/dir//-26.1915088,152.6566924/@-26.191509,152.656692,18z?hl=en"
            alt="#"
            className="d-flex justify-content-center my-0"
            >
            18 Wickham Street, Bruce Highway, GYMPIE
            </a>
            <p className="d-flex justify-content-center my-0">
            (Opposite Super Cheap Auto)
            </p>
            <div className="d-flex justify-content-center my-0 flex-wrap">
            <p className="mx-1 my-0 ">
                Phone: <a href="tel: 0754825700">(07) 5482 5700</a>
            </p>
            <p className="mx-1 my-0 ">
                Mobile Phone: <a href="tel:+61-413-889-889">0413 889 889</a>{" "}
                (Douglas)
            </p>
            </div>
        </Container>
    );
}
 
export default Details;