<template>
  <div class="room">
    <h1>{{ name }}</h1>

    <room-message-list
      :messages="messages"
      v-if="messages.length"
    />

    <div class="divider" />

    <send-message @message-sent="sendMessage" v-if="messages.length" />
  </div>
</template>

<script>
import RoomMessageList from '../components/RoomMessageList.vue'
import SendMessage from '../components/SendMessage.vue'

export default {
  components: { RoomMessageList, SendMessage },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  created () {
    this.$store.dispatch('chat/getRoomHistory', this.name)
  },
  computed: {
    messages () {
      return this.$store.getters['chat/messageList'](this.name)
    }
  },
  methods: {
    sendMessage (text) {
      this.$store.dispatch('chat/sendMessage', { text, room: this.name })
    }
  },
  beforeDestroy () {
    // clear messages to avoid polluting RAM
    this.$store.dispatch('chat/clearRoomHistory', this.name)
  }
}
</script>

<style lang="scss" scoped>
.room {
  position: relative;

  h1 {
    display: inline-block;
    position: fixed;
    top: 0;
    right: 5%;
    min-width: 10%;
    border-radius: 5px;

    background-color: #53aae4;
    text-align: center;
  }
}

.divider {
  height: 150px;
}
</style>
