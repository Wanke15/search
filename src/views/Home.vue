<template>
    <el-container class="home-container">
        <el-header>机器学习算法平台</el-header>
        <el-container>
            <el-aside width="200px">菜单栏</el-aside>
            <el-main>内容</el-main>
        </el-container>
    </el-container>

</template>

<script>
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

</style>
