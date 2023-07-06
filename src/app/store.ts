import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../redux/productSlice'
import productBidReducer from '../redux/productBidSlice'
import sellerReducer from '../redux/sellerSlice'
import categoryReducer from '../redux/categoryBidSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    bid: productBidReducer,
    counter: counterReducer,
    seller: sellerReducer,
    category: categoryReducer,
  },
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


