<template>
        <LoginModal v-show="showloginModal" @close-modal="showloginModal = false"/>
    <div class="flex justify-between w-full p-4 bg-blue-600 text-blue-200 shadow-md">
        <div>
            <p><NuxtLink to="/">LOGO</NuxtLink></p>
        </div>
        <div>
            <ul class="flex space-x-4">
                <li><NuxtLink class="hover:text-white hover:underline" to="about">About</NuxtLink></li>
                <li><NuxtLink class="hover:text-white hover:underline" to="/prices">Prices</NuxtLink></li>
                <li><NuxtLink class="hover:text-white hover:underline" to="/faq">faq</NuxtLink></li>
            </ul>
        </div>
        <div>
            <button @click="showloginModal = true" class="shadow-md rounded bg-blue-400 hover:bg-blue-500 p-1 text-white pl-2 pr-2">Log in</button>
        </div>
    </div>
</template>

<script setup>
let showloginModal = ref(false)
</script>