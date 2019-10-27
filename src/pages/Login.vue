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
     <sonBtn text="登 录" @send="setLogin"></sonBtn>
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
      //1.点击登录 收集数据 axios请求发送数据(post方式)
      setLogin(name){
         this.$axios({
           url:"/login",
           method:"post",
           data:{
             username:this.username,
             password:this.password
           }
         }).then(res=>{
           if(!res.data.statusCode){//没有错误时
           //保存数据到本地(user.id和token)
           localStorage.setItem('token', res.data.data.token);
           localStorage.setItem('user_id', res.data.data.user.id)
              // 1.弹出提示 2.跳转到主页
            this.$toast.success(res.data.message);
             setTimeout(()=>{
               this.$router.push({
                 name:"homePage" //登录成功跳到主页
               })
             },1000)
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