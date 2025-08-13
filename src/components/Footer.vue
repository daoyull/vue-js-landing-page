<script setup>
const copyrightText = "Copyright © 2023 QuickTools. All Rights Reserved.";
const icpText = "京ICP备XXXXXXXX号-X"; // 请替换为您的备案号
</script>

<template>
  <div class="site-footer">
    <div class="container">
      <div class="row mt-5">
        <div class="col-12 text-center">
          <p>{{ copyrightText }}</p>
          <p><a href="https://beian.miit.gov.cn/" target="_blank">{{ icpText }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-footer {
  padding: 2rem 0;
}
</style>
