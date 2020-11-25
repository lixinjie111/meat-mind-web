<template>
  <div class="home">
      <!-- 首页 -->
      <Side></Side>
      <div class="home-container">
        <Header :target="'首页'"></Header>
        <img src="../../static/img/header/header-main@2x.png" alt="">
      </div>
  </div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/HeaderDefault"
export default {
    name:"index",
    components:{Side,Header}
}
</script>

<style scoped lang="scss">
    .home{
        display: flex;
        .home-container{
            display: flex;
            flex-direction: column;
            img{
                width: 100%;
                height: 100%;
            }
        }

    }
</style>
