<template>
  <div class="side">
    <Menu :theme="theme">
      <Submenu :name="item.name" v-for="(item,index) in sideList" :key="index">
        <template slot="title">
<!--          <Icon type="ios-paper" />-->
          <img :src="item.icon" alt="">{{item.name}}
        </template>
        <MenuItem :name="ele.name" v-for="(ele,i) in item.children" :key="i">
          <router-link v-if="ele.path" :to="ele.path">{{ele.name}}</router-link>
          <span v-else>{{ele.name}}</span>
        </MenuItem>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
export default {
  name: "Side",
  props:{
    sideList:{
      type:Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
    return {
      theme:"light"
    }
  },
  methods:{

  }
};
</script>

<style scoped lang="scss">
  .side {
    width: 240px;
    height: 100%;
    min-height: calc(100vh - 56px);
    background: #ffffff;
  }
</style>
