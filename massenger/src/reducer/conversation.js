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
  ],
  conversationList: [
    {
      firstName: 'zahra',
      lastName: 'Masoumi',
      latestMessage: 'Hi',
      unseenMessage: '5',
      profile: 'http://....'
    },
    {
      firstName: 'Aida',
      lastName: 'Rezakhani',
      latestMessage: 'Hi',
      unseenMessage: '3',
      profile: 'http://....'
    },
    {
      firstName: 'zahra',
      lastName: 'Masoumi',
      latestMessage: 'Hi',
      unseenMessage: '0',
      profile: 'http://....'
    },
    {
      firstName: 'Hadi',
      lastName: 'AzizPour',
      latestMessage: 'Hi',
      unseenMessage: '0',
      profile: 'http://....'
    },
    {
      firstName: 'Sharareh',
      lastName: 'Rahimi',
      latestMessage: 'Hi',
      unseenMessage: '6',
      profile: 'http://....'
    }
  ]
}

const conversation = (state = initial, action) => {
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
    case 'CREATE_NEW_CONVERSATION':
      return {
        ...state,
        conversationList: [
          {
            firstName: action.payload,
            lastName: '',
            latestMessage: '',
            unseenMessage: '',
            profile: 'http://....'
          },
          ...state.conversationList
        ]
      }

    case 'EDIT_MESSAGE':
      let newMessagelist = state.messageList
      newMessagelist[action.index]['text'] = action.payload
      return {
        ...state,
        messageList: newMessagelist
      }
    default:
      return state
  }
}

export default conversation
