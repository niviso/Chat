<template>
<div :class="{'ChatWindowIndex': true,'left': float == 'left','right': float == 'right'}" @mouseover="hover" @mouseleave="hoverOut">
<span v-if="timestamp" :class="{'ChatWindowIndexTimestamp': true, 'hide': hideDate}">
{{dateIndex}} ago
</span>
<div :class="{'ChatWindowIndexInner': true}"
:style="{ backgroundColor:  ColorScheme.primary, color: ColorScheme.fontColor}">
<div class="ChatWindowIndexTxt">
<vue-simple-markdown :source="text"></vue-simple-markdown>
</div>
</div>
</div>
</template>
<script>
import moment from 'moment'
import ColorScheme from '../ColorScheme';

export default {
  name: 'ChatWindowIndex',
  props:{
    text: String,
    timestamp: Number,
    float: String,
    scheme: String
  },
  data(){
    return {
      dateUpdate: null,
      dateIndex: moment(this.timestamp).fromNow(true),
      hideDate : false,
      ColorScheme: ColorScheme[(this.scheme || 'default')],

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
    console.log(this.ColorScheme);
    this.dateUpdate = setInterval(x=>{ 
      if(this.timestamp){
        this.dateIndex = moment(this.timestamp).fromNow(true);
        this.hideDate = true;
      }
    },60000); //Every minute
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
  display: flex;
  justify-content: center;
  animation: fadeIn 0.25s ease;
  margin: 10px;
}
.ChatWindowIndexInner{
  padding: 10px;
  border-radius: 10px;
  max-width: 80%;

}
.ChatWindowIndexTxt{
  text-align: left;
  flex-wrap: wrap;
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
