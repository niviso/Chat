<template>
<div :class="{'ChatWindowIndex': true,'left': float == 'left','right': float == 'right'}">
<span v-if="timestamp" :class="{'ChatWindowIndexTimestamp': true}">
{{moment(timestamp).fromNow(true)}}
</span>
<span :class="{'ChatWindowIndexInner': true, 'main': float == 'left','secondary': float == 'right'}">
<vue-simple-markdown :source="text"></vue-simple-markdown>
</span>
</div>
</template>
<script>

export default {
  name: 'ChatWindowIndex',
  props:{
    text: String,
    timestamp: Number,
    float: String
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
  font-size: 0.8em;
  opacity: 0.5;
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
