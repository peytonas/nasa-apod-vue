<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/archive">Archive</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b3c91;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fc3d20;
}

#nav a.router-link-exact-active {
  color: #fc3d20;
}
</style>
