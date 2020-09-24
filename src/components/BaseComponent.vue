<template>
  <div class="container">
    <ContainerComponent />
  </div>
</template>

<script>
import ContainerComponent from "./ContainerComponent";
export default {
  name: "BaseComponent",
  components: {
    ContainerComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
