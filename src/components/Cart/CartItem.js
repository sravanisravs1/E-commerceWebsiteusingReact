import classes from './CartItem.module.css';
import { Row , Col,  } from "react-bootstrap";

const CartItem = (props) => {
    const price = `Rs${props.price.toFixed(2)}`;
  
    return (
                <Row className={classes['cart-item']}>
                    <Col sm={3}>
                        <span>{props.title}</span>
                        <ul>-------------------</ul>
                    </Col>
                    <Col sm={3}>
                        <span className={classes.price}>{price}</span>
                        <ul>------</ul>
                    </Col>
                    <Col sm={3}>
                    
                        <span className={classes.amount} >
                            {props.amount}
                        </span>
                        <ul>------</ul>
                    </Col>
                    
                    <Col sm={1}className={classes.actions}>
                    
                        <button onClick={props.onRemove}>−</button>
                        <ul>------</ul>
                        
                    
                    </Col>
                    <Col className={classes.actions} sm={1}>
                    <button onClick={props.onAdd}>+</button>
                    <ul>--</ul>
                    </Col>
                </Row>)
      
  };
  
  export default CartItem;