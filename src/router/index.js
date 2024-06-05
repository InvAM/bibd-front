import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Login",
		component: () =>
			import(/* webpackChunkName: "login" */ "../../src/views/Login/Login.vue"),
	},
	{
		path: "/menu",
		name: "Menu",
		component: () =>
			import(/* webpackChunkName: "menu" */ "../../src/views/Menu/Menu.vue"),
	},
	{
		path: "/recoveryPassword",
		name: "RecoveryPassword",
		component: () =>
			import(/* webpackChunkName: "RecoveryPassword" */ "../../src/views/RecuperarContraseña/RecuperarContraseña.vue"),
	},
	{
		path: "/registrarUsuario",
		name: "RegistrarUsuario",
		component: () =>
			import(/* webpackChunkName: "RegistrarUsuario" */ "../../src/views/RegistrarUsuario/RegistrarUsuario.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
