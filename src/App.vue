<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style>
	::-webkit-scrollbar {
		display: none; /* Oculta la barra de desplazamiento en Chrome, Safari y Opera */
	}
</style>
<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
