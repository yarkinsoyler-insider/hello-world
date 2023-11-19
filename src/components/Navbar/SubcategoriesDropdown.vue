<template>
  <div
    class="absolute bg-white w-48 px-8 py-4 subcategories-dropdown rounded-lg top-10"
    :style="dropdownStyle"
  >
    <div
      className="my-2 cursor-pointer text-lg"
      v-for="subcategory in subcategories"
      :key="subcategory"
    >
      {{ subcategory }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import store from "../../store";

export default {
  computed: {
    subcategories() {
      const hoveredElement = this.$store.state.hoveredElement;
      return this.$store.state.subcategories[hoveredElement] || [];
    },
  },
};
</script>
