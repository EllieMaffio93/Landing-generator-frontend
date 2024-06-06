<script setup>
</script>

<template>
  <nav class="navbar">
    <h1>Landing Generator</h1>
    <ul>
      <li><RouterLink to="/login">Login</RouterLink></li>
      <li><RouterLink to="/signup">Register</RouterLink></li>
    </ul>
  </nav>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: #f7f7f7;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
  }
}
.main {
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  padding: 2rem;
  background-color: #81ecec;
}
</style>