<template>
  <div class="about">
    <div>記事コード：{{ aid }}</div>
  </div>
</template>

<script>
  let timeGuard = (to,from,next) =>{
    let data = {
      13: new Date(2019,10,30),
      108: new Date(2018,10,30),
    }
    let limit = data[to.params.aid] ? data[to.params.aid] : new Date(2999, 12, 31)
    let current = new Date()
    if(limit && limit.getTime()>current.getTime()){
      next()//そのまま継続表示
    } else {
      window.alert('期間が過ぎています')
      next(false)//ストップ
    }
  }

  export default {
    name: 'Article',
    beforeRouteEnter: timeGuard,//ナビゲーションガード紐付け
    beforeRouteUpdate: timeGuard,
    props:{
      aid: String
    }
  }
</script>

<style>

</style>