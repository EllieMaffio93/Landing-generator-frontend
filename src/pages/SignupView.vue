<script setup>

import axios  from 'axios';
import { ref } from 'vue';

const formData = ref({
    email: "e.maffioletti@koodit.it",
    password: "password1234",
});

const onSubmit = async() => {
    const response = await axios.post('http://localhost:3030/users', formData.value);
    console.log(response.data);
}

</script>

<template>
    <h1>Sign Up</h1>

    <form @submit.prevent>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required v-model="formData.email">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required v-model="formData.password">

        <button type="submit" @click="onSubmit">Sign Up</button>
    </form>

</template>