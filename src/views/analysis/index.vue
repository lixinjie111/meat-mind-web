<template>
  <div class="business-analysis">
      <!-- 经营分析 -->
        <Side></Side>
        <div class="container">
          <Header :target="'经营分析'"></Header>
          <div class="show-content">
            <router-view></router-view>
          </div>
        </div>
  </div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/DefaultHeader"
export default {
  name:"index",
  components:{Side, Header},
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
    .business-analysis {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: calc(100vw - 240px);

            .show-content{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: calc(100vh - 80px);
                // overflow-y:scroll;
            }
        }
    } 
</style>