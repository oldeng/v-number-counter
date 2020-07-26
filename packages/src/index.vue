<template>
  <div class="v-number">
    <span ref="number" class="num"></span>
  </div>
</template>
<script>
//动画效果依赖transition动画库
import { transition, extendCurves, createAnimator } from './transition'

export default {
  name: 'v-number-counter',
  props: {
    start: {
      type: Boolean,
      default: true
    },
    number: {
      type: Number,
      default: 0
    },
    animationType: {
      type: String,
      default: 'easeInOutQuart'
    },
    frames: {
      type: Number,
      default: 60
    }
  },
  watch: {
    number(newVal, oldVal) {
      this.stop = false;
      this.animate();
    }
  },
  methods: {
    init() {
      this.num = 0;
      this.stop = false;
      this.startState = {
        number: 0,
      };
      this.endState = {
        number: 0
      };
      this.animtor = createAnimator(this.draw);
    },
    draw({ number }) {
      this.numberDom.innerHTML = Math.ceil(number);
    },
    animate() {
      this.endState.number = this.number;
      this.state = transition(this.animationType, this.startState, this.endState, this.frames);
      this.animtor(this.state).then(_ => {
        this.startState.number = this.endState.number;
        this.$emit('done');
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.numberDom = this.$refs["number"];
      this.init();
      this.animate();
    });
  }
};
</script>
<style lang="less" scoped>
.v-number {
  width: 100%;
  height: 100%;
  color: whitesmoke;
  position: relative;

  .num {
    display: table;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    width: 100%;
    height: 100%;
    font-size: 50px;
  }
}
</style>