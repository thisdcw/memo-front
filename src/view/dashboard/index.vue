<template>
  <div class="container">
    <div class="main-content">
      <div class="header">
        <span class="title">Hello Admin</span>
      </div>
      <Board class="board"/>
      <div class="row" style="margin-top: 40px">
        <BrokenLine class="broken-line"/>
        <Hot class="hot"/>
      </div>
      <div class="row spaced">
        <Todo class="todo"/>
        <BarChart class="bar-chart"/>
      </div>
    </div>
    <div class="sidebar">
      <RightCard/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Board from "@/view/dashboard/component/Board.vue";
import BrokenLine from "@/view/dashboard/component/BrokenLine.vue";
import Hot from "@/view/dashboard/component/Hot.vue";
import BarChart from "@/view/dashboard/component/BarChart.vue";
import Todo from "@/view/dashboard/component/Todo.vue";
import RightCard from "@/view/dashboard/component/RightCard.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.main-content {
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 40px; /* 设置主内容区的垂直间距 */
}

.board {
  flex: 1;
}

.row {
  display: flex;
  flex-direction: row;
  gap: 20px; /* 设置行内组件的水平间距 */
}

.row.spaced {
  justify-content: space-between;
}

.broken-line {
  flex: 4;
}

.hot {
  flex: 2;
}

.todo {
  flex: 2;
}

.bar-chart {
  flex: 5;
}

.sidebar {
  width: 20%;
  padding: 1%;
  margin-right: 1%;
}

.header {
  display: flex;
  text-align: left;
  align-items: center;
  height: 40px;
  margin-top: 20px; /* 向下移动 */
}

.title {
  margin-left: 20px;
  font-size: 32px;
  font-family: 'Arial', sans-serif;
}

</style>
