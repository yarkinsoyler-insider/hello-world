<template>
  <div className="bg-sky-950">
    <div
      className="flex flex-row h-16 max-w-screen-xl m-auto py-8 justify-between"
    >
      <div className="flex flex-row items-center">
        <div className="flex items-center ml-4 cursor-pointer">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="logo"
            className="w-36 h-8"
          />
        </div>

        <div className="flex flex-row items-center gap-8 ml-8 h-full">
          <div className="relative">
            <PrimaryButton text="Movies" @buttonMouseOver="setHoveredElement" />
            <SubcategoriesDropdown
              v-if="hoveredElement === 'movies'"
              @mouseleave="clearHoveredElement"
            />
          </div>
          <div className="relative">
            <PrimaryButton
              text="TV Shows"
              @buttonMouseOver="setHoveredElement"
            />
            <SubcategoriesDropdown
              v-if="hoveredElement === 'tvshows'"
              @mouseleave="clearHoveredElement"
            />
          </div>
          <div className="relative">
            <PrimaryButton text="People" @buttonMouseOver="setHoveredElement" />
            <SubcategoriesDropdown
              v-if="hoveredElement === 'people'"
              @mouseleave="clearHoveredElement"
            />
          </div>
          <div className="relative">
            <PrimaryButton text="More" @buttonMouseOver="setHoveredElement" />
            <SubcategoriesDropdown
              v-if="hoveredElement === 'more'"
              @mouseleave="clearHoveredElement"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 mr-12">
        <div className="w-6 cursor-pointer">
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
            alt="plus"
          />
        </div>
        <PrimaryButton
          text="EN"
          className="border-2 border-white text-white p-1 cursor-pointer hover:bg-white hover:text-blue-950 rounded-md duration-500"
        />
        <PrimaryButton text="Login" />
        <PrimaryButton text="Join TMDB" />
        <div className="w-8 cursor-pointer">
          <img
            src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            alt="Search"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryButton from "./PrimaryButton.vue";
import SubcategoriesDropdown from "./SubcategoriesDropdown.vue";
import { computed } from "vue";
import store from "../../store";

export default {
  name: "Navbar",
  components: {
    PrimaryButton,
    SubcategoriesDropdown,
  },
  computed: {
    hoveredElement() {
      return this.$store.state.hoveredElement;
    },
  },
  methods: {
    setHoveredElement(element) {
      // Update the hovered element in the store
      this.$store.commit("setHoveredElement", element);
    },
  },
};
</script>