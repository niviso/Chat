<template>
<div :class="{ Active: isActive, ChatBoxIndex: DefaultStyling }">
<div class="ChatBoxIndexImg">
<img :src="user.img" height="100%">
</div>
<div class="ChatBoxIndexName">
{{user.name}}
</div>
</div>
</div>
</template>
<script>
export default{
  name: 'ChatBoxIndex',
  props: {
    isActive : Boolean,
    user: Object
  },
    data () {
    return {
      DefaultStyling: true,
    }
  }
}

</script>


<style scoped>
.ChatBoxIndex{
  height: 5em;
  cursor: pointer;
  width: 100%;
    display: flex;
  align-items: center;
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
  text-align: left;
}

.Active,.ChatBoxIndex:hover{
  background: Turquoise;
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
