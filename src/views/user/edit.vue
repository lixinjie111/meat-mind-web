<template>
  <DetailsPage title="编辑" backname="user-defined">
    <div class="user-defined-edit">
      <div class="user-group-rule">
        <p>用户群规则</p>
        <div class="feature">
          <div class="line-desc">
            <div class="name">包含特征</div>
            <div class="desc">已选择<span style="color:#4488FF">{{num}}</span>个特征</div>
          </div>
          <Input v-model="value1" size="large" @on-focus="handleFocus('value1','num')" placeholder="暂无规则 请从右侧选择添加" />
          <div class="add">
            <i class="iconfont icontianjia"></i>
            <div>添加一个交集关系框</div>
          </div>
          <div class="line-desc filter">
            <div class="name">过滤特征</div>
            <div class="desc">已选择<span style="color:#4488FF">{{num2}}</span>个特征</div>
          </div>
          <Input v-model="value2" size="large" @on-focus="handleFocus('value2','num2')" placeholder="暂无规则 请从右侧选择添加" />
          <div class="add">
            <i class="iconfont icontianjia"></i>
            <div>添加一个交集关系框</div>
          </div>
        </div>
        <div class="column"></div>
        <div class="choose">
          <RadioGroup v-model="chooseType">
            <Radio label="且"></Radio>
            <Radio label="或"></Radio>
          </RadioGroup>
        </div>
        <div class="column"></div>
        <div class="base-beahvior">
          <div class="line-desc">
            <div class="name">基础行为</div>
            <div class="desc">已选择<span style="color:#4488FF">{{num3}}</span>个行为</div>
          </div>
          <Input v-model="value3" size="large" @on-focus="handleFocus('value3','num3')" placeholder="暂无基础行为 请从右侧选择添加" />
        </div>
        <div class="column"></div>
        <div class="choose">
          <RadioGroup v-model="chooseType2">
            <Radio label="且"></Radio>
            <Radio label="或"></Radio>
          </RadioGroup>
        </div>
        <div class="column"></div>
        <div class="base-beahvior">
          <div class="line-desc">
            <div class="name">基础行为</div>
            <div class="desc">已选择<span style="color:#4488FF">{{num4}}</span>个行为</div>
          </div>
          <Input v-model="value4" size="large" @on-focus="handleFocus('value4','num4')" placeholder="暂无基础行为 请从右侧选择添加" />
        </div>
        <div class="btn-box">
          <div class="clear" @click="clear">清空</div>
          <button class="btn-primary-middle confirm" @click="confirm">确定</button>
        </div>
      </div>
      <div class="user-target">
        <div class="target-left">
          <!-- <img :src="conditImg" alt="" srcset="" class="conditImg" /> -->
          <div class="l-item">
            <div class="l-item-label">常用标签</div>
            <div class="item-list" v-for="(item, index) in target" :key="index">
              <div class="item-con">
                <div class="name" :class="{'act':item==cur}">{{ item }}</div>
                <i class="iconfont iconleft-arrow21"></i>
              </div>
            </div>
          </div>
          <div class="l-item">
            <div class="l-item-label">属性维度</div>
            <div class="item-list" v-for="(item, index) in property" :key="index" >
              <div class="item-con">
                <div class="name">{{ item }}</div>
                <i class="iconfont iconleft-arrow21"></i>
              </div>
            </div>
          </div>
          <div class="l-item">
            <div class="l-item-label">用户行为</div>
            <div class="item-list" v-for="(item, index) in behavior" :key="index" >
              <div class="item-con">
                <div class="name">{{ item }}</div>
                <i class="iconfont iconleft-arrow21"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="target-right">
          <div class="r-item">
            <!-- <Checkbox v-model="age"></Checkbox> -->
            <div class="r-item-label">年龄:</div>
            <div class="arr">
              <div class="ele"
                ref="ninlinItem"
                v-for="(item, index) in ageList"
                :key="index"
                @click="clickItem(item,index, 'ninlinItem')">
                {{ item }}
              </div>
            </div>
          </div>
          <div class="r-item">
            <!-- <Checkbox v-model="sex"></Checkbox> -->
            <div class="r-item-label">性别:</div>
            <div class="arr">
              <div
                class="ele"
                ref="xingbieItem"
                v-for="(item, index) in sexList"
                :key="index"
                @click="clickItem(item,index, 'xingbieItem')"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="r-item">
            <!-- <Checkbox v-model="hasChild"></Checkbox> -->
            <div class="r-item-label">亲子:</div>
            <div class="arr">
              <div
                class="ele"
                ref="hasChild"
                v-for="(item, index) in hasChildList"
                :key="index"
                @click="clickItem(item,index, 'hasChild')"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="r-item">
            <!-- <Checkbox v-model="xiaofei"></Checkbox> -->
            <div class="r-item-label">消费水平:</div>
            <div class="arr">
              <div
                class="ele"
                ref="xflevel"
                v-for="(item, index) in xiaofeiList"
                :key="index"
                @click="clickItem(item,index, 'xflevel')"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="r-item">
            <!-- <Checkbox v-model="mery"></Checkbox> -->
            <div class="r-item-label">婚姻:</div>
            <div class="arr">
              <div
                class="ele"
                ref="huny"
                v-for="(item, index) in huyList"
                :key="index"
                @click="clickItem(item,index, 'huny')"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="r-item">
            <!-- <Checkbox v-model="jd"></Checkbox> -->
            <div class="r-item-label">职业:</div>
            <div class="arr">
              <div
                class="ele"
                ref="jobdom"
                v-for="(item, index) in jobList"
                :key="index"
                @click="clickItem(item,index, 'jobdom')"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../layouts/DetailsPage";
