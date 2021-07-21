import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from "../../services/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState("");

    const addBrand = () => {
        createBrand({ name: value }).then(() => {
            setValue("");
            onHide();
        });
    };

    return (
        <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={"Please, enter name of brand"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={addBrand}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
