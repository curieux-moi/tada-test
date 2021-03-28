<template>
  <div>
    <room-list :rooms="rooms" v-if="Object.keys(rooms).length"/>
  </div>
</template>

<script>
import RoomList from '../components/RoomList.vue'

export default {
  components: { RoomList },
  computed: {
    rooms () {
      return this.$store.getters['chat/roomList']
    }
  },
  created () {
    this.$store.dispatch('chat/setRoomList')
  }
}
</script>

<style lang="scss" scoped>

</style>
