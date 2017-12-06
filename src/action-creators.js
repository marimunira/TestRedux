import { SHOW, HIDE, REMOVE } from "./actions";

export const show = (selectedId, name) => {
  return {
    type: SHOW,
    id: selectedId,
    open: true,
    content: name
  }
}

export const hide = () => {
  return {
    type: HIDE,
    id: undefined,
    open: false,
    content: 'empty'
  }
}

export const remove = selectedId => {
  return {
    type: REMOVE,
    id: selectedId,
    open: true,
    content: 'empty'
  }
}