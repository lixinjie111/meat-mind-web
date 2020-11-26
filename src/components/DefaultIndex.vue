<template>
  <div class="page">
    <Side :sideList="side"></Side>
    <div class="flex-container">
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderDefault"
import Side from "@/components/Side"
export default {
  name: "default",
  components: {
    Header,
    Side
  },
  props:{
    side:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  height: 100%;
  .flex-container {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 240px);
    .content{

    }
  }
}
</style>