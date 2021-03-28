<template>
  <modal name="form-modal" :click-to-close="false">
    <div class="modal">
      <h2>Введите свое имя</h2>
      <form @submit.prevent="saveUserName">
        <input v-model="userName">
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </modal>
</template>

<script>
function generateId () {
  const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26))
  return randLetter + Date.now()
}

export default {
  data: () => ({
    userName: ''
  }),
  methods: {
    saveUserName () {
      localStorage.setItem('userName', this.userName)
      localStorage.setItem('userId', generateId())

      this.$store.dispatch('sync/createSocketConnection')
      this.$modal.hide('form-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
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

  form {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }
}
</style>
