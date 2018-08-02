<template>
        <span class="toggle flex-no-shrink"
              role="checkbox" tabind
              ex="0"
              :aria-checked="toggled.toString()"
              @click="toggle"
              @keydown.space.prevent="toggle"
        ></span>
</template>

<script>
export default {
    model: {
        prop: "toggled",
        event: "toggle"
    },
    props: ["toggled"],
    methods: {
        toggle() {
            this.$emit("toggle", !this.toggled);
        }
    }
};
</script>

<style scoped>
</style>
