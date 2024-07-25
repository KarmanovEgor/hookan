import Carousel from "../Carousel/Carousel";
import "./Promo.css"
export default function Promo({openPopup}) {
  return (
    <section className="promo page__promo">

      <Carousel openPopup={openPopup}/>
      
    </section>
  );
}
