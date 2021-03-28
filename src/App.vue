<template>
  <div id="app">
    <socket-loader v-if="socketLoaderActive" />
    <user-name-modal />
    <create-room-modal />
    <router-view/>
    <main-loader v-if="chatLoaderActive" />
  </div>
</template>

<script>
import UserNameModal from '@/components/Modals/UserNameModal'
import CreateRoomModal from '@/components/Modals/CreateRoomModal.vue'
import MainLoader from '@/components/Loaders/Main.vue'
import SocketLoader from '@/components/Loaders/Socket.vue'

export default {
  components: {
    UserNameModal,
    CreateRoomModal,
    MainLoader,
    SocketLoader
  },
  methods: {
    openUserNameModal () {
      this.$modal.show('form-modal')
    }
  },
  mounted () {
    const userName = localStorage.getItem('userName')
    if (!userName) {
      return this.openUserNameModal()
    }
    this.$store.dispatch('sync/createSocketConnection')
  },
  computed: {
    chatLoaderActive () {
      const loaders = this.$store.state.ui.loaders
      return loaders.roomList || loaders.messageList
    },
    socketLoaderActive () {
      return this.$store.state.ui.loaders.socket
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  color: #2c3e50;

  input, button, form {
    font-family: 'Open Sans', sans-serif;
  }
}
</style>
