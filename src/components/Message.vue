<template>
  <div>
    {{ getMessageTime(message.created) }}
    {{ message.sender.username }}:
    {{ message.text }}
  </div>
</template>

<script>
import { DateTime } from 'luxon'

const dt = DateTime

export default {
  props: {
    message: {
      type: Object,
      default: () => ({})
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
