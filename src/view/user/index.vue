<script setup lang="ts">
import {formatDate} from '@/utils/date';
import {onMounted, ref} from 'vue';
import {Search} from '@element-plus/icons-vue';
import {UserService} from "@/api/user";
import {ElMessage} from "element-plus";

const url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

const cur = ref(1);
const size = ref(10);
const total = ref(0);

const search = ref('');

const handleClick = () => {
  console.log('click');
};

const prev = (page: number) => {
  console.log('当前页码：', page);
  cur.value = page - 1;
};
const next = (page: number) => {
  console.log('页码：', page);
  cur.value = page + 1;
};

const sizeChange = (val: number) => {
  console.log('每页显示条数：', val);
  size.value = val;
  fetchAllUsers();
};

const pageChange = (currentPage: number, pageSize: number) => {
  console.log('当前页码：', currentPage);
  console.log('每页显示条数：', pageSize);
  cur.value = currentPage;
  fetchAllUsers();
};

const tableData = ref({} as Model.User[])

const fetchAllUsers = () => {
  UserService.getAllUser(cur.value, size.value, search.value).then((res) => {
    console.log(res)
    ElMessage.success('获取所有用户成功')
  }).catch((err) => {
    ElMessage.success('获取所有用户失败')
  })
}

onMounted(() => {
  fetchAllUsers();
})

</script>

<template>
  <div class="container">
    <div class="top-bar">
      <div class="left-buttons">
        <!--        <el-button type="primary" :icon="CirclePlus">新增用户</el-button>-->
        <el-input
            class="search-input"
            placeholder="请输入你要搜索的用户账户或用户名"
            v-model="search"
        />
        <el-button type="primary" class="search-button" :icon="Search">
          搜索
        </el-button>
      </div>
      <div>
        <!--        <el-button type="danger" :icon="Delete"> 删除选中用户</el-button>-->
      </div>
    </div>
    <div>
      <el-table
          :data="tableData"
          class="table"
          height="75vh"
          table-layout="auto"
          border
      >
        <el-table-column fixed type="selection"/>
        <el-table-column
            prop="account"
            align="center"
            label="账号"
        />
        <el-table-column
            fixed
            prop="avatar"
            align="center"
            label="头像"
        >
          <template #default="scope">
            <el-image
                style="width: 40px; height: 40px"
                :src="scope.row.avatar ?? url"
                fit="cover"
                @error="scope.row.avatar = url"
            />

          </template>
        </el-table-column>

        <el-table-column
            prop="username"
            align="center"
            label="用户名"
        />
        <el-table-column prop="email" align="center" label="邮箱"/>
        <el-table-column
            prop="create_at"
            align="center"
            label="创建时间"
        >
          <template #default="scope">
            <span>{{ formatDate(scope.row.create_at) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="role" align="center" label="角色" width="90">
          <template #default="scope">
            <span>{{ scope.row.role === 1 ? '管理员' : '用户' }}</span>
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            align="center"
            label="操作"
            min-width="120"
        >
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick">
              删除
            </el-button>
            <el-button link type="primary" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          :current-page="cur"
          :page-size="size"
          @prev-click="prev"
          @next-click="next"
          @size-change="sizeChange"
          @current-change="pageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 1%;
  height: 98%;
  width: 98%;
}

.top-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px;
}

.left-buttons {
  display: flex;
  align-items: center;
}

.search-input {
  min-width: 250px;
  flex-grow: 1;
}

.table {
  width: 100%;
  overflow: hidden;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.search-button {
  margin-left: 20px;
  width: 100%;
}

@media (max-width: 768px) {
  .top-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .left-buttons {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .search-input {
    margin-top: 10px;
    width: 100%;
  }

  .search-button {
    margin-top: 10px;
    margin-left: 10px;
    width: 100%;
  }

  .pagination {
    justify-content: center;
    width: 100%;
  }
}
</style>

