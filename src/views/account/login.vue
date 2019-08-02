<template>
<div>
  <el-form ref="postForm" :model="postForm" :rules="rules">
    <el-form-item :label="getText('email')">
      <el-input type="email" v-model="postForm.email" :placeholder="getText('email.ph')" />
    </el-form-item>
    <el-form-item :label="getText('password')">
      <el-input type="password" v-model="postForm.password" :placeholder="getText('password.ph')" />
    </el-form-item>
  </el-form>
  <el-button type="primary" :disabled="!isEnterAll" @click="submit">{{ getText('login') }}</el-button>
</div>
</template>
<script>
import { validateEmail, validatePassword } from '@/utils/validate'
import firebase from 'firebase'
export default {
  name: 'Login',
  data () {
    return {
      postForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { validator: validateEmail, trigger: 'blur' }
        ],
        password: [
          { validator: validatePassword, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    isEnterAll () {
      return this.postForm.email && this.postForm.password
    }
  },
  methods: {
    submit () {
      this.$refs.postForm.valdate(vaild => {
        if (vaild) {
          const { email, password } = this.postForm
          // TODO 파이어베이스 로그인되는지 확인해야함
          // 그리고나서 가입도해봐야함
          firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
            console.log(result)
          }).catch(error => {
            console.log(error.code, error.message)
          })
        }
      })
    }
  }
}
</script>
