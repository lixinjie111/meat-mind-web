<template>
    <div class="mark-overview">
        <div class="title">品牌概览</div>
        <div class="show-main"></div>
        <div class="mark-panel">
            <div class="title">
                行业趋势
            </div>
            <Row :gutter="24">
                <Col span="8">
                    <div class="box">
                        <div class="title">
                            市场前景
                        </div>
                        <div class="subTitle">
                            市场规模 <span style="color:#8AE6C7">稳步上升</span>，市场供需 <span style="color:#FF9F7F">基本平衡</span>，市场前景 <span style="color:#FF9F7F">良好</span>
                        </div>
                        <div class="echartBox">
                            <barLine id="box101" :colorList="$lxjData.colorList" :myData="$lxjData.box101Data"></barLine>
                        </div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="box">
                    <div class="title">
                            品牌市场销售额排名（百万元）
                        </div>
                        <div class="tags">
                            <div class="tagList">
                                <div class="tag" v-for="item in tagList" :key="item">{{item}}
                                    <!-- <i class="iconfont2 iconicon_close"></i> -->
                                </div>
                                <!-- <Tag v-if="show" closable @on-close="handleClose">标签三</Tag> -->
                            </div>
                            <SerachPoptip slot="left-operation" @submit="search"></SerachPoptip>
                        </div>
                        <div class="echartBox">
                            <barL id="box240" :colorList="$lxjData.colorList" :myData="box240Data"></barL>
                        </div>
                    </div>
                </Col>
                <Col span="8">
                    <div class="box">
                        <div class="title">
                            舆情声量
                        </div>
                            <div class="selectNav">
                                <div class="selectDiv selectLf">
                                   <div class="selectLabel"> 声量类型</div>
                                    <Select v-model="formItem.select" size="small" style="width:80px" @on-change="selectYin">
                                        <Option value="2">全部</Option>
                                        <Option value="0">仅正面声量</Option>
                                        <Option value="1">仅负面声量</Option>
                                    </Select>
                                </div>
                                <div class="selectDiv selectRt">
                                    <div class="selectLabel">对标比较</div>
                                    <Select v-model="formItem.pinpai" size="small" multiple  :max-tag-count="0" style="width:100px;" @on-change="selectPai2">
                                        <Option value="0">加多宝</Option>
                                        <Option value="1">王老吉</Option>
                                        <Option value="2">和其正</Option>
                                        <Option value="3">白云山</Option>
                                        <!-- <Option value="4">清心堂</Option> -->
                                    </Select>
                                </div>
                            </div>
                        <div class="echartBox">
                            <lineM3 id="box68" :colorList="$lxjData.colorList" :myData="my68Data"></lineM3>
                        </div>
                    </div>
                </Col>
            </Row>
            <div class="mark-panel1">
                <div class="title">
                    新增客户变化趋势
                </div>
                <div class="subTitle">
                   近期 北京 用户新增量最大，女性占比 环比增加 2.3%，年龄偏向年轻态
                </div>
                <div class="selectOiv">
                    <Select v-model="formItem.date" size="small" style="width:140px" @on-change="selectDate">
                        <Option value="0">按月</Option>
                        <Option value="1">按季度</Option>
                    </Select>
                </div>
                <Row :gutter="8">
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按地区
                            </div>
                            <div class="boxsubTitle">
                                北京地区新增势头正旺
                            </div>
                            <div class="boxEcharts">
                                <barM id="box40" :colorList="$lxjData.colorList" :myData="myMonth0"></barM>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按性别
                            </div>
                            <div class="boxsubTitle">
                                女性比例增加
                            </div>
                            <div class="boxEcharts">
                                <barM id="box41" :colorList="$lxjData.colorList" :myData="myMonth1"></barM>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按年龄
                            </div>
                            <div class="boxsubTitle">
                                新客趋于年轻化
                            </div>
                            <div class="boxEcharts">
                                <barM id="box42" :colorList="$lxjData.colorList" :myData="myMonth2"></barM>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按职业
                            </div>
                            <div class="boxsubTitle">
                                职场达人比例有所提升
                            </div>
                            <div class="boxEcharts">
                                <barM id="box43" :colorList="$lxjData.colorList" :myData="myMonth3"></barM>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按收入
                            </div>
                            <div class="boxsubTitle">
                                中收入人群正成为购买主力
                            </div>
                            <div class="boxEcharts">
                                <barM id="box44" :colorList="$lxjData.colorList" :myData="myMonth4"></barM>
                            </div>
                        </div>
                    </Col>
                    <Col span="4">
                        <div class="boxContent">
                            <div class="boxTitle">
                                按教育
                            </div>
                            <div class="boxsubTitle">
                                学生正逐渐成为购买主力
                            </div>
                            <div class="boxEcharts">
                                <barM id="box45" :colorList="$lxjData.colorList" :myData="myMonth5"></barM>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div class="mark-panel1">
                <div class="title">
                    典型客户画像对比
                </div>
                <Row>
                    <Col span="8">
                        <div class="boxContainer">
                            <div class="boxTitle">
                                我的品牌:<span>邓老凉茶</span>
                            </div>
                            <div class="boxEcharts1">
                                <div class="box1">
                                    <barHM2 id="box11411" :colorList="$lxjData.colorList" :myData="$lxjData.box11411Data"></barHM2>
                                </div>
                                <div class="box1">
                                    <barHM2 id="box11421" :colorList="$lxjData.colorList" :myData="$lxjData.box11421Data"></barHM2>
                                </div>
                                <div class="box1">
                                    <barHM2 id="box11431" :colorList="$lxjData.colorList" :myData="$lxjData.box11431Data"></barHM2>
                                </div>
                            </div>
                            <div class="label">
                                <div class="labelName">
                                    标签
                                </div>
                                <div class="labelTags">
                                    <span class="labelTag">养生</span>
                                    <span class="labelTag">国医秘方</span>
                                    <span class="labelTag">民族荣誉感</span>
                                    <span class="labelTag">疫情防护</span>
                                    <span class="labelTag">药食一体</span>
                                </div>
                            </div>
                            <div class="label">
                                <div class="labelName">
                                    认知顾虑
                                </div>
                                <div class="labelTags">
                                    <span class="labelTag">线下门店少</span>
                                    <span class="labelTag">味苦</span>
                                </div>
                            </div>
                            <div class="label">
                                <div class="labelName">
                                    敏感词
                                </div>
                                <div class="labelTags">
                                    <span class="labelTag">凉茶非药</span>
                                    <span class="labelTag">国医</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span="8">
                        <div class="boxContainer boxContainer1">
                            <div class="selectPiv">
                                <Select v-model="formItem.pinpai1" size="small" style="width:110px" @on-change="selectPai">
                                        <Option value="0">王老吉</Option>
                                        <Option value="1">加多宝</Option>
                                        <Option value="2">和其正</Option>
                                        <Option value="3">白云山</Option>
                                        <Option value="4">清心堂</Option>
                                        <Option value="5">潘高寿</Option>
                                </Select>
                            </div>
                            <template v-if="formItem.pinpai1==0">
                                <div class="boxTitle">
                                    对标品牌:<span>王老吉</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">聚会白领</span>
                                        <span class="labelTag">火锅爱好者</span>
                                        <span class="labelTag">k歌之王</span>
                                        <span class="labelTag">中华老字号</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">不够正宗</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">同质化包装</span>
                                        <span class="labelTag">假冒伪劣</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai1==1">
                                <div class="boxTitle">
                                    对标品牌:<span>加多宝</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">红罐喜庆</span>
                                        <span class="labelTag">防上火</span>
                                        <span class="labelTag">销量领先</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">法律纠纷致使口味变化</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">装弱势</span>
                                        <span class="labelTag">博眼球</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai1==2">
                                <div class="boxTitle">
                                    对标品牌:<span>和其正</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">年轻态</span>
                                        <span class="labelTag">运动爱好者</span>
                                        <span class="labelTag">超大瓶装</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">补给能量功能性略差</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">篡改生产日期 </span>
                                        <span class="labelTag">望风使舵</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai1==3">
                                <div class="boxTitle">
                                    对标品牌:<span>白云山</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">清热解毒</span>
                                        <span class="labelTag">适合北方人体质</span>
                                        <span class="labelTag">滋阴补气</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">宣传力度差，没有了解品牌的途径</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">性价比低</span>
                                        <span class="labelTag">内部贪腐</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai1==4">
                                <div class="boxTitle">
                                    对标品牌:<span>清心堂</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">聚会白领</span>
                                        <span class="labelTag">火锅爱好者</span>
                                        <span class="labelTag">k歌之王</span>
                                        <span class="labelTag">中华老字号</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">不够正宗</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">同质化包装</span>
                                        <span class="labelTag">假冒伪劣</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai1==5">
                                <div class="boxTitle">
                                对标品牌:<span>潘高寿</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="box11410" :colorList="$lxjData.colorList" :myData="myData1"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11420" :colorList="$lxjData.colorList" :myData="myData2"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="box11430" :colorList="$lxjData.colorList" :myData="myData3"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">年轻人</span>
                                        <span class="labelTag">口腔保健达人</span>
                                        <span class="labelTag">足球爱好者</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">味道差</span>
                                        <span class="labelTag">没名气</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">代购</span>
                                        <span class="labelTag">性价比</span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </Col>
                    <Col span="8">
                        <div class="boxContainer boxContainer2">
                            <div class="selectPiv">
                                <Select v-model="formItem.pinpai2" size="small" style="width:110px" @on-change="selectPai1">
                                        <Option value="0">王老吉</Option>
                                        <Option value="1">加多宝</Option>
                                        <Option value="2">和其正</Option>
                                        <Option value="3">白云山</Option>
                                        <Option value="4">清心堂</Option>
                                        <Option value="5">潘高寿</Option>
                                </Select>
                            </div>
                            <template v-if="formItem.pinpai2==0">
                                <div class="boxTitle">
                                    对标品牌:<span>王老吉</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">聚会白领</span>
                                        <span class="labelTag">火锅爱好者</span>
                                        <span class="labelTag">k歌之王</span>
                                        <span class="labelTag">中华老字号</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">不够正宗</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">同质化包装</span>
                                        <span class="labelTag">假冒伪劣</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai2==1">
                                <div class="boxTitle">
                                    对标品牌:<span>加多宝</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">红罐喜庆</span>
                                        <span class="labelTag">防上火</span>
                                        <span class="labelTag">销量领先</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">法律纠纷致使口味变化</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">装弱势</span>
                                        <span class="labelTag">博眼球</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai2==2">
                                <div class="boxTitle">
                                    对标品牌:<span>和其正</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">年轻态</span>
                                        <span class="labelTag">运动爱好者</span>
                                        <span class="labelTag">超大瓶装</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">补给能量功能性略差</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">篡改生产日期 </span>
                                        <span class="labelTag">望风使舵</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai2==3">
                                <div class="boxTitle">
                                    对标品牌:<span>白云山</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">清热解毒</span>
                                        <span class="labelTag">适合北方人体质</span>
                                        <span class="labelTag">滋阴补气</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">宣传力度差，没有了解品牌的途径</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">性价比低</span>
                                        <span class="labelTag">内部贪腐</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai2==4">
                                <div class="boxTitle">
                                    对标品牌:<span>清心堂</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">聚会白领</span>
                                        <span class="labelTag">火锅爱好者</span>
                                        <span class="labelTag">k歌之王</span>
                                        <span class="labelTag">中华老字号</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">不够正宗</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">同质化包装</span>
                                        <span class="labelTag">假冒伪劣</span>
                                    </div>
                                </div>
                            </template>
                            <template v-if="formItem.pinpai2==5">
                                <div class="boxTitle">
                                对标品牌:<span>潘高寿</span>
                                </div>
                                <div class="boxEcharts1">
                                    <div class="box1">
                                        <barHM2 id="bx11410" :colorList="$lxjData.colorList" :myData="myData4"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11420" :colorList="$lxjData.colorList" :myData="myData5"></barHM2>
                                    </div>
                                    <div class="box1">
                                        <barHM2 id="bx11430" :colorList="$lxjData.colorList" :myData="myData6"></barHM2>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        标签
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">年轻人</span>
                                        <span class="labelTag">口腔保健达人</span>
                                        <span class="labelTag">足球爱好者</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        认知顾虑
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">味道差</span>
                                        <span class="labelTag">没名气</span>
                                    </div>
                                </div>
                                <div class="label">
                                    <div class="labelName">
                                        敏感词
                                    </div>
                                    <div class="labelTags">
                                        <span class="labelTag">代购</span>
                                        <span class="labelTag">性价比</span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>
