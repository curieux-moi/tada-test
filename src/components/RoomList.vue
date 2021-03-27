<template>
  <div class="room-list">
    <room v-for="room in rooms" :key="room.name" :room="room" />
  </div>
</template>

<script>
import Room from './Room.vue'

export default {
  components: { Room },
  props: {
    rooms: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
