<template class="menu">
	<v-app-bar
		style="
			background: rgb(228, 0, 0);
			background: linear-gradient(
				90deg,
				rgba(228, 0, 0, 1) 3%,
				rgba(0, 40, 85, 1) 5%,
				rgba(228, 0, 0, 1) 10%,
				rgba(29, 35, 74, 1) 13%,
				rgba(228, 0, 0, 1) 17%,
				rgba(0, 40, 85, 1) 20%
			);
		"
		dense
		dark
		height="80">
		<v-speed-dial location="left center" transition="slide-x-transition">
			<template v-slot:activator="{ props: activatorProps }">
				<v-fab
					style="margin-left: 1400px"
					v-bind="activatorProps"
					size="large"
					icon="mdi-account"></v-fab>
			</template>

			<v-btn key="1" icon="mdi-account-edit"></v-btn>
			<v-btn key="2" icon="mdi-logout"></v-btn>
		</v-speed-dial>
		<v-spacer></v-spacer>
		<v-img src="" max-height="100" max-width="50"></v-img>
	</v-app-bar>

	<v-btn
		size="x-large"
		elevation="8"
		class="custom-btn"
		style="width: 350px; height: 300px; margin-left: 100px; margin-top: 100px">
		Marcar Asitencia
		<v-icon style="margin-left: 10px">mdi-account-plus</v-icon>
	</v-btn>

	<v-btn
		size="x-large"
		elevation="8"
		class="custom-btn"
		style="width: 350px; height: 300px; margin-left: 100px; margin-top: 100px">
		Modificar Asistencia
		<v-icon style="margin-left: 10px">mdi-account-edit</v-icon>
	</v-btn>

	<v-btn
		size="x-large"
		elevation="8"
		class="custom-btn"
		style="width: 350px; height: 300px; margin-left: 100px; margin-top: 100px">
		Cerrar Sesion
		<v-icon style="margin-left: 10px">mdi-logout</v-icon>
	</v-btn>

	<v-footer color="#233559" app height="60">
		<v-row align="center" justify="center">
			<v-col cols="12" class="text-subtitle-2 text-center">
				&copy; 2024 UCVMARCACIONES Todos los derechos reservados.
			</v-col>
		</v-row>
	</v-footer>
</template>

<style>
	.custom-btn {
		transition: background-color 0.3s ease;
		border-radius: 50px; /* Para una transición suave */
	}

	.custom-btn:hover {
		background-color: #79a6da; /* Utiliza una variable CSS para el color de hover */
	}
</style>

<script src="./menu.js"></script>
