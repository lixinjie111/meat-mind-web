<template>
    <!--  用户画像-->
    <div class="user-protrait">
      <div class="header-nav">
        <p>用户画像</p>
      </div>
      <!--用户动线部分-->
	    <div class="top_title_container">
		    <div class="left_text">
			    <div class="left_title_text">
				    <span>用户分群数据</span>
				    <!--<Poptip popper-class="saas-poptip" trigger="hover" placement="right">-->
				    <!--&lt;!&ndash; <i class="iconfont iconguanyuline1 tip-icon"></i> &ndash;&gt;-->
				    <!--<img class="gif" src="../../assets/img/user/tip.gif" alt="">-->
				    <!--<div slot="content">-->
				    <!--<p><span>出行计算公式：</span>出行总人次/出行总人次*100%</p>-->
				    <!--<p><span>空间数据化：</span>对空间进行量化，通过数字化语言，将空间进行尺度划分和重新定义，再利用技术手段来评价空间质量。在商业空间中，意味着可以分析其周边环境对消费者的使用感受影响，以及对商业运营的影响</p>-->
				    <!--<p><span>用户动线：</span>依靠计算机快速模拟人流出行行为轨迹，依靠轨迹判断动线布置当中出现可达性、可见性与店铺通行概率问题，通过验证的方法再次修正动线设计</p>-->
				    <!--</div>-->
				    <!--</Poptip>-->
			    </div>
			    <div class="left_desc_text">分析品牌对应的不同用户群在不同时间，不同场景，使用了哪些App/Web，以及详细的线上、线下、全方位，立体化数据展示。</div>
		    </div>
		    <div class="right_btn" @click="formatUser">
			    <!--<img :src="manIcon" class="manIcon"/>-->
			    <i class="iconfont iconyonghuline" ></i>
			    <span class="zdyku">自定义客群</span>
		    </div>
	    </div>
	    <div class="yhdx_container">
        <div class="group_list_con" v-for="item in yhGroupList" :key="item.id">
          <div class="bjsbz_container">
            <div class="lef_area">
              <div class="lef_area_top">
                <div class="actImg_container">
                  <img :src="item.picture" alt="" srcset="" class="avatImg">
                </div>
                <div class="perinfo">
                  <div class="perinfo_t">{{item.title}}</div>
                  <div class="perinfo_b">用户数 {{item.userCount}}人</div>
                </div>
              </div>
              <div class="lef_area_bom" :style="item.lefbomSty" @click="expandfn(Number(item.id),'cen_area'+item.id,'rig_area'+item.id,item)">
                <span>{{computedText(item.id)}}</span>
                <i v-if="computedText(item.id) == '收起动线详情'" class="iconfont iconup" :class="[(item.id == '5' || item.id == '6')? 'originClass': 'blueClass']"></i>
                <i v-else class="iconfont icondown" :class="[(item.id == '5' || item.id == '6')? 'originClass': 'blueClass']"></i>
              </div>
            </div>
            <div class="cen_area" :ref="'cen_area'+item.id">
              <img v-if="computedText(item.id) == '收起动线详情'" :src="item.infoUrlDetail" alt="" srcset="" class="cen_areaImg">
              <img v-else :src="item.infoUrl" alt="" srcset="" class="cen_areaImg">
            </div>
            <div class="rig_area rig_area1" :ref="'rig_area'+item.id" :class="{'rigActive':item.id==1}">
              <div class="rig_area_lef">
                <div class="gz_container" v-for="(item1,index) in item.mediaUrls" :key="index">
                  <div class="yl_lef" :style="item1.bgcolor"></div>
                  <div class="yl_rig">{{item1.til}}</div>
                </div>
              </div>
              <div class="rig_area_rig">
                <div class="rig_area_til">偏好媒介</div>
                <div class="rig_area_icon">
                  <img v-for="(item2,index) in item.mediaTypes" :src="item2" :key="index" alt="" class="bqimg">
                </div>
              </div>
            </div>
          </div>
          <vDxitem v-if="ifShowComfn(ifShowDx1 && item.id == '1')" :parm="item" :key="item.id"></vDxitem>
          <vDxitem1 v-else-if="ifShowComfn(ifShowDx2 && item.id == '2')" :parm="item" :key="item.id"></vDxitem1>
          <vDxitem1 v-else-if="ifShowComfn(ifShowDx3 && item.id == '3')" :parm="item" :key="item.id"></vDxitem1>
          <vDxitem1 v-else-if="ifShowComfn(ifShowDx4 && item.id == '4')" :parm="item" :key="item.id"></vDxitem1>
          <vDxitem1 v-else-if="ifShowComfn(ifShowDx5 && item.id == '5')" :parm="item" :key="item.id"></vDxitem1>
          <vDxitem1 v-else-if="ifShowComfn(ifShowDx6 && item.id == '6')" :parm="item" :key="item.id"></vDxitem1>
        </div>
      </div>

      <!--触达用户媒介-->
     <!-- <chuDa></chuDa> -->
	    <div class="top_title_container top_title_container_margin_top">
		    <div class="left_text">
			    <div class="left_title_text">
				    <span>用户分群详情</span>
			    </div>
			    <div class="left_desc_text">基于用户分群数据，系统智能生成的用户基础画像数据，行为分析数据以及心智分析数据。</div>
		    </div>
		    <div class="right_select">
			    <div class="select-btn" @click="toComparison"><i class="iconfont icontianjia"></i>用户群对比</div>
<!--			    <Select class="select" value="北京上班族">-->
<!--				    <Option value="北京上班族">北京上班族</Option>-->
<!--			    </Select>-->
		    </div>
	    </div>
		<Tab :tab-list="['基础画像','行为分析','心智分析','生命周期分析']" @change="changeTab"></Tab>
		<!--目标用户群-->
	    <div class="da_container" v-if="tabActive == 1">
		    <div class="jichuhuax_area_container" id="jichuhuax_area_container">
<!--			    <div class="jichuhuax_area_til">基础画像</div>-->
			    <vTabCard :tabData="jchxData"></vTabCard>
			    <div class="jichuhuax_echarts_container">

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">年龄结构</div>
							    <div class="range_titme">1-4当周</div>
							    <div class="range_data">
								    <div class="range_data_left">
									    <span>682</span>人
								    </div>
								    <div class="range_data_right">
									    合计<span>7557</span>人
								    </div>
							    </div>
							    <div class="range_data1">
								    <div class="range_data_left">
									    <div class="range_data_box1">
										    环比
										    <div class="pic">
											    <img src="../../assets/img/yhhx/jiantou.png" alt="">
										    </div>
										    <span>1.47%</span>
									    </div>
									    <div class="range_data_box1">
										    同比
										    <div class="pic">
											    <img src="../../assets/img/yhhx/jiantou.png" alt="">
										    </div>
										    <span>4.47%</span>
									    </div>
								    </div>
								    <div class="range_data_right">
									    均值<span>839.67</span>人
								    </div>
							    </div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP" />
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box1Data"></PieEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">收入结构</div>
							    <div class="range_titme">1-4当周</div>
							    <div class="range_data">
								    <div class="range_data_left">
									    <span>782</span>人
								    </div>
								    <div class="range_data_right">
									    合计<span>3557</span>人
								    </div>
							    </div>
							    <div class="range_data1">
								    <div class="range_data_left">
									    <div class="range_data_box1">
										    环比
										    <div class="pic">
											    <img src="../../assets/img/yhhx/jiantou.png" alt="">
										    </div>
										    <span>3.47%</span>
									    </div>
									    <div class="range_data_box1">
										    同比
										    <div class="pic">
											    <img src="../../assets/img/yhhx/jiantou.png" alt="">
										    </div>
										    <span>8.47%</span>
									    </div>
								    </div>
								    <div class="range_data_right">
									    均值<span>139.67</span>人
								    </div>
							    </div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box2Data"></PieEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">职业结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <cLine id="box58" :colorList="$lxjData.colorList" :myData="$lxjData.box58Data"></cLine>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">行业结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barC id="box7" :colorList="$lxjData.colorList" :myData="$lxjData.box7Data"></barC>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">教育背景结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barEcharts id="box1" :colorList="$lxjData.colorList" :myData="$lxjData.box1Data"></barEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">性别结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box5Data"></PieEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">主要出行方式</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barEcharts id="box11" :colorList="$lxjData.colorList" :myData="$lxjData.box11Data"></barEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">户籍籍贯结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barEcharts id="box12" :colorList="$lxjData.colorList" :myData="$lxjData.box12Data"></barEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">婚育状态结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barEcharts id="box13" :colorList="$lxjData.colorList" :myData="$lxjData.box13Data"></barEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">消费能力结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <barC id="box71" :colorList="$lxjData.colorList" :myData="$lxjData.box71Data"></barC>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">车辆保有结构</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box4Data"></PieEcharts>
					    </div>
				    </div>

				    <div class="jichuhuax_echarts_item">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">居住地区</div>
							    <div class="range_titme">2020.12.01-2020.12.3</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box3Data"></PieEcharts>
					    </div>
				    </div>

			    </div>
		    </div>
	    </div>
	    <div class="da_container" v-if="tabActive == 2">
		    <div class="xwfx_area_container" id="xwfx_area_container">
