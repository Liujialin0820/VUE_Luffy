<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const banner_list = ref([]);

onMounted(() => {
  axios
    .get("http://localhost:8000/banner/", {})
    .then((res) => {
      banner_list.value = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<template>
  <el-carousel height="720px" :interval="3000" arrow="always">
    <el-carousel-item v-for="item in banner_list" :key="item.id">
      <a :href="item.link"> <img :src="item.image_url" alt="" /></a>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
