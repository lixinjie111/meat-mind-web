<template>
    <div class="main">
        <Side></Side>
        <div class="container">
            <Header :target="'Dashboard'"></Header>
            <div class="content">
                <Tabs :animated="false">
                    <TabPane :label="item.name" v-for="(item,index) in titles" :key="index">
                        <slot :name="item.value"></slot>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import Side from "../components/Side"
    import Header from "../components/DefaultHeader"

    export default {
        props: {
            titles: {
                type: Array,
                default: () => []
            }
        },
        components: {Side, Header}
    }
</script>
<style scoped lang="scss">
    .main {
        display: flex;

        .container {
            display: flex;
            flex-direction: column;
            width: 100%;


            .content {
                padding: 24px;
            }
        }
    }
</style>
