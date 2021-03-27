<template>
  <router-link :to="{name: 'room', params: {name: formatedRoomName}}">
    {{ room.name }}
    {{ messageTime }}
    {{ room.last_message.text }}
    {{ sender }}
  </router-link>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  props: {
    room: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formatedRoomName () {
      return this.room.name.trim().replace(/\s/g, '-')
    },
    sender () {
      return this.room.last_message?.sender?.username
    },
    messageTime () {
      const dt = DateTime.fromISO(this.room.last_message.created)
      return dt.setLocale('ru').toFormat('t')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
