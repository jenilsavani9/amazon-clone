import React from 'react'
import { useStateValue } from "./StateProvider";
import '../css/CheckoutItem.css'

function CheckoutItem(props) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {

        dispatch({
            type: 'CHANGE_LOADER',
            loader: true,
            loader_status: 100
        });

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: props.id,
            }
        });
    }

    return (
        <div className="checkout_item_container">
            <div className="checkout_item_image">
                <img src={props.imgUrl} alt="" className="cart_item_image" />
            </div>
            <div className="checkout_item_information">
                <div className="checkout_item__name">{props.title}</div>
                <div className='checkout_item__star'>{"⭐".repeat(props.stars)}</div>
                <div className="checkout_item__price">Price : $ {props.price}</div>
                {!props.hideBtn && (
                    <button className="checkout_item_remove_btn" onClick={removeFromBasket}>Remove Item</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutItem