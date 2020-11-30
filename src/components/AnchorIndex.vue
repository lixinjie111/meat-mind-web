<template>
  <div class="page">
    <Side :sideList="side" @handleScroll="scrollTo"></Side>
    <div class="flex-container">
        <Header></Header>
        <div class="content">
            <router-view ref="child"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/HeaderDefault"
import Side from "@/components/Side"
export default {
  name: "anchorIndex",
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
    scrollTo(index){
      if(this.$refs.child.scrollTo){this.$refs.child.scrollTo(index)}
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
      height: calc(100vh - 56px);
    }
  }
}
</style>