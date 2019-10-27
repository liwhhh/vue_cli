<template>
  <div class="contanier">
    <div class="closeBtn">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div id="logo">
      <span class="iconfont iconnew"></span>
    </div>
   <div class="inputName">
      <sonInput
      type="text"
      placeholder="手机号"
      rule="^\d{4,16}$"
      err_message="请输入正确手机号"
      @input="setUserName"
    ></sonInput>
   </div>
   <div class="nickName">
      <sonInput
      type="text"
      placeholder="昵称"
      rule="^\w{3,16}$"
      err_message="请输入正确昵称"
      @input="setNickName"
    ></sonInput>
   </div>
   <div class="inputPwd">
      <sonInput
      type="password"
      placeholder="密码"
      rule="^\d{3,16}$"
      err_message="请输入正确密码"
      @input="setUserPwd"
    ></sonInput>
   </div>
   <div class="btn">
     <sonBtn text="注册" @send="setRegister"></sonBtn>
   </div>
  </div>
</template>

<script>
  import sonInput from "../components/sonInput.vue";
  import sonBtn from "../components/sonBtn.vue";
  export default {
    components: {
      sonInput: sonInput,
      sonBtn:sonBtn
    },
    data(){
      return{
        username:"",
        nickname:"",
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
      },
      setNickName(name){
        this.nickname=name;
      },
      //1.点击注册 
      setRegister(name){
        //axios发送数据进行 注册 
        this.$axios({
          url:"/register",
          method:"post",
          data:{
            username:this.username,
            nickname:this.nickname,
            password:this.password
          }
        }).then(res=>{
           if(!res.data.statusCode){//没有错误就
          //  1提示用户,2跳转到登录页
           this.$toast.success(res.data.message);//提示注册成功
             this.$router.back()
           }
        })
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
  #logo {
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