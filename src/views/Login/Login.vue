<template>
	<div class="login-container">
		<div class="login-image">
			<v-img
				lazy-src="../../assets/ucv_icon.png"
				src="../../assets/ucv_icon.png"
				class="overlay-image">
				<template v-slot:placeholder>
					<div class="d-flex align-center justify-center fill-height">
						<v-progress-circular
							color="grey-lighten-4"
							indeterminate></v-progress-circular>
					</div>
				</template>
			</v-img>
			<h1 class="title">UCVMARCACIONES</h1>
		</div>
		<v-sheet class="ma-12 mt-16" width="350">
			<p
				class="mb-12 text-h3 font-weight-bold"
				style="text-align: center; color: #002855">
				Bienv
				<span style="color: #e40000; margin-left: -12px">enido</span>
			</p>
			<v-btn
				size="small"
				class="text-none mb-5 mr-8"
				variant="plain"
				style="margin-left: -12px"
				>¿No tiene una cuenta? Registrarse aqui</v-btn
			>

			<v-form fast-fail @submit.prevent>
				<div class="text-subtitle-2 mb-2">Nombre de usuario</div>
				<v-text-field variant="outlined" v-model="username"></v-text-field>
				<div class="text-subtitle-2 mb-2">Contraseña</div>
				<v-text-field
					v-model="password"
					variant="outlined"
					:rules="[rules.required]"></v-text-field>

				<v-btn
					class="mt-2 mb-2"
					type="submit"
					block
					style="color: white; background-color: #002855"
					@click="iniciarSesion"
					>Ingresar</v-btn
				>
			</v-form>
			<v-btn
				style="margin-left: 60px"
				variant="plain"
				class="text-none"
				@click="recuperar_contraseña">
				¿Olvidaste tu contraseña?
			</v-btn>
		</v-sheet>
		<v-row v-if="mensajeError" align="center">
						<v-col cols="12">
							<v-alert type="error" class="mt-4">
								{{ mensajeError }}
							</v-alert>
						</v-col>
					</v-row>
		<v-dialog v-model="dialogError" :width="500">
			<v-card color="#ec4a4a">
				<v-card-title>
					<span class="mx-auto" style="color: white"> ¡Verifique! </span>
				</v-card-title>
				<v-card-text>
					<v-alert v-if="mensaje !== ''" color="white" :type="typemsg" outlined>{{ mensaje }}</v-alert>
				</v-card-text>
				<v-card-actions style="display: flex; justify-content: center">
					<v-btn style="background-color: #033076; color: #ffffff" @click="cerrar">
						Cerrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<style scoped>
	.login-container {
		display: flex;
		height: 100vh;
		/* La altura de la pantalla completa */
	}

	.login-container .login-image {
		flex: 1;
		/* Ocupa el espacio disponible */
		position: relative;
		background-color: #002855;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-container .title {
		color: white;
	}

	.overlay-image {
		position: absolute;
		width: 200px;
		/* Ajusta el tamaño según sea necesario */
		height: auto;
		margin-top: -300px;
	}

	.login-form {
		flex: 1;
		/* Ocupa el espacio disponible */
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		/* Opcional: agregar relleno alrededor del formulario */
	}
</style>
<script src="./Login.js"></script>
