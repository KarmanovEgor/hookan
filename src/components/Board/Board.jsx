import "./Board.css";

export default function Board({openPopup}) {
  return (
    <section className="board page__board">
      <div className="board__container">
        <div className="board__blocks-left">
          <div className="board__block">
            <div className="board__image-left board__image-left-up"></div>
            <div className="board__text-block board__text-block_up">
              <h3 className="board__text">ВЫБЕРИ СВОЙ ВКУС</h3>
              <button className="board__button">МЕНЮ</button>
            </div>
          </div>
          <div className="board__block">
            <div className="board__text-block board__text-block_down">
              <h3 className="board__text board__text-down">БАРНАЯ КАРТА</h3>
              <button className="board__button">СМОТРЕТЬ</button>
            </div>
            <div className="board__image-left board__image-left-down"></div>
          </div>
        </div>
        <div className="board__blocks-right">
            <div className="board__text-block board__text-block-right ">
              <h3 className="board__text-right">СКИДКА 40% ДО 12 ДНЯ</h3>
              <button className="board__button board__button-right" type="button" name="calling" onClick={openPopup}>ПОЗВОНИТЬ</button>
            </div>
            <div className="board__image-right"></div>
        </div>

      </div>
    </section>
  );
}
