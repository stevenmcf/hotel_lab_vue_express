<template lang='html'>
<div>
    <h1>Current Bookings</h1>
    <div id="bookingsGrid">
  <booking v-for="booking, index in bookings" :key="index" :booking="booking" />
  </div>
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

<style lang="css" scoped>

#bookingsGrid {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

h1 {
    text-align: center;
}

</style>