<template>
	<v-app>
		<v-main>
			<v-container fluid class="background d-flex align-center justify-center">
				<v-card class="form-container">
					<v-card-title class="logo-container">Forgot Password</v-card-title>
					<v-card-text>
						<v-form>
							<v-text-field
								label="Email"
								v-model="email"
								placeholder="Enter your email"
								required
							></v-text-field>

							<v-btn class="form-submit-btn" color="primary" @click="submitForm">
								Send Email
							</v-btn>
						</v-form>
					</v-card-text>
					<v-card-actions class="signup-link">
						<p>
							Don't have an account?
							<v-btn text class="link" @click="goToSignup">Sign up now</v-btn>
						</p>
					</v-card-actions>
				</v-card>
			</v-container>
		</v-main>
	</v-app>
</template>
<style>
.background {
	background: linear-gradient(to bottom right, #2c3e50, #34495e);
	height: 100vh;
}

.form-container {
	max-width: 400px;
	padding: 32px 24px;
	border-radius: 10px;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084), 0px 2px 3px rgba(0, 0, 0, 0.168);
}

.logo-container {
	text-align: center;
	font-weight: 600;
	font-size: 18px;
}

.form-submit-btn {
	width: 100%;
	margin-top: 16px;
}

.signup-link {
	text-align: center;
	margin-top: 16px;
}

.link {
	color: #1778f2;
	text-decoration: none;
}
</style>
<script src="./RecuperarContraseña.js"></script>
