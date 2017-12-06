import { SHOW, HIDE, REMOVE } from "./actions";
import { combineReducers } from 'redux'

export const allData = [{ id: 0, name: 'Валенки' }, { id: 1, name: 'Варежки' },
 { id: 2, name: 'Шапочки' }, { id: 3, name: 'Курточки' }];

const initialState = {
  open: undefined,
  content: 'empty',
  id: -1
}

export default function modal(localstate = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        isopen: action.open,
        id: action.id,
        content: action.content
      }
    case HIDE:
      return initialState
    default:
      return localstate
  }
}

export function getarray(localstate = {array : allData}, action) {
  switch (action.type) {
    case REMOVE: 
      return { 
        array : localstate.array.filter((item) => item.id!=action.id),
       }
    default:
      return localstate
  }
}

export const rootReducer = (combineReducers({
  modal, getarray}))



