<template>
  <div>
    <message
      v-for="message in messages"
      :key="message.created"
      :message="message"
      v-node-intersect="intersectionObserver"
    />
    <div v-if="newMessageCame" @click="scrollToBottom">
      Новые сообщения
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'
import nodeIntersect from '@/directives/nodeIntersect'

export default {
  components: { Message },
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      newMessageCame: false,
      intersectionObserver: new IntersectionObserver(this.handleIntersections)
    }
  },
  mounted () {
    this.scrollToBottom()
  },
  watch: {
    'messages.length' () {
      this.newMessageCame = true
    }
  },
  methods: {
    // hide Elements ain't seen on the screen to optimize render
    handleIntersections (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$set(entry, 'target.hidden', false)
        } else {
          this.$set(entry, 'target.hidden', true)
        }
      })
    },
    scrollToBottom () {
      window.scrollTo(0, document.body.scrollHeight)
      this.newMessageCame = false
    }
  },
  directives: {
    'node-intersect': nodeIntersect
  }
}
</script>

<style lang="scss" scoped>

</style>
