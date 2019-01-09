<template>
<div class="Wrapper">
  <div v-for="(item, index) in state.dataState.friends" v-on:click="select(index)">
  <ChatBoxIndex :isActive="index === state.selectedId" :user="item"/>
  </div>

</div>
</template>
<script>
import ChatBoxIndex from './ChatBoxIndex';

export default{
  name: 'ChatBox',
    components:{
    ChatBoxIndex
  },
  props: {
    state: Object
  },
    data () {
    return {
    }
    },
      methods: {
        select(index){
          this.state.selectedId = index;
          this.state.dataManager.fetchData();
        }
      }
}

</script>


<style scoped>
.Wrapper{
  border: 1px solid black;
  height: 100%;
  width: 100%;
  background: white;
  overflow: scroll;
}
</style>
