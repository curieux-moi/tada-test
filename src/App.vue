<template>
  <div id="app">
    <form-modal />
    <create-room-modal />
    <router-view/>
  </div>
</template>

<script>
import FormModal from '@/components/FormModal'
import CreateRoomModal from './components/CreateRoomModal.vue'

export default {
  components: { FormModal, CreateRoomModal },
  methods: {
    openFormModal () {
      this.$modal.show('form-modal')
    }
  },
  mounted () {
    const userName = localStorage.getItem('userName')
    if (!userName) {
      this.openFormModal()
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
