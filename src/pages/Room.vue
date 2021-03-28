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
  data: () => ({
    messages: []
  }),
  async created () {
    const { result: messages } = await this.$store.dispatch('chat/getRoomHistory', this.name)
    this.messages = Object.freeze(messages || []) // freeze messages for better performace making them reactiveless
    // this.messages = [...result, ...result, ...result] || []
  }
}
</script>

<style lang="scss" scoped>

</style>
