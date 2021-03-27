<template>
  <div>
    <div v-for="message in messages" :key="message.created">
      {{ getMessageTime(message.created) }}
      {{ message.sender.username }}:
      {{ message.text }}
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

const dt = DateTime

export default {
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getMessageTime (isoString) {
      return dt.fromISO(isoString).setLocale('ru').toFormat('t')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
