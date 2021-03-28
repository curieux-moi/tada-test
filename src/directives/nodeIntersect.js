// Creating single Observer for whole list

export default {
  inserted (el, { value: observer }) {
    if (observer instanceof IntersectionObserver) {
      observer.observe(el)
    }
    el._intersectionObserver = observer
  },
  update (el, { value: newObserver }) {
    const oldObserver = el._intersectionObserver
    const isOldObserver = oldObserver instanceof IntersectionObserver
    const isNewObserver = newObserver instanceof IntersectionObserver
    if ((!isOldObserver && !isNewObserver) || (isOldObserver && (oldObserver === newObserver))) {
      return false
    }
    if (isOldObserver) {
      oldObserver.unobserve(el)
      el._intersectionObserver = undefined
    }
    if (isNewObserver) {
      newObserver.observe(el)
      el._intersectionObserver = newObserver
    }
  },
  unbind (el) {
    if (el._intersectionObserver instanceof IntersectionObserver) {
      el._intersectionObserver.unobserve(el)
    }
    el._intersectionObserver = undefined
  }
}
