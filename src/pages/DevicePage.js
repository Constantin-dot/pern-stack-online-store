import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.png';

const DevicePage = () => {
    const device = {id: 1, name: 'Iphone 12 pro', price: 100000, rating: 5, img:`https: //www.purposechurch.com/wp-cont`};

    return <Container className="mt-3">
        <Row>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col> 
            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div className="d-flex justify-content-center align-items-center"
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64}}
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>
            <Col md={4}>
                <Card 
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width: 300, height:300, fontSize:32, border: '5px solid lightgray'}}
                >
                    <h3>{device.price}</h3>
                    <Button variant={'outline-dark'}>Add to cart</Button>
                </Card>
            </Col>
        </Row>
    </Container>
};

export default DevicePage;