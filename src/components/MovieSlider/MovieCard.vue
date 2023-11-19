<template>
  <div class="flex flex-col p-2 relative w-1/5">
    <img
      class="min-w-[160px] mb-6 rounded-xl"
      :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path} `"
      alt="Image unavailable"
    />
    <div class="text-base flex flex-col text-bold">
      <div class="text-base font-bold">
        {{ movie.title || movie.name }}
      </div>
      <div class="text-base text-slate-500">
        {{ movie.first_air_date || movie.release_date }}
      </div>
      <div class="movie-description">
        {{ Number(movie.vote_average.toFixed(1)) || "-" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    movie: Object,
  },
};
</script>