import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UserSettingsForm from "./components/UserSettingsForm";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/usersettingsform",
            name: "usersettingsform",
            component: UserSettingsForm
        }
    ]
});
