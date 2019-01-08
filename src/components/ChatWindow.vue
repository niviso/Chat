<template>
<div class="Wrapper">
<div class="inner" id="inner">
<div class="startMessage" v-if="state.dataManager.getMessages().length == 0">
<vue-simple-markdown source="**Start with a hello :smirk:**"></vue-simple-markdown>
</div>
  <div v-for="(item, index) in state.dataManager.getMessages()">
<ChatWindowIndex :text="item.text" :timestamp="item.timestamp" :float="item.fromId == 1 ? 'left' : 'right'" />
  </div>
</div>
<div class="input">
<InputField :onSubmit="add"/>
</div>
</div>
</template>
<script>
import ChatWindowIndex from './ChatWindowIndex';
import InputField from './InputField';
export default {
    name: 'ChatWindow',
    components: {
        ChatWindowIndex,
        InputField
    },
    props: {
      state: Object
    },
    data() {
        return {
        }
    },
    methods: {
        newItem(value) {
            this.state.dataManager.messages.push({
                text: value,
                fromId: this.state.myId,
                toId: this.state.selectedId,
                timestamp: Date.now()
            });
        },
        add(value) {
            this.newItem(value);
            setTimeout(x => {
                this.scrollToBottom("inner");
            }, 1);
        },
        scrollToBottom(id) {
            document.getElementById(id).scrollTo(0, 9999);
        },
    }
}

</script>


<style scoped>
.Wrapper{
  border: 1px solid black;
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
}
.inputDetails{
    padding: 10px;
}
.startMessage{
  padding: 10px;
}
.inner{
    height: 100%;
    overflow: scroll;
}
.input{
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
