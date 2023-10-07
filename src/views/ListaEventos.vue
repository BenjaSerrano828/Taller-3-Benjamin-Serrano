<script setup>
import Eventos from "../components/Eventos.vue";
import Navbar from "../components/Navbar.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const eventos = ref([]);
const titulos = ref("");
const id = ref("");
const dia = ref("");
const mes = ref("");
const ano = ref("");
const fuente = ref("");

onMounted(async () => {
  try {
    const response = await axios.get(`http://3.138.52.135:3000/events`);
    eventos.value = response.data.events;
    titulos.value = response.data.events.title;
    id.value = response.data.events.eventId;
    dia.value = response.data.events.day;
    mes.value = response.data.events.month;
    ano.value = response.data.events.year;
    fuente.value = response.data.events.source;
  } catch (err) {
    console.log("Error ;(");
  }
});
</script>

<template>
  <main>
    <Navbar></Navbar>
    <div class="container">
      <Eventos
        v-for="e in eventos"
        :title="e.title"
        :day="e.day"
        :month="e.month"
        :year="e.year"
        :source="e.source"
      ></Eventos>
    </div>
  </main>
</template>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
}
</style>
