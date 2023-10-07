<script setup>
import Navbar from "../components/Navbar.vue";
import Noticias from "../components/Noticias.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const noticias = ref([]);
const titulos = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news`);
    noticias.value = response.data.news;
    titulos.value = response.data.news.title;
  } catch (err) {
    console.log("Error ;(");
  }
});
</script>

<template>
  <main>
    <Navbar></Navbar>
    <div class="container">
      <h1>Noticias</h1>
      <div class="row">
        <Noticias
          v-for="n in noticias"
          :imageUrl="n.imageUrl"
          :title="n.title"
          :id ="n.newsId"
        ></Noticias>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container h1 {
  margin-top: 2vh;
  text-align: center;
}
</style>
