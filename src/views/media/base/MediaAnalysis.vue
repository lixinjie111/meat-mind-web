<template>
	<div class="m-p-kol-strategy">
		<div class="strategy-title">
			KOL推荐组合
		</div>
		<div class="strategy-top">
			<div class="top-left">
				<p><span class="top-title">推荐的KOL组合</span><span class="top-blue">李子柒 + 西木西木 + 辣目洋子</span></p>
				<p class="mt12"><span class="top-title">方案效果</span><span>预期以12600元的成本吸引潜客432341人</span></p>
			</div>
			<div class="top-right">
				<p class="top-title">推荐缘由</p>
				<p><span>李子柒为头部KOL，在曝光分布及用户影响率上对于品牌推广能起到快速起效。但鉴于李子柒非垂直领域KOL，专业引流不足，故补充垂直类KOL西木西木和泛娱乐类KOL辣目洋子，三者配合投放可使收益达到最高</span></p>
			</div>
		</div>
		<div class="strategy-bottom">
			<div></div>
			<div>
				<div class="bottom-title">用户量</div>
			</div>
			<div>
				<div class="bottom-title light">曝光分布</div>
			</div>
			<div>
				<div class="bottom-title">销售分布</div>
			</div>
			<div>
				<div class="bottom-title light">影响力指数</div>
			</div>
			<div>
				<div class="bottom-card">
					<img src="../../../assets/img/mark/head1.jpg" />
					<div class="card-box">
						<p>头部KOL</p>
						<p>李子柒</p>
					</div>
					<!--                        <div class="card-tip">-->
					<!--                            <Poptip popper-class="saas-poptip" placement="right-start">-->
					<!--                                <i class="iconfont iconguanyuline1 tip-icon"></i>-->
					<!--                                <div slot="content">-->
					<!--                                    <p>快速拉新策略KOL，占整体投放预算的55%，投放时间为未来7日投放（2日达到投放预期的80%），预期获得18%的曝光，12%的互动和3%销售转化；</p>-->
					<!--                                    <p>头部KOL，粉丝基数大，影响力高，能够带来高互动和高转化，适合快速拉新需求的投放策略；</p>-->
					<!--                                    <p>与品牌所属行业关联度为中等水平，但该KOL口碑极好，具有极高的影响力和覆盖范围，能够实现快速拉新的投放效果；</p>-->
					<!--                                </div>-->
					<!--                            </Poptip>-->
					<!--                        </div>-->
				</div>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box34Data"></PieEcharts8>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box37Data" ></PieEcharts8>
			</div>
			<div>
				<BarEcharts1 :colorList="$fjData.colorList" :myData="$ljEData.ljBox38" ></BarEcharts1>
			</div>
			<div>
				<!--                  <PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box31Data" ></PieEcharts8>-->
			</div>
			<div>
				<div class="bottom-card">
					<img src="../../../assets/img/mark/head2.jpeg" />
					<div class="card-box">
						<p>垂直类KOL</p>
						<p>西木西木</p>
					</div>
				</div>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box35Data" ></PieEcharts8>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box38Data" ></PieEcharts8>
			</div>
			<div>
				<BarEcharts1 :colorList="$fjData.colorList" :myData="$ljEData.ljBox39" ></BarEcharts1>
			</div>
			<div>
				<!--                  <PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box32Data" ></PieEcharts8>-->
			</div>
			<div>
				<div class="bottom-card">
					<img src="../../../assets/img/mark/head3.jpeg" />
					<div class="card-box">
						<p>泛娱乐类KOL</p>
						<p>辣目洋子</p>
					</div>
				</div>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box36Data" ></PieEcharts8>
			</div>
			<div>
				<PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box39Data" ></PieEcharts8>
			</div>
			<div>
				<BarEcharts1 :colorList="$fjData.colorList" :myData="$ljEData.ljBox40" ></BarEcharts1>
			</div>
			<div>
				<!--                  <PieEcharts8 :colorList="$fjData.colorList" :myData="$fjData.box33Data" ></PieEcharts8>-->
			</div>
		</div>
	</div>
</template>

<script>
	import PieEcharts8 from '../../../components/echarts/common/pie/PieEcharts8';
	import BarEcharts1 from '../../../components/echarts/common/bar/barEcharts1';

	export default {
		components: { PieEcharts8, BarEcharts1 }
	}
</script>

<style scoped lang="scss">
	.m-p-kol-strategy {
		margin-bottom: 24px;
		width: 100%;
		background: #FFFFFF;
		box-shadow: 3px 5px 10px 0px rgba(121, 131, 168, 0.15);
		border-radius: 12px;
		border: 1px solid #EAEDF7;
		padding:24px;
		.strategy-title {
			font-size: 16px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #242F57;
		}
		.strategy-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 16px;
			margin-top: 24px;
			width: 100%;
			height: 95px;
			background: #F7F9FD;
			border-radius: 8px;
			border: 1px solid #EAEDF7;

			>div {
				width: 45%;

				&.top-right {
					width: 52%;
					display: flex;
					justify-content: space-between;
					align-items: flex-start;

					>p {
						&:nth-child(1) {
							width: 160px;
							margin-right: 24px;
						}
					}
				}

				.mt12 {
					margin-top: 12px;
				}

				.top-title {
					font-size: 14px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #242F57;
				}

				span {
					margin-right: 24px;
					font-size: 14px;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #636E95;

					&.top-blue {
						color: #2373FF;
					}
				}
			}
		}

		.strategy-bottom {
			margin-top: 24px;
			display: grid;
			grid-template-columns: 15% 19% 19% 19% 19%;
			grid-template-rows: 48px 150px 150px 150px;
			grid-row-gap: 24px;
			grid-column-gap: 24px;

			.bottom-title {
				width: 100%;
				height: 48px;
				line-height: 48px;
				background: #73A0FA;
				border-radius: 8px;
				text-align: center;
				font-size: 14px;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #FFFFFF;

				&.light {
					color: #242F57;
					background: #DBE7FF;
				}
			}

			.bottom-card {
				position: relative;
				text-align: center;

				> img {
					width: 56px;
					height: 56px;
					border-radius: 50%;
				}

				.card-box {
					margin-top: -30px;
					width: 100%;
					min-width: 140px;
					height: 116px;
					background: #FFFFFF;
					box-shadow: 5px 8px 16px 0px rgba(121, 131, 168, 0.15);
					border-radius: 8px;
					border: 2px solid #EAEDF7;

					>p {
						font-size: 14px;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #636E95;

						&:nth-child(1) {
							margin-top: 48px;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: #242F57;
						}
					}
				}

				.card-tip {
					position: absolute;
					right: -15px;
					top: 30px;
					text-align: left;
				}
			}
		}
	}
</style>
