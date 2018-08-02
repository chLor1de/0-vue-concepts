<template>
    <div class="min-h-screen bg-indigo p-8 text-black font-inter antialiased">
        <h1 class="text-center text-white mb-4">Vue Components Examples</h1>
        <div class="flex">
            <div class="w-1/4">
                <div class="sidebar p-6 bg-white rounded-lg">
                    <h2 class="my-6 text-indigo-dark">Contents</h2>
                    <router-link exact to="/" class="block no-underline py-2">Home</router-link>
                    <router-link exact to="/usersettingsform" class="block no-underline py-2">UserSettingsForm</router-link>
                </div>
            </div>
            <div class="w-3/4">
                <div class="demo-content ml-6 p-6 bg-white rounded-lg">
                    <h2 class="text-indigo-dark text-center mb-6">Components</h2>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
</style>
