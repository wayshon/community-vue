<template>
  <div>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      direction: state => state.vux.direction,
    })
  },
  methods: {
    
  },
  mounted() {
    
  },
}
</script>