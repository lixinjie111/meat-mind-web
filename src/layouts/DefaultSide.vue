<template>
    <div class="menu">
        <div class="logo" @click="back"></div>
        <Menu ref="side_menu"
              theme="light"
              :active-name="activeName"
              :open-names="openName"
              @on-select="handleSelect"
              @on-open-change="openChange"
              width="auto"
              accordion>
            <div v-for="(item, index) in menu" :key="index">
                <Submenu v-if="item.children" :name="item.name">
                    <template slot="title">
                        <i class="icon iconfont" :class="item.icon"></i>
                        <span class="title-name">{{ item.label }}</span>
                    </template>
                    <MenuItem v-for="(ele, i) in item.children"
                              :to="ele.path"
                              :name="ele.name"
                              :key="i">
                        <span class="sub-name">{{ ele.label }}</span>
                    </MenuItem>
                </Submenu>
                <MenuItem v-else :name="item.name" :to="item.path">
                    <i class="icon iconfont" :class="item.icon"></i>
                    <span class="title-name">{{ item.label }}</span>
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>

<script>
    export default {
        name: "Side",
        data() {
            return {
                menu: [
                    {
                        name: "dashboard",
                        label: "首页",
                        icon: "iconshouye",
                        path: "/dashboard",
                    },
                    {
                        name: "user",
                        label: "用户画像",
                        icon: "iconyonghuhuaxiang",
                        path: "/user",
                    },
                    {
                        name: "mark",
                        label: "品牌画像",
                        icon: "iconpinpaihuaxiang",
                        path: "/mark",
                        children:[
                            {
                                name:"mark-view",
                                label:"品牌概览",
                                path:"/mark/view"
                            },
                            {
                                name:"mark-negative",
                                label:"舆情应对",
                                path:"/mark/negative"
                            },
                            {
                                name:"mark-detail",
                                label:"品牌详情",
                                path:"/mark/detail"
                            }
                        ]
                    },
                    {
                        name: "media",
                        label: "媒介画像",
                        icon: "iconmeijiehuaxiang",
                        path: "/media",
                    },
                    {
                        name: "business-analysis",
                        label: "经营分析",
                        icon: "iconjingyingfenxi",
                        path: "/business-analysis",
                        children: [
                            {
                                name: "business-analysis-overview",
                                label: "整体概览",
                                path: "/business-analysis/overview"
                            },
                            {
                                name: "business-analysis-user",
                                label: "用户分析",
                                path: "/business-analysis/user"
                            },
                            {
                                name: "business-analysis-channel",
                                label: "渠道分析",
                                path: "/business-analysis/channel"
                            },
                            {
                                name: "business-analysis-brand",
                                label: "品牌运营分析",
                                path: "/business-analysis/brand"
                            },
                            {
                                name: "business-analysis-activity",
                                label: "活动运营分析",
                                path: "/business-analysis/activity"
                            }
                        ]
                    },
                    {
                        name: "analysis-tool",
                        label: "分析工具",
                        icon: "iconfenxigongju",
                        path: "/analysis-tool",
                        children: [
                            {
                                name: "analysis-tool-model",
                                label: "分析模型",
                                path: "/analysis-tool/model",
                            },
                            {
                                name: "analysis-tool-indicator",
                                label: "指标管理",
                                path: "/analysis-tool/indicator",
                            },
                            {
                                name: "analysis-tool-label",
                                label: "标签管理",
                                path: "/analysis-tool/label",
                            },
                            {
                                name: "analysis-tool-user",
                                label: "用户分群",
                                path: "/analysis-tool/user", 
                            },
                            {
                                name: "analysis-tool-link",
                                label: "渠道链接",
                                path: "/analysis-tool/link",
                            },
                            {
                                name: "analysis-tool-manage",
                                label: "渠道管理",
                                path: "/analysis-tool/manage",
                            },
                            {
                                name: "analysis-tool-scene",
                                label: "场景库",
                                path: "/analysis-tool/scene",
                            },
                        ]
                    },
                    {
                        name: "data-center",
                        label: "数据管理",
                        icon: "iconshujuguanli",
                        path: "/data-center",
                        children: [
                            {
                                name: "data-center-my",
                                label: "我的数据",
                                path: "/data-center/my",
                            },
                            {
                                name: "data-center-market",
                                label: "数据市场",
                                path: "/data-center/market",
                            },
                            {
                                name: "data-center-system",
                                label: "集成数据",
                                path: "/data-center/system",
                            },
                            {
                                name: "data-center-metax",
                                label: "元数据管理",
                                path: "/data-center/metax",
                            }
                        ]
                    },
                ],
                activeName: "dashboard",
                openName: [this.$route.meta.moduleName]
            };
        },
        methods: {
            back() {
                this.$router.push({name: 'dashboard'});
            },
            checkItem(item) {
                if (item.path != this.$route.meta.moduleName) {
                    this.$router.push({name: item.path});
                }
            },
            // 选择menuItem
            handleSelect(name) {
                this.activeName = name;
            },
            // 打开subMenu
            openChange(ary) {
                if (!ary.length) {
                    return;
                }
                let routeName = ary[0];
                if (routeName != this.$route.name) {
                    this.openName.splice(0, 1, ary[0]);
                    let cur = this.menu.find(item => {
                        return item.name == ary[0]
                    }).children;
                    this.activeName = cur[0].name
                    this.$router.push({name: routeName});
                }
            }
        },
        created() {
            // 登录页默认选中dashboard
            if (this.$route.name == 'login') {
                this.activeName = 'dashboard'
            } else {
                let model = this.$route.name.indexOf('analysis-tool-model') 
                let  metax= this.$route.name.indexOf("data-center-metax")
                if(model>-1){
                    this.activeName = "analysis-tool-model"
                }else if(metax>-1){
                    this.activeName = "data-center-metax"
                }else{
                    this.activeName = this.$route.name
                }
                // this.activeName = this.$route.name
            }
        },
        watch:{
            '$route'(val){
                let model = val.name.indexOf('analysis-tool-model') 
                let  metax= val.name.indexOf("data-center-metax")
                if(model>-1){
                    this.activeName = "analysis-tool-model"
                }else if(metax>-1){
                    this.activeName = "data-center-metax"
                }else{
                    this.activeName = val.name
                }
                this.openName.splice(0,1,val.meta.moduleName)
                this.$nextTick(()=>{
                    this.$refs.side_menu.updateOpened()
                })
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
        }
    };
</script>

<style scoped lang="scss">
    .menu {
        height: 100%;
        .logo {
            width: 108px;
            height: 30px;
            margin: 29px 84px 37px 50px;
            background: url("../assets/img/side/logo-colour@2x.png") no-repeat center / 108px 30px;
            cursor: pointer;
        }
    }
</style>
<style lang="scss">
    .menu {
        overflow-x: hidden;

        .ivu-menu-light {
            background: none;
        }

        .ivu-menu-vertical {
            > div {
                width: 240px;
                padding: 0 24px;
                margin: 2px 0;
                line-height: 48px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                font-size: 14px;
                color: #97A0C3;

                &:first-child {
                    font-family: HelveticaNeue;
                }

                > a {
                    display: flex;
                    align-items: center;
                    width: 192px;
                    height: 48px;
                    border-radius: 4px;
                    padding-left: 24px;

                    i {
                        font-size: 20px;
                        margin-right: 12px;
                    }
                }
            }

            .ivu-menu-submenu-title {
                display: flex;
                align-items: center;
                width: 192px;
                height: 48px;
                border-radius: 4px;
                font-size: 14px;
                color: #97A0C3;
                padding-left: 24px !important;

                i {
                    font-size: 20px;
                    margin-right: 12px;

                    &.ivu-menu-submenu-title-icon {
                        font-size: 14px;
                        margin-right: 0;
                    }
                }
            }

            .ivu-menu {
                .ivu-menu-item {
                    margin: 2px 0;
                    padding-left: 60px !important;


                    .sub-name {
                        color: #97A0C3;
                    }
                }
            }
        }

        .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
            padding: 0 0 0 24px !important;
        }

        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
            position: relative;
            color: #FFFFFF;
            height: 48px;
            background: #2373FF;
            box-shadow: 2px 5px 12px 1px rgba(35, 115, 255, 0.3);
            border-radius: 4px;

            .sub-name {
                color: #FFFFFF;
                font-size: 14px;
            }

            &:before {
                position: absolute;
                left: -24px;
                top: 0;
                content: '';
                width: 4px;
                height: 48px;
                background: #2373FF;
                border-radius: 0px 4px 4px 0px;
            }
        }

        .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
            display: none;
        }

        .ivu-menu-vertical.ivu-menu-light:after {
            width: 0;
        }

        .ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
            color: #2373FF;
            width: 192px;
            height: 48px;
            background: #FFFFFF;
            box-shadow: 2px 2px 12px 1px rgba(134, 143, 191, 0.15);
            border-radius: 4px;

            .sub-name {
                color: #2373FF;
            }
        }
    }
</style>
