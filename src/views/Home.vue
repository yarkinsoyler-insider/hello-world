
<template>
  <div id="app">
    <Navbar />
    <div className="lg:max-w-screen-xl m-auto">
      <div className="py-20 banner bg-cover mb-10">
        <div className="flex m-auto flex flex-col gap-5 px-12">
          <div className="flex flex-col">
            <h1
              className="text-5xl font-bold text-white mb-2 fons-sans tracking-normal"
            >
              Welcome.
            </h1>
            <div className="text-3xl text-white">
              Millions of movies, TV shows and people to discover. Explore now.
            </div>
          </div>

          <div className="flex items-center relative pt-5 mt-4">
            <input
              type="text"
              className="w-full rounded-full py-4 px-6 focus:outline-none text-lg"
              placeholder="Search for a movie, tv show, person......"
            />
            <div className="flex absolute right-0">
              <div
                class="rounded-full px-6 py-4 hover:text-blue-800 text-white text-lg bg-cyan-400 cursor-pointer button"
              >
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 slider bg-contain bg-no-repeat">
        <div className="mb-4 px-2 pb-2">
          <div className="text-2xl font-bold">Harry Potter Movies</div>
        </div>
        <div className="">
          <div
            class="flex flex-nowrap overflow-scroll overflow-y-auto no-scrollbar gap-5"
          >
            <MovieCard
              v-for="movie in movies"
              :key="movie.id"
              :movie="movie"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import MovieCard from "../components/MovieSlider/MovieCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    MovieCard,
  },
  methods: {
    async takeInput() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=348088421ad3fb3a9d6e56bb6a9a8f80&language=en-US&page=1&include_adult=false&query=harry-potter`
        );
        console.log(response);
        if (response && response.data.results) {
          this.movies = response.data.results.filter(
            (movie) => movie.poster_path
          );
        }
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
      console.log("movie");
    },
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.takeInput();
  },
};
</script>

<style>
.banner {
  background-image: url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/xpba0Dxz3sxV3QgYLR8UIe1LAAX.jpg");
}

.slider {
  background-image: url("https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg");
  background-position: 50% 200px;
}
</style>