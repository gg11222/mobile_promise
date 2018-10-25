<template>
  <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="50px" class="demo-dynamic">
    <img :src="src">
    <header id="login_header">登陆</header>
    <el-form-item prop="email" label="邮箱" :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        
      ]">
      <el-input v-model="dynamicValidateForm.email"></el-input>
    </el-form-item>
    <el-form-item v-for="(domain, index) in dynamicValidateForm.domains" label='密码' :key="domain.key" :prop="'domains.' + index + '.value'" :rules="{
                 required: true, message: '密码不能为空', trigger: 'blur'
      }">
      <el-input v-model="domain.value"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button id="click_btn" type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [{
          value: ''
        }],
        email: ''
      },
      src: ''
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          this.$http({ url: "/api/login", method: "post" }, {})
              .then(res => {
                console.log(res)
                if(res.data.ret===0){
                  this.$router.push({
                    path:'/main'
                  })
                }
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created: function() {
    this.$http({ url: "/api/data", method: "post" }, {}).then(res => { this.src = res.data.src })
  }
}

</script>
<style lang="scss" scoped="" type="text/css">
#login_header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

</style>
