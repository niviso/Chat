<template>
<div :class="{'ChatWindowIndex': true,'left': float == 'left','right': float == 'right'}" @mouseover="hover" @mouseleave="hoverOut">
<span v-if="timestamp" :class="{'ChatWindowIndexTimestamp': true, 'hide': hideDate}">
{{dateIndex}} ago
</span>
<span :class="{'ChatWindowIndexInner': true, 'main': float == 'left','secondary': float == 'right'}">
<vue-simple-markdown :source="text"></vue-simple-markdown>
</span>
</div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'ChatWindowIndex',
  props:{
    text: String,
    timestamp: Number,
    float: String
  },
  data(){
    return {
      dateUpdate: null,
      dateIndex: moment(this.timestamp).fromNow(true),
      hideDate : false
    }
  },
  methods: {
    hover(){
        this.hideDate = false;
    },
    hoverOut(){
        this.hideDate = true;
    }
  },
  mounted(){
    this.dateUpdate = setInterval(x=>{ 
      if(this.timestamp){
        this.dateIndex = moment(this.timestamp).fromNow(true);
        this.hideDate = true;
      }
    },3000);
  },
  beforeDestroy(){
    clearInterval(this.dateUpdate);
  }
}

</script>


<style scoped>
.ChatWindowIndex{
  border-radius: 10px;
  font-size: 1.2em;
  overflow: hidden;
    display: flex;
  justify-content: center;
  animation: fadeIn 0.25s ease;
  margin: 10px;
}
.ChatWindowIndexInner{
  padding: 10px;
  border-radius: 10px;
}
.ChatWindowIndexTimestamp{
  padding: 10px;
  font-size: 0.6em;
  opacity: 0.5;
  transition: 0.25s all;
}
.hide{
  opacity: 0;
}
.main{
  background: LightCyan;
}

.secondary{
  background: Turquoise;

}

.left{
  justify-content: flex-start;
}

.right{
  justify-content: flex-end
}

@keyframes fadeIn{
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
