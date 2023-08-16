<template>
  <div class="loader">
    <div class="loader-ring"></div>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  width: 100%;
  height: 100%;
}
.loader-ring {
  margin: auto;
  display: inline-block;
  width: 80px;
  height: 80px;
}
.loader-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid var(--accent-hex);
  border-color: var(--accent-hex) transparent var(--accent-hex) transparent;
  animation: loader-ring 1.2s linear infinite;
}
@keyframes loader-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
