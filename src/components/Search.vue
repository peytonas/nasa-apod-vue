<template>
  <div class="search col-12">
    <button class="button text-white" @click="getPictures()">
      <b>
        <i class="fas fa-rocket"></i>
      </b>
    </button>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      query: ""
    };
  },
  computed: {},
  methods: {
    getPictures() {
      //NOTE the first parameter is the name of the action in the store, the second parameter is data we want to send. this.query is the value that we typed into the input stored on the components local data
      this.$store.dispatch("getPictures", this.query);
    }
  },
  components: {}
};
</script>

<style scoped>
.button {
  background-color: #fc3d20;
  display: inline-block;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 9px #ac1c05;
}
.button:active {
  box-shadow: 0 5px #ac1c05;
  transform: translateY(4px);
}
::-webkit-scrollbar {
  visibility: none;
}
</style>