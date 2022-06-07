import { Fragment } from "react";
import "./App.css";

// Components
import InputTodo from "./components/InputTodo";

// Boostrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Fragment>
      <Container>
        <InputTodo />
      </Container>
    </Fragment>
  );
}

export default App;
