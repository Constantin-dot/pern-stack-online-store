import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
    const {device} = useContext(Context);

    return <Row className="d-flex">
        {device.brands.map(brand =>
            <Card
                border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
                key={brand.id}
                style={{cursor: 'pointer'}}
                className="p-3"
                onClick={() => device.setSelectedBrand(brand)}
            >
                {brand.name}
            </Card>
        )}
    </Row>
});

export default BrandBar;