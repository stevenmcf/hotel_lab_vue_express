<template lang='html'>
  <main id='app'>
    <h1>Welcome to Hotel California</h1>
    <bookings-form/>
    <bookings-grid :bookings='bookings'></bookings-grid>
  </main>
</template>

<script>
import { eventBus } from './main';
import BookingService from './services/BookingService';
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from './components/BookingsForm';

export default {
  name: 'app',

  components: {
      'bookings-grid': BookingsGrid,
      'bookings-form': BookingsForm
  },

  data() {
    return {
      bookings: []
    };
  },

  mounted() {
    this.fetchBookings();

    eventBus.$on('submit-booking', payload => {
        BookingService.postBooking(payload)
        .then(booking => this.bookings.push(booking));
    });

    eventBus.$on('delete-booking', id => {
        BookingService.deleteBooking(id)
        .then(() => {
            const index = this.bookings.findIndex(booking => booking._id === id);
            this.bookings.splice(index, 1);
        });
    });
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
