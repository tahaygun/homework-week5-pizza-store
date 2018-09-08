import  CHANGE_BASE  from '../actions/pizza'

const initialState = {
  base: " ",
  price_base: " "
}

export default function (state = initialState, {type, payload}) {
    switch(type){
      case CHANGE_BASE:
        return{
          ...state,
          base: payload.select_base,
          price_base: payload.price
        }
        default:
          return state
    }
   
  }