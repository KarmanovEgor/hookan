import Card from "../Card/Card";
import "./Cardlist.css";

export default function cardlist( 
    onClickCard,
    onDelete,
    cards,
    name,
    handleLogin,){
    return(
        <section className="element">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onClickCard={onClickCard}
            onDelete={onDelete}
          />
        ))}
      </section>
    )
}