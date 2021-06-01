import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
    
    const {user} = useContext(Context);
    const history = useHistory();

    return <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>BuyDevice</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button 
                        variant={"outline-light"} 
                        onClick={() => history.push(LOGIN_ROUTE)}
                    >Log out</Button>
                    <Button 
                        variant={"outline-light"} 
                        onClick={() => history.push(ADMIN_ROUTE)} 
                        className="ml-2"
                    >Admin panel</Button>
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