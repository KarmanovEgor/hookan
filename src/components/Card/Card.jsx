import { useContext } from "react";
import currentUserContext from "../../contexts/CurrentUserContext";
import "./Card.css";

export default function Card({ card, onClickCard, onDelete }) {

  const currentUser = useContext(currentUserContext);


  return (
    <div className="card">
      {currentUser.currentUser._id === card.owner && (
        <button
          className="card__button-trash"
          type="button"
          onClick={() => onDelete(card._id)}
         
        />
        
      )}
      <img
        className="card__foto"
        alt={card.name}
        src={card.link}
        onClick={() => onClickCard({ link: card.link, name: card.name })}
      />
      <div className="card__names">
        <h2 className="card__name">{card.name}</h2>
      </div>
    </div>
  );
}