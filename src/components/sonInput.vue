<template>
  <div class="wraperr">
    <input :class="{error:!isOk}"
     class="input" :type="type" :placeholder="placeholder"
     @input="dataChange" 
     @blur="showTips"/>
  </div>
</template>

<script>
  export default {
    props: ["type", "placeholder", "err_message", "rule"],
    data() {
      return {
        isOk: true
      };
    },
    motheds: {
      showTips(){//鼠标失去焦点
      if(!this.isOk){  //不是正则表达式语法就提示用户 那个框格式有误
        this.$toast.fail(this.err_message);
      }

      },
      dataChange($event) { //框值给父组件
        if (!$event.target.value) {
          //没有输入值时 边框颜色正常
          this.isOk = true;
        } else {
          //触发了后
          var regex = new RegExp(this.rule); //正则表达式
          this.isOk = regex.test($event.target.value); // 3把结果存起来
        }
        // 每次数据有所变化,都应该使用事件往外传输,告诉父组件,数据有了变化
        this.$emit("input", $event.target.value);
      }
    }
  };
</script>

<style lang="less" scoped>
  .wraperr {
    margin-top: 5.556vw;
  }
  .input {
    width: 100%;
    border: none;
    outline: none; //去除边框光线
    padding: 2.778vw 0;
    font-size: 5.556vw;
    border-bottom: 1px solid #ccc;
  }
  .error {
    color: red;
  }
</style>