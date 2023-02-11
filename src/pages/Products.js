import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useNavigate } from "react-router-dom";


const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    id:1
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    id:2
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    id:3
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    id:4
  },
];

const Products = (props) => {
const context=useContext(CartContext);

const navigate = useNavigate();

const submitHandler=(event)=>{
  event.preventDefault()
}
const addItemToCart=(product)=>{
  console.log(product)
  
  context.addItem({
    title:product.title,
    id:product.id,
    quantity:1,
    imageUrl:product.imageUrl,
    price:product.price
  })

}
  return <React.Fragment>
  {productsArr.map((product)=>(
    <form key={product.id} style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }} className="m-3" onSubmit={submitHandler}>
        <Card className="shadow-lg m-5" key={product.id} style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }}>
            <Card.Img 
              onClick={()=> navigate(`/products/${product.id}`)}
              variant="top"  
              src={product.imageUrl} >

            </Card.Img>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" onClick={()=>addItemToCart(product)}>Add To Cart</Button>

            </Card.Body>
        

        </Card>
    </form>
))}
  </React.Fragment>
};

export default Products;