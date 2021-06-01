import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    };

    return <Modal
        size="lg"
        centered
        show={show}
        onHide={onHide}
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Add new device
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>
                        Choose a type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type => 
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>
                        Choose a brand
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand => 
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control 
                    className="mt-3"
                    placeholder={'Enter name of device'}
                />
                <Form.Control 
                    className="mt-3"
                    placeholder={'Enter cost of device'}
                    type="number"
                />
                <Form.Control 
                    className="mt-3"
                    type="file"
                />
                <hr/>
                <Button 
                    variant="outline-dark"
                    onClick={addInfo}
                >Add new property</Button>
                {info.map(i =>
                    <Row className="mt-4" key={i.number}>
                        <Col md={4}>
                            <Form.Control placeholder="Eneter name of property" />
                        </Col>
                        <Col md={4}>
                            <Form.Control placeholder="Eneter description of property" />
                        </Col>
                        <Col md={4}>
                            <Button 
                                variant={"outline-danger"}
                                onClick={() => removeInfo(i.number)}
                            >Delete</Button>
                        </Col>
                    </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Close</Button>
            <Button variant="outline-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
    </Modal>
};

export default CreateDevice;