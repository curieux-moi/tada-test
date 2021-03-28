export default {
  setMessageList (state, { room, messages }) {
    state.rooms = { ...state.rooms, [room]: { name: room, messages } }
  },
  updateMessageList (state, { room, messages }) {
    state.rooms[room].messages = [...state.rooms[room].messages, messages]
  },
  updateRoomList (state, rooms) {
    state.rooms = rooms.reduce((out, room) => {
      out[room.name] = { ...room, messages: [] }
      return out
    }, {})
  },
  updateLastMessage (state, { room, message }) {
    state.rooms[room].last_message = message
  }
}
