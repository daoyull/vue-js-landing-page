<script setup>
const heading = "核心功能";
const subHeading = "探索QuickTools的强大功能，提升您的工作效率。";
const items = [
  {
    iconBg: "background-color: #6fe7dd",
    title: "快速输入",
    description:
      "选中内容 `Ctrl+C+C` 快速保存，通过别名和悬浮窗智能筛选，一键输入文本或模拟按键，效率倍增。",
  },
  {
    iconBg: "background-color: #ffc93c",
    title: "快速启动",
    description:
      "配置别名，一键启动应用、文件或网址。支持自定义参数和管理员模式，与快速输入无缝集成。",
  },
  {
    iconBg: "background-color: #f73859",
    title: "智能悬浮窗",
    description:
      "右侧 `Ctrl` 激活，实时筛选别名并高亮匹配，支持 `Tab` 补全、`=` 翻页和 `’` 预览，操作直观。",
  },
  {
    iconBg: "background-color: #407BFF",
    title: "高度可定制的屏幕键盘",
    description:
      "通过 Canvas 自由拖拽布局，自定义按键大小与主题，支持方案保存，满足您的个性化需求。",
  },
  {
    iconBg: "background-color: #3b3e43",
    title: "绝对数据安全",
    description:
      "所有数据均存储在本地，我们承诺不收集任何个人信息，让您的隐私得到充分保障。",
  },
  {
    iconBg: "background-color: #17a2b8",
    title: "持续进化的插件系统",
    description:
      "强大的插件系统支持功能不断扩展，确保 QuickTools 能够满足您现在以及未来的各种需求。",
  },
];
</script>
<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 class="heading">{{ heading }}</h2>
            <p>{{ subHeading }}</p>
          </div>
        </div>
      <div class="row">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          class="col-md-6 mb-4 col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="i * 100"
        >
          <div class="service">
            <div class="service-icon color-1 mb-4" :style="[item.iconBg]">
              <svg
                class="bi bi-app-indicator"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
                />
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
