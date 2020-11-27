<template>
  <div class="page">
    <Side :sideList="side"></Side>
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
    // data(){
    //     return {
    //         active:0
    //     }
    // },
    // methods:{
    //     // 滚动监听器
    //     onScroll(){
    //         // 获取所有锚点元素
    //         const navContents = this.$refs.child.$refs.anchor.querySelectorAll('div')
    //         // 所有锚点元素的 offsetTop
    //         const offsetTopArr = []
           
    //         navContents.forEach(item => {
    //             offsetTopArr.push(item.offsetTop)
    //         })
    //         // 获取当前文档流的 scrollTop
    //         const scrollTop =  document.getElementsByClassName("content")[0].scrollTop
    //         console.log(document.getElementsByClassName("content")[0].scrollTop)
    //         // 定义当前点亮的导航下标
    //         let navIndex = 0
    //         console.log(offsetTopArr)
    //         for (let n = 0; n < offsetTopArr.length; n++) {
    //             // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
    //             // 那么此时导航索引就应该是 n 了
    //             if (scrollTop >= offsetTopArr[n]) {
    //             navIndex = n
    //             }
    //         }
    //         // 把下标赋值给 vue 的 data
    //         this.active = navIndex
    //         sessionStorage.setItem('active',navIndex)
    //     },
    //     // 跳转到指定name的元素
    //     scrollTo(name) {
    //       console.log("father",name) 
    //       let index = 0
    //       this.side[0].children.forEach((item,i)=>{
    //         if(item.name==name){index=i}
    //       })
          
    //     // 获取目标的 offsetTop
    //     // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
    //     const targetOffsetTop =56 + this.$refs.child.$refs.anchor.querySelectorAll(`div:nth-child(${index + 1})`)[0].offsetTop
    //     console.log(this.$refs.child.$refs.anchor.querySelectorAll(`div:nth-child(${index + 1})`))
    //     // 获取当前 offsetTop
    //     // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //     let scrollTop =  document.getElementsByClassName("content")[0].scrollTop
    //     // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
    //     console.log(scrollTop,targetOffsetTop)
    //     const STEP = 50
    //     // 判断是往下滑还是往上滑
    //     if (scrollTop > targetOffsetTop) {
    //         // 往上滑
    //         smoothUp()
    //     } else {
    //         // 往下滑
    //         smoothDown()
    //     }
    //     // 定义往下滑函数
    //     function smoothDown() {
    //         // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
    //         if (scrollTop < targetOffsetTop) {
    //         // 如果和目标相差距离大于等于 STEP 就跳 STEP
    //         // 否则直接跳到目标点，目标是为了防止跳过了。
    //         if (targetOffsetTop - scrollTop >= STEP) {
    //             scrollTop += STEP
    //         } else {
    //             scrollTop = targetOffsetTop
    //         }
    //         // document.body.scrollTop = scrollTop
    //         // document.documentElement.scrollTop = scrollTop
    //         document.getElementsByClassName("content")[0].scrollTop = scrollTop
    //         // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
    //         requestAnimationFrame(smoothDown)
    //         }
    //     }
    //     // 定义往上滑函数
    //     function smoothUp() {
    //         if (scrollTop > targetOffsetTop) {
    //         if (scrollTop - targetOffsetTop >= STEP) {
    //             scrollTop -= STEP
    //         } else {
    //             scrollTop = targetOffsetTop
    //         }
    //         // document.body.scrollTop = scrollTop
    //         // document.documentElement.scrollTop = scrollTop
    //         document.getElementsByClassName("content")[0].scrollTop = scrollTop
    //         requestAnimationFrame(smoothUp)
    //         }
    //     }
    //     }
    // },
    // mounted(){
    //     // window.addEventListener('scroll',this.onScroll,true)
    // },
    // beforeDestroy(){
    //     // window.removeEventListener('scroll',this.onScroll,true)
    // }
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
      // overflow-y: scroll;
    }
  }
}
</style>