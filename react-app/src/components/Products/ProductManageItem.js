import { Link, NavLink } from "react-router-dom";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import DeleteProductFormModal from "./DeleteProductFormModal";

const ProductManageItem = ({ product, sessionUser }) => {

  return (
    <>
      <li title={product.name} className="outer-container-Update-Delete-Buttons">
        <Link to={`/products/${product.id}`}>
          <div className="product-item">
            <div
              className="product-preview"
              style={{ backgroundImage: `url(${product.images[0]?.media_url})` }}
            ></div>
            <div className="product-details">
              <p style={{ fontWeight: 'bold' }}>${parseFloat(product.price).toFixed(2)}</p>
            </div>
          </div>
        </Link>
        <div className="Update-Delete-Buttons">
          {sessionUser && (
            <NavLink
              to={`/products/${product.id}/edit`}
              style={{
                marginLeft: "22px",
                marginTop:"10px",
                border: "1px solid #000",
                backgroundColor: "grey",
                color: "white",
                padding: "5px",
                boxShadow: "5px 5px 5px",
                width: "fit-content",
                textDecoration: "none",
                cursor: "pointer"
              }}
            >
              Update
            </NavLink>
          )}
          <div className="delete-button-for-product">
            <OpenModalMenuItem
              itemText="Delete"
              modalComponent={<DeleteProductFormModal productId={product.id} />}
            />
          </div>
        </div>
      </li>
    </>
  );
};


export default ProductManageItem;