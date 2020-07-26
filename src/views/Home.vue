<template>
  <div class="home">
    <div>
      <span>动画类型</span>
      <select v-model="currentAnimation">
        <option :value="item" v-for="(item, index) in animationTypes">{{item}}</option>
      </select>
    </div>
    <div class="bns">
      <button @click="startAnimation" ref="btn1">{{btnName}}</button>
    </div>
    <div class="demo-block demo1">
      <div class="number-container">
        <v-number-counter
          :number="number"
          :start="true"
          :animationType="currentAnimation"
          @done="doneHandler"
        ></v-number-counter>
      </div>
    </div>
    <div class="demo-block">
      <div class="bns">
        <button @click="startDemo2" ref="btn2">{{btnName2}}</button>
      </div>
      <div class="number-container">
        <v-number-counter
          :number="number2"
          :frames="200"
          :animationType="currentAnimation"
          :start="true"
          @done="doneHandler2"
        ></v-number-counter>
      </div>
    </div>
  </div>
</template>

<script>
import { NumberCounter as VNumberCounter } from "../../packages/index";
export default {
  name: "Home",
  data() {
    return {
      start: true,
      start2: true,
      number: 1000,
      number2: 2000,
      currentAnimation: "easeInOutQuart",
      animationTypes: [
        "linear",
        "easeInSine",
        "easeOutSine",
        "easeInOutSine",
        "easeInQuad",
        "easeOutQuad",
        "easeInOutQuad",
        "easeInCubic",
        "easeOutCubic",
        "easeInOutCubic",
        "easeInQuart",
        "easeOutQuart",
        "easeInOutQuart",
        "easeInQuint",
        "easeOutQuint",
        "easeInOutQuint",
        "easeInBack",
        "easeOutBack",
        "easeInOutBack",
        "easeInElastic",
        "easeOutElastic",
        "easeInOutElastic",
        "easeInBounce",
        "easeOutBounce",
        "easeInOutBounce",
      ],
    };
  },
  computed: {
    btnName() {
      return this.start ? "停止" : "开始";
    },
    btnName2() {
      return this.start2 ? "停止" : "开始";
    },
  },
  methods: {
    startAnimation() {
      this.start = !this.start;
      this.number = Math.floor(Math.random() * 300);
      this.$refs["btn1"].style.background = "";
      console.log(this.number);
    },
    startDemo2() {
      this.start2 = !this.start2;
      this.number2 = Math.floor(Math.random() * 500);
      this.$refs["btn2"].style.background = "";
      console.log(this.number2);
    },
    doneHandler() {
      this.start = false;
      this.$refs["btn1"].style.transition = "background .4s linear";
      this.$refs["btn1"].style.background = "#f9e92b";
    },
    doneHandler2() {
      this.start2 = false;
      this.$refs["btn2"].style.transition = "background .4s linear";
      this.$refs["btn2"].style.background = "#f9e92b";
    },
  },
  components: {
    VNumberCounter,
  },
};
</script>
<style lang="less" scoped>
@border-radius: 10px;
h1 {
  margin: 0;
}

button {
  padding: 2px 10px;
  border: 0;
}
.demo-block {
  width: 375px;
  margin: 0 auto;
  overflow: auto;

  .number-container {
    width: 200px;
    height: 100px;
    margin-top: 10px;
    // background: red;
    // border: 1px solid darkorange;
    box-shadow: 0 0 5px 1px #000;
    margin: 10px auto;
    position: relative;
    border-radius: @border-radius;
  }
  .number-container::after {
    content: "";
    display: block;
    position: absolute;
    border: 1px solid red;
    width: 100px;
    height: 100px;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // margin: -20px;
    filter: blur(5px);
  }
}
.demo1 {
  /deep/ .num {
    -webkit-text-fill-color: transparent;
    background-image: -webkit-linear-gradient(
      left,
      #129835,
      #ece648 25%,
      #129835 50%,
      #f9e92b 75%,
      rgb(40, 150, 38)
    );
    background-size: 200%, 100%;
    -webkit-background-clip: text;
    // border: 1px solid red;
    -webkit-animation: word 5s linear infinite;
  }

  @keyframes word {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: -100% 0;
    }
  }
}

.demo2 {
}
</style>