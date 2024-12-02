import { Alert } from "react-bootstrap";

const Details = props => <Alert variant="success">Hai selezionato: {props.selected || "ancora niente"}</Alert>;

export default Details;
