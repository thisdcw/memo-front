<script setup lang="ts">
import {getUserList} from "@/mock/data/user.ts";
import {formatDate} from "@/utils/date.ts";
import {ref} from "vue";
import {CirclePlus, Delete, Plus, Search} from "@element-plus/icons-vue";

const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'

const cur = ref(1);
const size = ref(10);
const total = ref(0);

const handleClick = () => {
  console.log('click')
}

const prev = (page: number) => {
  console.log('当前页码：', page);
  cur.value = page - 1;
};
const next = (page: number) => {
  console.log('页码：', page);
  cur.value = page + 1;
};

const pageChange = (currentPage: number, pageSize: number) => {
  console.log('当前页码：', currentPage);
  console.log('每页显示条数：', pageSize);
  cur.value = currentPage;
  getUserList();
};

const tableData = getUserList()
</script>

<template>
  <div style="width: 100%;">
    <div style="display: flex;flex-direction: row;justify-content: space-between;margin: 40px 0;">
      <div style="">
        <el-button type="primary" :icon="CirclePlus">新增设备</el-button>
        <el-input
            style="width: 440px; margin-left: 20px"
            placeholder="请输入你要搜索的用户账户或用户名"
        />
        <el-button
            type="primary"
            style="margin-left: 10px"
            :icon="Search"
        >
          搜索
        </el-button
        >
      </div>
      <div>
        <el-button type="danger" :icon="Delete">
          删除选中用户
        </el-button>
      </div>
    </div>
    <div style="width: 100%;">
      <el-table :data="tableData" style="width: 100%;overflow: hidden" height="900" border>
        <el-table-column fixed type="selection" width="55"/>
        <el-table-column fixed prop="avatar" align="center" label="头像" width="100">
          <template #default="scope">
            <el-image style="width: 60px; height: 60px"
                      :src="url" fit="cover"/>
          </template>
        </el-table-column>
        <el-table-column fixed prop="account" align="center" label="账号" width="100"/>
        <el-table-column prop="username" align="center" label="用户名" width="120"/>
        <el-table-column prop="email" align="center" label="邮箱" width="220"/>
        <el-table-column prop="create_at" align="center" label="创建时间" width="200">
          <template #default="scope">
            <span>{{ formatDate(scope.row.create_at) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="role" align="center" label="角色" width="90">
          <template #default="scope">
            <span>{{ scope.row.role === 1 ? '管理员' : '用户' }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" align="center" label="操作" min-width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">
              删除
            </el-button>
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="display: flex; justify-content: flex-end; margin-top: 20px">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="cur"
          :page-size="size"
          @prev-click="prev"
          @next-click="next"
          @size-change="pageChange"
          @current-change="pageChange"
      />
    </div>


  </div>
</template>

<style scoped>

</style>
