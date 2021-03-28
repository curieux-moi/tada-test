<template>
  <div class="send-message">
    <form @submit.prevent="onSubmit">
      <input
        v-model="message"
        class="message-input"
        placeholder="Введите сообщение"
      />
      <button class="btn" type="submit" v-if="message.length" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    onSubmit () {
      this.$emit('message-sent', this.message)
      this.message = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.send-message {
  width: 100%;
  position: fixed;
  bottom: 0;

  form {
    display: flex;
    align-items: center;
  }
}

.message-input {
  width: 100%;
  height: 100px;
  outline: none;
  border-radius: 25px;
  border: 1px solid #000;
  padding: 25px;
  font-size: 25px;
}

.btn {
  position: fixed;
  width: 10%;
  right: 0;
  height: 150px;
  border: none;
  background-image: url('https://cdn2.iconfinder.com/data/icons/fanaticons/100/Send_Filled-512.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: unset;
  cursor: pointer;
}
</style>
