<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{test_name}}</h1>
    <button @click="changeName">变</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    // ...mapGetters(['permission_routes', 'sidebar']),
    test_name(){
      return this.$store.state.name + '加个字符串,算是改造'    
  }
  },
  created() {
    console.log(this.$store.state.name)
    console.log(this.test_name)
  },
  methods: {
    changeName() {
      console.log(123)
      this.$store.commit('SET_NAME')
    }
  }
}
</script>
