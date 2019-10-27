<template>
  <div class="contanier">
    <span class="iconfont iconjiantou1"></span>
    <div id="new">
      <span class="iconfont iconnew"></span>
    </div>
    <sonInput
      type="text"
      placeholder="手机号"
      rule="^\d{4,16}$"
      err-message="请输入正确手机号"
      @input="setUserName"
    ></sonInput>
    <sonInput
      type="password"
      placeholder="密码"
      rule="^\d{3,16}$"
      err-message="请输入正确密码"
      @input="setUserPwd"
    ></sonInput>
  </div>
</template>

<script>
  import sonInput from "../components/sonInput.vue";
  export default {
    components: {
      sonInput: sonInput
    },
    data(){
      return{
        username:"",
        password:""
      }
    },
    methods:{
      //1.调用子组件的边框,输入框的值发射过来父组件,保存到data里
      setUserName(name){
        this.username=name;
      },
      setUserPwd(name){
        this.password=name;
      }
    }
  };
</script>

<style lang="less" scoped>
  .contanier {
    padding: 5.556vw;
  }
  .iconjiantou1 {
    font-size: 7.5vw;
  }
  #new {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; //主轴居中
  }
  .iconnew {
    width: 35vw;
    font-size: 35vw;
    color: #d81e06;
    height: 35vw;
  }
</style>