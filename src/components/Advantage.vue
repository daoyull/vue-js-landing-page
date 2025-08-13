<script setup>
import { themeColor } from "../data/items";
const heading = "选择 QuickTools 的理由";
const subHeading = "我们致力于提供安全、高效、可扩展的工具。";
const advantages = [
  {
    name: "绝对数据安全",
    des: "所有数据均存储在本地，我们承诺不收集任何个人信息，确保您的隐私得到最严格的保护。",
  },
  {
    name: "极致效率体验",
    des: "从快速输入到一键启动，每个功能都为提升您的工作效率而设计，操作流程极致简化。",
  },
  {
    name: "深度个性化定制",
    des: "无论是屏幕键盘的布局、主题，还是各项功能的快捷键，您都可以自由定制，打造专属工具。",
  },
  {
    name: "强大的插件系统",
    des: "通过不断扩展的插件，QuickTools 的功能将持续进化，满足您现在与未来的所有需求。",
  },
];
</script>

<template>
  <div class="untree_co-section">
    <div class="container">
      <div class="row mb-4">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="service horizontal d-flex">
            <div class="service-icon color-1 mb-4">
              <svg
                class="bi bi-shield-lock"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.056.255.115.385.165a.71.71 0 0 0 .114.036c.057.019.113.038.168.055l.005.002.001.001L8 15l.001-.001.005-.002.002-.001.168-.055a.71.71 0 0 0 .114-.036c.13-.05.265-.11.385-.165.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.481.481 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.007 8 1.007c-.531 0-1.552.283-2.662.583zM8.5 5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ advantages[0].name }}</h3>
              <p>{{ advantages[0].des }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="service horizontal d-flex">
            <div class="service-icon color-2 mb-4">
              <svg
                class="bi bi-lightning-charge"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ advantages[1].name }}</h3>
              <p>{{ advantages[1].des }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="service horizontal d-flex">
            <div class="service-icon color-3 mb-4">
              <svg
                class="bi bi-briefcase"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ advantages[2].name }}</h3>
              <p>{{ advantages[2].des }}</p>
              <p>
                <a
                  href="#"
                  class="read-more"
                  :style="[{ color: themeColor }]"
                  >{{ buttonLearnMore }}</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="service horizontal d-flex">
            <div class="service-icon color-4 mb-4">
              <svg
                class="bi bi-collection"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"
                />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ advantages[3].name }}</h3>
              <p>{{ advantages[3].des }}</p>
              <p>
                <a
                  href="#"
                  class="read-more"
                  :style="[{ color: themeColor }]"
                  >{{ buttonLearnMore }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
