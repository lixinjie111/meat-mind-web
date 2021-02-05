<template>
  <DefaultPage title="媒介画像">
    <div class="media-protrait">
      <div class="m-p-panel">
        <div class="panel1">
          <div class="title">
            <div class="left">
              <div class="top">综合评价指数</div>
              <div class="bm">截至2020/12/14</div>
            </div>
            <div class="rt">72</div>
          </div>
          <div class="nav1">
            <div class="left">
              <div class="top">77</div>
              <div class="bm">近6月最高分</div>
            </div>
            <div class="rt"><img src="../../assets/img/media/line1.png" alt=""></div>
          </div>
          <div class="nav2">
            <div class="left">
              <div class="top">69</div>
              <div class="bm">近6月最低分</div>
            </div>
            <div class="rt"><img src="../../assets/img/media/line2.png" alt=""></div>
          </div>
        </div>
        <div class="panel2">
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
             </div>
            <div class="text">推荐首选短视频类媒介，辅以垂直兴趣类媒介的投放组合方案；</div>
          </div>
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
            </div>
            <div class="text">媒介资源推荐“邓荣”（顶流）和“李刚”（性价比）；</div>
          </div>
          <div class="text1">
            <div class="circle1">
              <div class="circle"></div>
            </div>
            <div class="text">预期媒介投放效果：150万的7日曝光，5%的转化率</div>
          </div>
        </div>
        <div class="hr"></div>
        <div class="panel3">
          <Icon type="ios-alert-outline" color="#7C88B1"/>
          <div class="left">
            <div class="title">当前媒介：快手</div>
            <div class="hr1"></div>
            <div class="detail-info">
                <div class="detail-info-item">
                    <p>信息量<i class="iconfont2 iconjieshou"></i></p>
                </div>
                  <div class="detail-info-item">
                      <p>专业度<i class="iconfont2 iconguanyu1"></i></p>
                  </div>
                  <div class="detail-info-item">
                      <p>友好度<i class="iconfont2 iconguanyu1"></i></p>
                  </div>
                  <div class="detail-info-item">
                      <p>公信力<i class="iconfont2 iconjieshou"></i></p>
                  </div>
                  <div class="detail-info-item">
                      <p>转化度<i class="iconfont2 iconguanyu1"></i></p>
                  </div>
                  <div class="detail-info-item">
                      <p>ROI<i class="iconfont2 iconjieshou"></i></p>
                  </div>
              </div>
          </div>
          <div class="rt"><LeidaEcharts :colorList="$fjData.colorList" :myData="$fjData.box14Data" titleText="92"></LeidaEcharts></div>
        </div>
      </div>
      <div class="m-p-panel1">
        <Row :gutter="24">
                <Col span="8">
                  <div class="box1">
                    <div class="title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>媒介类型契合</span>
                      </div>
                      <div class="rt">短视频</div>
                    </div>
                    <div class="content">
                     基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（抖音：效果最优，快手：成本相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）
                    </div>
                  </div>
                </Col>
                <Col span="8">
                  <div class="box2">
                    <div class="title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>最优推广时间</span>
                      </div>
                      <div class="rt">18:40-22:00</div>
                    </div>
                    <div class="content">
                     抖音用户，以26-45岁的女性自由职业者居多，整体收入水平偏中上等，约有1/3来自于三口之家，使用时间多分布于中午和晚间
                    </div>
                  </div>
                </Col>
                <Col span="8">
                  <div class="box3">
                    <div class="title">
                      <div class="left">
                        <div class="title-icon"><img src="../../assets/img/yhhx/serIcon2.png"/></div>
                        <span>媒介KOL资源</span>
                      </div>
                      <div class="rt"></div>
                    </div>
                    <div class="content">
                     抖音媒介资源是品牌投放的最优选择，KOL资源中“邓荣”投放效果最优，“李刚”性价比最高
                    </div>
                  </div>
                </Col>
            </Row>
      </div>
      <div class="m-p-rank">
        <div class="m-p-rank-header">
          <ul class="h-name-list">
            <li :class="{'h-name-active':index==act}" v-for="(item,index) in target" :key="index" @click="targetClick(index)">{{item}}</li>
            <!-- <li>媒介声量排名</li>
            <li>媒介使用时长排名</li>
            <li>媒介口碑排名</li>
            <li>媒介价值贡献排名</li> -->
          </ul>
          <div class="h-right">
            <div class="h-tab">
              <div class="left" :class="{'act':cur==0}" @click="cur=0">类型</div>
              <div class="right" :class="{'act':cur==1}" @click="cur=1">渠道名称</div>
            </div>
            <div class="h-select">
              <Select v-model="model1" style="width: 120px" placeholder="过去3天">
                <Option v-for="item in dateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="m-p-rank-echarts">
            <barL id="box27" :colorList="$lxjData.colorList" :myData="myEData"></barL>
        </div>
      </div>
      <div class="m-p-filter">
          <div class="m-f-line">
              <div class="label">主投平台</div>
              <div class="f-list">
                <div class="f-item" @click="list1Act=index" :class="{'active':index==list1Act}" v-for="(item,index) in list1" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label">领域</div>
              <div class="f-list">
                <div class="f-item" @click="list2Act=index" :class="{'active':index==list2Act}" v-for="(item,index) in list2" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          <div class="m-f-line">
              <div class="label"><span style="color:#FB343E">*</span>
              价格类型</div>
              <div class="f-list">
                <div class="f-item" @click="list3Act=index" :class="{'active':index==list3Act}" v-for="(item,index) in list3" :key="index">
                    <p>{{item}}</p>
                </div>
              </div>
          </div>
          
            <div class="m-p-pie">
                <div class="m-pie-title">媒介用户画像</div>
                <div class="subTitle">抖音用户，以26-45岁的女性自由职业者居多，整体收入水平偏中上等，约有1/3来自于三口之家，使用时间多分布于中午和晚间。</div>
                <div class="m-pie-echarts">
                    <Triple :title1="'性别分布'" :title2="'年龄分布'" :title3="'职业分布'">
                          <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box3Data" roseType="radius"></PieCaseEcharts>
                    </Triple>
                    <Triple :title1="'收入分布'" :title2="'家庭情况'" :title3="'网龄结构'">
                          <PieCaseEcharts slot="left" :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="mid" :colorList="$fjData.colorList" :myData="$fjData.box11Data"></PieCaseEcharts>
                          <PieCaseEcharts slot="right" :colorList="$fjData.colorList" :myData="$fjData.box12Data"></PieCaseEcharts>
                    </Triple>
                </div>
            </div>
             <div class="m-p-pie">
                <div class="m-pie-title">媒介组合方案</div>
                <div class="subTitle">基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（其中抖音整体传播效果最优，快手成本投入相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）的媒介组合，并辅以多KOL多内容类型的投放策略，预算建议5-10万之间，预计能获得150万的曝光量（是上一次投放效果的3倍）。</div>
              <div class="m-p-third-module">
                  <!-- <div class="m-pie-title">媒介组合方案</div>
                  <div class="subTitle">基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（其中抖音整体传播效果最优，快手成本投入相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）的媒介组合，并辅以多KOL多内容类型的投放策略，预算建议5-10万之间，预计能获得150万的曝光量（是上一次投放效果的3倍）。</div> -->
                  <div class="m-p-t-left">
                      <Full :title="'媒介领域热度排名'">
                        <barL id="box28" :colorList="$lxjData.colorList" :myData="$lxjData.box28Data"></barL>
                      </Full>
                  </div>
                  <div class="m-p-t-right">
                      <div class="m-p-right-top">
                          <div class="m-p-right-push">
                              <div class="m-p-r-title">触达方案推荐</div>
                              <div>
                                  <p>方案一</p>
                                  <img src="../../assets/img/mark/douyin.png" alt="">+
                                  <img src="../../assets/img/mark/xiaohongshu.png" alt="">+
                                  <img src="../../assets/img/mark/kuaishou.png" alt="">
                              </div>
                              <div>
                                  <p>方案二</p>
                                  <img src="../../assets/img/mark/douyin.png" alt="">+
                                  <img src="../../assets/img/mark/weibo.png" alt="">
                              </div>
                          </div>
                          <div class="m-p-right-media">
                              <div class="m-p-r-title">组合媒介曝光量预期 </div>
                              <div class="m-p-r-num">324,343</div>
                              <div class="m-p-r-echarts">
                                <funnel id="box111" :colorList="$lxjData.colorList" :myData="$lxjData.box111Data"></funnel>
                              </div>
                          </div>
                      </div>
                      <div class="m-p-right-bottom">
                          <p>相关指标预期</p>
                          <div>
                              <div style="margin-right:16px"><Card :title="'综合预期CPE'" :colourfol="'blue'" :number="'0.35'"></Card></div>
                              <div><Card :title="'组合互动总数'" :colourfol="'purple'" :number="'427,260'"></Card></div>  
                          </div>
                          <div>
                            <div style="margin-right:16px"><Card :title="'组合粉丝数'" :colourfol="'pink'" :number="'6,968,580'"></Card></div>    
                              <div><Card :title="'组合预算（元）'" :colourfol="'orange'" :number="'29,986'"></Card></div> 
                          </div>
                      </div>
                  </div>
              </div>
              <div class="m-p-last">
                  <Half :lTitle="'媒介曝光触达'" :rTitle="'媒介传播效率'">
                    <div class="m-p-last-touch" slot="left">
                      <PieEcharts2 :colorList="$fjData.colorList" :myData="$fjData.box0Data"></PieEcharts2>
                    </div>
                    <barL slot="right" id="box29" :colorList="$lxjData.colorList" :myData="$lxjData.box29Data"></barL>
                  </Half>
              </div>
            </div>
      </div>
      <div class="m-p-target">
          <!-- 优化指标 -->
          <div class="m-p-target-title">优化指标</div>
          <Form :model="formTop" label-position="top"  :rules="ruleValidate">
            <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="项目预算（不高于)" prop="budget">
                      <Input v-model="formTop.budget"  placeholder="请输入项目预算(元)"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="优化表现指标" prop="quota">
                        <Select v-model="formTop.quota" placeholder="请选择指标">
                            <Option value="1">组合预期CPE最低</Option>
                            <Option value="2">组合互动数最高</Option>
                            <Option value="3">组合粉丝数最高</Option>
                        </Select>
                    </FormItem>
                </Col>
                <Col span="8"></Col>
            </Row>
           <div class="m-p-target-title">其他限定条件</div>
           <Row  :gutter="42">
                <Col span="8">
                  <FormItem label="单一 KOL 平均互动数不低于">
                      <Input v-model="formTop.kolNum"  placeholder="请输入平均互动数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                  <FormItem label="单一 KOL 粉丝数不低于">
                      <Input v-model="formTop.kolFs"  placeholder="请输入粉丝数"></Input>
                  </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="包含 KOL">
                       <Input v-model="formTop.contain"  placeholder="请输入包含 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="排除 KOL">
                        <Input v-model="formTop.exclude"  placeholder="请输入排除 KOL"></Input>
                    </FormItem>
                </Col>
                <Col span="8">
                   <FormItem label="KOL 数量">
                     <Row  :gutter="16">
                       <Col span="12">
                        <Select v-model="formTop.compare" placeholder="请选择类型">
                            <Option value="1">等于</Option>
                            <Option value="2">大于等于</Option>
                            <Option value="3">小于等于</Option>
                            <Option value="4">小于</Option>
                        </Select>
                        </Col>
                        <Col span="12">
                          <Input v-model="formTop.num"  placeholder="请输入数量"></Input>
                        </Col>
                      </Row>
                  </FormItem>
                </Col>
            </Row>
          </Form>
          <div class="btnList">
            <div class="submit">生产组合</div>
            <div class="reset">重置条件</div>
          </div>
          <div class="relative-data">
            暂无相关数据
          </div>
      </div>
      <div class="m-p-kol">
          <div class="m-p-target-title">KOL资源</div>
          <div class="subTitle">基于品牌画像和用户画像，建议以短视频作为主要信息传播媒介（其中抖音整体传播效果最优，快手成本投入相对较低），垂直媒介为辅（小红书在15-25岁女性人群中的传播效果优于短视频）的媒介组合，并辅以多KOL多内容类型的投放策略，预算建议5-10万之间，预计能获得150万的曝光量（是上一次投放效果的3倍）</div>
          <Tabs value="name1" @on-click="getTab">
              <TabPane label="短视频" name="name1">
                <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="120px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="社交传媒" name="name2">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="大众传媒" name="name3">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="体验事件" name="name4">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="促销" name="name5">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="在线社交媒体" name="name6">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="公共关系和宣传" name="name7">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="网站" name="name8">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
              <TabPane label="其他" name="name9">
                 <div class="f-list">
                  <div class="f-item" @click="list4Act=index" :class="{'active':index==list4Act}" v-for="(item,index) in list4" :key="index">
                      <p>{{item}}</p>
                  </div>
                </div>
                <div class="listBox">
                   <div class="listBox-left">
                     <Menu active-name="1" width="133px" mode="vertical">
                          <MenuItem name="1"> 粉丝总量排行</MenuItem>
                          <MenuItem name="2"> 粉丝增长排行</MenuItem>
                          <MenuItem name="3"> 粉丝互动排行</MenuItem>
                          <MenuItem name="4"> 销售转化排行</MenuItem>
                          <MenuItem name="5"> 性价比排行</MenuItem>
                    </Menu>
                   </div>
                   <div class="listBox-right">
                    <div class="m-f-line">
                          <div class="label">类别</div>
                          <div class="f-list">
                            <div class="f-item" @click="list5Act=index" :class="{'active':index==list5Act}" v-for="(item,index) in list5" :key="index">
                                <p>{{item}}</p>
                            </div>
                          </div>
                    </div>
                    <Table :columns="columns1" :data="data1" size="large">
                      <template slot-scope="{ row, index }" slot="paiming">
                        <div class="paiming1" v-if="index==0">{{index+1}}</div>
                        <div class="paiming2" v-else-if="index==1">{{index+1}}</div>
                        <div class="paiming3" v-else-if="index==2">{{index+1}}</div>
                        <div class="paiming4" v-else>{{index+1}}</div>
                      </template>
                      <template slot-scope="{ row, index }" slot="douhao">
                       <div class="personal">
                          <div class="left">
                            <img :src="row.header" alt="">
                          </div>
                          <div class="right">
                            <div class="name">{{row.name}}</div>
                            <div class="hao">抖音号：{{row.num}}</div>
                          </div>
                       </div>
                      </template>
                      <template slot-scope="{ row, index }" slot="action">
                       <div class="actionList">
                          <div class="detail">详情</div>
                          <div class="detail">收藏</div>
                          <div class="detail">合作</div>
                       </div>
                      </template>
                    </Table>
                    <div class="page">
                      <Page :total="100" show-total show-sizer class-name="pageS"/>
                    </div>
                   </div>
                </div>
              </TabPane>
          </Tabs>
      </div>
    </div>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
