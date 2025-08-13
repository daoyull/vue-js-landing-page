<script setup>
import { themeColor, siteName } from "../data/items";
</script>
<template>
  <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a href="" class="logo m-0 float-left">{{ siteName }}<span class="text-primary">.</span></a>
        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left">
          <li class="active"><a href="#home-section" class="nav-link">主页</a></li>
          <li><a href="#features-section" class="nav-link">功能</a></li>
          <li><a href="#pricing-section" class="nav-link">方案</a></li>
          <li><a href="#docs" class="nav-link">文档</a></li>
        </ul>

        <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
          data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>
      </div>
    </div>
  </nav>
</template>
