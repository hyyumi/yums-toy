<template>
  <div class="v_login">
    <el-form ref="postForm" :model="postForm" :rules="rules">
      <el-form-item prop="email" :label="pageText('email')">
        <el-input type="email" v-model="postForm.email" :placeholder="pageText('email_ph')" />
      </el-form-item>
      <el-form-item prop='password' :label="pageText('password')">
        <el-input type="password" v-model="postForm.password" :placeholder="pageText('password_ph')" />
      </el-form-item>
    </el-form>
    <div>
    <el-button type="primary" :disabled="!isEnterAll" @click="submit">{{ pageText('login') }}</el-button>
    <router-link :to="{name: 'Join'}">{{ pageText('join')}}</router-link>
    </div>
    <span v-if="isLoginFail" class="text-red">{{pageText('loginFail')}}</span>
  </div>
</template>
<script>
import { validateEmail, validatePassword } from '@/utils/validate'
import firebase from 'firebase'
import pageMixin from '@/mixins/pageMixin'
export default {
  name: 'Login',
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
        password: ''
      },
      rules: {
        email: [
          { required: true, validator: checkRules, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: checkRules, trigger: 'blur' }
        ]
      },
      isLoginFail: false
    }
  },
  computed: {
    isEnterAll () {
      return this.postForm.email && this.postForm.password
    }
  },
  methods: {
    submit () {
      this.isLoginFail = false
      this.$refs['postForm'].validate((valid) => {
        if (valid) {
          const { email, password } = this.postForm
          firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log(result)
          }).catch(error => {
            this.isLoginFail = true
            console.log(error.code, error.message)
          })
        }
      })
    }
  }
}
</script>
