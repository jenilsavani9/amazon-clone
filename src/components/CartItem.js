import React from 'react';
import { useStateValue } from "./StateProvider";

function CartItem(props) {
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
        <div className="items_for_order">
            <div className="order_item_img">
                <img src={props.imgUrl} alt="" className="cart_item_image" />
            </div>
            <div className="order_item_info">
                <div className="order_item_name">{props.title}</div>
                <div className=''>{"⭐".repeat(props.stars)}</div>
                <div className="order_item_price">Price : $ {props.price}</div>
            </div>
            <div className="remove_cart">
                <button className="remove_cart_btn" onClick={removeFromBasket}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem