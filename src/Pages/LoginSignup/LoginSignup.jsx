import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import loginImg from "../../Assets/atg_illustration.png";
import styles from "./LoginSignup.module.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={6}>
            <h4>Create Account</h4>
            <Form>
              {!isSignup && (
                <Form.Group controlId="formBasicText">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="border-bottom-0 fw-semibold"
                      style={{ borderRadius: "2px 0 0 0" }}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="border-bottom-0 fw-semibold"
                      style={{ borderRadius: "0 2px 0 0" }}
                    />
                  </InputGroup>
                </Form.Group>
              )}

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="border-bottom-0 rounded-0 fw-semibold"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className={`${
                    isSignup ? "border-bottom" : "border-bottom-0"
                  }  rounded-0 fw-semibold`}
                />
              </Form.Group>
              {!isSignup && (
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="fw-semibold"
                    style={{ borderRadius: "0 0 2px 2px" }}
                  />
                </Form.Group>
              )}

              <Button
                variant="primary"
                type="submit"
                className="rounded-pill mt-3 w-100 fw-semibold"
              >
                Create Account
              </Button>
            </Form>
            <Button
              variant="secondary"
              className="rounded-1 bg-transparent mt-4 w-100 text-dark"
            >
              Sign up with Facebook
            </Button>
            <Button
              variant="secondary"
              className="rounded-1 bg-transparent mt-3 w-100 text-dark"
            >
              Sign up with Google
            </Button>
            <Button
              variant="secondary"
              type="submit"
              className="border-0 bg-transparent mt-3 w-100 text-dark fw-semibold"
            >
              Forgot Password?
            </Button>
          </Col>
          <Col xs={6} md={6}>
            {!isSignup ? (
              <p className="text-end">
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignup(true)}
                  role="button"
                  className="text-primary fw-semibold"
                >
                  Sign In
                </span>
              </p>
            ) : (
              <p className="text-end">
                Don’t have an account yet?{" "}
                <span
                  onClick={() => setIsSignup(false)}
                  role="button"
                  className="text-primary fw-semibold"
                >
                  Create new for free!
                </span>
              </p>
            )}
            <img src={loginImg} alt="Login demo img" />
            {!isSignup && (
              <p className={`${styles.terms} text-center`}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoginSignup;
