<template>
  <div class="page-list">
    <div class="handle">
      <el-button type="primary" @click="getOneFund">查询</el-button>
      <!-- <el-button type="primary" @click="multipleDel">批量删除</el-button> -->
    </div>
    <el-table :data="tableData" show-summary v-if="true">
      <el-table-column label="序号" type="index" width="50"></el-table-column>
      <el-table-column
        label="name"
        show-overflow-tooltip
        prop="name2"
      ></el-table-column>
      <el-table-column
        label="fundcode"
        show-overflow-tooltip
        prop="fundcode"
      ></el-table-column>
      <el-table-column
        label="jzrq"
        show-overflow-tooltip
        prop="jzrq"
      ></el-table-column>
      <el-table-column
        label="dwjz"
        show-overflow-tooltip
        prop="dwjz"
      ></el-table-column>
      <el-table-column
        label="gztime"
        show-overflow-tooltip
        prop="gztime"
      ></el-table-column>
      <el-table-column
        label="gsz"
        show-overflow-tooltip
        prop="gsz"
      ></el-table-column>
      <el-table-column
        label="gszzl"
        show-overflow-tooltip
        prop="gszzl"
      ></el-table-column>
      <el-table-column
        label="lr"
        show-overflow-tooltip
        prop="lr"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getFundApi } from "@/views/API/admin.js";

export default {
  data() {
    return {
      tableData: [],
      jCodeList: [
        { code: "004789", m: 1000 },
        { code: "004854", m: 1000 },
        { code: "007475", m: 1000 },
        { code: "502003", m: 1000 },
        { code: "501057", m: 1000 },
        // { code: "160213", m: 1000 },
        { code: "009551", m: 1535 },
        { code: "501085", m: 1500 },
        { code: "007082", m: 12000 },
        { code: "166006", m: 2600 },
        { code: "002685", m: 1800 },
        { code: "206009", m: 1800 },
        // { code: "207002", m: 992 },
        { code: "003940", m: 922 },
        { code: "003095", m: 873 },
        { code: "007083", m: 861 },
        { code: "004231", m: 860 },
        { code: "163402", m: 782 },
        { code: "005400", m: 782 },
        { code: "166019", m: 596 },
        { code: "519069", m: 378 },
      ],
    };
  },
  created() {
    this.getOneFund();
  },
  methods: {
    insertPage() {
      this.$router.push({
        path: "get",
      });
    },
    getOneFund() {
      for (let index = 0; index < this.jCodeList.length; index++) {
        const item = this.jCodeList[index];
        this.api(item);
      }
    },
    async api(item) {
      let res = await getFundApi({ code: item.code });
      if (res) {
        let st = res.replace("jsonpgz(", "").replace(");", "");
        let jn = JSON.parse(st);
        jn.lr = parseFloat(item.m * (jn.gszzl / 100)).toFixed(2);
        this.tableData.push(jn);
        console.log("this.tableData", this.tableData);
      }
    },
  },
};
</script>

<style scoped lang="less">
.page-list {
  width: 100%;
  .content-item {
    font-size: 18px;
    text-align: left;
    padding: 5px;
  }
}
</style>
