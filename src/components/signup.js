import React, { useRef, useState } from 'react';
import { Button, Card, Form, Alert, Container } from 'react-bootstrap';
import { useAuth } from "./AuthContext";
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const ConfirmPasswordRef = useRef();
    const { signup } = useAuth();
    const history = useHistory();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== ConfirmPasswordRef.current.value) {
            return setError("Password does not match!");
        }
        try {
            setLoading(true);
            setError("");
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push('/login');
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4"> Sign Up</h2>
                        {error ? <Alert variant="danger">{JSON.stringify(error)}</Alert> : ""}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" required />
                            </Form.Group>

                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control ref={emailRef} type="email" required />
                            </Form.Group>

                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={passwordRef} type="password" required />
                            </Form.Group>

                            <Form.Group id="ConfirmPassword">
                                <Form.Label>Password Comnfirmation</Form.Label>
                                <Form.Control ref={ConfirmPasswordRef} type="password" required />
                            </Form.Group>
                            <br />

                            <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    )
}

export default Signup;