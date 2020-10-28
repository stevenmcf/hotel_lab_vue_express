<template lang="html">

<form id="bookings-form" v-on:submit.prevent="handleSubmit">
    <h2>Add a booking</h2>
    <div>
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="firstName" required />
    </div>
    <div>
        <label for="lastName">Surname:</label>
        <input type="text" id="lastName" v-model="lastName" required />
    </div>
    <div>
        <label for="email">Email: </label>
        <input type="email" id="email" v-model="email" required/>
    </div>
    <div>
     <label for="yes">Yes</label>
      <input type="radio" id="yes" v-model="checkedIn" value="true" />
      <label for="no">No</label>
      <input type="radio" id="no" v-model="checkedIn" value="false" />
    </div>

    <input type="submit" value="Add booking" id="save">
</form>

</template>

<script>
import { eventBus } from '@/main';

export default {
    name: 'bookings-form',
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            checkedIn: false
        }
    },
    methods: {
        handleSubmit() {
            const payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                checkedIn: this.checkedIn
            };

            eventBus.$emit('submit-booking', payload);
            this.name = this.email = '';
            this.checkedIn = false;
        }
    }
}
</script>

<style scoped>

#bookings-form {
     border: 0px 2px 0px 0px solid slategray;
     background-color: slategray;
     padding-left: 10px;
     text-align: center;
}

input {
    padding: 10px;
    margin: 5px;
}

input[type=submit] {
    border-radius: 10px;
    background-color: green;
}

#bookings-form > h2 {
    text-align: center;
}

</style>