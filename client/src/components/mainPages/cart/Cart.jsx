import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart] = state.UserAPI.cart;

  if (!cart || cart.length === 0) {
    return (
      <h2 style={{ textAlign: 'center', fontSize: '3rem', marginTop: '2rem' }}>
        🛒 Your Cart is Empty
      </h2>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🛒 Your Cart</h2>
      {cart.map((item, index) =>
        item ? (
          <div key={item._id || index} className="detail" style={styles.card}>
            {/* <img
              src={item.images?.url || '/default.png'}
              alt={item.title}
              style={styles.image}
            /> */}
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FShirts-for-Men-Men-s-Summer-Trendy-Hawaiian-Style-Short-Sleeve-Casual-Shirts-Mens-Graphic-Tees-T-Shirts-for-Men-Big-And-Tall-On-Sales-Navy-4XL_d42231e6-9da7-4ce5-a443-350b515755ee.4eec1f162be59accaa3d207e9800165c.jpeg&f=1&nofb=1&ipt=2116b44dba4be5f82521b5cd4002c6fd540632d69477d3f2dc6bbf268a4ad8b2" alt="img" />


            <div className="box-detail" style={styles.details}>
              <div className="row">
                <h2>{item.title}</h2>
                <h6>ID: {item._id}</h6>
              </div>
              <span>₹{item.price}</span>
              <p>{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <Link to="/cart" className="cart" style={styles.button}>
                Buy Now
              </Link>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '1rem',
    alignItems: 'center',
  },
  image: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  details: {
    flex: 1,
  },
  button: {
    display: 'inline-block',
    marginTop: '1rem',
    padding: '0.6rem 1.2rem',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
  },
};

export default Cart;
