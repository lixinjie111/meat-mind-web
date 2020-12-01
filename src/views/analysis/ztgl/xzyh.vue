<template>
  <div ref="yhfx" class="yhfx">
    <div id="xzyh">
      <img src="../../../static/img/analysis/yhfx.png" alt="">
      <img src="../../../static/img/analysis/xzyh.png" alt="" />
    </div>
    <div id="lcyh">
      <img src="../../../static/img/analysis/lcyh.png" alt="" />
    </div>
    <div id="yhcyd">
      <img src="../../../static/img/analysis/yhcyd.png" alt="" />
    </div>
    <div id="mbyhdz">
      <img src="../../../static/img/analysis/hyyh.png" alt="" />
    </div>
  </div>
</template>

<script>
import { EventBus} from "@/utils/eventbus"
export default {
  name:"zxyh",
  data(){
    return {
      active:0
    }
  },
    methods:{
        // 滚动监听器
        onScroll(){
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.yhfx div')
            // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            // 获取当前文档流的 scrollTop
            const scrollTop =  document.getElementsByClassName("yhfx")[0].scrollTop
            const scrollHeight  = document.getElementsByClassName("yhfx")[0].scrollHeight
            const clientHeight  = document.getElementsByClassName("yhfx")[0].clientHeight
            // 定义当前点亮的导航下标
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                if (scrollTop >= offsetTopArr[n]-1) {
                navIndex = n
                }
            }
            let a = Math.ceil(scrollHeight-scrollTop)
            if(a==clientHeight){
                navIndex = offsetTopArr.length-1
            }
            if(a==clientHeight+1){
                navIndex = offsetTopArr.length-1
            }
            if(a==clientHeight-1){
                navIndex = offsetTopArr.length-1
            }
            this.active = navIndex
            EventBus.$emit('activeTarget',navIndex)
        },
        // 跳转到指定索引的元素
        scrollTo(index) {
        const targetOffsetTop = document.querySelector(`.yhfx div:nth-child(${index + 1})`).offsetTop
        let scrollTop =  document.getElementsByClassName("yhfx")[0].scrollTop
        const STEP = 50
        if (scrollTop > targetOffsetTop) {
            // 往上滑
            smoothUp()
        } else {
            // 往下滑
            smoothDown()
        }
        // 定义往下滑函数
        function smoothDown() {
            if (scrollTop < targetOffsetTop) {
            if (targetOffsetTop - scrollTop >= STEP) {
                scrollTop += STEP
            } else {
                scrollTop = targetOffsetTop
            }
            document.getElementsByClassName("yhfx")[0].scrollTop = scrollTop
            requestAnimationFrame(smoothDown)
            }
        }
        // 定义往上滑函数
        function smoothUp() {
            if (scrollTop > targetOffsetTop) {
            if (scrollTop - targetOffsetTop >= STEP) {
                scrollTop -= STEP
            } else {
                scrollTop = targetOffsetTop
            }
            document.getElementsByClassName("yhfx")[0].scrollTop = scrollTop
            requestAnimationFrame(smoothUp)
            }
        }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.onScroll,true)
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.onScroll,true)
    }  
};
</script>

<style scoped lang="scss">
    .yhfx{
        height:100%;
        overflow-y: scroll;
        position: relative;
        img{
            width: 100%;
        }
            div{
                width: 100%;
            }
    }
</style>
