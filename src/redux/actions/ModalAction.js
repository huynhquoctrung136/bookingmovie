import { DISPLAY_MODAL, HIDE_MODAL } from './types/ModalTypes'

export const displayModalAction = () => {
  return {
    type: DISPLAY_MODAL,
  }
}
export const hideModalAction = () => {
  return {
    type: HIDE_MODAL,
  }
}
