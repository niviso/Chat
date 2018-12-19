<template>
<div class="ChatView">
<div class="ChatBoxWrapper">
<ChatBox :state="state" :fromid="fromId" :toid="toId"/>
</div>
<div class="ChatWindowWrapper">
<ChatWindow :state="state" />
</div>

</div>
</template>
<script>
import ChatState from '../ChatState';
import ChatBox from './ChatBox';
import ChatWindow from './ChatWindow';

export default{
  name: 'ChatView',
  components:{
    ChatBox,
    ChatWindow
  },
  data(){
    return {
      fromId: 0,
      toId: 1,
      state: ChatState
    }
  }
}

</script>

<style scoped>

.ChatView{
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background: orange;
  overflow: hidden;
}

.ChatBoxWrapper{
  width: 30%;
  height: 100%;
}
.ChatWindowWrapper{
  width: 70%;
  height: 100%;
}
</style>
