<template>
  <div>
    <input type="button" value="-" @click="minus" />
    {{count}}
    <input type="button" value="+" @click="plus" />
  </div>
</template>

<script>
export default{
  name: 'app',
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    minus(){
      this.$store.commit('minus')
    },
    plus(){
      this.$store.commit('plus')
    }
   }
  }
</script>
<style>

</style>
