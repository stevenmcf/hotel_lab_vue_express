<template lang='html'>
  <h1>Welcome to Hotel California</h1>
</template>

<script>
import BookingService from './services/BookingService';

export default {
  name: 'app',
  
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
