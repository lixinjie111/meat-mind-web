<template>
  <DetailsPage title="元事件" backname="data-center-metax">
        <HeaderNav></HeaderNav>
  </DetailsPage>
</template>

<script>
import DetailsPage from "../../../../layouts/DetailsPage"
import HeaderNav from "../base/HeaderNav"
export default {
    name:"Unit",
    components:{DetailsPage, HeaderNav},
}
</script>

<style scoped lang="scss">
.fxmx-unit{
    position: relative;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
    }
    .back{
        position: absolute;
        top: 22px;
        left: 24px;
        width: 26px;
        height: 26px;
        // border: 1px solid red;
        cursor: pointer;
    }
}
</style>