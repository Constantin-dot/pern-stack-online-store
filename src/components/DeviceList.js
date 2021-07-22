import { observer } from "mobx-react-lite";
import React from "react";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context);
    const brands = device.brands;
    const types = device.types;

    return (
        <Row className="d-flex">
            {device.devices.map((d) => (
                <DeviceItem
                    key={d.id}
                    device={d}
                    types={types}
                    brands={brands}
                />
            ))}
        </Row>
    );
});

export default DeviceList;
