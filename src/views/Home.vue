<template>
  <el-container class="home-container">
    <el-header>搜索算法管理平台</el-header>

    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-openeds="['1', '2', '3']"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-search"></i>搜索&推荐
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">召回</el-menu-item>
              <el-menu-item index="1-2">排序</el-menu-item>
              <el-menu-item index="1-3">NLP</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-food"></i>最佳搭配
            </template>
              <el-menu-item index="2-1">财务类别打散</el-menu-item>
              <el-menu-item index="2-2">首页业务规则</el-menu-item>
              <el-menu-item index="/home/algoModel/deepfm">DeepFM</el-menu-item>
              <el-menu-item index="/home/algoModel/mmoe">MMoE</el-menu-item>
              <el-menu-item index="/home/algoModel/ple">PLE</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-trophy"></i>质量管理
            </template>
              <el-menu-item index="3-1">Diff竞品分析</el-menu-item>
              <el-menu-item index="2-1">AB实验</el-menu-item>
              <el-menu-item index="2-2">业务指标</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {};
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  font-size: large;
  font-weight: bold;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.first-level-menu {
  font-weight: bold;
}
</style>
