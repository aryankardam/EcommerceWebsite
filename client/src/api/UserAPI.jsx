import { useEffect, useState } from 'react';
import axios from '../components/mainPages/utils/axiosInstance';

const UserAPI = (token) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        try {
          const res = await axios.get('/user/infor', {
            headers: { Authorization: token }
          }); 

          setIsLogged(true);
          setIsAdmin(res.data.role === 1);
          setCart(res.data.cart || []);
        } catch (err) {
          alert(err.response?.data?.msg || "Failed to fetch user info.");
        }
      };
      getUser();
    }
  }, [token]);

  const addCart = async (product) => {
  if (!isLogged) return alert("Please log in first.");

  const check = cart.every(item => item._id !== product._id);
  if (check) {
    const newCart = [...cart, { ...product, quantity: 1 }];
    setCart(newCart);

    await axios.patch('/user/addcart', { cart: newCart }, {
      headers: { Authorization: token }
    });
  } else {
    alert("This product is already in the cart.");
  }
};


  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    cart: [cart, setCart],
    addCart: addCart
  };
};

export default UserAPI;
