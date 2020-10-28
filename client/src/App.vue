<template lang='html'>
  <main id='app'>
      <section id="booking-container"> 
        <bookings-form />
      <header>
        <h1>Welcome to Hotel California</h1>
      </header>
      </section>
      
    <hr>
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
  font-family: 'Noto Sans JP', sans-serif;
}

h1 {
    text-align: center;
}

#booking-container {
    display: grid;
    grid-template-areas: 
    'form header';
    grid-template-columns: 0.75fr 2.25fr;
 
}


header {
    grid-area: header;
    font-size: 40pt;
    background-image: url('./assets/house-589997_1280.jpg');
    background-size: ;
    height: 90vh;
}


</style>
