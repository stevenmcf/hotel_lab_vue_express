<template lang='html'>
  <main id='app'>
    <h1>Welcome to Hotel California</h1>
    <bookings-grid :bookings='bookings'></bookings-grid>
  </main>
</template>

<script>
import BookingService from './services/BookingService';
import BookingsGrid from './components/BookingsGrid';
export default {
  name: 'app',

  components: {
      'bookings-grid': BookingsGrid
  },

  
  data() {
    return {
      bookings: []
    };
  },

  mounted() {
    this.fetchBookings();
  },

  methods: {
    fetchBookings() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}


</script>

<style scoped>

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


</style>
