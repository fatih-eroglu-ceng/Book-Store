'use client';

import { useDispatch } from 'react-redux';
import useCoverImage from '../hooks/useCoverImage';
import { CartItem } from '../types/cart';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const { coverImageUrl, isLoading, error } = useCoverImage(item.cover);

  const handleAddItem = () => {
    dispatch(addItemToCart({ ...item }));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className='flex gap-6 p-4 bg-white shadow-md rounded-lg'>
      <div className='w-1/5'>
        {isLoading ? (
          <div>Loading cover...</div>
        ) : error ? (
          <div>Error loading cover image</div>
        ) : coverImageUrl ? (
          <img src={coverImageUrl} alt={item.name} width={100} height={150} className='object-cover' />
        ) : (
          <div>Cover image not available</div>
        )}
      </div>

      <div className='w-3/5'>
        <h2 className='text-2xl font-bold'>{item.name}</h2>
        <p className='text-gray-500 mt-2'>{item.author}</p>
        <p className='text-gray-700 mt-4 hidden sm:block'>{item.description}</p>
      </div>

      <div className='w-1/5 flex flex-col justify-between items-center'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleRemoveItem}
            className='w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600'
          >
            -
          </button>

          <span className='text-lg font-bold'>{item.quantity}</span>

          <button
            onClick={handleAddItem}
            className='w-10 h-10 bg-green-500 text-white rounded-full hover:bg-green-600'
          >
            +
          </button>
        </div>

        <p className='text-md sm:text-lg font-bold text-gray-800 mt-4'>{(item.price * item.quantity).toFixed(2)} $</p>
      </div>
    </div>
  );
};

export default CartItemComponent;
