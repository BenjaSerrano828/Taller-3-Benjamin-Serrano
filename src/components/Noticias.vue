<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const imagen = ref("");
const titulo = ref("");
const id = ref("");

const router = useRouter();

onMounted(async () => {
  try {
    imagen.value = props.imageUrl;
    titulo.value = props.title;
    id.value = props.id;
  } catch (err) {
    console.log("Error ;(");
  }
});

function showDetails() {
  router.push({ name: "detalle", params: { id: id.value } });
}
</script>


<template>
  <div class="card hola" style="width: 18rem" @click="showDetails()">
    <div class="card-body">
      <div class="container-card" >
        <img :src="imageUrl" alt="" />
      </div>
      <h5 class="card-title">{{ titulo }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 2vh;
}
.container-card img {
  height: 22vh;
}
.card-body {
  text-align: center;
}
.card-title {
  margin-top: 2vh;
}

.hola {
  cursor: pointer;
}
</style>
