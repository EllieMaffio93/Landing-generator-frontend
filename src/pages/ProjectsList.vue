<script setup>
import { onMounted, ref } from 'vue';
import { getLandings, createLanding } from '../api/landings';
import { useRouter } from 'vue-router';

const router = useRouter();
const projects = ref([]);
const newProjectModal = ref(false);
const newProjectTitle = ref("Landing di Adriano");

onMounted(async () => {
    const response = await getLandings();
    projects.value = response.data;
    console.log(projects.value);
})

async function createNewProject() {
    const response = await createLanding({ title: newProjectTitle.value, template: [] })
    newProjectModal.value = false;
    newProjectTitle.value = '';
    router.push(`/dashboard/projects/${response._id}`);
}
</script>

<template>
    <h1>Projects List</h1>
    <button @click="newProjectModal = true">Create new project</button>
    <ul>
        <li v-for="project in projects" :key="project.id">
            <router-link :to="{ name: 'Project', params: { id: project._id } }">
                {{ project.title }}
            </router-link>
        </li>
    </ul>
    <div v-if="newProjectModal" class="gradient">
        <div  class="new-project-modal">
            <label for="title">Project name</label>
            <input name="title" type="text" v-model="newProjectTitle" placeholder="e.g. Landing di Elly">
            <button @click="createNewProject">Create</button>
            <button class="cancel-button" @click="newProjectModal = false">Annulla</button>
        </div>
    </div>
    
</template>

<style scoped>

.gradient{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    display:flex;
    align-items:center;
    justify-content: center;
}

.new-project-modal{
    width:40%;
    height:auto;
    border-radius:10px;
    background:beige;
    padding:40px;
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    .cancel-button{
        position:absolute;
        top:20px;
        right:20px;
    }
}

</style>