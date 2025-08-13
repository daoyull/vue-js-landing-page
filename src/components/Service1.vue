<script setup>
import { themeColor } from "../data/items";


const service1Heading = "功能亮点";
const service1SubHeading = "智能输入，事半功倍";
</script>
<template>
  <div class="untree_co-section">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-5">
          <span
            class="caption"
            data-aos="fade-up"
            data-aos-delay="0"
            :style="[{ color: themeColor }]"
            >{{ service1Heading }}</span
          >
          <h3 class="heading mb-4" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              QuickTools 的快速输入功能将彻底改变您的文本操作习惯。从保存代码片段到常用语，一切都变得前所未有的简单和高效。
            </p>
            <ul class="list-unstyled ul-check primary">
              <li><b>`Ctrl+C+C` 快速保存</b>：选中任意文本或富文本，一键唤出保存窗口。</li>
              <li><b>别名系统</b>：通过别名和悬浮窗智能筛选，精准匹配，一键输入。</li>
              <li><b>应用数据流转</b>： 在WPS保存的富文本轻松快速输入到Word和Typora中,反之亦然</li>
              <li><b>可选模拟键盘输入</b>：轻松应对禁止粘贴的窗口。</li>
              <li><b>可选模拟键盘输入速度</b>: 可以设置输入速度，避免输入过快导致的输入错误。</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
          <video autoplay loop muted playsinline class="img-fluid img-shadow">
            <source src="/images/quick_input_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</template>