export default {
  name: "defined",
  components: { DetailsPage },
  data() {
    return {
      value1:"",
      value2:"",
      value3:"",
      value4:"",
      num:0,
      num2:0,
      num3:0,
      num4:0,
      chooseType:"且",
      chooseType2:"且",
      cur:"基本信息",
      target: ["自定义标签", "基本信息", "兴趣爱好", "设备属性"],
      property: ["用户维度", "媒介维度", "品牌维度"],
      behavior: ["线上行为", "线下行为"],
      ageList: ["18-24", "25-34", "35+"],
      sexList: ["男", "女"],
      hasChildList: [
        "妈妈",
        "母婴",
        "二胎",
        "中学生家长",
        "0-3岁小孩父母",
        "3-6岁小孩父母",
        "孕期",
        "备孕",
        "小学生家长",
      ],
      xiaofeiList: ["高", "中", "低"],
      huyList: ["约会", "相亲", "已婚", "未婚"],
      jobList: [
        "网约车司机",
        "推广人员",
        "大学生",
        "医生",
        "金融",
        "IT",
        "程序员",
        "教师",
        "货车司机"
      ],
      age:'',
      sex:'',
      hasChild:'',
      xiaofei:'',
      mery:'',
      jd:'',
      curValue:"value1",
      curNum:"num"
    };
  },
  methods: {
    handleFocus(val,num){
      this.curValue = val
      this.curNum = num
    },
    clickItem(act,arg, art) {
      this[this.curValue] = act
      this[this.curNum] = 1
      var itemDom = this.$refs[art] || [];
      for (var i = 0; i < itemDom.length; i++) {
        if (i == arg) {
          itemDom[i].style = "background: #2373FF;color: #FFFFFF";
        }else {
          //如果需要多选去掉else
          itemDom[i].style = "color: #636E95;background: none;";
        }
      }
    },
    clear(){
      this.value1 = ""
      this.value2 = ""
      this.value3 = ""
      this.value4 = ""
      this.chooseType = "且"
      this.chooseType2 = "且"
      this.num = 0
      this.num2 = 0
      this.num3 = 0
      this.num4 = 0
    },
    confirm(){
      this.$router.push(
        {
          name:"user-defined",
          query:{
            parmObj:{
              til1:'复用基础规则',
              til2:'附加筛选条件'
            }
          }
        }
      )
    }
  },
};
</script>

