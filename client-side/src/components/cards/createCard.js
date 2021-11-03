import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import CreateCardValid from "../../helpers/createCard";
import { insertNewCard } from "../../helpers/FetchHelper";

const notify = (message) => toast(message);

function CreateCardComp({ clickHandler = (f) => f }) {
  return (
    <Form>
      <h1>Create your Smart Business Card!</h1>
      <p>
        Fill all the information about your company or about yourself and create
        your card!
      </p>
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Business Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Business Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Business Address</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Business Phone</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        id="createCardBtn"
        onClick={(e) => {
          e.preventDefault();
          var cardValidate = CreateCardValid(
            "formBasicBusinessName",
            "formBasicBusinessDescription",
            "formBasicBusinessAddress",
            "formBasicBusinessPhone",
            "formBasicBusinessImage"
          );
          if (typeof cardValidate == "string") {
            notify(cardValidate);
          } else {
            clickHandler(cardValidate);
            insertNewCard(
              cardValidate,
              localStorage.getItem("token"),
              () => {}
            );
            window.location.href = "http://localhost:3001/my-cards";
          }
        }}
      >
        Create Card
      </Button>
    </Form>
  );
}
export default CreateCardComp;
