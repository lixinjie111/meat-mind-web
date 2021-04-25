<template>
  <div class="card_container" ref="card_container">
	  <div class="card_list_item" v-for="(it, i) in cardData">
		  <CardListItem :data="it" :key="i" :index="i"/>
	  </div>

  </div>
</template>

<script>
	import CardListItem from './CardListItem'
	const cardData = [
		{ name: '年经营目标', value: '960', unit: '万元', icon: 'iconjine' },
		{ name: '已完成营收', value: '349', unit: '万元', icon: 'iconjine' },
		{ name: '渠道平均投放回报率', value: '88%', icon: 'iconicon_analytics'},
		{ name: '月计划营收完成度', value: '60%', icon: 'iconfenxiline' },
	]
export default {
		components: { CardListItem },
  data() {
    return {

    };
  },
  props: {
    cardData: {
      type: Array,
      default: ()=>cardData,
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
.card_container{
    border-radius: 8px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 22px 0;
    position: relative;
   .card_list_item{
	   width: 270px;
	   height: 110px;
	   border-radius: 8px;
	   flex: 1 0;
	   padding-right: 24px;
	   &:last-child{
		   padding-right: 0;
	   }
   }
}

</style>