<style scoped lang="scss">
.user-defined-edit {
  display: flex;
  .user-group-rule {
    width: 348px;
    height: 844px;
    padding: 24px;
    margin-right: 24px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
    >p{
      width: 83px;
      height: 16px;
      margin-bottom: 24px ;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      line-height: 16px;
    }
    .feature{
      padding: 16px;
      width: 300px;
      height: 290px;
      border-radius: 8px;
      // opacity: 0.5;
      border: 1px solid rgba(198,203,222,.5);
      input::-webkit-input-placeholder {
        color: #97A0C3;
      }
      input::-moz-input-placeholder {
        color: #97A0C3;
      }
      input::-ms-input-placeholder {
        color: #97A0C3;
      }
      ::v-deep .ivu-input{
        text-align: center;
        font-size: 10px;
        // color: #97A0C3;
        height: 50px;
        border: 1px solid #C6CBDE;
        opacity: 0.5;
      }
      .line-desc{
        display: flex;
        margin-bottom: 8px;
        .name{
          height: 16px;
          margin-right: 10px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 16px;
        }
        .desc{
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #C6CBDE;
          line-height: 17px;
        }
      }
      .filter{
        margin-top: 25px;
      }
      .add{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 268px;
        height: 34px;
        margin-top: 8px;
        background: #F4F7FC;
        color: #2373FF;
        border-radius: 8px;
        >i{
          font-size: 10px;
          font-weight: 600;
          margin-top: 1px;
          margin-right: 2px;
        }
        >div{
          height: 20px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2373FF;
          line-height: 20px;
        }
      }
    }
    .column{
      width: 1px;
      height: 25px;
      margin: 0 auto;
      background: rgba(198,203,222,.5);
    }
    .choose{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      height: 44px;
      border-radius: 8px;
      border: 1px solid rgba(198,203,222,.5);
    }
    .base-beahvior{
      width: 300px;
      height: 107px;
      padding: 16px;
      border-radius: 8px;
      border: 1px solid rgba(198,203,222,.5);
            ::v-deep .ivu-input{
        text-align: center;
        font-size: 10px;
        color: #97A0C3;
        height: 50px;
        border: 1px solid #C6CBDE;
        opacity: 0.5;
      }
            .line-desc{
        display: flex;
        margin-bottom: 8px;
        .name{
          height: 16px;
          margin-right: 10px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
          line-height: 16px;
        }
        .desc{
          height: 17px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #C6CBDE;
          line-height: 17px;
        }
      }
    }
    .btn-box{
      margin-top: 28px;
      display: flex;
      justify-content: center;
      .clear{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 32px;
        margin-right: 16px;
        border-radius: 8px;
        border: 1px solid #C6CBDE;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #636E95;
        cursor: pointer;
      }
      .confirm{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 32px;
        border-radius: 8px;
      }
    }
  }
  .user-target {
    width: 780px;
    height: 690px;
    background: #FFFFFF;
    box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
    border-radius: 8px;
    display: flex;
    .target-left {
      width: 186px;
      height: 100%;
      padding: 24px 0 0 24px;
      border-right: 1px solid #eaedf7;
      .l-item {
        margin-bottom: 24px;
        .l-item-label {
          width: 58px;
          height: 16px;
          margin-bottom: 15px;
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242f57;
          line-height: 16px;
        }
        .item-list {
          .item-con {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 160px;
            height: 32px;
            padding: 0 16px;
            margin-right: 1px;
            margin-bottom: 8px;
            .name{
              height: 14px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #C6CBDE;
              line-height: 14px;
              &.act{
                color: #2373FF;
                cursor: pointer;
              }
            }
            > i {
              font-size: 12px;
              color: #7c88b1;
            }
          }
        }
      }
    }
    .target-right {
      height: 100%;
      padding: 55px 0 0 22px;
      box-sizing: border-box;
      .r-item {
        display: flex;
        margin-bottom: 8px;
        .r-item-label {
          width: 106px;
          height: 24px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #242f57;
          line-height: 24px;
        }
        .arr {
          width: calc(100% - 106px);
          display: flex;
          flex-wrap: wrap;
          .ele {
            height: 24px;
            padding: 0 9px;
            line-height: 24px;
            margin-right: 24px;
            margin-bottom: 16px;
            font-size: 14px;
            border-radius: 8px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636e95;
            background-color: none;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>