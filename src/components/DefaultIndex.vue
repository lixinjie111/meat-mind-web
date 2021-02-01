<template>
  <div class="page">
    <Side></Side>
    <div class="flex-container">
        <Header></Header>
        <div class="content">
            <router-view ref="child"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/DefaultHeader"
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
  methods:{

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
      height: calc(100vh - 80px);
      overflow-y: scroll;
    }
  }
}
</style>