<template>
  <div class="container">
    <BaseComponent />
    {{dataArray}}
    <ul>
      <li v-for="(x, key) of dataArray" :key="key">{{x}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseComponent from "@/components/BaseComponent.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    BaseComponent,
  },
  computed: {
    ...mapState(["dataArray"]),
  },

  methods: {
    ...mapMutations(["updateData"]),
    ...mapActions(["getData"]),
  },

  created() {
    this.getData();
  },
};
</script>

<style scoped>
.container {
  background-color: var(--main-bg-color);
  height: 100vh;
}
</style>

