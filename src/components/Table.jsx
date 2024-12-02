import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class Table extends Component {
  //   state = {
  //     selected: ""
  //   };

  //   checkSelected = value => (this.state.selected === value ? "selected" : "");
  checkSelected = value => (this.props.selected === value ? "selected" : "");

  render() {
    // console.log("render", this.state.selected);
    console.log("table props", this.props);
    return (
      <>
        <ListGroup>
          {/* <ListGroup.Item onClick={() => this.setState({ selected: "Uno" })} className={this.checkSelected("Uno")}> */}
          <ListGroup.Item
            onClick={() => {
              this.props.changeSelected("Uno");
            }}
            className={this.checkSelected("Uno")}
          >
            Uno
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => {
              this.props.changeSelected("Due");
            }}
            className={this.checkSelected("Due")}
          >
            Due
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => {
              this.props.changeSelected("Tre");
            }}
            className={this.checkSelected("Tre")}
          >
            Tre
          </ListGroup.Item>
        </ListGroup>
        <p>
          {/* L&apos;elemento attualmente selezionato è <strong>{this.state.selected || "Nessuno"}</strong> */}
          L&apos;elemento attualmente selezionato è <strong>{this.props.selected || "Nessuno"}</strong>
        </p>
      </>
    );
  }
}

export default Table;
