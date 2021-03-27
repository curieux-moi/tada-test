<template>
  <modal name="form-modal" :click-to-close="false">
    Введите свое имя
    <form @submit.prevent="saveUserName">
      <input v-model="userName">
      <button type="submit">Save</button>
    </form>
  </modal>
</template>

<script>
export default {
  data: () => ({
    userName: ''
  }),
  methods: {
    saveUserName () {
      localStorage.setItem('userName', this.userName)
      this.$modal.hide('form-modal')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
