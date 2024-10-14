<template>
  <div class="container">
    <div class="top-bar">
      <div class="left-buttons">
        <el-button type="primary" @click="showAddDialog = true" :icon="CirclePlus"
        >新增设备
        </el-button
        >
        <el-input
            v-model="search"
            class="search-input"
            placeholder="请输入你要搜索的内容"
        />
        <el-button
            type="primary"
            @click="searchDevice"
            :icon="Search"
            style="margin-left: 20px"
        >搜索
        </el-button
        >
      </div>
      <div class="right-buttons">
        <el-button type="success" @click="batchUnLock" :icon="Unlock">
          {{ selectList.length !== 0 ? '解锁选中设备' : '解锁所有设备' }}
        </el-button>
        <el-button type="danger" @click="batchLock" :icon="Lock">
          {{ selectList.length !== 0 ? '锁定选中设备' : '锁定所有设备' }}
        </el-button>
      </div>
    </div>
    <el-table
        :data="deviceList"
        table-layout="auto"
        border
        height="75vh"
        @selection-change="handleSelectionChange"
        class="device-table"
    >
      <el-table-column type="selection"/>
      <el-table-column fixed prop="device_id" label="设备Id" align="center"/>
      <el-table-column prop="device_name" label="设备名" align="center"/>
      <el-table-column
          prop="create_at"
          label="创建时间"
          align="center"
      >
        <template #default="scope">
          <span>{{ formatDate(scope.row.create_at) }}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="device_status"
          label="设备状态"
          align="center"
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
            }}
          </el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center" show-overflow-tooltip/>
      <el-table-column
          prop="isLocked"
          label="是否锁定"
          align="center"
      >
        <template v-slot="scope">
          <el-tag
              :type="scope.row.isLocked === 1 ? 'primary' : 'danger'"
              disable-transitions
          >{{ scope.row.isLocked == 1 ? '正常' : '已锁定' }}
          </el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="isLocked" label="模式" align="center">
        <template v-slot="scope">
          <el-tag type="warning" disable-transitions>{{
              getModeText(scope.row.mode)
            }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
          prop="last_upload"
          label="上次上传时间"
          align="center"
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
          <el-button link type="primary" size="small" @click="openUpdateDialog(scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  <!-- Dialogs -->
  <el-dialog
      v-model="showLockDialog"
      title="提示"
      width="500"
      draggable
      overflow
  >
    <span>确定锁定{{ lock }}吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showLockDialog = false">取消</el-button>
        <el-button type="primary" @click="onLockConfirm(lock)">确定</el-button>
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
    <span>确定解锁{{ unlock }}吗</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showUnLockDialog = false">取消</el-button>
        <el-button type="primary" @click="onUnLockConfirm(unlock)"
        >确定
        </el-button
        >
      </div>
    </template>
  </el-dialog>
  <el-dialog
      v-model="showAddDialog"
      title="添加设备"
      width="500"
      draggable
      overflow
  >
    <div>
      <el-form-item label="设备号">
        <el-input v-model="addDeviceForm.deviceId"/>
      </el-form-item>
      <el-form-item label="设备名称">
        <el-input v-model="addDeviceForm.deviceName"/>
      </el-form-item>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="addDevice">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
  <el-dialog
      v-model="showEditDialog"
      title="修改设备信息"
      width="500"
      draggable
      overflow
  >
    <div>
      <el-form-item label="设备号">
        <el-input v-model="updateDeviceForm.deviceId"/>
      </el-form-item>
      <el-form-item label="设备名称">
        <el-input v-model="updateDeviceForm.deviceName"/>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="updateDeviceForm.remark"/>
      </el-form-item>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="updateDevice">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import {onMounted, reactive, ref, vShow} from 'vue';
import {DeviceService} from '../../api/device';
import {formatDate} from '../../utils/date';
import {CirclePlus, Lock, Search, Unlock} from '@element-plus/icons-vue';
import Device = Model.Device;
import {ElMessage} from "element-plus";

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
const showAddDialog = ref(false);
const showEditDialog = ref(false);

const getModeText = (mode: number) => {
  switch (mode) {
    case 0:
      return '测试';
    case 1:
      return 'OR_1';
    case 2:
      return 'OR_2';
    case 3:
      return 'OR_3';
    case 4:
      return 'OR_4';
    case 5:
      return 'OR_5';
    case 6:
      return 'OR_6';
    case 7:
      return 'OR_7';
    case 8:
      return 'OR_8';
    default:
      return '未知';
  }
};

const addDeviceForm = reactive({
  deviceId: '',
  deviceName: '',
} as PostForm.AddDeviceForm)

const updateDeviceForm = reactive({
  deviceId: '',
  deviceName: '',
  remark: '',
  mode: 0
} as PostForm.UpdateDeviceForm)

const openUpdateDialog = (device: Device) => {
  updateDeviceForm.deviceId = device.device_id;
  updateDeviceForm.deviceName = device.device_name;
  updateDeviceForm.remark = device.remark;
  updateDeviceForm.mode = device.mode;
  showEditDialog.value = true;
}

const updateDevice = () => {
  DeviceService.updateDevice(updateDeviceForm).then(res => {
    ElMessage.success('更新成功')
    getDeviceList();
  }).catch(err => {
    ElMessage.error('更新失败')
  })
  showEditDialog.value = false;
}

const onLockConfirm = (deviceId: string) => {
  showLockDialog.value = false;
  DeviceService.lockDevice(deviceId).then(res => {
    ElMessage.success('锁定成功')
    getDeviceList()
  }).catch(err => {
    ElMessage.error('锁定失败')
  })
};

const onUnLockConfirm = (deviceId: string) => {
  showUnLockDialog.value = false;
  DeviceService.unlockDevice(deviceId).then(res => {
    ElMessage.success('解锁成功')
    getDeviceList()
  }).catch(err => {
    ElMessage.error('解锁失败')
  })
};

const searchDevice = () => {
  console.log('搜索设备：', search.value);
  getDeviceList()
};
const addDevice = () => {
  DeviceService.addNewDevice(addDeviceForm).then(res => {
    ElMessage.success('添加成功')
    getDeviceList()
  }).catch(err => {
    ElMessage.error('添加失败')
  })
  showAddDialog.value = false;
};
const getDeviceList = () => {
  DeviceService.getAllDevice(cur.value, size.value, search.value)
      .then((res) => {
        // console.log(res.records);
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
  DeviceService.lockAllDevice().then(res => {
    ElMessage.success('批量锁定成功');
    getDeviceList();
  }).catch(err => {
    ElMessage.error('批量锁定失败');
  })
};
const batchUnLock = () => {
  DeviceService.unlockAllDevice().then(res => {
    ElMessage.success('批量解锁成功');
    getDeviceList();
  }).catch(err => {
    ElMessage.error('批量解锁失败');
  })
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
  getDeviceList();
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
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 1%;
  height: 98%;
  width: 98%;
  background-color: white;
}

.top-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
}

.left-buttons,
.right-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.search-input {
  width: 240px;
  margin-left: 20px;
}

.device-table {
  overflow: hidden;
  margin-top: 40px;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .top-bar {
    flex-direction: column;
    align-items: flex-start;
  }

  .left-buttons,
  .right-buttons {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }

  .search-input {
    width: 100%;
    margin: 10px 0;
  }

  .pagination {
    width: 100%;
  }
}
</style>
