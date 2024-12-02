import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Details from "./components/Details";

class App extends Component {
  state = { selected: "" };

  changeSelected = newValue => {
    this.setState({
      selected: newValue
    });
  };

  render() {
    return (
      <Container className="mt-5 pt-5">
        <Row>
          <Col>
            <Table selected={this.state.selected} changeSelected={this.changeSelected} />
          </Col>
          <Col>
            <Details selected={this.state.selected} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
