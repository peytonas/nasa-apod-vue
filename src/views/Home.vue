<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          NASA
          <img alt="NASA logo" src="../assets/nasa-logo-web-rgb.png" style="height: 200px;" />APOD
          <HelloWorld msg="NASA's Astronomy Photo Of the Day" />
        </h1>
      </div>
      <search />
    </div>
    <div class="row">
      <Pictures />
      <PictureDetails />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pictures from "../components/Picture";
import Search from "@/components/Search";
import PictureDetails from "../components/PictureDetails";
export default {
  name: "home",
  components: {
    Pictures,
    Search,
    PictureDetails
  }
};
</script>

<style scoped>
img {
  height: 200px;
}
</style>
