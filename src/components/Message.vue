<template>
  <div>
    <div class="message">
      {{ getMessageTime(message.created) }}
      {{ message.sender.username }}:
      {{ message.text }}
    </div>
    <br>
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
.message {
  display: inline-block;
  margin-top: 15px;
  font-size: 20px;
  padding: 30px 25px 25px 25px;
  background-color: #8ff7c7;
  border-radius: 25px;
}
</style>
