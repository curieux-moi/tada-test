<template>
  <div>
    <room-list :rooms="rooms" />
  </div>
</template>

<script>
import RoomList from '../components/RoomList.vue'

export default {
  components: { RoomList },
  data: () => ({
    rooms: []
  }),
  async created () {
    const { result } = await this.$store.dispatch('chat/getRooms')
    this.rooms = result || []
  }
}
</script>

<style lang="scss" scoped>

</style>
