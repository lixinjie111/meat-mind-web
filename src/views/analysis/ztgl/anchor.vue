<template>
  <div ref="anchor" class="anchor">
          <div id="zbjk">
              <img src="../../../static/img/analysis/zbjk.png" alt="">
              <iframe class="iframe iframe1" src="/static/html/lxj1/num.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe2" src="/static/html/lxj1/num1.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe3" src="/static/html/lxj1/num2.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe4" src="/static/html/lxj1/num3.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe5" src="/static/html/lxj1/num4.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe6" src="/static/html/lxj1/num5.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe7" src="/static/html/lxj1/num6.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe iframe8" src="/static/html/lxj1/num7.html" frameborder="0" scrolling="no"></iframe>
          </div>
          <div id="ztqs">
              <img src="../../../static/img/analysis/ztqs.png" alt="">
              <iframe class="iframe9" src="/static/html/lxj1/line1.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe10" src="/static/html/lxj1/line2.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe11" src="/static/html/lxj1/bar1.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe12" src="/static/html/lxj1/line3.html" frameborder="0" scrolling="no"></iframe>
          </div>
          <div id="zzts">
              <img src="../../../static/img/analysis/zzts.png" alt="">
              <iframe class="iframe13" src="/static/html/lxj1/line4.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe14" src="/static/html/lxj1/line5.html" frameborder="0" scrolling="no"></iframe>
              <iframe class="iframe15" src="/static/html/lxj1/line6.html" frameborder="0" scrolling="no"></iframe>
          </div>
          <div id="yhlc">
              <img src="../../../static/img/analysis/yhlc.png" alt="">
              <iframe class="iframe16" src="/static/html/lxj1/bar2.html" frameborder="0" scrolling="no"></iframe>
          </div>
  </div>
</template>

<script>
import { EventBus} from "@/utils/eventbus"
export default {
    name:"anchor",
    data(){
        return {
            subList:["ztgl","ztqs","zzts","yhlc"]
        }
    },
    methods:{
        // 滚动监听器
        onScroll(){
            // 获取所有锚点元素
            const navContents = document.querySelectorAll('.anchor div')
            // 所有锚点元素的 offsetTop
            const offsetTopArr = []
            navContents.forEach(item => {
                offsetTopArr.push(item.offsetTop)
            })
            // 获取当前文档流的 scrollTop
            const scrollTop =  document.getElementsByClassName("anchor")[0].scrollTop
            const scrollHeight  = document.getElementsByClassName("anchor")[0].scrollHeight
            const clientHeight  = document.getElementsByClassName("anchor")[0].clientHeight
            // 定义当前点亮的导航下标
            let navIndex = 0
            for (let n = 0; n < offsetTopArr.length; n++) {
                // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                // 那么此时导航索引就应该是 n 了
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
            // 把下标赋值给 vue 的 data
            let curDiv = this.subList[navIndex]
            EventBus.$emit('activeTarget',curDiv)
        },
        // 跳转到指定索引的元素
        scrollTo(index) {
        // 获取目标的 offsetTop
        // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
        const targetOffsetTop = document.querySelector(`.anchor div:nth-child(${index + 1})`).offsetTop
        // 获取当前 offsetTop
        // let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let scrollTop =  document.getElementsByClassName("anchor")[0].scrollTop
        // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉
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
            // document.body.scrollTop = scrollTop
            // document.documentElement.scrollTop = scrollTop
            document.getElementsByClassName("anchor")[0].scrollTop = scrollTop
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
            // document.body.scrollTop = scrollTop
            // document.documentElement.scrollTop = scrollTop
            document.getElementsByClassName("anchor")[0].scrollTop = scrollTop
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
            }
            #zbjk{
                position: relative;

                .iframe {
                    position: absolute;
                    width: 96px;
                    height: 32px;
                    z-index: 100;
                }

                .iframe1 {
                    left: 48px;
                    top: 120px;
                }

                .iframe2 {
                    left: 320px;
                    top: 120px;
                }

                .iframe3 {
                    right: 484px;
                    top: 120px;
                }

                .iframe4 {
                    right: 190px;
                    top: 120px;
                }

                .iframe5 {
                    left: 34px;
                    bottom: 58px;
                }

                .iframe6 {
                    left: 320px;
                    bottom: 58px;
                }

                .iframe7 {
                    right: 486px;
                    bottom: 58px;
                }

                .iframe8 {
                    right: 174px;
                    bottom: 58px;
                }
            }
            #ztqs{
                position: relative;
                padding: 0 24px;

                .iframe9 {
                    position: absolute;
                    left: 42px;
                    top: 110px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }

                .iframe10 {
                    position: absolute;
                    right: 50px;
                    top: 110px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }


                .iframe11 {
                    position: absolute;
                    left: 42px;
                    bottom: 34px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }

                .iframe12 {
                    position: absolute;
                    right: 50px;
                    bottom: 34px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }
            }
            #zzts{
                position: relative;
                padding: 0 24px;

                .iframe13 {
                    position: absolute;
                    left: 42px;
                    top: 110px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }

                .iframe14 {
                    position: absolute;
                    right: 50px;
                    top: 110px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }


                .iframe15 {
                    position: absolute;
                    left: 42px;
                    bottom: 34px;
                    width: 45%;
                    height: 220px;
                    background: #fff;
                }
            }
            #yhlc{
                position: relative;
                padding: 0 24px;

                .iframe16 {
                    position: absolute;
                    left: 30px;
                    bottom: 40px;
                    width: 1140px;
                    height: 300px;
                    background: #fff;
                }
            }
    }
</style>