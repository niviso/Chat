<template>
<div 
:class="{ Active: isActive, ChatBoxIndex: DefaultStyling }"
:style="{background: (isActive || isHovering ? ColorScheme.primary : ColorScheme.white), color: ColorScheme.fontColor}"
@mouseover="hover" @mouseleave="hoverOut"

>
<div class="ChatBoxIndexImg">
<img :src="user.img" height="100%">
</div>
<div class="ChatBoxIndexName">
{{user.name}}
<div class="ChatBoxIndexLatestMessage">
Add a latest message here
</div>
</div>
</div>
</template>
<script>
import ColorScheme from '../ColorScheme';

export default{
  name: 'ChatBoxIndex',
  props: {
    isActive : Boolean,
    user: Object
  },
    data () {
    return {
      DefaultStyling: true,
      ColorScheme: ColorScheme[(this.user.scheme || 'default')],
      isHovering: false
    }
  },
  mounted(){
  },
  methods:{
    hover(){
      this.isHovering = true;
    },
    hoverOut(){
      this.isHovering = false;

    }
  }
}

</script>


<style scoped>
.ChatBoxIndex{
  height: 5em;
  cursor: pointer;
  width: 100%;
  word-wrap: break;
    display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  font-size: 1.3em;
  background: inherit;
  overflow: hidden;
}
.ChatBoxIndexImg{
  width: 5em;
  height: 100%;
  border-right: 1px solid black;
  overflow: hidden;
}
.ChatBoxIndexName{
  padding: 10px;
  text-align: right;
  font-weight: bolder;
}

.Active,.ChatBoxIndex:hover{
  background: lightgray;
}

.ChatBoxIndexLatestMessage{
  font-size: 0.8em;
  opacity: 0.8;
  font-weight: lighter;
}
.Active{
  opacity: 1;
}

@media screen and (max-width: 800px) {
  .ChatBoxIndexImg{
    display: none;
  }
  .ChatBoxIndex{
    font-size: 1em;
  }
}
</style>
