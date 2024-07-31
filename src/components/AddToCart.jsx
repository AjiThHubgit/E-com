import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/thunkApiSlice';

const AddToCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.thunkApi.data);
    const [localCart, setLocalCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [quantity, setQuantity] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    useEffect(() => {
        const calculateSubtotal = (carts) => {
            let total = 0;
            for (const cart of carts) {
                total += parseInt(cart.amount, 10);
            }
            return total;
        };

        setTotal(calculateSubtotal(localCart));
    }, [localCart]);

    useEffect(() => {
        dispatch(fetchData('cart'));
    }, [dispatch]);

    useEffect(() => {
        setLocalCart(cart);
    }, [cart]);

    const handleOnChange = (val, id) => {
        const updatedCart = localCart.map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount * val }; // Assuming `price` is a property of each item
            }
            return item;
        });
        setLocalCart(updatedCart);
    }

    return (
        <section>
            <div className='container-fluid' style={{ display: 'grid', gridTemplateColumns: '1000px 1fr' }}>
                <div>
                    {localCart.map((list) => (
                        <div key={list.id} style={{ display: 'flex', boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.15)', margin: '25px 0' }}>
                            <div><img style={{ width: '250px' }} src={list.img_url} alt="cart_product_img" /></div>
                            <div>
                                <h1>{list.title}</h1>
                                <p>Amount: {list.amount}</p>
                                <div>
                                    <label>Quantity: </label>
                                    <select onChange={(e) => handleOnChange(e.target.value, list.id)}>
                                        {
                                            quantity.map((val, index) => (
                                                <option value={val} key={index}>{val}</option>
                                            ))
                                        }
                                    </select>
                                    <div>
                                        <h3>Specification: </h3>
                                        <p>Brand: {list.details?.Brand}</p>
                                        <p>Battery: {list.details?.Battery}</p>
                                        <p>Camera: {list.details?.Display}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ backgroundColor: 'blue' }}>
                    <div style={{ backgroundColor: 'blue', padding: '20px' }}>
                        Subtotal (${localCart.length} items): ${total}
                    </div>
                    <button>Proceed To Buy</button>
                </div>
            </div>
        </section>
    )
}

export default AddToCart;
