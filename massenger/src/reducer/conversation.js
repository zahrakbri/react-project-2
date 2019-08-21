const initial = {
  firstName: '',
  lastName: '',
  messageList: [
    {
      text: 'salam',
      date: '3/2',
      sender: 1,
      receiver: 3
    },
    {
      text: 'salam',
      date: '3/2',
      sender: 3,
      receiver: 1
    },
    {
      text: 'khoobi?',
      date: '3/2',
      sender: 1,
      receiver: 3
    },
    {
      text: 'Are',
      date: '3/2',
      sender: 3,
      receiver: 1
    }
  ]
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
        messageList: [
          ...state.messageList,
          {
            text: action.payload,
            date: new Date().getHours(),
            sender: 1,
            receiver: 3
          }
        ]
      }
    default:
      return state
  }
}

export default conversation
