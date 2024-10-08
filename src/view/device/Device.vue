<template>
  <div style="width: 100%">
    <div style="display: flex; justify-content: space-between">
      <div>
        <el-button type="primary" @click="addDevice">新增设备</el-button>
        <el-input
          v-model="search"
          style="width: 240px; margin-left: 20px"
          placeholder="请输入你要搜索的内容"
        />
        <el-button
          type="primary"
          style="margin-left: 10px"
          @click="searchDevice"
          >搜索</el-button
        >
      </div>
      <div>
        <el-button type="success" @click="batchUnLock">{{
          selectList.length !== 0 ? '解锁选中设备' : '解锁所有设备'
        }}</el-button>
        <el-button type="danger" @click="batchLock">{{
          selectList.length !== 0 ? '锁定选中设备' : '锁定所有设备'
        }}</el-button>
      </div>
    </div>
    <el-table
      :data="deviceList"
      table-layout="fixed"
      @selection-change="handleSelectionChange"
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="device_id" label="设备Id" align="center" />
      <el-table-column prop="device_name" label="设备名" align="center" />
      <el-table-column
        prop="create_at"
        label="创建时间"
        align="center"
        width="300"
      >
        <template #default="scope">
          <span>{{ formatDate(scope.row.create_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="device_status"
        label="设备状态"
        align="center"
        width="120"
      >
        <template #default="scope">
          <el-tag
            :type="
              scope.row.device_status === 1
                ? 'success'
                : scope.row.device_status === 2
                ? 'info'
                : 'primary'
            "
            disable-transitions
            >{{
              scope.row.device_status == 2
                ? '离线'
                : scope.row.device_status == 0
                ? '未使用'
                : '在线'
            }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center" width="120" />
      <el-table-column
        prop="isLocked"
        label="是否锁定"
        align="center"
        width="80"
      >
        <template v-slot="scope">
          <el-tag
            :type="scope.row.isLocked === 1 ? 'primary' : 'danger'"
            disable-transitions
            >{{ scope.row.isLocked == 1 ? '未锁定' : '已锁定' }}</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="last_upload"
        label="上次上传时间"
        align="center"
        width="320"
      >
        <template #default="scope">
          <span>{{ formatDate(scope.row.last_upload) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        min-width="120"
      >
        <template v-slot="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="
              scope.row.isLocked === 1
                ? lockDevice(scope.row.device_id)
                : unlockDevice(scope.row.device_id)
            "
          >
            <span v-if="scope.row.isLocked === 0">解锁</span>
            <span v-else>锁定</span>
          </el-button>
          <el-button link type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  <el-dialog
    v-model="showLockDialog"
    title="提示"
    width="500"
    draggable
    overflow
  >
    <span>确定锁定{{ lock }}吗 </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showLockDialog = false">取消</el-button>
        <el-button type="primary" @click="onLockConfirm(lock)">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog
    v-model="showUnLockDialog"
    title="提示"
    width="500"
    draggable
    overflow
  >
    <span>确定解锁{{ unlock }}吗 </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showUnLockDialog = false">取消</el-button>
        <el-button type="primary" @click="onUnLockConfirm(unlock)">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getAllDevice } from '../../api/device';

onMounted(() => {
  getDeviceList();
});

const deviceList = ref<Model.Device[]>([]);
const selectList = ref<Model.Device[]>([]);
const cur = ref(1);
const size = ref(10);
const total = ref(0);
const search = ref('');
const lock = ref('');
const showLockDialog = ref(false);
const unlock = ref('');
const showUnLockDialog = ref(false);

const onLockConfirm = (deviceId: string) => {
  showLockDialog.value = false;
  console.log('锁定设备：', deviceId);
};

const onUnLockConfirm = (deviceId: string) => {
  showUnLockDialog.value = false;
  console.log('解锁设备：', deviceId);
};

const searchDevice = () => {
  console.log('搜索设备：', search.value);
};
const addDevice = () => {
  console.log('添加设备');
};
const getDeviceList = () => {
  getAllDevice(cur.value, size.value)
    .then((res) => {
      console.log(res.records);
      deviceList.value = res.records;
      total.value = res.total;
    })
    .catch((err) => {
      console.log(err);
    });
};
const handleSelectionChange = (val: Model.Device[]) => {
  selectList.value = val;
};
const batchLock = () => {
  console.log('批量锁定');
};
const batchUnLock = () => {
  console.log('批量解锁');
};
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
  getDeviceList();
};

const lockDevice = (deviceId: string) => {
  lock.value = deviceId;
  showLockDialog.value = true;
};

const unlockDevice = (deviceId: string) => {
  unlock.value = deviceId;
  showUnLockDialog.value = true;
};

function formatDate(isoDate: Date) {
  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped></style>
