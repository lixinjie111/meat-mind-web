<template>
    <Layout class="main-container">
        <Sider class="sider-container">
            <DefaultSide></DefaultSide>
        </Sider>
        <Layout class="layout-container">
            <Header class="header-container">
                <DefaultHeader target="Dashboard"></DefaultHeader>
            </Header>
            <Content class="content-container">
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
    .main-container {
        background: #F4F7FC;
        min-height: 100vh;

        .sider-container{
            background: #ffffff;
            position: fixed;
            height: 100vh;
            width: 240px!important;
            min-width: 240px!important;
            max-width: 240px!important;
            flex: 0 0 240px!important;
            left: 0;
            overflow: auto;
            z-index: 10000;
        }

        .layout-container{
            margin-left: 240px;

            .header-container {
                background: #F4F7FC;
                padding: 0;
                position: fixed;
                width: calc(100% - 240px);
                height: 80px;
                z-index: 10000;
            }

            .content-container {
                margin-top: 80px;
            }
        }
    }
</style>