<!--			    <div class="xwfx_area_til">-->
<!--				    <span>行为分析</span>-->
				    <!--<Poptip popper-class="saas-poptip" trigger="hover" placement="right">-->
					    <!--&lt;!&ndash; <i class="iconfont iconguanyuline1 tip-icon"></i> &ndash;&gt;-->
					    <!--<img class="gif" src="../../assets/img/user/tip.gif" alt="">-->
					    <!--<div slot="content">-->
						    <!--<p><span>基于群体智能的客户行为分析算法：</span>算法主要思路是首先将客户的消费模式作为平面上的一个点随机分布于一个平面区域内 ; 然后测量当前个体对象在局部环境的群体相似度 ,并通过概率转换函数得到拾起或放下对象的概率 ,以这个概率行动 ,经过群体大量的相互作用 ,最终得到若干聚类中心 ;最后 ,在平面区域内采用递归算法收集聚类结果 ,获得不同消费特征的客户群体</p>-->
						    <!--<p>-->
							    <!--<span>群体相似度的基本测量公式为:</span>-->
							    <!--<img class="small" src="../../assets/img/yhhx/tip1.png"/>-->
						    <!--</p>-->
						    <!--<p>其中 Neigh ( r) 表示局部环境 ,在两维网格环境中通常表示以 r 为半径的圆形区域. d ( oi , oj ) 表示对象属性空间里的对象 o i与 o j之间的距离 , 常用方法是 ij 欧氏距离和街市距离等.α定义为群体相似系数. 它是群体相似度测量的关键系数 , 它直接影响聚类中心的个数 ,同时也影响聚类算法的收敛速度. </p>-->
						    <!--<p><span>算法的基本过程描述如下:</span></p>-->
						    <!--<p>1.程序初始化,初始化α, number,k,R,size,最大循环次数n等参数,随机赋给每一个模式一对(x,y)坐标 , 赋初始模式值 , 初始状态为无负载 ;</p>-->
						    <!--<p>2.for i=1,2,⋯,n;</p>-->
						    <!--<p>（1）对于一组中的每一只个体 ,以R为观察半径 ,利用式(1)计算群体相似度；</p>-->
						    <!--<p>（2）以一定的步长调整α;</p>-->
						    <!--<p>3.聚类编号serial- no初始为0;</p>-->
						    <!--<p>4.在聚类结果平面上,选定一个未标记聚类编号的模式 p为种子;</p>-->
						    <!--<p>5.用同一编号递归标记所有与模式 p 相距小于 dist的模式 , 即收集所有属于该聚类中心的模式。</p>-->
					    <!--</div>-->
				    <!--</Poptip>-->
<!--			    </div>-->
			    <vTabCard :tabData="xwfxData"></vTabCard>
			    <!--          <div class="ditu_area">-->
			    <!--            <video-->
			    <!--              class="player"-->
			    <!--              width="100%"-->
			    <!--              height="100%"-->
			    <!--              autoplay-->
			    <!--              loop-->
			    <!--              muted-->
			    <!--              src="https://yzkj-pro.oss-cn-beijing.aliyuncs.com/trafficflow.mp4"-->
			    <!--            ></video>-->
			    <!--          </div>-->
<!--			    <div class="xwfx_area_til" style="margin-bottom:12px;">不同时段APP使用情况</div>-->
			    <div class="use_app_area">
				    <img :src="useApp" style="width:100%;" />
			    </div>
			    <div class="use_echart_item">
				    <div class="use_echart_title">不同性别APP内容偏好</div>
				    <div class="use_echart_cont">
					    <lineM id="box6" :colorList="$lxjData.colorList" :myData="$lxjData.box69Data"></lineM>
				    </div>
			    </div>
			    <div class="use_echart_item">
				    <div class="use_echart_title">不同年龄APP内容偏好</div>
				    <div class="use_echart_cont">
					    <barM id="box3" :colorList="$lxjData.colorList" :myData="$lxjData.box3Data"></barM>
				    </div>
			    </div>
			    <div class="use_echart_item1_container">
				    <div class="use_echart_item1">
					    <div class="use_echart_title">时间段内APP使用结构</div>
					    <div class="use_echart_cont">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box7Data"></PieEcharts>
					    </div>
				    </div>
				    <div class="use_echart_item1">
					    <div class="use_echart_title">APP内容偏好结构</div>
					    <div class="use_echart_cont">
						    <barLine id="box10" :colorList="$lxjData.colorList" :myData="$lxjData.box10Data" :option="{
						    grid: {
                  left: 19,
                  right: 19,
                  bottom: '60',
                  top: '10%',
                  containLabel: true,
                  },
                  legend: {
                    bottom: 12,
                  },
                  }"></barLine>
					    </div>
				    </div>
				    <div class="use_echart_item1">
					    <div class="use_echart_title">用户行为分布结构</div>
					    <div class="use_echart_cont">
						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box8Data"></PieEcharts>
					    </div>
				    </div>
				    <div class="use_echart_item1">
					    <div class="use_echart_title">用户行为消费结构</div>
					    <div class="use_echart_cont">
						    <cLine id="box52" :colorList="$lxjData.colorList" :myData="$lxjData.box52Data"></cLine>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>
	    <div class="da_container" v-if="tabActive == 3">
		    <div class="xzfx_area_container" id="xzfx_area_container">
<!--			    <div class="xzfx_area_title">-->
<!--				    <span>心智分析</span>-->
				    <!--<Poptip popper-class="saas-poptip" trigger="hover" placement="right">-->
					    <!--&lt;!&ndash; <i class="iconfont iconguanyuline1 tip-icon"></i> &ndash;&gt;-->
					    <!--<img class="gif" src="../../assets/img/user/tip.gif" alt="">-->
					    <!--<div slot="content">-->
						    <!--<p><span>心理模型</span>在人机交互和交互设计中起着重要的作用。它们与用户感知周围世界的方式有关，并且基于信念，而不是一个事实概念。但是，如果你能理解用户的心理模型，你就可以在设计中模拟这些模型，使它们更加实用和直观。 心理模型是信念的人工制品。它们是用户对任何给定系统或交互所持有的信念。在大多数情况下，信念在一定程度上会与现实生活模式相似。这一点很重要，因为用户会根据他们的心理模型来计划和预测系统内未来的行为。</p>-->
						    <!--<p><span>客户需求智能化处理</span></p>-->
						    <!--<p>设不完备客户需求信息系统是需求决策系统，其中 是非空的客户需求信息集，表示客户需求属性的非空有限集，表示客户需求映射决策的非空有限集，为特征属性值域，f是U和V关系集，也称为需求决策规则集。其中，f(ui,pj)=vij表示某个用户需求ui在需求特征属性pj下的属性量值是vij。令Vi(xj)是对象xj在条件属性Ci上的取值。当∀Ci( X j) = * 时，表明I中含有缺失值。根据粗糙集理论，当不同客户对相同需求的选择一致时，则具有一定的概率选择其他不同的属性值。即当c(x,b)= * 时，使用需求映射系统中在属性集b下出现概率最高的属性值代替。若存在属性值出现概率最高的次数不唯一时，则选用其他属性中相同属性值最高的替代。</p>-->
						    <!--<p>定义经扩充的可辨识矩阵M为:<img class="small" src="../../assets/img/yhhx/tip2.png"/></p>-->
						    <!--<p>其中:M(i,j)是可辨识矩阵中第i行第j列元素，i,j=1,2,...,n ; *表示缺失值。</p>-->
						    <!--<p>设MASi为对象xi的缺失属性集，即:<img class="small" src="../../assets/img/yhhx/tip3.png"/></p>-->
						    <!--<p>设NSi为 xi的对象集:<img class="small" src="../../assets/img/yhhx/tip4.png"/></p>-->
						    <!--<p>设MOS 为需求决策表S的缺失对象集，即:<img class="small" src="../../assets/img/yhhx/tip5.png"/></p>-->
						    <!--<p>输入：不完备信息决策表 I *= (U* , C* UD) ;</p>-->
						    <!--<p>输出：完备的信息决策表 Ir =(Ur,CrUD) 。</p>-->
						    <!--<img src="../../assets/img/yhhx/tip6.png"/>-->
					    <!--</div>-->
				    <!--</Poptip>-->
