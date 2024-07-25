import { Link } from "react-router-dom";
import { productsData } from "../constants/constProducts";
import "./Products.css";
 export default function Products() {
    return(
        <section className="products">
            <div className="products__container">
            <h2 className="products__title">ТАБАЧНАЯ ПРОДУКЦИЯ</h2>
            <div className="products__list">
                {productsData.map((product, index) => (
                    <div key={index} className="products__item">
                        <Link to={product.link} className='products__link' title={product.alt}>
                            <img className='products__img' src={product.image} alt={product.alt} />
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
 }