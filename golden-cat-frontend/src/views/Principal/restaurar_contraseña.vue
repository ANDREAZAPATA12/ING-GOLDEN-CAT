<template>

 <v-layout row>
        <v-flex xs6>
          <v-card dark tile flat color="transparent">
            <v-img height="350px" width="280px" :src="logo" ></v-img>

          </v-card>
        </v-flex>

            <v-flex xs6>
          <v-card dark tile flat color="transparent">
        <v-layout align-center justify-center >
          <v-flex xs12 sm md10>
            <v-card class="elevation-12">
            <v-card dark tile flat color="#0f7fab" >
              <v-toolbar dark color="indigo darken-4">
                <v-toolbar-title>RESTAURAR CONTRASEÑA</v-toolbar-title>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Escribe correo de restauracion" type="text"></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-text class="text-xs-center">
                   <v-btn color="indigo darken-4"   to="/login" >Enviar correo</v-btn>
                 </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
               <v-btn color="indigo darken-4" to="/login">Iniciar sesion</v-btn>
                 <v-btn color="indigo darken-4" to="/registro">crear cuenta</v-btn>
                 <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
            </v-card>
          </v-flex>
        </v-layout>
          </v-card>
        </v-flex>

</v-layout>

</template>

<script>
import Logo from '@/assets/logo2.png'
export default {
  data () {
    return {
      logo: Logo
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}

</script>
