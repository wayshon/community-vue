<template>
  <div>  
    <h1>{{ msg }}</h1>
  </div>
</template>
<script>

export default {
  name: 'default',
  data() {
    return {
      msg: 'default'
    }
  },
  methods: {
    
  },
  mounted() {
    this.$router.push({
      path: '/menu/home/homeMain'
    })
  },
}
</script>