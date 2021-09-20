<template>
  <div>
  <form v-on:submit.prevent="onclick">
    <label for="isbn">ISBN：</label>
    <input type="text" id="isbn" v-model="isbn" /><br />
    <label for="title">書名：</label>
    <input type="text" id="title" v-model="title" /><br />
    <label for="price">価格：</label>
    <input type="number" id="price" v-model="price" /><br />
    <input type="submit" value="登録" />
  </form>
  <hr />
    <p>書籍は全部で{{ booksCount }}冊あります。</p>
    <ul v-for="b of getBooksByPrice(3000)" v-bind:key="b.isbn">
      <li>{{b.title}}（{{b.price}}円）<br />ISBN：{{b.isbn}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isbn: '',
      title: '',
      price: 0
    }
  },
  computed:{
    booksCount(){
      return this.$store.getters.booksCount
    },
  },
  methods: {
    getBooksByPrice(price){
      return this.$store.getters.getBooksByPrice(price)
    },
    onclick() {
      // this.$store.commit('addBook',{
      //   book:
      //     {
      //       isbn: this.isbn, 
      //       title: this.title, 
      //       price: this.price
      //     }
      // })
        this.$store.dispatch('addAsync', {
          book: {
            isbn: this.isbn, 
            title: this.title, 
            price: this.price
          }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
