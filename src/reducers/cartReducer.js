import Item1 from '../images/avocado.jpg'
import Item2 from '../images/carrot.jpg'
import Item3 from '../images/corn.jpg'
import Item4 from '../images/garlic.jpg'
import Item5 from '../images/red-chili.jpg'
import Item6 from '../images/tomato.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cartActions'


const initState = {
  items: [
    { id: 1, title: 'Avocado', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
    { id: 2, title: 'Carrot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    { id: 3, title: 'Corn', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    { id: 4, title: 'Garlic', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    { id: 5, title: 'Red Chili', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    { id: 6, title: 'Tomato', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item6 }
  ],
  addedItems: [],
  total: 0

}
const cartReducer = (state = initState, action) => {

  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    // Add code here
   // const id = action.payload;
    //const found = state.items.find((item)) => item,id === id)
    //const copyFound = {... found}
    //const addedItems = state.addedItems.map(item => ({...item}));
    //addedItems.push(copyFound);
    //return{
    //  ...state,
    //  addedItems: addedItems
    //}
      
    //}
  }
  if (action.type === REMOVE_ITEM) {
    const nextState = produce(state, (draft) => {
      const id = action.payload;
      const found = draft.items.find(item => item.id === id);
      if(draft.addedItems.length > 0){
        const addedItem = draft.addedItems.findIndex(item => item.id === id);
        if(addedItem !== -1){
          draft.addedItems[addedItem].quantity += 1;
        } else{
          draft.addedItems.push({...found, quantity: 1});
        }
      } else {
        draft.addedItems.push({...found, quantity: 1});
      }
      draft.total += found.price;
    })
    return nextState;
  }
  if (action.type === REMOVE_ITEM) {
    // Add code here
    const nextState = produce(state, (draft) => {
      const id = action.payload;
      const found = draft.addedItems.findIndex(item => item.id === id);
      const item = draft.items.find(item => item.id === id);
      draft.total -= draft.addedItems[found].quantity * item.price
      draft.addedItems.splice(found, 1);
    })
    return nextState;
  }
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    // Add code here
    const nextState = produce(state, (draft) => {
      const id = action.payload;
      const found = draft.addedItems.findIndex(item => item.id === id);
      const item = draft.items.find(item => item.id === id);
      draft.addedItems[found].quantity += 1;
      draft.total += item.price
    })
    return nextState;
  }
  if (action.type === SUB_QUANTITY) {
    // Add code here
    const id = action.payload;
    const found = draft.addedItems.findIndex(item => item.id === id);
    const item = draft.items.find(item => item.id === id);
    if(draft.addedItems[found].quantity > 1){
      draft.addedItems[found].quantity -= 1;
    } else{
      draft.addedItems.splice(found, 1);
    }
    draft.total -= item.price
  }
  return nextState;

  if (action.type === ADD_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draft) => {
      draft.total += 6
    })
    return nextState;
  }

  if (action.type === SUB_SHIPPING) {
    // Add code here (OPTIONAL)
    const nextState = produce(state, (draft) => {
      draft.total -= 6
    })
    return nextState;
  }

  else {
    return state
  }
export default cartReducer
