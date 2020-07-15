<template>
  <v-app id="inspire" dark>
    <v-toolbar app color="#01579B">

        <v-layout row wrap>
            <v-flex xs2>
          <v-img height="55px" :src="logo" ></v-img>
        </v-flex>
        </v-layout>
        <v-spacer></v-spacer>

        <v-btn small flat  dark left to="/" >inicio
          <v-icon small>business</v-icon>
        </v-btn>
        <v-btn small flat  dark left to= "/servicios">Servicios extra
          <v-icon small>bookmarks</v-icon>
        </v-btn>
        
        <v-btn small flat  dark left to="Que_es_golden_cat">¿que es golden cat?
          <v-icon small>help</v-icon>
        </v-btn>
          <v-btn small flat  dark left to="/login">iniciar sesion
          <v-icon small>account_circle</v-icon>
        </v-btn>
        <div color="red"  class="text-xs-center">
    <v-menu posicion-x >
     <template v-slot:activator="{ on }">
        <v-btn v-on="on" small  dark flat left> cuenta
          <v-icon small>account_circle</v-icon>
        </v-btn>
       </template>
      <v-card   class="clase">
        <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-tile-avatar>
            <v-list-tile-content >
            <v-list-tile-title>{{ user.name + " " + user.lastName }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list >
           <v-list-tile>
            <v-btn small flat to="/Reservas_Cliente" >reservas
          <v-icon small>assignment</v-icon>
        </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat to="/configuracion">configuracion
          <v-icon small>settings</v-icon>
        </v-btn>
          </v-list-tile>
          <v-list-tile>
            <v-btn small flat to="/login">cerrar sesion
          <v-icon small>close</v-icon>
        </v-btn>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-menu>
    </div>
      </v-toolbar>











    <v-content >
      <v-container>
        <v-layout row wrap>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
      <v-footer color="#031138"
      height="auto">
            <v-container >
      <v-layout row>
        <v-flex xs3>
          <v-card dark tile flat color="transparent">
            <p class="text-md-center subheading" >PAGO SEGURO CON <br> NUESTRAS TARJETAS DE CREDITO</p>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card dark tile flat  color="transparent">

          </v-card>
        </v-flex>
         <v-flex xs2>
          <v-card dark tile flat color="#9aabdb">
             <v-img  :src="imgtarjeta" ></v-img>
             <v-divider></v-divider>
             <p class="text-md-center caption" > TARJETAS DE CREDITO</p>
          </v-card>
        </v-flex>
        <v-flex xs1>
          <v-card dark tile flat  color="transparent">

          </v-card>
        </v-flex>
         <v-flex xs2>
          <v-card dark tile flat color="#9aabdb">
             <v-img height="53px"   :src="efectybaloto" ></v-img>
             <v-divider ></v-divider>
             <p class="text-md-center caption" > TARJETAS DEBITO</p>

          </v-card>
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row>
        <v-flex xs2 >
          <v-card dark  flat color="transparent">
            <v-card-text >INFORMACION</v-card-text>

             <v-btn color="transparent" to="/contactanos" depressed small>Contactanos</v-btn>
             <v-divider ></v-divider>
              <v-btn color="transparent" to="/servicios" depressed small>servicios extra</v-btn>
              <v-divider ></v-divider>
               <v-btn color="transparent" to="/Que_es_golden_cat" depressed small>que es golden cat</v-btn>
               <v-divider ></v-divider>
                <v-btn color="transparent" to="/Eventos" depressed small>eventos</v-btn>
                <v-divider ></v-divider>
                    <v-btn color="transparent" to="/Individual" depressed small>Individual</v-btn>
                    <v-divider ></v-divider>
          </v-card>
        </v-flex>
        <v-flex xs2  >
          <v-card class="bordel" dark tile flat color="transparent">
            <v-card-text></v-card-text>
             <v-btn color="transparent" to="/TerminosCondiciones" depressed small>terminos y condiciones</v-btn>
             <v-divider ></v-divider>
              <v-btn color="transparent" to="/PreguntasFrecuentes" depressed small>preguntas frecuentes</v-btn>
              <v-divider ></v-divider>
              <v-btn color="transparent" to="/Matrimonial" depressed small>Matrimonial</v-btn>
                    <v-divider ></v-divider>
                    <v-btn color="transparent" to="/Doble" depressed small>Doble</v-btn>
                    <v-divider ></v-divider>
                    <v-btn color="transparent" to="Suite" depressed small>Suite</v-btn>
                    <v-divider ></v-divider>
          </v-card>
        </v-flex>

        <v-flex xs4 >
          <v-card dark tile flat color="transparent">

          </v-card>
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row wrap>
        <v-flex xs2  >
          <v-card dark tile flat color="transparent">
            <v-card-text></v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs3  >
          <v-card dark tile flat color="transparent">
             <v-img height="60px"   :src="escudomincomercio" ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs3   >
          <v-card dark tile flat color="transparent">
            <v-img height="55px"   :src="camaracolombiana" ></v-img>
          </v-card>
        </v-flex>
        <v-flex xs4  >
          <v-card dark tile flat color="transparent">
            <v-card-text class="text-md-center">
              <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
                <v-icon size="24px">{{ icon }}</v-icon>
                <a href="https://www.facebook.com/Hoteles-Golden-Cat-100522658294821/" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="40" height="40" viewBox="2 0 24 24"><path class="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 5.6h-1.5s-.6.3-.6.5v1.6H15c-.1 1.2-.3 2.3-.3 2.3h-1.9v6.8H10V12H8.7V9.7h1.4V7.8c0-.3-.1-2.6 2.9-2.6h2.1c-.1 1-.1 2.1-.1 2.4z"></path></svg></span>         </a>
         <a href="https://twitter.com/CatHoteles?s=08" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="40" height="40" viewBox="2 0 24 24"><path class="svg-color--primary" fill="#fff" d="M13 2C7.5 2 3 6.5 3 12s4.5 10 10 10 10-4.5 10-10S18.5 2 13 2zm5.6 7.9v.4c0 4.4-3.6 7.9-8 7.9-1.6 0-3-.5-4.3-1.2h.4c1.4 0 2.7-.5 3.8-1.3h-.2c-1.2 0-2.2-.8-2.6-1.9h.5c.3 0 .5 0 .8-.1-.5-.1-1-.3-1.4-.7-.5-.5-.9-1.2-.9-2v-.1c.4.2.8.3 1.3.3-.5-.3-.8-.7-1.1-1.1V9c0-.5.1-1 .4-1.4.3.3.6.7.9.9l.2.2c.6.5 1.3.9 2.1 1.2.1 0 .2.1.3.1.3.1.7.2 1 .3.1 0 .2 0 .3.1.3 0 .6.1 1 .1-.1-.2-.1-.5-.1-.7 0-.4.1-.8.2-1.1.1-.3.3-.6.5-.8.1-.1.2-.2.3-.2.3-.3.7-.5 1.1-.6.3-.1.5-.1.7-.1.8 0 1.5.4 2.1.9.1 0 .2-.1.4-.1.5-.1 1-.3 1.4-.6 0 .1 0 .2-.1.2-.2.6-.6 1-1.1 1.3v.1c.5-.1 1-.2 1.5-.5-.4.6-.9 1.1-1.4 1.6z"></path></svg></span></a>
         <a href="https://instagram.com/hotelesgoldencat?igshid=uk64hxm76r8t" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="40" height="40" viewBox="2 0 24 24"><circle class="svg-color--primary" fill="#FFF" cx="12" cy="12" r="2.25"></circle><path class="svg-color--primary" fill="#FFF" d="M17.49 9.27c-.03-.65-.14-1.01-.23-1.25-.12-.31-.27-.54-.51-.77-.23-.24-.46-.39-.77-.51-.24-.09-.6-.2-1.25-.23-.72-.03-.93-.04-2.73-.04s-2.01.01-2.73.04c-.65.03-1.01.14-1.25.23-.31.12-.54.27-.77.51-.24.23-.39.46-.51.77-.09.24-.2.6-.23 1.25-.03.72-.04.93-.04 2.73s.01 2.01.04 2.73c.03.65.14 1.01.23 1.25.12.31.27.54.51.77.23.24.46.39.77.51.24.09.6.2 1.25.23.72.03.93.04 2.73.04s2.01-.01 2.73-.04c.65-.03 1.01-.14 1.25-.23.31-.12.54-.27.77-.51.24-.23.39-.46.51-.77.09-.24.2-.6.23-1.25.03-.72.04-.93.04-2.73s-.01-2.01-.04-2.73zM12 15.46c-1.91 0-3.46-1.55-3.46-3.46S10.09 8.54 12 8.54s3.46 1.55 3.46 3.46-1.55 3.46-3.46 3.46zm3.6-6.25c-.45 0-.81-.36-.81-.81 0-.45.36-.81.81-.81.45 0 .81.36.81.81 0 .45-.36.81-.81.81z"></path><path class="svg-color--primary" fill="#FFF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.7 12.78c-.03.72-.14 1.21-.31 1.64-.17.44-.4.82-.78 1.19-.37.38-.75.61-1.19.78-.43.17-.92.28-1.64.31-.72.04-.95.05-2.78.05s-2.06-.01-2.78-.05c-.72-.03-1.21-.14-1.64-.31-.44-.17-.82-.4-1.19-.78-.38-.37-.61-.75-.78-1.19-.17-.43-.28-.92-.31-1.64-.04-.72-.05-.95-.05-2.78s.01-2.06.05-2.78c.03-.72.14-1.21.31-1.64.17-.44.4-.82.78-1.19.37-.38.75-.61 1.19-.78.43-.17.92-.28 1.64-.32.72-.03.95-.04 2.78-.04s2.06.01 2.78.04c.72.04 1.21.15 1.64.32.44.17.82.4 1.19.78.38.37.61.75.78 1.19.17.43.28.92.31 1.64.04.72.05.95.05 2.78s-.01 2.06-.05 2.78z"></path></svg></span></a>
         <a href="https://www.linkedin.com/company/trivagonv/" target="_blank" rel="noopener noreferrer" class="footer__social-icon"><span class="icon-ic footer__social-list-ic icon-contain icon-center"><svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="40" height="40" viewBox="2 0 24 24"><path class="svg-color--primary" fill="#fff" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM8.7 17.4H6.2V9.7h2.6v7.7zM7.4 8.7C6.6 8.7 6 8.1 6 7.3 6 6.6 6.6 6 7.5 6s1.4.6 1.4 1.3c0 .8-.6 1.4-1.5 1.4zM18 17.4h-2.6v-4.1c0-1-.4-1.7-1.3-1.7-.7 0-1.1.5-1.3.9-.1.2-.1.4-.1.6v4.3h-2.6V9.7h2.6v1.1c.3-.5 1-1.3 2.3-1.3 1.7 0 3 1.1 3 3.5v4.4z"></path></svg></span></a>
         </v-btn>
            </v-card-text>
          </v-card>  
        </v-flex>
      </v-layout>
       <v-divider ></v-divider>
      <v-layout row wrap>
        <v-flex xs12  >
          <v-card dark tile flat color="transparent">
            <v-card-text class="text-md-center">Copyright 2020 golden cat | Todos los derechos reservados.</v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
    </v-footer>

  </v-app>
</template>
<script>
import { mapState } from 'vuex'
import CAMARADECOMERCIO from '@/assets/camaracolombiana.png'
import INDUSTRIAYCOMERCIO from '@/assets/escudomincomercio.png'
import EFECTYBALOTO from '@/assets/efectybaloto.png'
import IMGTARJETA from '@/assets/tarjetas.png'
import Logo from '@/assets/golden_cat.png'

export default {
  computed: {
    ...mapState(['user'])
  },
  name: 'principal-layout',
  data: () => ({
    drawer: null,
    icons: [
      ,
    ],
    camaracolombiana: CAMARADECOMERCIO,
    escudomincomercio: INDUSTRIAYCOMERCIO,
    imgtarjeta: IMGTARJETA,
    logo: Logo,
    efectybaloto: EFECTYBALOTO

  })

}
</script>
<style scoped>
.clase{
  margin-top: 46px !important
}
.bordel{
  padding: 21px
}
.v-toolbar{
  z-index: 5;
}
 .v-content{
     background-color: rgb(230, 242, 245)
    }
</style>
