<template>
  <nav class="navbar bg-secondary" data-bs-theme="dark">
    <div class="logo">
      <img
        src="https://www.ufro.cl/index.php/normas-corporativas/30-logo-ufro-azul-horizontal/file"
        alt=""
      />
    </div>
    <div class="nav-links">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Noticias</a>
        </li>
        <li class="nav-item">
          <router-link to="/eventos"><a class="nav-link">Eventos</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar div img {
  height: 14vh;
}
</style>
