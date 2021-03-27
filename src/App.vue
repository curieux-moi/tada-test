<template>
  <div id="app">
    <form-modal />
    <router-view/>
  </div>
</template>

<script>
import FormModal from '@/components/FormModal'

export default {
  components: { FormModal },
  methods: {
    setUserName () {
      this.$modal.show('form-modal')
    }
  },
  mounted () {
    const userName = localStorage.getItem('userName')
    if (!userName) {
      this.setUserName()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
