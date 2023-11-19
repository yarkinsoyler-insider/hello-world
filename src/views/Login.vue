<template>
  <Navbar />
  <div>Berk</div>
</template>


<script>
import { computed } from "vue";
import store from "../store";
import Navbar from "../components/navbar/Navbar.vue";
/* const meals = computed(() => store.state.meals); */

export default {
  name: "Login",
  components: {
    Navbar,
  },
};
</script>