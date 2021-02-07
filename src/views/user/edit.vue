<template>
  <DefaultPage>
    <DetailsPage title="编辑" backname="user-defined">
        <img src="../../assets/img/user/edit@2x.png" alt="">
    </DetailsPage>
  </DefaultPage>
</template>

<script>
import DefaultPage from "../../layouts/DefaultPage";
import DetailsPage from "../../layouts/DetailsPage";
export default {
  name: "defined",
  components: { DefaultPage, DetailsPage },
};
</script>

<style scoped lang="scss">
img{
    width: 100%;
    height: 100%;
}
</style>