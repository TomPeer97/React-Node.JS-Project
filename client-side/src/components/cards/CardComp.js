import { Card, Button } from "react-bootstrap";
function CardComp({ card, handleClick }) {
  return (
    (card && (
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          padding: 20,
          margin: 10,
        }}
        id="card"
      >
        <Card.Img
          variant="top"
          style={{ width: 70 }}
          src={"https://cdn-icons-png.flaticon.com/512/1157/1157044.png"}
        />
        <Card.Body>
          <Card.Title>{card.bizName}</Card.Title>
          <hr></hr>
          <Card.Text>{card.bizDescription}</Card.Text>
          <hr></hr>
          <Card.Text>{card.bizAddress}</Card.Text>
          <hr></hr>
          <Card.Text>{card.bizPhone}</Card.Text>
          <hr></hr>
          <Button
            id="removeCard"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              handleClick(card._id);
            }}
          >
            Remove this card
          </Button>
        </Card.Body>
      </Card>
    )) || <></>
  );
}
export default CardComp;
