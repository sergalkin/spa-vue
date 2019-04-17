<template>
    <div>
        <h1 class="font-normal text-3xl text-grey-darkest leading-none mb-12">
            You Achievements
        </h1>

        <input placeholder="Your Laracasts API Token"
               v-model="token"
               class="border p-2 rounded w-full mb-8"
               @keyup.enter="fetchAchive">

        <p class="text-red italic text-sm" v-if="message" v-text="message"></p>

        <ul>
            <li v-for="achievement in achievements">{{achievement.name}}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                achievements: [],
                token: '',
                message: '',
            }
        },
        methods: {
            fetchAchive() {
                axios
                    .get(
                        `http://spa-vue.loc/api/achievements?api_token=${this.token}`
                    )
                    .catch(error => {
                        this.message = error.response.data.message;
                        this.achievements = [];
                    })
                    .then(response => {
                        this.achievements = response.data;
                        this.message = null;
                    });
            }
        }
    }
</script>