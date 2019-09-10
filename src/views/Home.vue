<template>
  <div class="home">
    NASA
    <img alt="Vue logo" src="../assets/nasa-logo-web-rgb.png" style="height: 200px;" />APOD
    <HelloWorld msg="NASA's Astronomy Photo Of the Day" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
