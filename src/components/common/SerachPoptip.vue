<template>
    <div  class="serach-poptip-warp">
        <div class="serach-poptip-btn"><Icon type="md-options" @click="openModal"/></div>
        <div v-if="show" class="serach-poptip-cntent">
            <div>
                <div class="item-label">地区</div>
                <div class="item-container">
                    <span :class="['item', { selected: selected.area.includes(it.name)}]" v-for="it in area" :key="it.name" @click="onSelect(it, 'area')">{{it.name}}</span>
                </div>
            </div>
            <div>
                <div class="item-label">年龄</div>
                <div class="item-container">
                    <span  :class="['item', { selected: selected.age.includes(it.name)}]" v-for="it in age" :key="it.name" @click="onSelect(it, 'age')">{{it.name}}</span>
                </div>
            </div>
            <div>
                <div class="item-label">性别</div>
                <div class="item-container">
                    <span  :class="['item', { selected: selected.sex.includes(it.name)}]" v-for="it in sex" :key="it.name" @click="onSelect(it, 'sex')">{{it.name}}</span>
                </div>
            </div>
            <div>
                <div class="item-label">职业</div>
                <div class="item-container">
                    <span  :class="['item', { selected: selected.profession.includes(it.name)}]" v-for="it in profession" :key="it.name" @click="onSelect(it, 'profession')">{{it.name}}</span>
                </div>
            </div>
            <div>
                <div class="item-label">客群</div>
                <div class="item-container">
                    <span  :class="['item', { selected: selected.customer.includes(it.name)}]" v-for="it in customer" :key="it.name" @click="onSelect(it, 'customer')">{{it.name}}</span>
                </div>
            </div>
            <div class="serach-poptip-footer">
                <span class="reset-btn" @click="reset">重置</span>
                <div>
                    <span class="cancel-btn" @click="close">取消</span>
                    <span class="ok-btn" @click="submit">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        area: [{ name: '华东地区'}, { name: '华南地区'}, { name: '华北地区'}, { name: '其他'}],
        age: [{ name: '15-25'}, { name: '26-35'}, { name: '36-45'}, { name: '46-60'}, { name: '其他'}],
        sex: [{ name: '男'}, { name: '女'}],
        profession: [{ name: 'IT'}, { name: '金融'}, { name: '服务业'}, { name: '其他'}],
        customer: [{ name: '北京上班族'}, { name: '研学青年'}, { name: '企业高管'}, { name: '北漂一族'}],
        selected: { area: [], age: [], sex: [], profession: [], customer: [], },
        show: false,
      }
    },
    methods: {
      onSelect(item, type){
        console.log('9999999999999999999', item)
        if(!this.selected[type] || !this.selected.length){
          this.selected[type] = [item.name]
        }else {
          const current = this.selected[type]
          const idx = current.indexOf(it.name)
          if(idx > -1){
            current.splice(idx, 1)
            return
          }
          current.push(item.name)
          console.log('ooooooo',this.selected)
        }

      },
      openModal(){
        this.show = true
      },
      submit(){
        this.$emit('submit', this.selected)
        this.close()
      },
      close(){
        this.show = false
        this.reset()
      },
      reset(){
        this.selected = { area: [], age: [], sex: [], profession: [], customer: [], }
      },
    },
  }
</script>

<style scoped lang="less">
    .serach-poptip-warp{
        position: relative;
        .serach-poptip-btn{
            background: #fff;
            cursor: pointer;
            font-size: 16px;
        }
    }
    .serach-poptip-cntent{
        width: 300px;
        padding: 16px 16px 0;
        height: 570px;
        background: #FFFFFF;
        box-shadow: 6px 4px 16px 0px rgba(55, 84, 170, 0.16);
        border-radius: 8px;
        position: absolute;
        z-index: 2;
        right: 0;
        top: 20px;
    }
    .item-label{
        height: 32px;
        font-size: 14px;
        font-weight: 400;
        color: #242F57;
    }
    .item-container{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        .item{
            flex: 0 1 81px;
            height: 32px;
            margin-bottom: 8px;
            margin-right: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #F4F7FC;
            border-radius: 2px;
            font-size: 12px;
            font-weight: 400;
            color: #242F57;
            cursor: pointer;
        }
        .item.selected{
            background: #2373FF;
            border-radius: 2px;
            color: #FFFFFF;
        }
    }

    .serach-poptip-footer{
        height: 32px;
        border-top: 2px solid #EAEDF7;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .reset-btn, .cancel-btn, .ok-btn{
            width: 28px;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            font-weight: 500;
            color: #636E95;
            cursor: pointer;
        }
        .reset-btn{
            color: #636E95;
        }
        .cancel-btn{
            color: #636E95;
            margin-right: 16px;
        }
        .ok-btn{
            color: #2373FF;
        }
    }
</style>