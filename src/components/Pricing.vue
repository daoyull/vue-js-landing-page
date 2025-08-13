<script setup>
import { themeColor } from "../data/items";
const heading = "价格方案";
const subHeading = "选择适合您的方案";
const startButtonName = "立即下载";
const packages = [
  {
    name: "免费版",
    price: "0",
  },
  {
    name: "专业版",
    price: "??",
  },
];
</script>
<template>
  <div class="untree_co-section bg-light" id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[0].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>¥</sup><span>{{ packages[0].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>快速输入文本、富文本、模拟键盘输入</li>
                    <li>快速启动文件、应用、文件夹、网址</li>    
                    <li>悬浮窗实时显示输入和保存的触发键</li>
                    <li>屏幕键盘实时显示按下的按键</li>
                    <li>信息预览，可作为备忘录</li>
                    <li>数据完全本地存储</li>
                    <li>支持离线使用</li>
                    <li>支持插件更新</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="#"
                      class="btn btn-primary"
                      :style="[
                        { backgroundColor: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <!-- <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[1].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>¥</sup><span>{{ packages[1].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>更多高级功能</li>
                    <li>敬请期待</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="#"
                      class="btn btn-outline-primary disabled"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >开发中</a
                    >
                  </p>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
