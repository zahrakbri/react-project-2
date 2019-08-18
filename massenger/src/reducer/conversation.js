const initial = {
  firstName: '',
  lastName: ''
}

const conversation = (state = initial, action) => {
  console.log('yyyy', action, state)
  switch (action.type) {
    case 'SAVE_SELECTED_USER_NAME':
      return {
        firstName: action.name,
        lastName: action.family
      }
    default:
      return state
  }
}

export default conversation
