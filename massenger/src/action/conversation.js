export const getUserName = (firstName, lastName) => ({
  type: 'SAVE_SELECTED_USER_NAME',
  name: firstName,
  family: lastName
})
