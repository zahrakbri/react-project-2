export const getUserName = (firstName, lastName) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  name: firstName,
  family: lastName
})

export const sendNewMessage = (newMessage) => ({
  type: 'SEND_NEW_MESSAGE',
  payload: newMessage
})

export const createNewConversation = (name) => ({
  type: 'CREATE_NEW_CONVERSATION',
  payload: name
})
