<template>
  <div
    class="picture-details col-12 justify-content-around spacing text-white"
    v-if="picture.title"
  >
    <h5>Details:</h5>
    <h5>
      <b>{{picture.title}}</b>
    </h5>
    <img :src="picture.url" />
    <h5>
      <u>{{picture.date}}</u>
    </h5>
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
    picture() {
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
.spacing {
  padding-top: 15px;
}
</style>