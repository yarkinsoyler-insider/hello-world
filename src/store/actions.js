export const actions = {
    async fetchMovies({ commit }) {
        try {
            const response = await axios.get("your_movie_api_endpoint_here");
            commit("setMovies", response.data);
        } catch (error) {
            console.error("Failed to fetch movies:", error);
        }
    },
};