<script>
import barL from '../../../components/echarts/common/bar/barL';
import barM from '../../../components/echarts/common/bar/barM';
import barHM2 from '../../../components/echarts/common/bar/barHM2';
import barLine from '../../../components/echarts/common/bar/barLine';
import SerachPoptip from '../../../components/common/SerachPoptip1';
import lineM3 from '../../../components/echarts/common/line/lineM3';
export default {
    name:"view",
    components:{barL,barM,barHM2,barLine,SerachPoptip,lineM3},
    data(){
        return {
            tagList:['华东地区'],
            formItem: {
                select: '2',
                pinpai:['0'],
                pinpai1:'0',
                pinpai2:'5',
                date:'0'
            },
            box682Data:{
                legName:['加多宝','王老吉','和其正','白云山',],
                name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                value: [
                    {
                        name: '加多宝',
                        type: 'line',
                        data: [631, 607, 605, 581, 671, 645, 351, 390, 490, 450]
                    },
                    {
                        name: '王老吉',
                        type: 'line',
                        data: [831, 207, 405, 381, 271, 445, 151, 290, 390, 750]
                    },
                    {
                        name: '和其正',
                        type: 'line',
                        data: [131, 207, 305, 481, 571, 645, 751, 890, 910, 980]
                    },
                    {
                        name: '白云山',
                        type: 'line',
                        data: [231, 307, 105, 481, 371, 545, 351, 790, 890, 380]
                    },
                ]
            }, 
            box240Data:this.$lxjData.box240Data,
            my68Data:this.$lxjData.box68Data,
            myMonth0:this.$lxjData.box40Data,
            myMonth1:this.$lxjData.box41Data,
            myMonth2:this.$lxjData.box42Data,
            myMonth3:this.$lxjData.box43Data,
            myMonth4:this.$lxjData.box44Data,
            myMonth5:this.$lxjData.box45Data,  
            myData1:this.$lxjData.box11410Data,
            myData2:this.$lxjData.box11420Data,
            myData3:this.$lxjData.box11430Data,  
            myData4:this.$lxjData.box1141Data,
            myData5:this.$lxjData.box1142Data,
            myData6:this.$lxjData.box1143Data,                               
        } 
    },
    methods:{
        search(params){
            this.num++;
            let arr=[...params.age,...params.area,...params.customer,...params.profession,...params.sex,]
            console.log(arr);
            if(arr.length>3){
                arr=[arr[0],arr[1],arr[2]]
            }
            this.tagList=arr;
            if(this.num%2!=0){
                this.box240Data=this.$lxjData.box2401Data
            }else{
                this.box240Data=this.$lxjData.box240Data
            }
        },
        selectYin(val){
             let obj={
                legName:['邓老凉茶', ],
                name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                value:[
                     {
                        name: '邓老凉茶',
                        type: 'line',
                        data: [272, 290, 393, 391, 470, 451, 440, 902, 670, 531]
                    },
                ],
            };
            if(val==2){
                this.box682Data={
                    legName:['加多宝','王老吉','和其正','白云山',],
                    name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                    value: [
                        {
                            name: '加多宝',
                            type: 'line',
                            data: [631, 607, 605, 581, 671, 645, 351, 390, 490, 450]
                        },
                        {
                            name: '王老吉',
                            type: 'line',
                            data: [831, 207, 405, 381, 271, 445, 151, 290, 390, 750]
                        },
                        {
                            name: '和其正',
                            type: 'line',
                            data: [131, 207, 305, 481, 571, 645, 751, 890, 910, 980]
                        },
                        {
                            name: '白云山',
                            type: 'line',
                            data: [231, 307, 105, 481, 371, 545, 351, 790, 890, 380]
                        },
                    ]
                }
            }
            if(val==1){
                this.box682Data={
                    legName:['加多宝','王老吉','和其正','白云山',],
                    name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                    value: [
                        {
                            name: '加多宝',
                            type: 'line',
                            data: [631, 607, 605, 181, 671, 645, 351, 390, 490, 450]
                        },
                        {
                            name: '王老吉',
                            type: 'line',
                            data: [831, 107, 405, 381, 271, 445, 151, 290, 390, 750]
                        },
                        {
                            name: '和其正',
                            type: 'line',
                            data: [131, 207, 305, 481, 571, 245, 751, 890, 910, 980]
                        },
                        {
                            name: '白云山',
                            type: 'line',
                            data: [231, 307, 405, 481, 371, 545, 351, 790, 890, 380]
                        },
                    ]
                }
            }
            if(val==0){
                this.box682Data={
                    legName:['加多宝','王老吉','和其正','白云山',],
                    name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                    value: [
                        {
                            name: '加多宝',
                            type: 'line',
                            data: [331, 607, 605, 581, 671, 645, 351, 390, 490, 450]
                        },
                        {
                            name: '王老吉',
                            type: 'line',
                            data: [831, 207, 305, 381, 271, 445, 151, 290, 390, 750]
                        },
                        {
                            name: '和其正',
                            type: 'line',
                            data: [131, 207, 305, 381, 571, 645, 751, 890, 910, 980]
                        },
                        {
                            name: '白云山',
                            type: 'line',
                            data: [231, 307, 105, 181, 371, 545, 351, 790, 890, 380]
                        },
                    ]
                }
            }
             this.formItem.pinpai.forEach(item=>{
                obj.legName.push(this.box682Data.legName[item])
                obj.value.push(this.box682Data.value[item])
            })
            this.my68Data=obj;
        },
        selectPai2(val){
            let obj={
                legName:['邓老凉茶', ],
                name:  ['2020年12月11日', '2020年12月12日', '2020年12月13日', '2020年12月14日', '2020年12月15日', '2020年12月16日', '2020年12月17日', '2020年12月18日', '2020年12月19日', '2020年12月20日'],
                value:[
                     {
                        name: '邓老凉茶',
                        type: 'line',
                        data: [272, 290, 393, 391, 470, 451, 440, 902, 670, 531]
                    },
                ],
            };
            val.forEach(item=>{
                obj.legName.push(this.box682Data.legName[item])
                obj.value.push(this.box682Data.value[item])
            })
            this.my68Data=obj;
        },    
        selectPai1(val){
            if(val==0){
                this.myData4=this.$lxjData.box11410Data;
                this.myData5=this.$lxjData.box11420Data;
                this.myData6=this.$lxjData.box11430Data;
            }
            if(val==1){
                this.myData4=this.$lxjData.box11412Data;
                this.myData5=this.$lxjData.box11422Data;
                this.myData6=this.$lxjData.box11432Data;
            }
            if(val==2){
                this.myData4=this.$lxjData.box11413Data;
                this.myData5=this.$lxjData.box11423Data;
                this.myData6=this.$lxjData.box11433Data;
            }
            if(val==3){
                this.myData4=this.$lxjData.box11414Data;
                this.myData5=this.$lxjData.box11424Data;
                this.myData6=this.$lxjData.box11434Data;
            }
            if(val==4){
                this.myData4=this.$lxjData.box11415Data;
                this.myData5=this.$lxjData.box11425Data;
                this.myData6=this.$lxjData.box11435Data;
            }
            if(val==5){
                this.myData4=this.$lxjData.box1141Data;
                this.myData5=this.$lxjData.box1142Data;
                this.myData6=this.$lxjData.box1143Data;
            }
        },
        selectDate(val){
            if(val==0){
                this.myMonth0=this.$lxjData.box40Data;
                this.myMonth1=this.$lxjData.box41Data;
                this.myMonth2=this.$lxjData.box42Data;
                this.myMonth3=this.$lxjData.box43Data;
                this.myMonth4=this.$lxjData.box44Data;
                this.myMonth5=this.$lxjData.box45Data;
            }
            if(val==1){
                this.myMonth0=this.$lxjData.box401Data;
                this.myMonth1=this.$lxjData.box411Data;
                this.myMonth2=this.$lxjData.box421Data;
                this.myMonth3=this.$lxjData.box431Data;
                this.myMonth4=this.$lxjData.box441Data;
                this.myMonth5=this.$lxjData.box451Data;
            }
        },  
        selectPai(val){
            if(val==0){
                this.myData1=this.$lxjData.box11410Data;
                this.myData2=this.$lxjData.box11420Data;
                this.myData3=this.$lxjData.box11430Data;
            }
            if(val==1){
                this.myData1=this.$lxjData.box11412Data;
                this.myData2=this.$lxjData.box11422Data;
                this.myData3=this.$lxjData.box11432Data;
            }
            if(val==2){
                this.myData1=this.$lxjData.box11413Data;
                this.myData2=this.$lxjData.box11423Data;
                this.myData3=this.$lxjData.box11433Data;
            }
            if(val==3){
                this.myData1=this.$lxjData.box11414Data;
                this.myData2=this.$lxjData.box11424Data;
                this.myData3=this.$lxjData.box11434Data;
            }
            if(val==4){
                this.myData1=this.$lxjData.box11415Data;
                this.myData2=this.$lxjData.box11425Data;
                this.myData3=this.$lxjData.box11435Data;
            }
            if(val==5){
                this.myData1=this.$lxjData.box1141Data;
                this.myData2=this.$lxjData.box1142Data;
                this.myData3=this.$lxjData.box1143Data;
            }
        },                                  
    }
}
</script>
<style scoped lang="scss">
.mark-overview{
    height: 100%;
    overflow-y: scroll;
    padding: 0 24px 24px;
    .title{
        height: 64px;
        padding: 16px 24px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #242F57;
    }
    .show-main{
        width: 100%;
        height: 500px;
        background: #FFFFFF;
        border-radius: 12px;
    }
     .mark-panel{
        margin:24px 0;
        padding: 24px;
        box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
        border-radius: 12px;
        border: 1px solid #EAEDF7;
        background: #fff;
        .mark-panel1{
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            margin: 24px 0;
            position: relative;
            padding: 16px;
             .title{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                margin-bottom: 4px;
           }
            .subTitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                 margin-bottom: 16px;
            }
            .selectOiv{
                position: absolute;
                width: 120px;
                right: 26px;
                top:16px
            }
            .boxContent{
                display: flex;
                flex-direction: column;
                .boxTitle{
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #242F57;
                    line-height: 22px;
                }
                .boxsubTitle{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px;
                }
                .boxEcharts{
                   height: 180px;
                }
            }
            .boxContainer{
                display: flex;
                flex-direction: column;
                margin-top: 16px;
                border-right: 1px solid #EAEDF7;
                position: relative;
                .selectPiv{
                    position: absolute;
                    top:0;
                    right: 16px;
                }
                &.boxContainer1{
                    padding-left: 16px;
                }
                &.boxContainer2{
                    padding-left: 16px;
                    border:none
                }
                .boxTitle{
                    font-size: 14px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #636E95;
                    span{
                        color:#242F57
                    }
                }
                .boxEcharts1{
                    margin-top: 5px;
                    margin-bottom: 8px;
                   .box1{
                       height: 35px;
                   }
                }
                .label{
                    display: flex;
                    align-items: baseline;
                    margin-bottom: 8px;
                    margin-left: 4px;
                    .labelName{
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #636E95;
                    }
                    .labelTags{
                        flex:1;
                        .labelTag{
                            display: inline-block;
                            margin-left: 8px;
                            margin-bottom: 4px;
                            padding:3px 8px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #2373FF;
                            background: rgba(221, 233, 255, 0.5);
                            border-radius: 4px;
                        }
                    }
                }
            }
        }
         .title{
            font-size: 18px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #242F57;
            margin-bottom: 24px;
         }
         .box{
             padding: 16px;
             height: 268px;
            border-radius: 8px;
            border: 1px solid #EAEDF7;
            display: flex;
            flex-direction: column;
            .title{
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #242F57;
                 margin-bottom: 8px;
            }
             .selectNav{
                display: flex;
                justify-content: space-between;
                 ::v-deep .ivu-form-item{
                       margin-bottom: 0;
                    }
                 ::v-deep .ivu-form-item-label{
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #242F57;
                        padding-top:0;
                        padding-bottom:0;
                    }
                    .selectDiv{
                        display: flex;
                        align-items: center;
                        flex:1;
                         &.selectLf{
                            //  margin-right: 8px;
                         }
                        .selectLabel{
                            font-size: 12px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #242F57;
                            margin-right: 5px;
                        }
                    }
             }
            .tags{
                display: flex;
                justify-content: space-between;
                .operate{
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #636E95;
                    line-height: 18px;
                    cursor: pointer;
                }
                .tagList{
                    display: flex;
                    .tag{
                        margin-right: 8px;
                        display: flex;
                        padding:3px 8px;
                        font-size: 12px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #2373FF;
                        background: rgba(221, 233, 255, 0.5);
                        border-radius: 4px;
                        align-items: center;
                        i{
                            margin-left: 3px;
                            font-size: 10px;
                            cursor: pointer;
                        }
                    }
                }
            }

            .subTitle{
                font-size: 12px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #636E95;
                line-height: 18px;
            }
            .echartBox{
                flex:1
            }
         }
     }
}
</style>