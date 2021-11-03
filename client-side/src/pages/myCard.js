import { Button, Container } from "react-bootstrap";
import CardsComp from "../components/cards/CardsComp";
import { Route, Link } from "react-router-dom";

function MyCardsPage() {
  return (
    <>
      <h1>See your business cards!</h1>
      <Container>
        <CardsComp></CardsComp>
      </Container>
      <Button variant="primary">
        <Route>
          <Link to="/createCard" id="myCardBtn">
            Create your card
          </Link>
        </Route>
      </Button>
    </>
  );
}
export default MyCardsPage;
