<template>
	<div class="card_item_container"
	     :style="{ backgroundColor: colorList[index].bgColor, color: colorList[index].color }">
		<div class="info_lef">
			<!--<img :src="data.icon" alt="" srcset="" class="jyIcon">-->
			<i :class="['jyIcon iconfont', data.icon]"></i>
		</div>
		<div class="txt_rig">
			<div class="til_txt">{{data.name}}</div>
			<div class="til_desc">
				<span class="til_num">{{data.value}}</span>
				<span v-if="data.unit" class="til_unit">{{data.unit}}</span>
			</div>
		</div>
		<!--<img v-if="colorList[index].moreBtn" :src="colorList[index].moreBtn" alt="" srcset="" class="ysIcon">-->
		<i class="ysIcon iconfont icongengduo"></i>
	</div>
</template>

<script>
	const colorList = [
		{color: '#2373FF', bgColor: '#D3E3FF', moreBtn: require('../../assets/img/dashboard/jyic2.png') },
		{color: '#FE774B', bgColor: '#FFE6DE', moreBtn: require('../../assets/img/dashboard/jyic1.png') },
		{color: '#1DCEC3', bgColor: '#DFF8F6', moreBtn: require('../../assets/img/dashboard/jyic3.png') },
		{color: '#FF4C60', bgColor: '#FFEBF3', moreBtn: require('../../assets/img/dashboard/jyic4.png') },
	];
	export default {
		data() {
			return {};
		},
		props: {
			data: {
				type: Object,
				default: () => ({}),
			},
			colorList: {
				type: Array,
				default: ()=>colorList
			},
			index: {
				type: Number,
				default: 0
			},
		},
		created() {

		},
		mounted() {
		},
		methods: {},
	};
</script>

<style scoped lang="scss">
	.card_item_container {
		padding: 16px 20px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		margin-bottom: 22px;
		position: relative;
		height: 110px;
		width: 100%;
		background: #D3E3FF;
		border-radius: 8px;
		.info_lef {
			width: 52px;
			height: 60px;
			background: #FFFFFF;
			border-radius: 8px;
			margin-right: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			.jyIcon {
				font-size: 28px;
			}
		}
		.txt_rig {
			flex: 1;
			.til_txt {
				font-size: 14px;
				font-weight: 500;
				line-height: 20px;
			}
			.til_desc {
				display: flex;
				align-items: baseline;
				.til_num {
					font-size: 28px;
					font-weight: 500;
				}
				.til_unit {
					font-size: 14px;
					font-weight: 500;
				}
			}
		}
		.ysIcon {
			position: absolute;
			right: 20px;
			top: 16px;
			display: block;
			width: 16px;
			height: 19.26px;
			cursor: pointer;
		}
	}
	.removeMb {
		margin-bottom: 0px;
	}
</style>
