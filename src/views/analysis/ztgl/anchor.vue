<template>
  <div ref="anchor" class="anchor">
          <div id="zbjk">
              <img src="../../../static/img/analysis/zbjk.png" alt="">
          </div>
          <div id="ztqs">
              <img src="../../../static/img/analysis/ztqs.png" alt="">
          </div>
          <div id="zzts">
              <img src="../../../static/img/analysis/zzts.png" alt="">
          </div>
          <div id="yhlc">
              <img src="../../../static/img/analysis/yhlc.png" alt="">
          </div>
  </div>
</template>

<script>
// import { EventBus} from "@/utils/eventbus"
export default {
    name:"anchor",
    data(){
        return {
            active:0
        }
    },
    methods:{
        // 滚动监听器
        onScroll:()=>{
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.anchor div')
            // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            // 获取当前文档流的 scrollTop
            const scrollTop =  document.getElementsByClassName("anchor")[0].scrollTop
            // 定义当前点亮的导航下标
            let navIndex = 0
           
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是 n 了
                if (scrollTop >= offsetTopArr[n]) {
                navIndex = n
                }
            }
            // 把下标赋值给 vue 的 data
            // this.active = navIndex
            sessionStorage.setItem('active',navIndex)
        },
        // 跳转到指定索引的元素
        scrollTo(index) {
        // 获取目标的 offsetTop
        // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
        const targetOffsetTop = document.querySelector(`.anchor div:nth-child(${index + 1})`).offsetTop
        // 获取当前 offsetTop
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
        const STEP = 50
        // 判断是往下滑还是往上滑
        if (scrollTop > targetOffsetTop) {
            // 往上滑
            smoothUp()
        } else {
            // 往下滑
            smoothDown()
        }
        // 定义往下滑函数
        function smoothDown() {
            // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
            if (scrollTop < targetOffsetTop) {
            // 如果和目标相差距离大于等于 STEP 就跳 STEP
            // 否则直接跳到目标点，目标是为了防止跳过了。
            if (targetOffsetTop - scrollTop >= STEP) {
                scrollTop += STEP
            } else {
                scrollTop = targetOffsetTop
            }
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
            // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
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
            document.body.scrollTop = scrollTop
            document.documentElement.scrollTop = scrollTop
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
}
</script>

<style scoped lang="scss">
    .anchor{
        height:100%;
        overflow-y: scroll;
        position: relative;
        img{
            width: 100%;
        }
            div{
                width: 100%;
                // height: 1000px;
            }
            #zbjk{
                border:1px solid yellowgreen;
            }
            #ztqs{
                border:1px solid blue;
            }
            #zzts{
                 border:1px solid green;
            }
            #yhlc{
                border:1px solid yellow;
            }
    }
</style>