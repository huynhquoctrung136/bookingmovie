import { DISPLAY_MODAL, HIDE_MODAL } from '../actions/types/ModalTypes'

const initialState = {
  isShowModal: false,
}

export const ModalConFirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MODAL: {
      state.isShowModal = true
      return { ...state }
    }
    case HIDE_MODAL: {
      state.isShowModal = false
      return { ...state }
    }

    default:
      return state
  }
}
