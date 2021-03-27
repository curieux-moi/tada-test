<template>
  <router-link :to="{name: 'room', params: {name: formatedRoomName}}" class="room">
    <h2>{{ room.name }}</h2>
    <div class="room__preview">
      <span class="sender">{{ messageTime }}</span>
      <span class="sender">{{ sender }}:</span>
      <span>{{ room.last_message.text }}</span>
    </div>
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
.room {
  width: 300px;
  height: 150px;

  margin: 0 20px 20px 0;
  padding: 25px;

  border-radius: 25px;
  background-color: #8ff7c7;

  text-decoration: none;
  color: #2c3e50;

  &:hover {
    border-bottom: 5px solid #53aae4;
    border-right: 7px solid #53aae4;
  }

  &__preview {
    overflow: hidden;
    text-overflow: ellipsis;
    span {
      margin-right: 5px;
    }
  }
}

.sender {
  color: #4fb7c7;
}
</style>
