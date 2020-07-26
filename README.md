# 效果

# 参数
|  参数 | 取值  | 说明 |
|---|---|--|
| start  |  Boolean |  是否开始动画|
| number| Number | 动画最终到达数字 |
| animationType | String | 详情参考动画类型|
| frames| Number | 执行动画针数，默认60，即执行60次完成动画 |

# 事件
|  名称 | 参数  | 说明 |
|---|---|--|
| @done  |  无 | 动画执行完成 |


## 动画类型
> 支持动画为如下几种类型，了解详情可查阅贝塞尔曲线相关知识
>       "linear",
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

## 安装
```
npm install @oldeng/v-number-counter

```
# 使用

```js
//导入
import { NumberCounter } from "@oldeng/v-number-counter";
import  "@oldeng/v-number-counter/dist/v-number-counter.css";
```

```
//使用
        <v-number-counter
          :number="number"
          :frames="200"
          :animationType="currentAnimation"
          :start="true"
          @done="doneHandler"
        ></v-number-counter>
```
# Github

# Npm

# 源码分析


