<script setup>
import mainPhoto from "../assets/images/service2.jpg";
const service2Heading = "启动与定制，随心所欲";
const service2SubHeading = "从一键启动到个性化界面，QuickTools 让您完全掌控自己的工作流程。";
const items = [
  {
    name: "别名启动，一键直达",
    des: "为任何应用、文件或网址设置别名，通过悬浮窗快速调用，告别繁琐的查找过程。",
  },
  {
    name: "高级启动选项",
    des: "支持以管理员身份运行，或在启动时传递自定义参数，满足专业用户的高级需求。",
  },
  {
    name: "实时按键显示",
    des: "屏幕键盘实时展示您按下的每一个按键，非常适合录制教程或进行演示。",
  },
  {
    name: "自由布局与主题",
    des: "基于 Canvas 技术，您可以自由拖拽按键、调整大小、自定义颜色主题，打造专属键盘布局。",
  },
];
</script>

<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">{{ service2Heading }}</h2>
            <p>{{ service2SubHeading }}</p>
          </div>
          <ul class="list-unstyled ul-check primary">
            <li v-for="item in items" :key="item.name">
              <b>{{ item.name }}</b>：{{ item.des }}
            </li>
          </ul>
        </div>
        <div class="col-lg-6 order-lg-2" data-aos="fade-up" data-aos-delay="400">
          <img :src="mainPhoto" alt="Image" class="img-fluid img-shadow" />
        </div>
      </div>
    </div>
  </div>
</template>
