<template>
  <div class="wrapper">
    <div id="btn" @click="sendLogin">{{text}}</div>
  </div>
</template>

<script>
export default {
   props:['text'],
   methods:{
     sendLogin(){
       this.$emit('send',this.text);
     }
   }
}
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
  height: 100%;
}
  #btn{
    margin-top: 30px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    text-align: center;
    border-radius: 25px;
    color: #fff;
    background:#cc3300;
  }
</style>