import Triple from "./base/Triple"
import Half from "./base/Half"
import Full from "./base/Full"
import Card from "./base/Card"
import PieCaseEcharts from '../../components/echarts/common/PieCaseEcharts';
import barL from '../../components/echarts/common/barL';
import funnel from '../../components/echarts/common/funnel';
import PieEcharts2 from '../../components/echarts/common/PieEcharts2';
import LeidaEcharts from '../../components/echarts/common/LeidaEcharts';
export default {
  name: "index",
  components: { DefaultPage, Triple, Full, Card, Half, PieCaseEcharts, barL, funnel,PieEcharts2,LeidaEcharts},
  data(){
      return{
          formTop: {
              budget: '',
              quota: '',
              kolNum: '',
              kolFs: '',
              contain: '',
              compare: '',
              num: '',
          },
          ruleValidate: {
              budget: [
                  { required: true, message:'请输入项目预算', trigger: 'blur' }
              ],
              quota: [
                  { required: true, message:' 请选择指标',trigger: 'change' }
              ],
              // kolNum: [
              //     { required: true, trigger: 'blur' }
              // ],
              // kolFs: [
              //     { required: true, trigger: 'blur' }
              // ],
              // contain: [
              //     { required: true, trigger: 'change' }
              // ],
          },
          act:0,
          target:["媒介声量排名","媒介使用时长排名","媒介口碑排名","媒介价值贡献排名"],
          cur:0,
              dateList: [
                    {
                        value: '过去3天',
                        label: '过去3天'
                    },
                    {
                        value: '过去7天',
                        label: '过去7天'
                    },
                    {
                        value: '过去一个月',
                        label: '过去一个月'
                    }
                ],
                model1: '过去3天',
          list1:["哔哩哔哩","抖音","快手","小红书","新浪微博","头条","大众点评","360kr"],
          list1Act:1,
          list2Act:0,
          list3Act:0,
          list4Act:0,
          list5Act:0,
          list2:["不限","才艺技能","财经投资","测评","动画动漫","鬼畜","国潮国创","技术流","家居家装","教育","剧情搞笑",
          "科技数码","旅行","美食","美妆","萌宠","明星","母婴","汽车","情感","三农","生活日常",
          "时尚","舞蹈","艺术文化","个护","园艺","运动健身","奢侈品","新闻资讯","品牌组织","颜值达人","知识科普","番剧","游戏","品牌组织"],
          list3:["按照最低刊例价组合","按照最高刊例价组合"],

          list4:["抖音","快手","微视","梨视频","西瓜视频"],
          list5:["娱乐","才艺","萌宠","搞笑","二次元","游戏","家具","美食","旅游","企业","体育",
          "教育","科技","汽车","情感","时尚","文化","社会","实事",],
          myEData:[],
          columns1: [
                    {
                        title: '排名',
                        slot: 'paiming',
                        width: 70,
                    },
                    {
                        title: '抖音号',
                        key: 'name',
                        slot: 'douhao',
                        width: 200,
                    },
                    {
                        title: '带货量',
                         tooltip:true,
                        ellipsis:true,
                        key: 'huo'
                    },
                    {
                        title: '品牌曝光数',
                         tooltip:true,
                        ellipsis:true,
                        key: 'bao'
                    },
                    {
                        title: '粉丝数',
                         tooltip:true,
                        ellipsis:true,
                        key: 'fensi'
                    },
                    {
                        title: '获赞数',
                         tooltip:true,
                        ellipsis:true,
                        key: 'zan'
                    },
                    {
                        title: '作品数',
                         tooltip:true,
                        ellipsis:true,
                        key: 'zuopin'
                    },
                    {
                        title: 'KOL影响力指数',
                        tooltip:true,
                        ellipsis:true,
                        key: 'yxiang',
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                    },
                ],
              data1: [
                  {
                      name: '邓荣',
                      huo: '418.5w',
                      bao: 15,
                      fensi:'6418.5w',
                      zan:'5.32亿',
                      zuopin:1296,
                      yxiang:1098,
                      header:require("../../assets/img/yhhx/header.png"),
                      num:"14440078798"
                  },
                  {
                      name: '李芮',
                      huo: '398.5w',
                      bao: 17,
                      fensi: '8418.5w',
                      zan:'4.18亿',
                      zuopin:1954,
                      yxiang:128,
                      header:require("../../assets/img/yhhx/header1.png"),
                      num:"18540757560"
                  },
                  {
                      name: '李刚',
                      huo: '227.5w',
                      bao: 12,
                      fensi: '4418.5w',
                      zan:'7.32亿',
                      zuopin:6954,
                      yxiang:1218,
                      header:require("../../assets/img/yhhx/header2.png"),
                      num:"18191959422"
                  },
                  {
                      name: '钱迪',
                      huo: '115.5w',
                      bao: 19,
                      fensi: '7418.5w',
                      zan:'2.22亿',
                      zuopin:1354,
                      yxiang:1286,
                      header:require("../../assets/img/yhhx/header3.png"),
                      num:"13875139883"
                  },
                  {
                      name: '李星',
                      huo: '114.5w',
                      bao: 29,
                      fensi: '3418.5w',
                      zan:'2.92亿',
                      zuopin:1394,
                      yxiang:1280,
                      header:require("../../assets/img/yhhx/header4.png"),
                      num:"15305619958"
                  },
                  {
                      name: '叶春龙',
                      huo: '110.5w',
                      bao: 99,
                      fensi: '7018.5w',
                      zan:'1.22亿',
                      zuopin:154,
                      yxiang:126,
                      header:require("../../assets/img/yhhx/header5.png"),
                      num:"14881800609"
                  },
                  {
                      name: '吕若盛',
                      huo: '109.5w',
                      bao: 299,
                      fensi: '7418.5w',
                      zan:'1.92亿',
                      zuopin:1254,
                      yxiang:1296,
                      header:require("../../assets/img/yhhx/header6.png"),
                      num:"18748796447"
                  },
                  {
                      name: '王瑶',
                      huo: '89.5w',
                      bao: 2992,
                      fensi: '7438.5w',
                      zan:'1.99亿',
                      zuopin:1252,
                      yxiang:1294,
                      header:require("../../assets/img/yhhx/header7.png"),
                      num:"18748796487"
                  },
                  {
                      name: '吴轩豪',
                      huo: '87.5w',
                      bao: 3992,
                      fensi: '1438.5w',
                      zan:'1.79亿',
                      zuopin:1752,
                      yxiang:1214,
                      header:require("../../assets/img/yhhx/header8.png"),
                      num:"15622585340"
                  },
                  {
                      name: '雷晓云',
                      huo: '57.5w',
                      bao: 3692,
                      fensi: '7428.5w',
                      zan:'1.19亿',
                      zuopin:1758,
                      yxiang:1294,
                      header:require("../../assets/img/yhhx/header9.png"),
                      num:"14628678533"
                  },
              ]
      }
  },
  created(){
    this.myEData=this.$lxjData.box27Data;
  },
  methods:{
    getTab(name){
      console.log(name)
    },
    targetClick(index){
      this.act = index;
      if(index==0){
        this.myEData=this.$lxjData.box27Data;
      }else{
        this.myEData=this.$lxjData[`box27${index-1}Data`];
      }
      console.log(this.myEData)
    }
  }
};
</script>

