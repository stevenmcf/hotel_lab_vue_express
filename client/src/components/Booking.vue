<template lang='html'>
    <div id='booking'>
        <h2>Guest Name: {{booking.lastName }}, {{ booking.firstName }}</h2>
        <p>Contact: {{ booking.email }}</p>
        <p>Checked In: {{ booking.checkedIn ? 'yes' : 'no' }}</p>

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

<style>

</style>