<!--			    </div>-->
			    <vTabCard :tabData="xzfxData"></vTabCard>
			    <div class="yhsj_echarts">
				    <div class="yhsj_echarts_item_title">
					    用户视觉心智动态捕捉
				    </div>
				    <div class="yhsj_echarts_item_content">
					    <barLine id="box8" :colorList="$lxjData.colorList" :myData="$lxjData.box8Data"></barLine>
				    </div>
			    </div>
			    <div class="xzsk_echarts">
				    <div class="yhsj_echarts_item_title">
					    心智时空曲线
				    </div>
				    <div class="yhsj_echarts_item_content">
					    <lineAreaPieces1 id="box9" :colorList="$lxjData.colorList" ></lineAreaPieces1>
				    </div>
			    </div>
			    <div class="xinzfb_container">
				    <div class="xinzfb_container_lef">
					    <div class="xinzfb_container_lef_tel">心智分布</div>
					    <div class="xinzfb_container_lef_content">
						    <PieEcharts7 :colorList="$fjData.colorList" :myData="$fjData.box6Data"></PieEcharts7>
					    </div>
				    </div>
				    <div class="xinzfb_container_rig">
					    <div class="xinzfb_container_rig_tel">
						    <span>
							    心智倾向
						    </span>
							    <div  class="custom_poptip_box">
							      <span class="custom_poptip_result" @click="customShow=true">{{custom}} <i :class="['iconfont', customShow ? 'iconup' : 'icondown']"></i></span>
								    <div :class="['custom_poptip_content', { hidden: !customShow }]">
									    <div :class="['item', { select: custom === '所有'}]" @click="customChange('所有')">所有</div>
									    <div :class="['item', { select: custom === '汽车'}]" @click="customChange('汽车')">汽车</div>
									    <div :class="['item', { select: custom === '餐饮'}]" @click="customChange('餐饮')">餐饮</div>
									    <div :class="['item', { select: custom === '生活配套'}]" @click="customChange('生活配套')">生活配套</div>
									    <div :class="['item', { select: custom === '服饰'}]" @click="customChange('服饰')">服饰</div>
									    <div :class="['item', { select: custom === '美妆护肤'}]" @click="customChange('美妆护肤')">美妆护肤</div>
								    </div>
						      </div>
						    </div>
<!--					    <div class="xinzfb_container_lef_content">-->
<!--						    <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box7Data"></PieEcharts>-->
<!--					    </div>-->
              <div class="xinzfb_container_lef_content">
                <div class="xinzfb_container_lef_content_chart">
                  <PieEcharts :colorList="$fjData.colorList" :myData="$fjData.box43Data"></PieEcharts>
                </div>
                <div class="xinzfb_container_lef_content_chart_match">
                  <div class="xinzfb_container_lef_content_chart_match_item">
                    <MatchDegree title="品牌匹配度" :data="matchDegree1"/>
                  </div>
                  <div class="xinzfb_container_lef_content_chart_match_item">
                    <MatchDegree title="渠道匹配度" :data="matchDegree2" colourfol="green"/>
                  </div>
                </div>
              </div>
				    </div>
			    </div>
			    <div class="ppxz_container">
				    <div class="ppxz_title">品牌心智</div>
				    <div class="ppxz_title_desc">分心品牌当前受众的不同阶段的数据</div>
            <div class="bottom">
              <div class="pricle">
                <Card :title="'认知'" :colourfol="'blue'" :number="'29385'" :data="[-87,9481]"></Card>
              </div>
              <div class="month">
                <Card :title="'兴趣'" :colourfol="'purple'" :number="'21326'" :data="[-94,8781]"></Card>
              </div>
              <div class="view">
                <Card :title="'购买'" :colourfol="'pink'" :number="'28532'" :data="[-78,8481]"></Card>
              </div>
              <div class="target">
                <Card :title="'忠诚'" :colourfol="'orange'" :number="'25938'" :data="[-88,8941]"></Card>
              </div>
            </div>
				    <div class="xinzfb_container_lef_content">
					    <lineS id="box57" :colorList="$lxjData.colorList" :myData="$lxjData.box57Data"></lineS>
				    </div>
			    </div>
			    <div class="xzcb_container">
				    <div class="ppxz_title">心智传播网络</div>
				    <div class="ppxz_title_desc">分析传播途径</div>
				    <div class="xinzfb_container_lef_content">
              <div v-for="(it, i) in circleData" :key="i"  class="xinzfb_container_lef_content_item">
                <i-circle :percent="80" :size="getSize()" :stroke-color="it.color">
                  <span class="demo-Circle-inner" style="font-size:24px">{{it.value}}%</span>
                </i-circle>
                <div class="name">{{it.name}}</div>
              </div>
				    </div>
            <div class="xinzfb_container_lef_content_desc">%的计算公式是根据市场当中品牌受众用户对于品牌的喜好度，忠诚度等多维度数据综合计算而成</div>
			    </div>
		    </div>
	    </div>
	    <div class="da_container" v-if="tabActive == 4">
		    <div class="smzqfx_area_container" id="smzqfx_area_container">
<!--			    <div class="smzqfx_title" >生命周期分析</div>-->
			    <vTabCard :tabData="smzqfxData"></vTabCard>
			    <div class="xfsmlcpg_container">
				    <div class="xfsmlcpg_title">消费生命旅程评估</div>
				    <div class="xinzfb_container_lef_content1">
					    <funnel id="box111" :colorList="$lxjData.colorList1" :myData="$lxjData.box111Data"></funnel>
				    </div>
			    </div>
			    <div class="xfjzg_container">
				    <div class="xfjzg_container_lef">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">消费者价值评估</div>
							    <div class="range_titme">2020.12.01-2020.12.31</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <lineSp id="box112" :colorList="$lxjData.colorList"></lineSp>
					    </div>
				    </div>
				    <div class="xfjzg_container_rig">
					    <div class="jichuhuax_echarts_item_title">
						    <div class="jichuhuax_echarts_item_title_lef">
							    <div class="nljg">加之贡献度（按标签）</div>
							    <div class="range_titme">2020.12.01-2020.12.31</div>
						    </div>
						    <div class="jichuhuax_echarts_item_title_rig">
							    <img :src="threeP" class="threeP">
						    </div>
					    </div>
					    <div class="jichuhuax_echarts_item_content">
						    <cLine id="box53" :colorList="$lxjData.colorList" :myData="$lxjData.box52Data"></cLine>
					    </div>
				    </div>
			    </div>
			    <div class="xfzsxjcfx_container">
				    <div class="xfzsxjcfx_til">消费者时序行为决策分析</div>
				    <div class="xfzsxjcfx_ech">
					    <lineAreaPieces2 id="box91" :colorList="$lxjData.colorList" ></lineAreaPieces2>
				    </div>
			    </div>
			    <div class="xfzsxjcfx_container">
				    <div class="xfzsxjcfx_til">消费者行为决策预测</div>
				    <div class="xfzsxjcfx_ech">
					    <lineAreaPieces id="box92" :colorList="$lxjData.colorList" ></lineAreaPieces>
				    </div>
			    </div>
		    </div>
	    </div>
    </div>
</template>
<script>
import barEcharts from '../../components/echarts/common/bar/barEcharts';
import barL from '../../components/echarts/common/bar/barL';
import barM from '../../components/echarts/common/bar/barM';
import cLine from '../../components/echarts/common/line/line';
import lineO from '../../components/echarts/common/line/lineO';
import lineS from '../../components/echarts/common/line/lineS';
import lineM from '../../components/echarts/common/line/lineM';
import barC from '../../components/echarts/common/bar/barC';
import barCH from '../../components/echarts/common/bar/barCH';
import barLine from '../../components/echarts/common/bar/barLine';
import lineAreaPieces from '../../components/echarts/common/line/lineAreaPieces';
import lineAreaPieces1 from '../../components/echarts/common/line/lineAreaPieces1';
import lineAreaPieces2 from '../../components/echarts/common/line/lineAreaPieces2';
import funnel from '../../components/echarts/common/funnel/funnel';
import barHM from '../../components/echarts/common/bar/barHM';
import lineSp from '../../components/echarts/common/line/lineSp';

