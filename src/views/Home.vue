<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          NASA
          <img alt="NASA logo" src="../assets/nasa-logo-web-rgb.png" style="height: 200px;" />APOD
        </h1>
      </div>
      <search />
    </div>
    <div>
      <PictureDetails />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search";
import PictureDetails from "../components/PictureDetails";
export default {
  name: "home",
  components: {
    Search,
    PictureDetails
  }
};
</script>

<style scoped>
.bg {
  background-image: url("https://i.pinimg.com/originals/d0/99/fb/d099fbe1334992232264f479a516983e.jpg");
}
.img {
  height: 200px;
}
</style>