<style scoped lang="scss">
.subTitle{
  margin-top: 8px;
  margin-bottom: 24px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #636E95;
  line-height: 20px;
}
.media-protrait {
  padding: 0 24px 24px 24px;
  .m-p-panel{
    width: 100%;
    background: url("../../assets/img/media/bg.png") no-repeat center center / 100% 100%;
    border-radius: 12px;
    padding:24px;
    display: flex;
    .panel1{
      width:17vw;
      height: 14.9vw;
      background: url("../../assets/img/media/bg2.png") no-repeat center center / 100% 100%;
      box-shadow: 4px -4px 24px 0px rgba(31, 58, 109, 0.55);
      border-radius: 8px;
      position: relative;
      .title{
        margin-left:16px;
        margin-top: 2.36vw;
        margin-right: 3vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          .top{
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 24px;
          }
          .bm{
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
            line-height: 17px;
          }
        }
        .rt{
          font-size: 48px;
          font-family: Archivo-Bold, Archivo;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 56px;
          text-shadow: 2px 2px 4px #144BD4;
        }
      }
      .nav1{
        // margin-left:16px;
        // margin-top: 34px;
        // margin-right: 3vw;
        position: absolute;
        bottom:3.6vw;
        left:0;
        width:100%;
        padding-left: 17px;
        padding-right: 43px;
        padding-top: 4px;
        padding-bottom: 4px;
        height: 3.5vw;
        background: rgba(20, 85, 217, 0.6);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          .top{
            font-size: 18px;
            font-family: Helvetica;
            color: #4FEE3E;
          }
          .bm{
            margin-top: -2px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
          }
        }
        .rt{
          width:4.5vw;
          img{
            width:100%;
            display:block;
          }
        }
      }
      .nav2{
        // margin-left:16px;
        // margin-top: 34px;
        // margin-right: 3vw;
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height: 3.5vw;
        padding-left: 17px;
        padding-right: 43px;
        padding-top: 4px;
        padding-bottom: 4px;
        background: rgba(20, 85, 217, 0.6);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          .top{
            font-size: 18px;
            font-family: Helvetica;
            color: #FF9200;
          }
          .bm{
            margin-top: -2px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.5);
          }
        }
        .rt{
          width:4.5vw;
          img{
            width:100%;
            display:block;
          }
        }
      }
    }
    .panel2{
      margin-left: 17px;
      width:20.6vw;
      height: 14.9vw;
      padding:16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #242F57;
      line-height: 20px;
      background: rgba(219, 234, 255, 0.8);
      border-radius: 8px;
      border: 1px solid #4D94FF;
      .text1{
        display: flex;
        .circle1{
          .circle{
            width: 8px;
            height: 8px;
            margin-top: 5px;
            display: inline-block;
            background: #FF9200;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
        .text{
          flex:1;
        }
      }
      
    }
    .hr{
      width: 1px;
      height: 14.9vw;
      background: #fff;
      margin: 0 22px;

    }
    .panel3{
      flex:1;
      height: 14.9vw;
      background: rgba(237, 235, 254, 0.8);
      border-radius: 8px;
      border: 1px solid #A49DFA;
      padding:16px;
      display: flex;
      position: relative;
      >i{
        position: absolute;
        right: 16px;
        top:16px;
        font-size: 16px;
         border-radius: 50%;
      }
      .left{
        width: 53%;
        height: 100%;
        padding-left: 41px;
        .title{
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #242F57;
        }
        .hr1{
          width: 100%;
          height: 1px;
          background: #fff;
          margin-top: 1.3vw;
          margin-bottom: .5vw;
        }
         .detail-info {
              .detail-info-item {
                  margin: 1.4vw 0.7vw 0 0;
                  display: inline-block;
                  width: calc(50% - 8px);
                  >p {
                      position: relative;
                      font-size: 14px;
                      font-family: PingFangSC-Regular, PingFang SC;
                      font-weight: 400;
                      color: #242F57;
                      >i {
                          position: absolute;
                          top: 0;
                          right: 0;
                          font-size: 16px;
                          border-radius: 50%;

                          &.iconjieshou{
                              color: rgba(52, 199, 36, 1);
                          }

                          &.iconguanyu1{
                              color: rgba(255, 146, 0, 1);
                          }
                      }
                  }

                  &:nth-child(2n+2) {
                      margin-right: 0;
                  }
              }
          }
      }
      .rt{
        flex:1;
        height: 100%;
      }
    }
  }
  .m-p-panel1{
    height: 16.44vw;
    margin-top: 24px;
    padding:24px;
    background: url("../../assets/img/media/bg1.png") no-repeat center center / 100% 100%;
    border-radius: 12px;
    margin-bottom: 24px;
    ::v-deep .ivu-row{
      height: 100%;
        .ivu-col{
        height: 100%;
      }
    }
    .box1{
      height: 100%; 
      background: linear-gradient(225deg, #1C66DE 0%, #98A0F9 100%);
      box-shadow: 4px -4px 24px 0px rgba(41, 59, 149, 0.55);
      border-radius: 8px;
      padding:16px;
      .title{
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        .left{
          display: flex;
          align-items: center;
          .title-icon{
            width: 24px;
            margin-top: 3px;
            img{
              width: 100%;
              display: block;
            }
            
          }
        }
      }
      .content{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
      }
    }
    .box2{
      height: 100%; 
      background: linear-gradient(221deg, #03A8C8 0%, #8BD5AE 100%);
      box-shadow: 4px -4px 24px 0px rgba(45, 120, 134, 0.55);
      border-radius: 8px;
       padding:16px;
      .title{
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        .left{
          display: flex;
          align-items: center;
          .title-icon{
            width: 24px;
            margin-top: 3px;
            img{
              width: 100%;
              display: block;
            }
            
          }
        }
      }
      .content{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
      }
    }
    .box3{
      height: 100%; 
      background: linear-gradient(224deg, #8378F9 0%, #F0908F 100%);
      box-shadow: 4px -4px 24px 0px rgba(109, 57, 143, 0.55);
      border-radius: 8px;
       padding:16px;
      .title{
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        .left{
          display: flex;
          align-items: center;
          .title-icon{
            width: 24px;
            margin-top: 3px;
            img{
              width: 100%;
              display: block;
            }
            
          }
        }
      }
      .content{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
      }
    }
  }
  .m-p-rank {
    width: 100%;
    height: 339px;
    margin-bottom: 24px;
    background: url("../../assets/img/media/colourfol.png") no-repeat center
      center / 100% 339px;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    .m-p-rank-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 24px 0;
      .h-name-list {
        display: flex;
        align-items: center;
        margin-top: 4px;
        list-style: none;
        > li {
          height: 22px;
          margin-right: 32px;
          font-size: 14px;
          color: #636e95;
          line-height: 22px;
          cursor: pointer;
          &.h-name-active {
            position: relative;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #2373ff;
            &:after {
              position: absolute;
              top: 30px;
              left: 0;
              content: "";
              width: 100%;
              height: 2px;
              background: #2373ff;
              border-radius: 1px;
            }
          }
        }
      }
      .h-right {
        display: flex;
        cursor: pointer;
        .h-tab {
          display: flex;
          margin-right: 16px;
          font-size: 12px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          text-align: center;
          .left {
            width: 76px;
            height: 32px;
            border-radius: 8px 0px 0px 8px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
                      &.act{
            border: 1px solid #2373ff;
            color: #2373ff;
          }
          }
          .right {
            width: 76px;
            height: 32px;
            border-radius: 0px 8px 8px 0px;
            border: 1px solid #c6cbde;
            color: #636e95;
            line-height: 30px;
                      &.act{
            border: 1px solid #2373ff;
            color: #2373ff;
          }
          }
        }
        .h-select {
        }
      }
    }
    .m-p-rank-echarts {
      width: 100%;
      height: 287px;
      padding: 0 24px;
    }
  }
  .m-p-filter{
    width: 100%;
    // height: 1878px;
    padding: 24px;
    margin-bottom: 24px;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    opacity: 0.8;
    border: 1px solid;
    border-image: linear-gradient(141deg, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)) 1 1;
    background: url("../../assets/img/media/colourfol.png") no-repeat center center / 100% 100%;
    .m-f-line{
        display: flex;
        width: 100%;
        margin-bottom: 8px;
        .label{
            width: 96px;
            height: 32px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            line-height: 32px;
        }
        .f-list{
            width: calc(100% - 96px);
            display: flex;
            flex-wrap: wrap;
            .f-item{
                padding: 5px 16px;
                margin-right: 16px;
                margin-bottom: 16px;
                cursor: pointer;
                &.active{
                    background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
                    box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
                    border-radius: 16px;
                    >p{
                        color: #FFFFFF;
                    }
                }
                >p{
                    height: 22px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
            }
        }
    }
    .m-p-pie{
        width: 100%;
        padding: 16px;
        margin-bottom: 24px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EAEDF7;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        .m-pie-title{
            height: 24px;
            margin-bottom: 16px;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            line-height: 24px;
        }
        .m-pie-echarts{
            height: 596px;
        }
    }
    .m-p-third-module{
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;
        .m-p-t-left{
            width: 50%;
            height: 552px;
            margin-right: 24px;
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
        }
        .m-p-t-right{
            width: 50%;
            height: 552px;
            .m-p-right-top{
                display: flex;
                justify-content: space-between;
                .m-p-right-push,.m-p-right-media{
                    width: 50%;
                    height: 244px;
                    padding: 16px;
                    background: #FFFFFF;
                    border-radius: 8px;
                    border: 1px solid #EAEDF7;
                    .m-p-r-title{
                        height: 24px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 24px;
                    }
                }
                .m-p-right-push{
                    margin-right: 24px;
                    .m-p-r-title{
                        margin-bottom: 16px;
                    }
                    >div{
                        display: flex;
                        align-items: center;
                        margin-bottom: 24px;
                        >p{
                            height: 20px;
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #636E95;
                            line-height: 20px;
                        }
                        >img{
                            width: 24px;
                            height: 24px;
                            border-radius: 50%;
                            margin: 0 12px;
                        }
                    }
                }
                .m-p-right-media{
                    .m-p-r-title{
                        margin-bottom: 4px;
                    }
                    .m-p-r-num{
                        height: 32px;
                        font-size: 24px;
                        font-family: HelveticaNeue-Medium, HelveticaNeue;
                        font-weight: 500;
                        color: #4D94FF;
                        line-height: 32px;
                    }
                    .m-p-r-echarts{
                        width: 100%;
                        height: 200px;
                        margin-top: -50px;
                    }
                }
            }
            .m-p-right-bottom{
                height: 284px;
                padding: 16px;
                margin-top: 24px;
                background: #FFFFFF;
                border-radius: 8px;
                border: 1px solid #EAEDF7;
                >p{
                    height: 24px;
                    margin-bottom: 16px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 24px;
                }
                >div{
                    display: flex;
                    justify-content: space-between;
                    >div{
                        width: 50%;
                        height: 98px;
                        margin-bottom: 16px;
                    }
                }
            }
        }
    }

    .m-p-last{
        display: flex;
        justify-content: space-between;
        .m-p-last-touch{
          width: 100%;
          height: 210px;
        }
    }
  }

  .m-p-target{
    width: 100%;
    padding:24px;
    margin-bottom: 24px;
    background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    .m-p-target-title{
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      margin-bottom: 16px;
    }
    .btnList{
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
      .submit{
        width:85px;
        height: 32px;
        font-size: 14px;
        background: #2373FF;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
      }
      .reset{
        border: 1px solid #C6CBDE;
        margin-left: 16px;
        width:85px;
        height: 32px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #636E95;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 2px 2px 7px 0px rgb(210 213 225 / 80%) inset;
        cursor: pointer; 
      }
    }
    .relative-data{
      border-top:1px solid #EAEDF7;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #636E95;
      padding:40px 0;
      padding-bottom: 16px;
      text-align: center;
    }
  }
  .m-p-kol{
    width: 100%;
    img{
      width: 100%;
      display: block;
    }
    // height: 952px;
    background: #FFFFFF;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    padding:24px;
    .listBox{
      border-radius: 8px;
      border: 1px solid #EAEDF7;
      display: flex;
      padding-bottom: 2px;
      .listBox-left{
        ::v-deep .ivu-menu{
          height: 100%;
          padding-top: 10px;
          .ivu-menu-item{
            text-align: right;
            padding-right: 16px;
            padding-left:0;
          }
         
        }
        ::v-deep .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
            background: #fff;
        }
      }
      .listBox-right{
        flex: 1;
        padding:24px;
        padding-top: 16px;
        .page{
          padding-top: 16px;
          .pageS{
            text-align: right;
            ::v-deep .ivu-page-options{
              float: left;
            }
          }
        }
        .paiming1{
          width: 18px;
          height: 18px;
          background: #4D94FF;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming2{
          width: 18px;
          height: 18px;
          background:#A49DFA;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming3{
          width: 18px;
          height: 18px;
          background: #FC809F;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .paiming4{
          width: 18px;
          height: 18px;
          background: #D9D9D9;
          border-radius: 50%;
          font-size: 12px;
          font-family: HelveticaNeue-Medium, HelveticaNeue;
          font-weight: 500;
          color: #FFFFFF;
          line-height: 18px;
          text-align: center;
        }
        .personal{
          display: flex;
          align-items: center;
          .left{
            width: 32px;
          }
          .right{
            margin-left: 3px;
            .name{
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
              line-height: 22px;
            }
            .hao{
              font-size: 12px;
              font-family: HelveticaNeue;
              color: #636E95;
              line-height: 18px;
            }
          }
          .detail{
            cursor: pointer;
          }
        }
        .actionList{
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2373FF;
          line-height: 20px;
          .detail{
            cursor: pointer;
          }
        }
        .m-f-line{
            display: flex;
            margin-bottom: 8px;
            .label{
                width: 52px;
                height: 32px;
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 32px;
            }
            .f-list{
                width: calc(100% - 96px);
                display: flex;
                flex-wrap: wrap;
                .f-item{
                    padding: 5px 16px;
                    margin-right: 16px;
                    margin-bottom: 16px;
                    cursor: pointer;
                    &.active{
                        background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
                        box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
                        border-radius: 16px;
                        >p{
                            color: #FFFFFF;
                        }
                    }
                    >p{
                        height: 22px;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        line-height: 22px;
                    }
                }
            }
        }
      }
    }
    .m-p-target-title{
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
      margin-bottom: 16px;
    }
    
    .f-list{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .f-item{
                padding: 5px 16px;
                margin-right: 16px;
                margin-bottom: 16px;
                cursor: pointer;
                &.active{
                    background: linear-gradient(135deg, #FF8D0A 0%, #FFA733 100%);
                    box-shadow: 3px 3px 14px 0px rgba(148, 76, 46, 0.2), -3px -3px 14px 0px #FFFFFF, 1px 1px 2px 0px rgba(255, 247, 230, 0.6);
                    border-radius: 16px;
                    >p{
                        color: #FFFFFF;
                    }
                }
                >p{
                    height: 22px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
            }
        }
    // background: url("../../assets/img/media/kol@2x.png") no-repeat center center / 100% 100%;
  }
}
</style>