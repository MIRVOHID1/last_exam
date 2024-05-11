import { Category } from "../../../types";
import "./CategoryProducts.scss";
import { Link } from "react-router-dom";

const CaregoryProducts = ({ products }: Pick<Category, "products">) => {
    return (
        <div className="container__products">
            <div className="products">  
                {
                    products.map((item: Category["products"]) => 
                        <Link to={`/single-product/${item.id}`} className="product" key={item.id}>
                            <img className="image" src={item.images[0]} alt="" />
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default CaregoryProducts;