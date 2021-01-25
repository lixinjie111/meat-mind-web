<template>
  <div class="media-protrait">
      <!-- 媒介画像 -->
        <Side></Side>
        <div class="container">
          <Header :target="'媒介画像'"></Header>
          <div class="show-content"></div>
        </div>
  </div>
</template>

<script>
import Side from "../../components/Side"
import Header from "../../components/DefaultHeader"
export default {
    name:"index",
    components:{Side,Header}
}
</script>

<style scoped lang="scss">
    .media-protrait {
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
                overflow-y:scroll;
            }
        }
    } 
</style>