<template>
  <div class="line-input">
    <ul class="lines">
      <li v-for="line in numLines" class="number">{{line}}</li>
    </ul>
    <Input type="textarea" v-model="content" :border="false" :autosize="{minRows: 5}"/>
  </div>
</template>

<script>
  export default {
    name: "LineNumberInput",
    data() {
      return {
        content: '示例：SELECT user_id,event FROM  events WHERE  date = CURRENT_DATE() LIMIT 10\n' +
          '为保证查询效率，建议使用 date 字段进行过滤，并避免使用SELECT *',
      }
    },
    computed: {
      numLines() {
        return (this.content).split('\n').length
      }
    }
  }
</script>

<style lang="scss" scoped>
.line-input {
  display: flex;
  width: 810px;
  border-radius: 4px;
  border: 1px solid #EAEDF7;

  .lines {
    background: #F4F7FC;
    padding: 10px 0;
    .number {
      width: 32px;
      font-size: 14px;
      font-weight: 400;
      color: #97A0C3;
      line-height: 22px;
      text-align: right;
      padding-right: 8px;
    }
  }
}
</style>
<style lang="scss">
  .line-input {
    textarea.ivu-input {
      font-size: 14px;
      color: #242F57;
      line-height: 22px;

      border: none;
      box-shadow: none;
      outline: none;
      &:focus {
        border: none;
        box-shadow: none;
        outline: none;
      }
    }
  }
</style>
