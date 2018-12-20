<template>
<div class="InputField">
<textarea
  autofocus
  v-on:keypress.13="submit"
  v-model="value"
></textarea>
<div class="InputFieldSubmitBtn">
Submit
</div>
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
  display: flex;
}
.InputFieldSubmitBtn{
  position: relative;
  background: transparent;
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  font-size: 1.2em;
  transition: 0.25s all ease;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
}
.InputFieldSubmitBtn:before{
  content: '';
  position: absolute;
  bottom:0%;
  left:0%;
  z-index: -1;
  background: Turquoise;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 100% 100% 0% 0%;
  height: 100%;
  transition: 0.25s all ease;
  height: 0%;
}

.InputFieldSubmitBtn:hover::before{
    border-radius: 0% 0% 0% 0%;
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
    border-left: 1px solid black;

}
</style>
