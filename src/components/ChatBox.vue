<template>
<div class="Wrapper">
  <div v-for="(item, index) in friends" v-on:click="select(index)">
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
      friends: [
        {
          id: 0,
          name: 'Nikki Sollid',
          img: 'https://cdn.road.cc/sites/default/files/pictures/picture-35067-1466804626.gif',
          scheme: 'red'
        },
        {
          id: 1,
          name: 'Lisa Normal',
          img: 'https://cdn.dribbble.com/users/1210339/screenshots/2773807/avatar20.gif',
          scheme: 'green'
        },
        {
          id: 2,
          name: 'Nina Andersson',
          img: 'https://static1.squarespace.com/static/50ff1acce4b047a6c7999c73/t/5bb7c3ec71c10b625db29fb6/1538769908525/DeeKay%2B2018%2BAvatar%2B%28instagram%29.gif',
          scheme: 'default'
        },

      ]
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
