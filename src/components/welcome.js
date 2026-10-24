import React from 'react';
import Container from 'react-bootstrap/Container';

const Welcome = () => {
    return (
        <div className="section-dragon welcome-section">
            <Container>
                <div className="section-header">
                    <h2>Welcome</h2>
                </div>
                <div className="d-flex justify-content-center flex-wrap" style={{ gap: '2rem' }}>
                    <p className="welcome-text-en">
                        The Dragon Garden Family welcomes you to our Traditional Chinese Cuisine.
                    </p>
                    <p className="welcome-text-cn">
                        龙苑大酒家欢迎您品尝我们的传统中式佳肴。
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default Welcome;