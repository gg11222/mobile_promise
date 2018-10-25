<template>
  <div>
    <el-alert title="成功提示的文案" type="success" center show-icon>
    </el-alert>
    <el-alert title="消息提示的文案" type="info" center show-icon>
    </el-alert>
    <el-alert title="警告提示的文案" type="warning" center show-icon>
    </el-alert>
    <el-alert title="错误提示的文案" type="error" center show-icon>
    </el-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  },
  created: function() {
    // this.$http({ url: "/api/data", method: "post" }, {}).then(res => { this.src = res.data.src })
  }
}

</script>
<style lang="scss" scoped="" type="text/css">
  div{font-size: 12px;}
</style>
