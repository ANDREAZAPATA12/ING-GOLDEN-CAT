<template>
  <section>
     <v-card dark tile flat color="#0f7fab" >
    <v-container class="barrabuscar #0bb5a4--text">
       <v-card dark tile flat color="red" >
         <v-div class="hotelportada">
             
 <v-card dark tile flat color="green" >
      <v-container class="contenedor text-xs-center" pa-1>
       <v-card dark tile flat color="#0f7fab" >

        <v-layout   class=" justify-space-between row wrap  align-center">
         <v-flex xs12 sm6 md4 pb-0>
               <VueHotelDatepicker class="subheader white--text display font-weight-bold " placeholder="Fecha Inicio / Fecha Final"/>
          </v-flex>
          
          <v-flex xs12 sm6 md2>
            <v-select :items="itemsnumeroadultos"  color="black" label="Numero de adultos"></v-select>
          </v-flex>
          <v-flex xs12 sm6 md2>
              <v-select :items="itemsnumeroniños" color="white" label="Numero de niños"></v-select>
          </v-flex>
          <v-flex xs12 sm6 md2>
            <v-btn round color="blue" @click="e1 = 0, dialogConfirmar = false , reservaConfirm = true" >
              <v-icon color="black">search</v-icon></v-btn>
          </v-flex>
        </v-layout>
        <v-layout color="red"  class="align-center justify-start row align-center">
          <v-flex xs12 sm6 md6>
            <v-radio-group v-model="acomodacion" row>
             <v-btn  color="transparent" to="Individual">Individual</v-btn>
            <v-btn color="transparent" to="Doble">Doble</v-btn>
             <v-btn color="transparent" to="Suite"> Suite</v-btn>
             <v-btn color="transparent" to="Matrimonial">Matrimonial</v-btn>
            </v-radio-group>
          </v-flex>
        </v-layout>
          </v-card>
      </v-container>
           </v-card>
    </v-div>
   </v-card>
    </v-container >
 </v-card>

    <v-container>
     <v-layout wrap justify-space-around row>
      <template v-for="n in 1">
 <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >Doble
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
           
           <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >Doble
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
             <v-flex xs1 sm3 :key="n" mb-1 pa-2>
          <v-hover>
            <v-card class="mx-auto" slot-scope="{ hover }" color="#09b2e6" max-width="600" >
              <v-img :aspect-ratio="16/9" :src="habitacion2">
                <v-expand-transition>
                  <div  v-if="hover"  class="d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text"  
                  style="height: 100%;" >
                 meshume
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text  class="pt-4"  style="position: relative;">
                <v-btn  absolute color="#0f7fab" class="white--text" fab  right top to="/Datos_Compra" >
                  <v-icon>local_grocery_store</v-icon>
                </v-btn>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text  class="margen text-sm-left">tipo de habitacion</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text  class="margen " >sencilla
                    </v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left">2</v-card-text>
                  </v-flex>
                  <v-flex  xs6>
                    <v-card-text class="margen" v-model="email">adultos:</v-card-text>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs6 order-lg2>
                    <v-card-text class="margen text-sm-left" >2</v-card-text>
                  </v-flex>
                  <v-flex xs6>
                    <v-card-text class="margen" >niños:</v-card-text>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
           </v-hover>
           </v-flex>
      </template>
     </v-layout>
    </v-container>

  </section>
