<template>
  <div class="condition">
    <Select v-model="condition" style="width: 200px">
      <Option v-for="(item,index) in conditionOptions" :value="index+1" :key="index+1">{{ item }}</Option>
    </Select>
    <Select v-model="compare" style="width: 100px; margin-left: 16px;">
      <Option v-for="item in compareOptions" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Input v-model="input" style="width: 200px; margin-left: 16px;"/>
  </div>
</template>

<script>
  export default {
    name: "FilterCondition",
    data() {
      return {
        conditionOptions: [
          'Distinct ID',
          'IP',
          'SDK版本',
          '停留时长',
          '元素位置',
          '分享时的 distinct_id',
          '分享时的层级',
          '分享时的页面路径',
          '前向地址',
          '受众 ID',
          '启动场景',
          '失败原因',
          '定向跳转页面',
          '广告系列内容',
          '广告系列名称',
          '广告系列媒介',
          '广告系列字词',
          '广告系列来源',
          '推送ID',
          '推送内容',
          '推送服务商',
          '推送类型',
          '推送通道 ID',
          '操作系统，例如iOS',
          '设备型号，例如iphone6',
          '用户 ID',
          '运营策略ID',
          '运营计划ID',
          '页面参数',
          '页面名称',
          '页面标题',
          '崩溃原因',
        ],
        compareOptions: [
          {value: 'equal', label: '等于'},
          {value: 'notEqual', label: '不等于'},
          {value: 'contain', label: '包含'},
          {value: 'notContain', label: '不包含'},
          {value: 'isSet', label: '有值'},
          {value: 'notSet', label: '没值'},
          {value: 'isEmpty', label: '为空'},
          {value: 'isNotEmpty', label: '不为空'},
          {value: 'rlike', label: '正则匹配'},
          {value: 'notrlike', label: '正则不匹配'},
        ]
      }
    },
    props: {
        condition: {
          default: 0
        },
        compare: {
          default: 0
        },
        input: {
          default: ''
        },
    }
  }
</script>

<style scoped>
.condition {
  /*width: 500px;*/
  display: flex;
  /*justify-content: space-between;*/
  height: 42px;
  align-items: start;
}
</style>
