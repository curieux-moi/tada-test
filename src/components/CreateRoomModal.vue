<template>
  <modal name="create-room-modal">
    <div class="create-room-modal">
      <h2>Новая комната</h2>
      <span>Название:</span>

      <form @submit.prevent="createRoom" class="create-room-modal__form">
        <input v-model="roomName">
        <button type="submit">Создать</button>
      </form>
    </div>
  </modal>
</template>

<script>
export default {
  data: () => ({
    roomName: ''
  }),
  methods: {
    createRoom () {
      this.$store.dispatch('chat/createRoom', this.roomName)
    }
  }
}
</script>

<style lang="scss" scoped>
.create-room-modal {
  padding: 25px;

  input {
    width: 250px;
    height: 50px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-right: 15px;
    font-size: 35px;
    outline: none;
  }

  button {
    width: 250px;
    height: 54px;
    border-radius: 5px;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #8ff7c7;
    }
  }

  &__form {
    display: flex;
    margin-top: 25px;
  }
}
</style>