</template>
<script>
import HABITACIONMATRINOMIAL from '@/assets/HabitacionMatrimoniales.jpg'
import HABITACIONSUITE from '@/assets/HabitacionSuite.jpg'
import HABITACIONDOBLE from '@/assets/HabitacionDoble.jpg'
import HABITACIONINDIVIDUAL from '@/assets/HabitacionIndividual.jpg'
import VueHotelDatepicker from '@northwalker/vue-hotel-datepicker'
import PORTADAHOTEL from '@/assets/portadahotel.jpg'
import PAREJA from '@/assets/pareja.jpg'
import CONFERENCIA from '@/assets/conferencia.jpg'
import FAMILIA from '@/assets/familia.jpg'
import api from '@/plugins/api'
import HABITACION2 from '@/assets/habitacion2.png'
import GIFPUBLICIDAD from '@/assets/gifpublicidad.gif'
export default {
  name: 'inicio',
  async created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
    const data = await api.get('/user', {

    })
  },
  data: () => ({
    itemsnumeroadultos: ['1', '2', '3', '4', '5'],
    itemsnumeroniños: ['1', '2', '3', '4', '5'],
    reservaConfirm: false,
    acomodacion: '',
    habitacion2: HABITACION2,
    pareja: PAREJA,
    portadahotel: PORTADAHOTEL,
    conferencia: CONFERENCIA,
    familia: FAMILIA,
    gifpublicidad: GIFPUBLICIDAD,
    show1: false,
    HabitacionIndividual: HABITACIONINDIVIDUAL,
    HabitacionMatrimoniales: HABITACIONMATRINOMIAL,
    HabitacionSuite: HABITACIONSUITE,
    HabitacionDoble: HABITACIONDOBLE

  }),
  components: {
    VueHotelDatepicker
  }
  //
  // ... skip
  //
}

</script>
 <style scoped>
 @import url('https://fonts.googleapis.com/css?family=Lobster&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');

.MainImage11 {
 width: 300px;
 height: 200px;
 overflow: hidden;

}
nav.buscar>.v-toolbar__content{
  background-color: aqua !important;
}
.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
.margen {
    padding: 3px;
}
.contenedor {

  background: rgb(33, 45, 148);;
  padding: 20px;
  border-radius: 20px 20px 20px 20px;

}
.colorfondo{
  background-color: black;
}
.color{
  background-color: transparent;
  color: rgb(206, 245, 15);
}
.barrabuscar{
  width: 1300px;
}
.Container {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}

.MainImage {
 width: 300px;
 height: 600px;
 overflow: hidden;

}

.MainImage img {
 width: 100%;
 transition: .7s;
}

.Container:hover .MainImage img {
 transform: rotate(-10deg) scale(1.3);
 filter: blur(2px);
 filter: contrast(150%);
 filter: brightness(.5);
 opacity: .7;
}

.MainText {
 position: absolute;
 top: 30px;
 left: 30px;
 right: 30px;
 bottom: 30px;
}

.SecText {
  color: #fff;
  text-transform: uppercase;
  padding: 0 20px;
  opacity: 0;
  /*Opacity: 0 --- para que el texto solo sea visible cuando
  pase el puntero del ratón por encima de la imagen (efecto hover)*/
}

.SecText h2 {
  color: black;
  font-size: 25px;
}

.SecText h2 Text {
  color: rgb(162, 164, 182);
  padding-bottom: 3px;
  border-bottom: 2px solid #fff;
}

.SecText p {
 position: absolute;
 top: 180px;
 width: 250px;
 border-left: 4px solid rgb(221, 221, 221) ;
 padding: 0 10px;
}

/*Toque final*/

.MainText::after {
 content: '';
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 transition: .7s;

}

.MainText::before {
 border-top: 4px solid #000;
 border-bottom: 1px solid #fff;
 transform: scale(0,1);
 /*transform: scale(1,0);*/
}

.MainText::after {
 border-left: 1px solid #fff;
 border-right: 1px solid #fff;
 transform: scale(1,0);
 /*transform: scale(0,1);*/
}

.Container:hover .MainText::before,
.Container:hover .MainText::after {
 transform: scale(1,1);
}

.Container:hover .SecText {
 opacity: 1;
}
.MainImage1 {
 width: 250px;
 height: 700px;
 }

 .letra2{
   font-family: 'Dancing Script', cursive;
    font-size: 50px;
 }

.imagen1{
  width: 100%;
 height: 250px;

}
.gifpublicidad{
width: 900px;
height:  100%;
margin:10px auto;
display:block;
}

.containercss {
  position: relative;
  width: 100%;
}

.imagecss {
  display: block;
  width: 100%;
  height: auto;
}

.overlaycss {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(226, 227, 235, 0.308);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

.containercss:hover .overlaycss {
  height: 100%;
}

.textcss {

  white-space: nowrap;
  color: rgb(3, 42, 124);
  font-size: 25px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-family: 'Lobster', cursive;
}

</style>
