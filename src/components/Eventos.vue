<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});

const titulo = ref("");
const id = ref("");
const dia = ref("");
const mes = ref("");
const ano = ref("");
const fuente = ref("");

onMounted(async () => {
  try {
    titulo.value = props.title;
    id.value = props.eventId;
    dia.value = props.day;
    mes.value = props.month;
    ano.value = props.year;
    fuente.value = props.source;
  } catch (err) {
    console.log("Error ;(");
  }
});
</script>

<template>
  <div class="row">
    <div class="card">
      <div class="card-body">
        <div class="container-card">
          <h6>{{ dia + "-" + mes + "-" + ano }}</h6>
          <h5 class="card-title">{{ titulo }}</h5>
          <button class="btn btn-secondary"><a :href="source" id="quitar-link" target="_blank">Ir al evento</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 90vh;
  margin: 5vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(176, 176, 176, 0.675);
}
.card-body {
  text-align: center;
}
.row{
  justify-content: center;
}

#quitar-link {
  text-decoration: none;
  color: white;
}
</style>
