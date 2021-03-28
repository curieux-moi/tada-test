<template>
  <div>
    <message
      v-for="message in messages"
      :key="message.created"
      :message="message"
      v-node-intersect="intersectionObserver"
    />
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
      intersectionObserver: new IntersectionObserver(this.handleIntersections)
    }
  },
  mounted () {
    window.scrollTo(0, document.body.scrollHeight)
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
    }
  },
  directives: {
    'node-intersect': nodeIntersect
  }
}
</script>

<style lang="scss" scoped>

</style>
