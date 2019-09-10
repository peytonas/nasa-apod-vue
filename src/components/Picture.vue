<template>
  <div class="picture col-12 border rounded m-3" @click="selectPicture">
    <h1>{{ pictureProp.title }}</h1>
    <p>{{pictureProp.explanation}}</p>
  </div>
</template>

<script>
export default {
  name: "picture",
  props: {
    props: ["pictureProp"],
    data() {
      return {};
    },
    computed: {},
    methods: {
      selectPicture() {
        this.$store.dispatch("selectPicture", this.pictureProp);
      }
    },
    components: {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #0b3c91;
}
</style>
