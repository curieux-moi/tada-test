<template>
  <div class="room" @click="openCreateRoomModal">
    <img src="../assets/plus.png" alt="add a room" class="plus-icon">
  </div>
</template>

<script>
export default {
  methods: {
    openCreateRoomModal () {
      this.$modal.show('create-room-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.room {
  width: 300px;
  height: 150px;

  margin-right: 20px;
  padding: 25px;

  text-align: center;

  border-radius: 25px;

  text-decoration: none;
  color: #2c3e50;

  cursor: pointer;

  &:hover {
    border-bottom: 5px solid #53aae4;
    border-right: 7px solid #53aae4;
  }

  &__preview {
    span {
      margin-right: 5px;
    }
  }
}

.plus-icon {
  width: 150px;
}
</style>
