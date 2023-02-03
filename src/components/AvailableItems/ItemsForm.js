import React ,{ useRef ,useState,useContext } from "react";
import classes from './Availableproducts.module.css';
import Input from '../../Input/input';
import CartContext from "../../store/cart-context";

const ItemForm = props => {
    const [amounIsValid , setAmountIsValid ] = useState(true);
    const cartCtx = useContext(CartContext);
    const amountInputRef = useRef();

    const addItemToCart = (event) =>{
        event.preventDefault();
        // cartCtx.items.push(props.item);a
        console.log(cartCtx.items);
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 ||
        enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
        
        
    }


    console.log(amountInputRef);
    return (
        <form className={classes.form} onSubmit={addItemToCart}>
            <Input 
                ref={amountInputRef}
                label='Amount' 
                input={{
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'

            }}/>
            <button >+Add</button>
            {!amounIsValid && <p>Please enter a valid amount between (1-5)</p>}
        </form>
    )
};

export default ItemForm;