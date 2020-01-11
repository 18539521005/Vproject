<template>
    <div class="sign">
        <header>
            <router-link to="/My" class="header-left"><span>〈</span></router-link><span class="header-right">登陆</span>
        </header>
        <img src="../assets/img/Mysign1.png" alt="">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')" :loading="isLoading">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: "",
    data() {
        var validateTel = (rule, value, callback) => {
            if (value === "") {
            callback(new Error("请输入手机号"));
            } else if (!/^1[3456789]\d{9}$/.test(value)) {
                callback(new Error("手机格式不正确"));
            } else {
                callback();
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else if(!/^\d{3,6}$/.test(value)){
                callback(new Error("密码不是纯数字"));
            }else{
                callback();
            }
        };
      return {
        ruleForm: {
          pass: '',
          username: '',
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateTel, trigger: 'blur' }
          ],
        },
        myself:{},
        isLoading: false
      };
    },
    methods: {
      submitForm(formName) {
        this.isLoading = true;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.get('/api/sign.php',{
              params: this.ruleForm
            })
            .then(res=>{
              this.myself = res.data
              var Newinfo = this.myself
              this.$store.commit("change",Newinfo)
              console.log(Newinfo.info.name)
              this.$store.commit("changeflag",false)
              if (res.data.code === 3000){
                //存totken
                //跳转
                localStorage.setItem("token",res.data.token)
                this.$router.push('/My')
                
              }
            })
            .catch(err=>{
              console.log('err',err);
          })
          } else {
            console.log('登陆失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}

</script>

<style lang="stylus" scoped>
.sign {
    height 100%
    background #F5F5F5
    header {
        height 0.6rem
        line-height 0.6rem
        font-size 0.3rem
        font-weight 600
        .header-left {
            margin 0 35% 0 5%
        }
    }
    img {
        display block
        margin 0.4rem auto
    }
    .el-button {
        height 0.6rem
        line-height 0.1rem
        width 95%
        margin 0.5rem 2.5% 
        padding-left 2.5%
        background #333999
        border-color #333999
    }
   
}
</style>
