<template>
  <div>  
    <div @click="change" class="image403">

    </div>
  </div>
</template>

<script>
    export default {
        name: '403',
        data() {
            return {
                // msg: '403403403403403403403403403403403403403403'
            }
        },
        methods: {
            change() {
                this.$router.push({
                    path: '/404'
                })
            }
        },
        mounted() {
            
        },
    }
</script>
<style>
    .image403 {
        height: 220px;
        margin-top: 30%;
        background: url("../../assets/images/403.png") no-repeat center;
    }
</style>