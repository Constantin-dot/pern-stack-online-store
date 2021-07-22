import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card, Container, Form, Button, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { login, registration } from "../services/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";
import InfoAlert from "../components/InfoAlert";

const Auth = observer(() => {
    const { user } = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const click = async () => {
        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            user.setErrorText(e.response.data.message);
            // alert(e.response.data.message);
        }
    };

    const closeAlert = () => {
        user.setErrorText("");
    };

    if (user.errorText.length > 1) {
        return (
            <InfoAlert
                variant={"danger"}
                onClose={closeAlert}
                text={user.errorText}
            />
        );
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? "Login" : "Signin"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your password..."
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? (
                            <div>
                                Do you not have account?{" "}
                                <NavLink to={REGISTRATION_ROUTE}>
                                    Please, sign in.
                                </NavLink>
                            </div>
                        ) : (
                            <div>
                                Do you have account?{" "}
                                <NavLink to={LOGIN_ROUTE}>
                                    Please, login.
                                </NavLink>
                            </div>
                        )}
                        <Button variant="outline-success" onClick={click}>
                            {isLogin ? "Enter" : "Registrate me"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
