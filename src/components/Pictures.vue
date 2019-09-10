<template>
  <div class="pictures col-6">
    <h5>Pictures</h5>
    <div class="row">
      <picture v-for="picture in pictures" :key="picture.name" :pictureProp="picture" />
    </div>
  </div>
</template>


<script>
import Picture from "../components/Picture";
export default {
  name: "pictures",
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.pictures;
    }
  },
  methods: {},
  components: {
    Movie
  }
};
</script>


<style>
.pictures {
  color: orange;
}
</style>