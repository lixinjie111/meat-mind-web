<template>
    <Layout>
        <Sider :style="{position: 'fixed', height: '100vh', width: '240px', minWidth: '240px', left: 0, overflow: 'auto'}">
            <Side></Side>
        </Sider>
        <Layout :style="{marginLeft: '240px'}">
            <Header :style="{position: 'fixed', width: '100%', zIndex: 10000}">
                <DefaultHeader target="Dashboard"></DefaultHeader>
                <div class="nav" v-if="title" :style="{background: '#ffffff', padding: '0 24px'}">
                    <p class="nav-title">{{title}}</p>
                </div>
            </Header>
            <Content :style="{marginTop: '128px'}">
                <slot></slot>
            </Content>
        </Layout>
    </Layout>
</template>
<script>
    import Side from "../components/Side"
    import DefaultHeader from "../components/DefaultHeader"

    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        components: {Side, DefaultHeader}
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
