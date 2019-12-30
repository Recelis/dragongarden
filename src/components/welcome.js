import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'; 

const Welcome = () => {
    return (
        <Container bsPrefix="menu">
        <Row>
          <Col md={12}>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column welcome-text mx-1">
                    <span>The</span>
                    <span>Dragon</span>
                    <span>Garden</span>
                    <span>Family</span>
                    <span>welcomes</span>
                    <span>you</span>
                    <span>to</span>
                    <span>our</span>
                    <span>traditional</span>
                    <span>Chinese</span> 
                    <span>Cuisine</span>
                    <span>.</span>
                </div>
                <div className="d-flex flex-column welcome-text mx-1">
                    <span>龙苑</span>
                    <span>大</span>
                    <span>酒家</span>
                    <span>欢迎</span>
                    <span>您</span>
                    <span>品尝</span>
                    <span>我们</span>
                    <span>的</span>
                    <span>传统</span>
                    <span>中式</span> 
                    <span>佳肴</span>
                    <span>。</span>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
    );
}
 
export default Welcome;