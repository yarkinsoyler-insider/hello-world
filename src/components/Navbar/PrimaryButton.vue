<template>
  <div>
    <div
      class="flex relative items-center text-white cursor-pointer text-weight-600 text-base"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ text }}
    </div>
    <SubcategoriesDropdown v-if="hoveredElement" />
  </div>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["text"],
  methods: {
    handleMouseOver() {
      this.$emit("buttonMouseOver", this.text.replace(" ", "").toLowerCase());
    },
    handleMouseLeave() {
      this.$emit("buttonMouseOver", null);
    },
  },
};
</script>
