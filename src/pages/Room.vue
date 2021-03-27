<template>
  <div>
    <h1>{{ name }}</h1>
    <room-message-list :messages="messages" />
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
  created () {
    this.$store.dispatch('chat/getRoomHistory', this.name)
      .then(({ result }) => {
        console.log(result[0])
        this.messages = result || []
      })
      .then(() => window.scrollTo(0, document.body.scrollHeight))
  }
}
</script>

<style lang="scss" scoped>

</style>
