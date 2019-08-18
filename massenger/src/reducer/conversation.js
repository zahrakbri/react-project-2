const initial = {
  firstName: '',
  lastName: '',
  newMessage: ''
}

const conversation = (state = initial, action) => {
  console.log('yyyy', action, state)
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        ...state,
        firstName: action.name,
        lastName: action.family
      }

    case 'SEND_NEW_MESSAGE':
      return {
        ...state,
        newMessage: action.payload
      }
    default:
      return state
  }
}

export default conversation
