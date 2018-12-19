<template>
<div class="InputField">
<textarea
  autofocus
  v-on:keypress.13="submit"
  v-model="value"
></textarea>
</div>
</template>

<script>
export default{
  name: 'InputField',

  methods: {
    submit(e){
      e.preventDefault();
      if(this.value.length == 0){
        return;
      }
      this.onSubmit(this.value);
      this.value = "";
    },
    keyPress(e){

    },
  },
  props:{
    onSubmit: Function
  },
    data () {
    return {
      value : ''
    }
    },
}
</script>

<style scoped>
.InputField{
    width: 100%;
  height: 100%;
}
textarea{
  width: 100%;
  height: 100%;
  outline: 0;
  font-size: 1.2em;
  padding: 10px;
  border: 0px;
  border-top: 1px solid black;
}
</style>
