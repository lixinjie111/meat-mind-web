<template>
    <Layout>
        <Sider :style="{position: 'fixed', height: '100vh', width: '240px', minWidth: '240px', left: 0, overflow: 'auto'}">
            <DefaultSide></DefaultSide>
        </Sider>
        <Layout :style="{marginLeft: '240px'}">
            <Header :style="{position: 'fixed', width: 'calc(100% - 240px)', zIndex: 1000}">
                <DefaultHeader target="Dashboard"></DefaultHeader>
            </Header>
            <Content :style="{marginTop: '64px'}">
                <router-view></router-view>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
    import DefaultSide from "../layouts/DefaultSide"
    import DefaultHeader from "../layouts/DefaultHeader"

    export default {
        name:"home",
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {DefaultSide, DefaultHeader}
    }
</script>
<style scoped lang="scss">
    .ivu-layout {
        background: #ffffff;
    }

    .ivu-layout-sider {
        background: #ffffff;
    }

    .ivu-layout-header {
        background: #ffffff;
        padding: 0;
    }
</style>
