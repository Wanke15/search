<template>
    <el-container class="home-container">
        <el-header>搜索域算法管理平台</el-header>

        <el-container>
            <el-aside width="200px">
              <el-menu :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-search"></i>搜索&推荐</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">召回</el-menu-item>
          <el-menu-item index="1-2">排序</el-menu-item>
          <el-menu-item index="1-3">NLP</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-food"></i>最佳搭配</template>
        <el-menu-item-group>
          <template slot="title">策略</template>
          <el-menu-item index="2-1">财务类别打散</el-menu-item>
          <el-menu-item index="2-2">首页业务规则</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-3">
          <template slot="title"><i class="el-icon-cpu"></i>排序模型</template>
          <el-menu-item index="2-3-1">DeepFM</el-menu-item>
          <el-menu-item index="2-3-2">MMoE</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
            </el-aside>

            <el-main>
              
            </el-main>

        </el-container>
    </el-container>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css"

export default {
    
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100vh;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: left;
    font-size: large;
    font-weight: bold;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  .first-level-menu {
    font-weight: bold;
  }

</style>
