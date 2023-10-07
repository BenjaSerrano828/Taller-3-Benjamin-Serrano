<script setup>
import Navbar from "../components/Navbar.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const noticiaData = ref(null);
const titulo = ref("");
const imagen = ref("");
const fuente = ref("");
const fechaExtraccion = ref(Date);
const detalles = ref(Object);
const body = ref("");
const imagenesDetails = ref([]);
const resumen = ref("");
const fecha = ref(Date);

const route = useRoute();
const id = route.params.id;

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/news/${id}`);
    noticiaData.value = response.data;
    titulo.value = response.data.news.title;
    fuente.value = response.data.news.source;
    imagen.value = response.data.news.imageUrl;
    fechaExtraccion.value = response.data.news.createdAt;
    detalles.value = response.data.news.details;
    body.value = response.data.news.details.body;
    imagenesDetails.value = response.data.news.details.images;
    resumen.value = response.data.news.details.resume;
    fecha.value = fechaExtraccion.value.toString().substring(0,10);

    console.log(body.value);
  } catch (err) {
    console.log("Error ;(");
  }
});
 
</script>

<template>
  <Navbar></Navbar>
  <div class="container" v-if="noticiaData">
    <div class="arriba">
      <h1>{{ titulo }}</h1>
      <a :href="fuente" target="_blank">Ir al origen</a>
      <h3>Fecha de extracción: {{ fecha }}</h3>
    </div>
    <div class="imagen">
      <img :src="imagen" alt="" />
    </div>
    <p>
      {{ body }}
    </p>
    <div class="imagenes">
      <img v-for="i in imagenesDetails" :src="i" alt="" />
    </div>
    <div class="resumen">
      <h3>Resumen</h3>
      <p>{{ resumen }}</p>
    </div>
  </div>
</template>

<style scoped>
.arriba {
  margin: 5vh;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.arriba h3 {
  margin: 5vh;
  text-align: center;
  justify-items: center;
  align-items: center;
}
.imagen img {
  width: 100%;
  margin: 5vh;
}
.imagenes {
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.imagenes img {
  width: 25%;
  margin: 5vh;
  align-items: center;
  justify-content: center;
}
.resumen{
  margin-bottom: 8vh;
}
.resumen h3{
  margin-bottom: 4vh;
  text-align: center;
}

</style>
