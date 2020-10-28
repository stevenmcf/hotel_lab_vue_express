<template lang='html'>
        <div id='booking'>
            <h2>Guest Name: {{booking.lastName }}, <span> {{ booking.firstName }} </span></h2>
            <p>Contact: {{ booking.email }}</p>
            <p>Checked In ? {{ booking.checkedIn ? 'yes' : 'no' }}</p>

            <button v-on:click='handleDelete(booking._id)'>Delete Booking ?</button>
        </div>
</template>

<script>
import { eventBus } from '../main';

export default {
    name: 'booking',
    props: ['booking'],

    methods: {
        handleDelete(id) {
            eventBus.$emit('delete-booking', id);
        }
    }
}
</script>

<style lang="css" scoped>

#booking {
 
    border: 2px solid green;
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
}

span {
    font-weight: 300;

}



</style>