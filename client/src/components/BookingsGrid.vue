<template lang='html'>
<div id="bookingsGrid">
  <h1>Current Bookings :</h1>
  <booking v-for="booking, index in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>

import Booking from './Booking';


export default {
    name: 'bookings-grid',

    components: {
        'booking': Booking
    },

    props: ['bookings']
}
</script>

<style scoped>

</style>