import PieEcharts from '../../components/echarts/common/pie/PieEcharts';
import PieEcharts7 from '../../components/echarts/common/pie/PieEcharts7';
import LeidaEcharts from '../../components/echarts/common/radar/LeidaEcharts';
import MatchEcharts from '../../components/echarts/common/radar/MatchEcharts';
import Yibiao1Echarts from '../../components/echarts/common/gauge/Yibiao1Echarts';
import YibiaoCharts2 from '../../components/echarts/common/gauge/YibiaoCharts2';
import Leida2Echarts from '../../components/echarts/common/radar/Leida2Echarts';
import vDxitem from "./dxItem";
import vDxitem1 from "./dxItem1";
import vTabCard from "./tabCard";
// import chuDa from "./chuDa";
import Card from "./base/Card";
import MatchDegree from "./base/MatchDegree";
import Tab from "../../components/Tab";
import api from "@/utils/api"

export default {
  components: {
   lineAreaPieces,lineAreaPieces1,lineAreaPieces2, barEcharts,barL,barM,cLine,lineM,barC,barLine,lineS,funnel,barCH,barHM,lineO,lineSp, PieEcharts, PieEcharts7, LeidaEcharts, MatchEcharts, Yibiao1Echarts, YibiaoCharts2, Leida2Echarts,
   vDxitem,vDxitem1,vTabCard, Card, MatchDegree,Tab
  },
  name: "index",
  data() {
    return {
      tabActive: 1,
      manIcon: require("../../assets/img/yhhx/man.png"),
      leftTimerImg: require("../../assets/img/yhhx/leftTimerImg.png"),
      ifShowPop1: false,
      ifShowPop2: false,
      ifShowPop3: false,
      ifShowPop4: false,
      ifShowPop5: false,
      icon1: require("../../assets/img/yhhx/map1.png"),
      icon2: require("../../assets/img/yhhx/map2.png"),
      icon3: require("../../assets/img/yhhx/map3.png"),
      icon4: require("../../assets/img/yhhx/map4.png"),
      toRIcon: require("../../assets/img/yhhx/toR.png"),
      toRIcon1: require("../../assets/img/yhhx/toR1.png"),
      inputIcon: require("../../assets/img/yhhx/input.png"),
      toLIcon: require("../../assets/img/yhhx/toL.png"),
      dhIcon: require("../../assets/img/yhhx/dhIcon.png"),
      yhtIcon: require("../../assets/img/yhhx/yht.png"),
      input1: require("../../assets/img/yhhx/input1.png"),
      useApp: require("../../assets/img/yhhx/useApp.png"),
      threeP: require("../../assets/img/yhhx/threeP.png"),
      ttIcon:require("../../assets/img/yhhx/tt.png"),
      xhsIcon:require("../../assets/img/yhhx/xhs.png"),
      ksIcon:require("../../assets/img/yhhx/ks.png"),
      dyIcon:require("../../assets/img/yhhx/ks.png"),
      dyI:require("../../assets/img/yhhx/dyI.png"),
      tu20:require("../../assets/img/yhhx/tu20.png"),
      tu75:require("../../assets/img/yhhx/tu75.png"),
      descTitle:'北京上班族出行场景',
      avatImg:require("../../assets/img/yhhx/avat.png"),
      sbAvatImg:require("../../assets/img/yhhx/pic_all_avatar.png"),
      qyggImg:require("../../assets/img/yhhx/qyggAvt.png"),
      bpyzImg:require("../../assets/img/yhhx/beipiaoImg.png"),
      zyzyImg:require("../../assets/img/yhhx/ziyouImg.png"),

      bjsbzImgTime:require("../../assets/img/yhhx/yhdx1.png"),
      bjsbzImgTime1:require("../../assets/img/yhhx/yhdx11.png"),

      yxqnImgTime:require("../../assets/img/yhhx/yhdx2.png"),
      yxqnImgTime1:require("../../assets/img/yhhx/yhdx22.png"),

      qyggImgTime:require("../../assets/img/yhhx/yhdx3.png"),
      qyggImgTime1:require("../../assets/img/yhhx/yhdx33.png"),

      bpyzImgTime:require("../../assets/img/yhhx/yhdx4.png"),
      bpyzImgTime1:require("../../assets/img/yhhx/yhdx44.png"),

      zyzyImgTime:require("../../assets/img/yhhx/yhdx5.png"),
      zyzyImgTime1:require("../../assets/img/yhhx/yhdx55.png"),

      ifShowDx1:true,
      vDxtxt1:'收起动线详情',
      ifShowDx2:false,
      vDxtxt2:'查看动线详情',
      ifShowDx3:false,
      vDxtxt3:'查看动线详情',
      ifShowDx4:false,
      vDxtxt4:'查看动线详情',
      ifShowDx5:false,
      ifShowDx6:false,
      vDxtxt5:'查看动线详情',
      vDxtxt6:'查看动线详情',
      jchxData:{
        lefData:{
          til:'呈现问题',
          subTil:'受众群体年龄覆盖范围窄，核心受众20~25岁行业覆盖不够深入，只覆盖高收入人群。'
        },
        rigData:{
          til:'策略建议',
          subTil:'扩大受众群体的年龄范围，从15岁-40岁。行业覆盖宜深入打通渠道。'
        }
      },
      xwfxData:{
        lefData:{
          til:'呈现问题',
          subTil:'用户行为特征与年龄、职业等基本属性高度相关。重要的线上触点是生活服务、视频娱乐、社交通讯类应用。'
        },
        rigData:{
          til:'策略建议',
          subTil:'结合用户使用习惯及使用场景差异，在19:00 - 22:30时间段使用娱乐场景APP（如抖音）进行品牌推广为佳。'
        }
      },
      xzfxData:{
        lefData:{
          til:'呈现问题',
          subTil:'用户对营销信息呈现波动性情绪反馈，注意力集中时间有限；日间情绪随时间波动大，对短视频APP偏好明显。'
        },
        rigData:{
          til:'策略建议',
          subTil:'选取用户心情愉悦的时间段进行品牌推广，结合场景优化用户触达方案。'
        }
      },
      smzqfxData:{
        lefData:{
          til:'呈现问题',
          subTil:'早期客户留存转化率较低，成熟期及休眠期的用户消费潜力巨大，用户在餐饮百货品类价值贡献度高。'
        },
        rigData:{
          til:'策略建议',
          subTil:'对于早期顾客加大投放力度，对于成熟期及休眠期顾客挖掘其用户价值，迎合用户偏好制定策略。'
        }
      },
      choice1:false,
      choice2:true,
      choice12:true,
      mbValue:'bjsbz',
      chuData:this.$fjData.box0Data,
      mubiaoList:[
        {
          label:'北京上班族',
          value:'bjsbz'
        },
        {
          label:'研学青年',
          value:'yxqn'
        },
        {
          label:'企业高管',
          value:'qygg'
        },
        {
          label:'北漂一族',
          value:'bpyz'
        },
        {
          label:'自由职业',
          value:'zyzz'
        }
      ],
	    custom: '所有',
	    customShow: false,
      squpImg:require("../../assets/img/yhhx/squpImg.png"),
      zkdwImg:require("../../assets/img/yhhx/zkdwImg.png"),
      czkImg:require("../../assets/img/yhhx/czkImg.png"),
      qbmjList:[
        require("../../assets/img/yhhx/dingd.png"),
        require("../../assets/img/yhhx/weiicon.png"),
        require("../../assets/img/yhhx/tt.png")
      ],
      bjsbList:[
        require("../../assets/img/yhhx/zhIcon.png"),
        require("../../assets/img/yhhx/xhs.png"),
      ],
      qyggList:[
        require("../../assets/img/yhhx/weiicon.png"),
        require("../../assets/img/yhhx/dingd.png"),
        require("../../assets/img/yhhx/tt.png"),
      ],
      bpyzList:[
        require("../../assets/img/yhhx/tt.png"),
        require("../../assets/img/yhhx/dyI.png"),
        require("../../assets/img/yhhx/ks.png")
      ],
      zyzyList:[
        require("../../assets/img/yhhx/dyI.png"),
        require("../../assets/img/yhhx/xhs.png"),
        require("../../assets/img/yhhx/tt.png")
      ],
	    circleData: [
		    { name: '合声', value: '75'},
		    { name: '合生活', value: '60'},
		    { name: '珠江', value: '50'},
		    { name: '合声创展', value: '35', color: '#FF8800'},
		    { name: '霄云', value: '25', color: '#FF8800'},
		    { name: '创展', value: '20', color: '#FF8800'},
	    ],
      matchDegree1: [
        { name: '喜茶', value: '67'},
        { name: '奈雪', value: '67'},
        { name: 'CoCo', value: '74'},
        { name: '一点点', value: '74', color: '#FF8800'},
        { name: '乐乐茶', value: '82', color: '#FF8800'},
        { name: '快乐柠檬', value: '82', color: '#FF8800'},
      ],
      matchDegree2: [
        { name: '微博', value: '67'},
        { name: '小红书', value: '67'},
        { name: '微信', value: '74'},
        { name: 'bilibili', value: '74', color: '#FF8800'},
        { name: '抖音', value: '82', color: '#FF8800'},
        { name: '知乎', value: '82', color: '#FF8800'},
      ],
      yhGroupList:[]
    };
  },
  computed:{
    ifShowComfn(){
      return function(value){
        console.log(value,'111111111')
        return value
      }
    }
  },
  created(){
    this.getYhGroupList();
  },
  methods: {
    computedText(id){
      return this['vDxtxt'+id];
    },
    getYhGroupList(){
      api.getGroupsList().then(res=>{
        if(res.code == 200){
          var newObjList = [].concat(res.data);
          newObjList.forEach(item=>{
            var mediaList = [];
            for(var i=0;i<item.mediaUrls.length;i++){
              if(item.mediaUrls[i] == '工作'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#1DCEC3'}
                })
              }
              else if(item.mediaUrls[i] == '娱乐'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#F16E84'}
                })
              }
              else if(item.mediaUrls[i] == '沟通'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#FE774B'}
                })
              }
              else if(item.mediaUrls[i] == '学术'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#FDD352'}
                })
              }
              else if(item.mediaUrls[i] == '新闻'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#2373FF'}
                })
              }
              else if(item.mediaUrls[i] == '视频'){
                mediaList.push({
                  til:item.mediaUrls[i],
                  bgcolor:{background:'#7BABFF'}
                })
              }
            }
            if(item.id == '5' || item.id == '6'){
              item.lefbomSty = {
                background:'#FFE6DE',
                color:'#FE774B'
              };
            }
            else{
              item.lefbomSty = {
                background:'#DDE9FF',
                color:'#2373FF'
              };
            }
            item.mediaUrls = mediaList;
          });
          this.yhGroupList = newObjList;
        }
        else{
          this.$Message.error('获得用户分组数据失败！')
        }
      }).catch(err=>{
        this.$Message.error(err.msg)
      });
    },
	  toComparison (){
		  this.$router.push({name:"user-comparison"})
	  },
	  customChange(custom){
	  	this.custom = custom;
	  	this.customShow = false
	  },
    changeNews(val){
      if(val){
        this.chuData=this.$fjData.box01Data;
      }else{
        this.chuData=this.$fjData.box0Data;
      }
    },
    formatUser(){
      this.$router.push({name:"user-defined"})
    },
    goMidea(){
      this.$router.push({
        path:"/media"
      });
    },
    expandfn(arg,c,r,d){
      var rigDom = this.$refs[r][0];
      console.log(d,'item')
      if(arg == 1){
        if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '查看动线详情';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '查看动线详情';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '查看动线详情';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '查看动线详情';
        }
        else if(this.ifShowDx6){
          this.ifShowDx6 = !this.ifShowDx6;
          this.vDxtxt6 = '查看动线详情';
        }
        this.ifShowDx1 = !this.ifShowDx1;
        if(this.ifShowDx1){
          this.vDxtxt1 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          rigDom.style='background:#FFF;';
          this.vDxtxt1 = '查看动线详情';
        }
      }
      else if(arg == 2){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '查看动线详情';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '查看动线详情'; 
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '查看动线详情';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '查看动线详情';
        }
        else if(this.ifShowDx6){
          this.ifShowDx6 = !this.ifShowDx6;
          this.vDxtxt6 = '查看动线详情';
        }
        this.ifShowDx2 = !this.ifShowDx2;
        if(this.ifShowDx2){
          this.vDxtxt2 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          this.vDxtxt2 = '查看动线详情';
          rigDom.style='background:#FFF;';
        }
      }
      else if(arg == 3){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '查看动线详情';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '查看动线详情';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '查看动线详情';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '查看动线详情';
        }
        else if(this.ifShowDx6){
          this.ifShowDx6 = !this.ifShowDx6;
          this.vDxtxt6 = '查看动线详情';
        }
        this.ifShowDx3 = !this.ifShowDx3;
        console.log(this.ifShowDx3,'this.ifShowDx3')
        if(this.ifShowDx3){
          this.vDxtxt3 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          this.vDxtxt3 = '查看动线详情';
          rigDom.style='background:#FFF;';
        }
      }
      else if(arg == 4){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '查看动线详情';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '查看动线详情';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '查看动线详情';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '查看动线详情';
        }
        else if(this.ifShowDx6){
          this.ifShowDx6 = !this.ifShowDx6;
          this.vDxtxt6 = '查看动线详情';
        }
        this.ifShowDx4 = !this.ifShowDx4;
        if(this.ifShowDx4){
          this.vDxtxt4 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          this.vDxtxt4 = '查看动线详情';
          rigDom.style='background:#FFF;';
        }
      }
      else if(arg == 5){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '查看动线详情';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '查看动线详情';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '查看动线详情';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '查看动线详情';
        }
        else if(this.ifShowDx6){
          this.ifShowDx6 = !this.ifShowDx6;
          this.vDxtxt6 = '查看动线详情';
        }
        this.ifShowDx5 = !this.ifShowDx5;
        if(this.ifShowDx5){
          this.vDxtxt5 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          this.vDxtxt5 = '查看动线详情';
          rigDom.style='background:#FFF;';
        }
      }
      else if(arg == 6){
        if(this.ifShowDx1){
          this.ifShowDx1 = !this.ifShowDx1;
          this.vDxtxt1 = '查看动线详情';
        }
        else if(this.ifShowDx2){
          this.ifShowDx2 = !this.ifShowDx2;
          this.vDxtxt2 = '查看动线详情';
        }
        else if(this.ifShowDx3){
          this.ifShowDx3 = !this.ifShowDx3;
          this.vDxtxt3 = '查看动线详情';
        }
        else if(this.ifShowDx4){
          this.ifShowDx4 = !this.ifShowDx4;
          this.vDxtxt4 = '查看动线详情';
        }
        else if(this.ifShowDx5){
          this.ifShowDx5 = !this.ifShowDx5;
          this.vDxtxt5 = '查看动线详情';
        }
        this.ifShowDx6 = !this.ifShowDx6;
        if(this.ifShowDx6){
          this.vDxtxt6 = '收起动线详情';
          rigDom.style='background:#F0F8FF;';
        }
        else{
          this.vDxtxt6 = '查看动线详情';
          rigDom.style='background:#FFF;';
        }
      }
    },
    getSize(){
      return 90 / 144*window.rem
    },
	  changeTab(index){
      this.tabActive = index;
	  }
  },
};
</script>
<style lang="scss" scoped>
	.hidden{
		display: none !important;
	}
