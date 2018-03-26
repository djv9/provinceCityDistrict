<template>
  <div class="address-wrapper">
    <el-select v-model="province"></el-select>
    <el-select v-model="city"></el-select>
    <el-select v-model="district"></el-select>
  </div>
</template>

<script>

import DISTRICTS from '../assets/districts.js';
export default {
  name: 'addressSelect',
  data () {
    return {
      province: '',
      city: '',
      district: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
