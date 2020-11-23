import Card from "../card/Card";
import "./ConCard.css";

const ConCard = () => {
  return (
    <section className="conCard">
      <Card c_title="ini card Title" c_body="ini card Body" />
      <Card c_title="ini card Title2" c_body="ini card Body 2" />
      <Card c_title="ini card Title3" c_body="ini card Body 3" />
      <Card c_title="ini card Title4" c_body="ini card Body 4" />
      <Card c_title="ini card Title" c_body="ini card Body" />
      <Card c_title="ini card Title2" c_body="ini card Body 2" />
      <Card c_title="ini card Title3" c_body="ini card Body 3" />
      <Card c_title="ini card Title4" c_body="ini card Body 4" />
    </section>
  );
};

export default ConCard;
