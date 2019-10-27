<template>
  <div class="wraperr">
    <input class="input" :type="type" :placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
   props:['type','placeholder','err_message','rule']
}
</script>

<style lang="less" scoped>
.wraperr{
  margin-top: 5.556vw;
}
   .input{
     width: 100%;
     border:none;
     outline:none;//去除边框光线
     padding: 2.778vw 0;
     font-size: 5.556vw;
     border-bottom:1px solid #ccc;
   }
</style>