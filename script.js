const moviesUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTT3tIRabyINC1SiKuJUrqibo5XrUyOtlbwBeGpWZzNPoLbnw8PougKzkONugzr4AmfWT3_grR0XhOy/pub?gid=1784848680&single=true&output=csv';

const showsUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTT3tIRabyINC1SiKuJUrqibo5XrUyOtlbwBeGpWZzNPoLbnw8PougKzkONugzr4AmfWT3_grR0XhOy/pub?gid=1267192324&single=true&output=csv';

const parksUrl =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTT3tIRabyINC1SiKuJUrqibo5XrUyOtlbwBeGpWZzNPoLbnw8PougKzkONugzr4AmfWT3_grR0XhOy/pub?gid=19832608&single=true&output=csv';

const app = new Vue({
  el: '#app',
  data: function () {
    return {
      movies: [],
      shows: [],
      parks: [],
    };
  },
  created: function () {
    this.fetchMovies();
    this.fetchShows();
    this.fetchParks();
  },
  methods: {
    fetchMovies() {
      Papa.parse(moviesUrl, {
        download: true,
        header: true,
        complete: (results) => (this.movies = results.data),
      });
    },
    fetchShows() {
      const _this = this;
      Papa.parse(showsUrl, {
        download: true,
        header: true,
        complete: function (results) {
          _this.shows = results.data;
        },
      });
    },
    fetchParks() {
      const _this = this;
      Papa.parse(parksUrl, {
        download: true,
        header: true,
        complete: function (results) {
          _this.parks = results.data;
        },
      });
    },
  },
});
