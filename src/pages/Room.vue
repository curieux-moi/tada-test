<template>
  <div>
    <h1>{{ name }}</h1>
    <room-message-list :messages="messages" v-if="messages.length"/>
  </div>
</template>

<script>
import RoomMessageList from '../components/RoomMessageList.vue'

export default {
  components: { RoomMessageList },
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
  }
}
</script>

<style lang="scss" scoped>

</style>
