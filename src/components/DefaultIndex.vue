<template>
  <div class="page">
    <Side :sideList="side"></Side>
    <div class="flex-container">
        <Header :target="target"></Header>
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
    },
    target:{
      type:String
    }
  },
};
</script>

<style scoped lang="scss">
.page {
  display: flex;
  .flex-container {
    display: flex;
    flex-direction: column;
    width: calc(100% - 240px);
    .content{

    }
  }
}
</style>