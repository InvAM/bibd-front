<template>
	<v-container
		class="background"
		style="max-height: 100%; max-width: 100%; height: 100%; width: 100%">
		<v-row justify="center">
			<v-col cols="12" sm="8" md="6" lg="4">
				<v-card class="form-container">
					<v-card-title class="title">Register</v-card-title>
					<v-card-text>
						<p class="message">Signup now and get full access to our app.</p>
						<v-form @submit.prevent="submitForm">
							<v-text-field
								v-model="firstName"
								label="Firstname"
								required></v-text-field>
							<v-text-field
								v-model="lastName"
								label="Lastname"
								required></v-text-field>
							<v-text-field
								v-model="email"
								label="Email"
								type="email"
								required></v-text-field>
							<v-text-field
								v-model="password"
								label="Password"
								type="password"
								required></v-text-field>
							<v-text-field
								v-model="confirmPassword"
								label="Confirm password"
								type="password"
								required></v-text-field>
							<v-btn class="submit" type="submit">Submit</v-btn>
						</v-form>
					</v-card-text>
					<v-card-actions class="signin">
						<p>Already have an account? <a href="#">Sign in</a></p>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style>
	.background {
		background: linear-gradient(to bottom right, #2c3e50, #34495e);
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.form-container {
		background-color: #fff;
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.084),
			0px 2px 3px rgba(0, 0, 0, 0.168);
	}

	.title {
		font-size: 28px;
		color: royalblue;
		font-weight: 600;
		letter-spacing: -1px;
		position: relative;
		display: flex;
		align-items: center;
		padding-left: 30px;
	}

	.title::before,
	.title::after {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		border-radius: 50%;
		left: 0px;
		background-color: royalblue;
	}

	.title::before {
		width: 18px;
		height: 18px;
		background-color: royalblue;
	}

	.title::after {
		width: 18px;
		height: 18px;
		animation: pulse 1s linear infinite;
	}

	.message,
	.signin {
		color: rgba(88, 87, 87, 0.822);
		font-size: 14px;
		text-align: center;
	}

	.signin a {
		color: royalblue;
	}

	.signin a:hover {
		text-decoration: underline;
	}

	.submit {
		background-color: royalblue;
		color: #fff;
		font-size: 16px;
		border-radius: 10px;
	}

	.submit:hover {
		background-color: rgb(56, 90, 194);
	}
</style>
<script src="./RegistrarUsuario.js"></script>
