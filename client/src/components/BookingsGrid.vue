<template lang='html'>
<div id="bookingsGrid">
  <h1>Bookings List</h1>
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