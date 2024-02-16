import React from "react";
import "./App.css";
import space from "./joe.jpg";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header></header>
                <h1 className="App-header">
                    UD CISC275 with React Hooks and TypeScript by Jonah Thomas
                </h1>
                <body className="App-body">Hello World</body>
                <img src={space} alt="cool space photo" />
                <ul>
                    <li>Hello</li>
                    <li>there</li>
                    <li>TA</li>
                </ul>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div
                style={{
                    backgroundColor: "red",
                    width: "1000px",
                    height: "200px"
                }}
            >
                <Container>
                    <Row>
                        <Col>First Column</Col>
                        <Col>Second Column</Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
