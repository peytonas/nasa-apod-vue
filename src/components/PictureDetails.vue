<template>
  <div class="picture-details col-6" v-if="picture.title">
    <h5>Details:</h5>
    <h5>{{picture.title}}</h5>
    <!-- <img :src="'https://api.nasa.gov/planetary/apod'" /> -->
    <h5>{{picture.date}}</h5>
    <h5>{{picture.explanation}}</h5>
  </div>
</template>


<script>
export default {
  name: "pictureDetails",
  data() {
    return {};
  },
  computed: {
    movie() {
      return this.$store.state.activePicture;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
img {
  height: 500px;
}
</style>