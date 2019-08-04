<template>
  <div class="v_join">
    <el-form ref="postForm" :model="postForm" :rules="rules">
      <el-form-item prop="email" :label="pageText('email')">
        <el-input type="email" v-model="postForm.email" :placeholder="pageText('email_ph')" />
      </el-form-item>
      <el-form-item prop='password' :label="pageText('password')">
        <el-input type="password" v-model="postForm.password" :placeholder="pageText('password_ph')" />
      </el-form-item>
      <el-form-item prop='password_check' :label="pageText('password_check')">
        <el-input type="password" v-model="postForm.password_check" :placeholder="pageText('password_check_ph')" />
      </el-form-item>
    </el-form>
    <div>
    <el-button type="primary" :disabled="!isEnterAll" @click="submit">{{ pageText('join') }}</el-button>
    <router-link :to="{name: 'Login'}">{{ pageText('login')}}</router-link>
    </div>
    <span v-if="isJoinFail" class="text-red">{{pageText('joinFail')}} {{failMsg}}</span>
  </div>
</template>
<script>
import { validateEmail, validatePassword } from '@/utils/validate'
import firebase from 'firebase'
import pageMixin from '@/mixins/pageMixin'
export default {
  name: 'Join',
  mixins: [pageMixin],
  data () {
    const checkRules = (rule, value, callback) => {
      let vaild = false
      switch (rule.field) {
        case 'email':
          vaild = validateEmail(value)
          break
        case 'password':
          vaild = validatePassword(value)
          break
        case 'password_check':
          vaild = value === this.postForm.password
          break
      }

      if (vaild) {
        callback()
      } else {
        callback(new Error(this.pageText(`${rule.field}_ph`)))
      }
    }
    return {
      postForm: {
        email: '',
        password: '',
        password_check: ''
      },
      rules: {
        email: [
          { required: true, validator: checkRules, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: checkRules, trigger: 'blur' }
        ],
        password_check: [
          { required: true, validator: checkRules, trigger: 'blur' }
        ]
      },
      isJoinFail: false,
      failMsg: ''
    }
  },
  computed: {
    isEnterAll () {
      return this.postForm.email && this.postForm.password && this.postForm.password_check
    }
  },
  methods: {
    submit () {
      this.isJoinFail = false
      this.failMsg = ''
      this.$refs['postForm'].validate((valid) => {
        if (valid) {
          const { email, password } = this.postForm
          firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            this.$confirm('회원가입이 완료되었습니다.', {
              confirmButtonText: '로그인',
              cancelButtonText: '확인'
            }).then(() => {
              this.$router.push({ name: 'Login' })
            }).catch(() => {
              this.postForm = {
                email: '',
                password: '',
                password_check: ''
              }
            })
          }).catch(error => {
            this.isJoinFail = true
            this.failMsg = error.message
            console.log(error.code, error.message)
          })
        }
      })
    }
  }
}
</script>
