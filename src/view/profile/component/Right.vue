<script setup lang="ts">
</script>

<template>
  <div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
    <!--    <h2>我的历程</h2>-->
    <div style="max-width: 600px; height: 100%; overflow: hidden; position: relative;">
      <el-timeline
          style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow-y: scroll; padding-right: 10px;">
        <el-timeline-item timestamp="2019/8/30" placement="top">
          <el-card>
            <h4>第一次接触编程</h4>
            <p>高三开学,购买了第一本编程书籍《C语言从入门到放弃》</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/10/20" placement="top">
          <el-card>
            <h4>正式学习编程</h4>
            <p>大一开学,入门语言是C语言,正式开始学习编程</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2020/10/29" placement="top">
          <el-card>
            <h4>第一次接触Java</h4>
            <p>准备走Java后端方向,购买了第一本Java相关书籍《Java核心技术卷 二》,正式开始学习Java</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/3/22" placement="top">
          <el-card>
            <h4>Java基础篇</h4>
            <p>边玩边学,对着枯燥无味的黑窗口学习,总算是学完了基础篇,开始进入Java高级编程的学习</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/5/02" placement="top">
          <el-card>
            <h4>Java高级篇</h4>
            <p>和基础篇一样,是熬过来了,学习的过程很痛苦,不过也算是学完了,开始进入数据库和javaWeb的同步学习</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/9/20" placement="top">
          <el-card>
            <h4>SSM</h4>
            <p>大二,经过了长时间的学习,总算是学到了企业级开发,接下来就是学习SpringBoot2框架</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2021/11/03" placement="top">
          <el-card>
            <h4>SpringBoot</h4>
            <p>学习完SSM之后,感觉学SpringBoot简直如鱼得水,接下来学习微服务</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/3/23" placement="top">
          <el-card>
            <h4>微服务</h4>
            <p>学这个的时候比较混杂,接触到了太多的框架,Eureka,Dubbo,openFeign,SpringCloud,Nacos,SpringCloud
              Alibaba...,还有一系列的权限框架和消息队列
              SpringSecurity,shiro,RabbitMq...还有一些token校验相关,jwt
            </p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2022/7/31" placement="top">
          <el-card>
            <h4>放松自己</h4>
            <p>
              在这个时间之前,都是在玩,放松一下自己吧,好久没这样放松过了
            </p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped>
/* 添加样式以隐藏滚动条 */
.el-timeline::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}
</style>
