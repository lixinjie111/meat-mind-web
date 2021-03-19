<template>
    <div class="overview-container">
        <div class="header-nav">
            <p>整体概览</p>
        </div>
        <div class="show-data">
            <DataCard title="全站流量" num="8,639" text="次" :data="[9.07,9.07]" colourful="blue"></DataCard>
            <DataCard title="全站日活" num="964" text="人" :data="[-9.07,9.07]" colourful="green"></DataCard>
            <DataCard title="注册用户数" num="162" text="人" :data="[9.07,9.07]" colourful="orange"></DataCard>
            <DataCard title="GMV" num="146.6" text="万" :data="[-9.07,9.07]" colourful="purple"></DataCard>
            <DataCard title="订单量" num="8,639" text="次" :data="[9.07,9.07]" colourful="purple"></DataCard>
            <DataCard title="下单人数" num="964" text="人" :data="[-9.07,9.07]" colourful="orange"></DataCard>
            <DataCard title="下单转化率" num="32.6" text="%" :data="[9.07,9.07]" colourful="blue"></DataCard>
            <DataCard title="客单价" num="2839" text="元" :data="[-9.07,9.07]" colourful="green"></DataCard>
        </div>
        <Card title="整体趋势">
            <div>
                <Half lTitle="GMV近30天变化趋势" subDateL="2021.02.01-2021.02.28" rTitle="过去7天日活"
                      subDateR="2021.02.22-2021.02.28">

                </Half>
                <Half lTitle="周访问频次" subDateL="2021.02.22-2021.02.28" rTitle="APP平均使用时长"
                      subDateR="2021.02.22-2021.02.28">

                </Half>
            </div>
        </Card>
        <Card title="增长态势">
            <Half lTitle="日活" subDateL="2021.02.22-2021.02.28" rTitle="商品详情页浏览的总次数" subDateR="2021.02.22-2021.02.28">

            </Half>
            <Half lTitle="使用优惠卷的用户数" subDateL="2021.02.22-2021.02.28" rTitle="推送转化的人均次数"
                  subDateR="2021.02.22-2021.02.28">

            </Half>
        </Card>
        <Card title="用户旅程">
            <Full title="用户生命周期"></Full>
        </Card>
    </div>
</template>

<script>
    import Card from "../components/Card"
    import DataCard from "../components/DataCard"
    import Half from "../components/Half"
    import Full from "../components/Full"

    export default {
        name: "overview",
        components: {Card, DataCard, Half, Full}
    }
</script>

<style scoped lang="scss">
    .overview-container {
        padding: 0 24px 24px 24px;

        .show-data {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            height: 268px;
            padding: 24px 0;
            border-radius: 12px;
        }
    }
</style>