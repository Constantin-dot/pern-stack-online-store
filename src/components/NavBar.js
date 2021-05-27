import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);

    return <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-light"}>Login</Button>
                    <Button variant={"outline-light"} className="ml-2">Admin panel</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button 
                        variant={"outline-light"}
                        onClick={() => user.setIsAuth(true)}
                    >Authorization</Button>
                </Nav>
            }
        </Container>
    </Navbar>
});

export default NavBar;