<template>
  <div class="room-list">
    <room v-for="room in rooms" :key="room.name" :room="room" />
    <create-room />
  </div>
</template>

<script>
import CreateRoom from './CreateRoom.vue'
import Room from './Room.vue'

export default {
  components: { Room, CreateRoom },
  props: {
    rooms: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
