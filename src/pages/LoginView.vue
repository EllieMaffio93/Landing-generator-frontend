<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const formData = ref({
    email: "e.maffioletti@koodit.it",
    password: "password1234",
})

const onSubmit = async() => {
    const response = await axios.post('http://localhost:3030/authentication', {
        strategy: "local",
        ...formData.value,
    });
    if(response.data.accessToken){
        console.log(response.data);
        localStorage.setItem('landing', JSON.stringify({
            user: response.data.user.email,
            accessToken: response.data.accessToken
        }));
        //localStorage.setItem('user', JSON.stringify(response.data.user));
        router.push('/dashboard/projects');
    }
    console.log(response.data);
}

</script>

<template>
    <h1>Log in</h1>

    <form @submit.prevent>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required v-model="formData.email">

        <label for="password">Password</label>
        <input type="password" id="password" name="password" required v-model="formData.password">

        <button type="submit" @click="onSubmit">Log in</button>
    </form>

</template>