.mark-detail-anchor{
    position: relative;
    width:100%;
    .ivu-affix{
        left:288px !important;
        top:48px  !important;
        z-index: 1001;
    }
}
.ivu-anchor-wrapper{
    overflow: visible;
    padding-left: 0;
    margin-left: 0;
    max-height: 36px !important;
    height: 36px;
    background: #fff;
    border-bottom:1px solid #DEE2EE;
    .ivu-anchor{
        height: 100%;
        display: flex;
        padding-left: 0;
        .ivu-anchor-ink{
            width: 100%;
            height: 1px;
            bottom: 0;
            top:auto;
            &::before{
                display: none;
                background-color: #DEE2EE;
            }
        }
        .ivu-anchor-link{
            padding: 0;
            margin-right: 32px;
            height: 36px;
            line-height: 36px;
        }
        .ivu-anchor-ink-ball{
            display: none;
            width: 84px;
            height: 2px;
            background-color:#2373FF;
            border: none;
            border-radius: unset;
        }
        .ivu-anchor-link-active{
            border-bottom: 2px solid #2373FF;
            >.ivu-anchor-link-title{
                color:#2373FF;
            }
        }
        .ivu-anchor-link-title{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #636E95;
        }
    }
}
</style>
<style scoped lang="scss">
.user-protrait {
  padding: 0 24px 24px 24px;

	.top_title_container {
		width: 100%;
		height: 51px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 24px;
		.left_text {
			.left_title_text {
				height: 24px;
				display: flex;
				align-items: center;
				font-size: 18px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #242F57;
				margin-bottom: 4px;
				::v-deep .ivu-poptip {
					height: 24px;
				}
				.gif {
					width: 24px;
					height: 24px;
					cursor: pointer;
				}
			}
			.left_desc_text {
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #7C88B1;
			}
		}
		.right_btn {
			border: 1px solid rgba(255, 255, 255, 0.4);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 14px;
			cursor: pointer;
			width: 116px;
			height: 32px;
			background: #2373FF;
			box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
			border-radius: 4px;
			font-weight: 400;
			color: #FFFFFF;
			.manIcon {
				display: block;
				width: 24px;
				height: 24px;
				color: #FFFFFF;
			}
			.iconyonghuline{
				margin-right: 6px;
			}
      .zdyku{
        font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				text-align: center;
      }
		}
		.right_select{
			/*width: 300px;*/
			/*height: 32px;*/
			/*display: flex;*/
			/*align-items: center;*/
			/*justify-content: space-between;*/
			/*font-size: 14px;*/
			.select-btn {
				width: 112px;
				height: 32px;
				line-height: 32px;
				background: #2373FF;
				box-shadow: 3px 5px 10px 1px rgba(35, 115, 255, 0.3);
				border-radius: 4px;
				font-size: 14px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				text-align: center;
				cursor: pointer;

				 >i {
					font-size: 13px;
					margin-top: -1px;
					margin-right: 3px;
				 }
			}
			/*.select{*/
			/*	height: 32px;*/
			/*	background: #FFFFFF;*/
			/*	border-radius: 4px;*/
			/*}*/
		}
	}
	.top_title_container_margin_top{
		margin-top: 32px;
	}
	.yhdx_container {
		width: 100%;
		// background: #ffffff;
		// box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
		// border-radius: 12px;
		// border: 1px solid #EAEDF7;
		// padding: 24px;
		// box-sizing: border-box;
    .group_list_con{
      width: 100%;
      margin-bottom: 16px;
      .bjsbz_container{
        width: 100%;
        height: 98px;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        background: #FFFFFF;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 8px;
        // border: 1px solid #EAEDF7;
        .lef_area{
          width: 193px;
          height: 100%;
          border-right:1px solid #EAEDF7;
          border-radius: 8px 0 0 8px;
          .lef_area_top{
            width: 100%;
            height: 64px;
            display: flex;
            align-items: center;
            .actImg_container{
              width: 64px;
              .avatImg{
                width: 100%;
              }
            }
            .perinfo{
              flex: 1;
              height: 100%;
              padding: 8px 4px;
              box-sizing: border-box;
              .perinfo_t{
                width: 100%;
                font-size: 16px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242F57;
                margin-bottom: 4px;
              }
              .perinfo_b{
                width: 100%;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
              }
            }
          }
          .lef_area_bom{
            width: 100%;
            height: 35.3px;
            background: #DDE9FF;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #2373FF;
            border-radius: 0 0 0 8px;
            .originClass{
              color: rgb(254,122,79);
            }
            .blueClass{
              color: rgb(35,115,255);
            }
            span:nth-child(1){
              margin-right: 25px;
            }
            .squpImg{
              display: block;
              display: flex;
              align-items: center;
              width: 16px;
              height: 16px;
              margin-left: 36px;
              line-height: 22.75px;
            }
            &:hover{
              cursor: pointer;
            }
          }
        }
        .cen_area{
          flex: 1;
          height: 100%;
          .cen_areaImg{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .rig_area{
          width: 300px;
          height: 100%;
          border-left:1px solid #EAEDF7;
          padding:16px;
          padding-right: 5px;
          box-sizing: border-box;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          border-radius: 0 8px 0 0;
          .rig_area_lef{
            width: 150px;
            display: flex;
            flex-wrap: wrap;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #636E95;
            .yl_container,.gt_container,.gz_container,.xw_container,.sp_container,.xs_container{
              display: flex;
              align-items: center;
              margin-bottom: 10px;
              margin-right: 16px;
              .yl_lef{
                width: 8px;
                height: 8px;
                border-radius: 2px;
                margin-right: 4px;
              }
            }
          }
          .rig_area_rig{
            width: 120px;
            .rig_area_til{
              width: 100%;
              font-size: 14px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #242F57;
              margin-bottom: 3px;
            }
            .rig_area_icon{
              display: flex;
              .bqimg{
                display: block;
                width: 28px;
                height: 28px;
                margin-right: 8px;
              }
            }
          }
        }
        .rig_area1{
          background-color:#FFF;
        }
        .rigActive{
          background-color: #F0F8FF;
        }
      }
    }
  }

  .cdyhmj_container {
    width: 100%;
    min-height: 592px;
    background: #ffffff;
    box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    border-radius: 12px;
    border: 1px solid #EAEDF7;
    margin-top: 24px;
    padding: 20px 24px 24px 24px;
    box-sizing: border-box;
    .cdyhmj_title_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 24px;
      .cdyhmj_title {
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
      }
      .cdyhmj_title_desc {
        display: flex;
        align-items: center;
        &:hover{
          cursor: pointer;
        }
        .title_desc_txt {
          font-size: 14px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #7c88b1;
          margin-right: 4px;
        }
        .toRIcon {
          display: block;
          width: 16px;
          height: 16px;
        }
      }
    }
    .cdyhmj_content_container {
      width: 100%;
      min-height: 507px;
      border-radius: 8px;
      border: 1px solid #eaedf7;
      margin-top: 20px;
      .cdyhmj_content_top {
        width: 100%;
        min-height: 290px;
        border-bottom: 1px solid #eaedf7;
        display: flex;
        align-items: center;
        .cdyhmj_content_top_lef {
          width: 376px;
          height: 100%;
          padding: 24px;
          box-sizing: border-box;
          border-left: 1px solid #eaedf7;
          .cdyhmj_content_item {
            width: 100%;
          }
          .item1 {
            margin-bottom: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97a0c3;
          }
          .item2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .hg_txt {
              width: 12px;
              height: 1px;
              background: #c6cbde;
              border-radius: 2px;
            }
            .input_container {
              width: 144px;
              height: 40px;
              // box-shadow: 2px 2px 7px 0px rgba(210, 213, 225, 0.8),
              // -2px -2px 7px 0px #fffefa;
              // border-radius: 8px;
              // border: 1px solid #c6cbde;
              // padding: 4px;
              // box-sizing: border-box;
              // display: flex;
              // align-items: center;
              // .input1 {
              //   font-size: 24px;
              //   font-family: PingFangSC-Semibold, PingFang SC;
              //   font-weight: 600;
              //   color: #c5cadf;
              // }
              // .inpu2 {
              //   font-size: 24px;
              //   font-family: HelveticaNeue-Bold, HelveticaNeue;
              //   font-weight: bold;
              //   color: #242f57;
              // }
              .inpu23 {
                display: block;
                width: 6px;
                height: 32px;
                font-size: 24px;
                font-family: HelveticaNeue;
                color: #4488ff;
                line-height: 32px;
              }
            }
          }
          .item3 {
            margin-top: 16px;
            margin-bottom: 8px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97a0c3;
          }
          .item4 {
            height: 40px;
            margin-bottom: 16px;
            .inputIcon {
              width: 100%;
              height: 100%;
            }
          }
          .item5 {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            .item_xtt {
              padding: 9px 16px;
              background: #ecf3ff;
              border-radius: 8px;
              border: 1px solid #2373ff;
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #2373ff;
              margin-right: 8px;
            }
          }
        }
        .cdyhmj_content_top_ri {
          flex: 1;
          height: 100%;
          padding: 24px 25px;
          box-sizing: border-box;
          .cdyhmj_content_top_ri_tel {
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #97a0c3;
            margin-bottom: 8px;
          }
          .cal_item_container {
            width: 100%;
            height: 168px;
            background: #f7f9fd;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .cal_item,
            .cal_item1 {
              width: 52px;
              height: 120px;
              background: #ffffff;
              border-radius: 0 8px 8px 0;
              border: 1px solid #eaedf7;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              .cal_item_cal_item {
                width: 30px;
                height: 50px;
                background: #eaedf7;
                border-radius: 0 8px 8px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                .toLIcon {
                  width: 19px;
                  height: 19px;
                }
              }
            }
            .cal_item1 {
              display: flex;
              align-items: center;
              justify-content: flex-end;
              border-radius: 8px 0 0 8px;
              .cal_item_cal_item {
                border-radius: 8px 0 0 8px;
              }
            }
            .cal_item2 {
              width: 24%;
              height: 120px;
              background: #ffffff;
              border-radius: 8px;
              border: 1px solid #2373FF;
              padding: 12px;
              box-sizing: border-box;
              position: relative;
              .rt_choice {
                position: absolute;
                top: 6px;
                right: 10px;
                width: 16px;
                height: 16px;
              }
              .rt_choice2 {
                position: absolute;
                top: 6px;
                right: 10px;
                width: 16px;
                height: 16px;
              }
              .logo_container {
                width: 100%;
                height: 40px;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
                .logoImg {
                  width: 40px;
                  height: 40px;
                  display: block;
                  border: 1px solid #eaedf7;
                  border-radius: 51%;
                  margin-right: 8px;
                }
                .cal_txt {
                  font-size: 14px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: #242f57;
                }
              }
              .txt_area {
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
                display: flex;
                align-items: center;
                .txt_area11 {
                  margin-right: 20px;
                }
              }
              .per_area {
                display: flex;
                align-items: center;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #242f57;
                .per_area1 {
                  margin-right: 32px;
                }
              }
            }
            .cal_item21{
              border: 1px solid #EAEDF7;
            }
          }
          .cdyhmj_bom {
            margin-top: 22px;
            width: 100%;
            height: 24px;
            display: flex;
            align-items: center;
            .cdyhmj_bom_lef {
              width: 88px;
              height: 22px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #636e95;
              line-height: 22px;
            }
            .cdyhmj_bom_rig {
              flex: 1;
              display: flex;
              .cdyhmj_bom_rig1 {
                display: block;
                width: 24px;
                height: 24px;
                margin-right: 8px;
                border-radius: 50%;
              }
            }
          }
        }
      }
      .cdyhmj_content_bom {
        width: 100%;
        min-height: 217px;
        background: #f7f9fd;
        padding: 16px 24px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .cdyhmj_content_bom_lef {
          width:auto;
          height: 100%;
          .cdyhmj_content_bom_lef_top {
            width: 100%;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
            margin-bottom: 16px;
          }
          .cdyhmj_content_bom_lef_bom {
            width: 100%;
            display: flex;
            align-items: center;
            padding-right: 24px;
            justify-content: space-between;

            .echarts1 {
              &.echarts1box{
                width: 197px;
                margin-right: 24px;
              }
              &.echarts2box{
                width: 160px;
                margin-right: 8px;
              }
              height: 136px;
              box-sizing: border-box;
              border-radius: 8px;
              .echarts11 {
                width: 100%;
                min-height: 64px;
                background: #ffffff;
                border-radius: 8px;
                margin-bottom: 8px;
                padding: 6px 12px;
                box-sizing: border-box;
                .echarts111,
                .echarts112 {
                  width: 100%;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #97a0c3;
                }
                .echarts112 {
                  font-size: 24px;
                  font-family: PingFangSC-Semibold, PingFang SC;
                  font-weight: 600;
                  color: #2373FF;
                }
              }
              .echarts12 {
                widows: 100%;
                min-height: 64px;
                background: #ffffff;
                border-radius: 2px;
                padding: 6px 12px;
                box-sizing: border-box;
                .echarts121,
                .echarts122 {
                  width: 100%;
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #97a0c3;
                }
                .echarts122 {
                  height: 32px;
                  font-size: 24px;
                  font-family: HelveticaNeue-Bold, HelveticaNeue;
                  font-weight: bold;
                  color: #2373FF;
                }
              }
              .echarts13 {
                width: 100%;
                margin-bottom: 8px;
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #97a0c3;
              }
              .echarts14,
              .echarts15 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 8px;
                .echarts141,
                .echarts142 {
                  display: flex;
                  align-items: center;
                  .ech_Icon,
                  .ech_Icon1,.ech_Icon2 {
                    width: 8px;
                    height: 8px;
                    background: rgba(68, 136, 255, 0.85);
                    border-radius: 50%;
                    margin-right: 5px;
                  }
                  .ech_Icon1 {
                    background: rgba(164, 157, 250, 0.85);
                  }
                  .ech_Icon2 {
                    background: #FC809F;
                  }
                  .ech_time,
                  .ech_txt {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242f57;

                  }
                  .ech_txt {
                     width:70px;
                    // margin-right: 40px;
                  }
                }
              }
            }
            .ec1 {
              width:201px;
              background: #ffffff;
              padding:6px 12px;
            }
          }
        }
        .cdyhmj_content_bom_rig {
          flex:1;
          height: 100%;
          padding-left: 24px;
          box-sizing: border-box;
          border-left: 1px solid #eaedf7;
          .cdyhmj_content_bom_rig_top {
            width: 100%;
            margin-bottom: 16px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242f57;
          }
          .cdyhmj_content_bom_rig_bom {
            width: 100%;
            height: 136px;
            overflow: hidden;
            border-radius: 8px;
            .yhtIcon {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
    .da_container {
      width: 100%;
      min-height: 244px;
	  background: #FFFFFF;
	  box-shadow: 4px 6px 20px 0px rgba(134, 143, 191, 0.15);
	  border-radius: 8px;
      margin-top: 16px;
      padding: 24px;
      box-sizing: border-box;
      /*margin-bottom: 24px;*/
  }
  .mubiao_container {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
     margin-bottom: 24px;
    .mub_titl_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      .mub_titl_container1 {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
        display: flex;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242f57;
        .input1 {
          display: block;
          width: 473px;
          height: 32px;
        }
      }
    }
    .mb_echarts_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .mb_echarts1,
      .mb_echarts2 {
        width: 42%;
        height: 124px;
        background: #DFEDFE;
        border-radius: 8px;
        border: 1px solid #FFFFFF;
        padding: 0 29px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .mb_echarts1_lef{
          .mb_echarts1_lef_top{
            margin-bottom: 6px;
            .span1{
              line-height: 30px;
              font-size: 32px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: #2373FF;
            }
          }
          .mb_echarts1_lef_bom{
            padding: 4px 0;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #4D94FF;
            background: rgba(77, 148, 255, .2);
            border-radius: 4px;
            text-align: center;
            width: 100px;
          }
        }
        .mb_echarts2_empty_box1 {
          width: 147px;
          height: 38px;
          background: rgba(255, 136, 0, .2);
          border-radius: 3px;
        }
        .mb_echarts2_empty_box2 {
          width: 112px;
          height: 32px;
          background: rgba(255, 136, 0, .2);
          border-radius: 3px;
        }
        .mb_echarts1_rig{
          width: 160px;
          height: 90px;
          border-left: 1px solid rgba(131, 181, 255, .2);

          .tu20{
            margin-left: 71px;
            display: block;
            width: 90px;
            height: 90px;
          }
        }
      }
      .vscls {
        width: 80px;
        height: 80px;
        background: #F1F6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        border-radius: 50%;
        font-size: 24px;
        font-family: Archivo-Bold, Archivo;
        font-weight: bold;
        color: #636E95;
        line-height: 32px;
        text-shadow: 1px 1px 1px #242F57;
        -webkit-text-fill-color: transparent;
      }
      .mb_echarts2 {
        background: rgba(255, 136, 0, 0.1);
        border-radius: 8px;
        border: 1px solid #FFFFFF;
      }
    }
  }

  .row_title {
    width: 100%;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 24px;
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #242f57;
  }

  .jichuhuax_area_container {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .jichuhuax_area_til {
      width: 100%;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
    }
    .jichuhuax_echarts_container {
      width: 100%;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .jichuhuax_echarts_item {
        position: relative;
        width: 49%;
        height: 446px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #eaedf7;
        margin-bottom: 24px;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .jichuhuax_echarts_item_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .jichuhuax_echarts_item_title_lef {
            .nljg {
				font-size: 16px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #242F57;
            }
            .range_titme {
                margin-top: 4px;
				font-size: 12px;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #636E95
            }
            .range_data{
              width: 340px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .range_data_left{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #7C88B1;
                span{
                  font-size: 30px;
                  font-family: HelveticaNeue-Medium, HelveticaNeue;
                  font-weight: 500;
                  color: #242F57;
                }
              }
              .range_data_right{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
              }
            }
            .range_data1{
              width: 340px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .range_data_left{
                  font-size: 12px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #7C88B1;
                  display: flex;
                  align-items: center;
                  .range_data_box1{
                    display: flex;
                    align-items: center;
                    margin-right: 13px;
                    .pic{
                      width: 14px;
                    }
                    span{
                      color:#FB343E
                    }
                  }
                // span{
                //   font-size: 30px;
                //   font-family: HelveticaNeue-Medium, HelveticaNeue;
                //   font-weight: 500;
                //   color: #242F57;
                // }
              }
              .range_data_right{
                  font-size: 14px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #242F57;
              }
            }
          }
          .jichuhuax_echarts_item_title_rig {
            position: absolute;
            width: 16px;
            height: 16px;
            right:16px;
            top:16px;
            .threeP {
              display: block;
              width: 100%;
            }
          }
        }
        .jichuhuax_echarts_item_content{
          flex:1
        }
      }
    }
  }

  .xwfx_area_container {
    width: 100%;
    background: #ffffff;
    // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    /*border-bottom: 1px solid #EAEDF7;*/
    // padding: 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /*padding-top: 24px;*/
    .xwfx_area_til {
      display: flex;
      align-items: center;
      width: 100%;
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      ::v-deep .ivu-poptip{
        height: 24px;
      }
      .gif{
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .ditu_area {
      width: 100%;
      background-color: silver;
      margin-bottom: 24px;
    }
    .use_app_area {
      width: 100%;
      margin-bottom: 24px;
    }
    .use_echart_item {
      width: 100%;
	  padding: 16px;
      height: 400px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #eaedf7;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      .use_echart_title{
		  font-size: 16px;
		  font-family: PingFangSC-Regular, PingFang SC;
		  font-weight: 400;
		  color: #242F57;
      }
      .use_echart_cont{
        flex:1;
      }
    }
    .use_echart_item1_container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .use_echart_item1 {
		padding: 16px;
        width: 49%;
        height: 450px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #eaedf7;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        .use_echart_title{
			/*padding:16px 16px 0 16px;*/
			font-size: 16px;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #242F57
        }
        .use_echart_cont{
          flex:1
        }
      }
    }
  }

  .xzfx_area_container {
    width: 100%;
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    /*padding-top: 24px;*/
    .xzfx_area_title {
      display: flex;
      align-items: center;
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242f57;
      ::v-deep .ivu-poptip{
        height: 24px;
      }
      .gif{
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .yhsj_echarts,
    .xzsk_echarts {
      width: 100%;
      height: 336px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #eaedf7;
      margin-bottom: 24px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      .yhsj_echarts_item_title{
		  font-size: 16px;
		  font-family: PingFangSC-Regular, PingFang SC;
		  font-weight: 400;
		  color: #242F57;
      }
      .yhsj_echarts_item_content{
        flex:1
      }
    }
    .xinzfb_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .xinzfb_container_lef,
      .xinzfb_container_rig {
        width: 49%;
        height: 429px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid #eaedf7;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .xinzfb_container_lef_tel, .xinzfb_container_rig_tel {
          width: 100%;
	        font-size: 16px;
	        font-family: PingFangSC-Regular, PingFang SC;
	        font-weight: 400;
	        color: #242F57;
	        line-height: 24px;
	        display: flex;
	        justify-content: space-between;
	        .custom_poptip_box{
		        position: relative;
		        .custom_poptip_result{
			        cursor: pointer;
		        }
		        .custom_poptip_content{
			        width: 192px;
			        height: 203px;
			        position: absolute;
              padding: 8px 0;
			        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
			        background: #FFFFFF;
			        border-radius: 4px;
			        overflow-y: auto;
			        right: 0;
			        z-index: 2;
		        }
		        .item{
			        width: 192px;
			        height: 31px;
			        display: flex;
			        align-items: center;
			        padding-left: 13px;
			        cursor: pointer;
			        &:hover{
				        background: #F5F5F5;
			        }
		        }
		        .item.select{
			        color: #407AFF;
		        }
	        }
        }
        .xinzfb_container_lef_content {
          flex:1;
          .xinzfb_container_lef_content_chart{
            height: 230px;
			border-bottom: 1px solid #F0F0F0;
          }
          .xinzfb_container_lef_content_chart_match{
			margin-top: 12px;
            height: 100px;
            display: flex;
            .xinzfb_container_lef_content_chart_match_item{
              flex: 1;
            }
          }
        }
      }
    }
    .ppxz_container {
      margin-top: 24px;
      width: 100%;
      height: 523px;
      padding: 16px;
      box-sizing: border-box;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #eaedf7;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      .ppxz_title {
        width: 100%;
	    font-size: 16px;
	    font-family: PingFangSC-Regular, PingFang SC;
	    font-weight: 400;
	    color: #242F57;
        margin-bottom: 4px;
      }
      .ppxz_title_desc {
        width: 100%;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #636E95;
      }
      .bottom{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 138px;
        margin-top: 24px;
        .pricle,.month,.view,.target{
          width: 24%;
          height: 138px;
        }
      }
      .xinzfb_container_lef_content{
        flex:1
      }
    }
    .xzcb_container {
      width: 100%;
      height: 292px;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #eaedf7;
      padding: 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .ppxz_title {
        width: 100%;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #242F57;
        margin-bottom: 4px;
      }
      .ppxz_title_desc {
        width: 100%;
		font-size: 12px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #636E95;
      }
      .xinzfb_container_lef_content{
        flex:1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .xinzfb_container_lef_content_item{
          text-align: center;
          .demo-Circle-inner{
            font-size: 18px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #242F57;
            line-height: 24px;
          }
          .name{
            margin-top: 16px;
          }
        }
      }
      .xinzfb_container_lef_content_desc{
		  font-size: 12px;
		  font-family: PingFangSC-Regular, PingFang SC;
		  font-weight: 400;
		  color: #636E95;
      }

    }
  }

  .smzqfx_area_container{
    width: 100%;
    background: #FFFFFF;
    // box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
    // border-radius: 12px;
    //border: 1px solid #EAEDF7;
    /*padding-top: 24px;*/
    box-sizing: border-box;
    .smzqfx_title{
      width: 100%;
      margin-bottom: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #242F57;
    }
    .xfsmlcpg_container{
      width: 100%;
      height: 500px;
      background: #FFFFFF;
      border-radius: 8px;
      border: 1px solid #EAEDF7;
      padding: 16px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .xfsmlcpg_title{
        width: 100%;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #242F57;
      }
      .xinzfb_container_lef_content{
        flex:1
      }
      .xinzfb_container_lef_content1{
        width: 60%;
        margin: 24px auto 0;
        flex:1
      }
    }
    .xfjzg_container{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
      .xfjzg_container_lef,.xfjzg_container_rig{
        width: 49%;
        height: 377px;
        background: #FFFFFF;
        border-radius: 8px;
        border: 1px solid #EAEDF7;
        padding: 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .jichuhuax_echarts_item_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .jichuhuax_echarts_item_title_lef {
			  .nljg {
				  font-size: 16px;
				  font-family: PingFangSC-Regular, PingFang SC;
				  font-weight: 400;
				  color: #242F57;
			  }
			  .range_titme {
				  margin-top: 4px;
				  font-size: 12px;
				  font-family: PingFangSC-Regular, PingFang SC;
				  font-weight: 400;
				  color: #636E95
			  }
          }
          .jichuhuax_echarts_item_title_rig {
            width: 16px;
            height: 16px;
            .threeP {
              display: block;
              width: 100%;
            }
          }
        }
        .jichuhuax_echarts_item_content{
          flex:1
        }
      }
    }
    .xfzsxjcfx_container{
      width: 100%;
      min-height: 312px;
      background: #FFFFFF;
      border-radius: 8px;
      border: 1px solid #EAEDF7;
      margin-top: 24px;
      padding: 16px;
      box-sizing: border-box;
      display:flex;
      flex-direction: column;
      .xfzsxjcfx_til{
        width: 100%;
        height: 21px;
		font-size: 16px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #242F57;
        margin-bottom: 15px;
      }
      .xfzsxjcfx_ech{
        flex:1;
        height: 290px;
      }
    }
  }
}
img{
  width: 100%;
  display: block;
}
</style>
