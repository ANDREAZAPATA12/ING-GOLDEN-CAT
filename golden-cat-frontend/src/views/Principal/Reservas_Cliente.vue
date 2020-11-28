<template>
  <v-flex xs12>
    <div>
      <v-tabs v-model="active" color="#0a6291" dark slider-color="yellow darken-2" >
        <v-tab ripple> reservas activas</v-tab>
        <v-tab-item>
          <v-card flat class="blue lighten-3">
            <v-card-text>
           <template v-for="n in 1">
               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4" >
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">Te dua$Me Shume </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>
              
               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                    <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>

               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>

               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="blue darken-4">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>

                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65000055$ </div>
                          <div>numero de niños: 0</div>

                        </div>

                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                   </v-layout>
                   <v-divider light></v-divider>
                   <v-expansion-panel class="blue lighten-3">
                        <v-expansion-panel-content class="blue darken-4" >
                          <template v-slot:header >
                              
                               <v-btn  color="#2d8abd" dark v-on="on" >Mas Detalles</v-btn>
                              
                          </template>
                            <v-card>
                             <v-card dark tile flat color="#0d47a1" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            <v-card-text class="text-xs-center">
                            <v-btn small color="red"  >borrar reserva<v-icon small>business</v-icon></v-btn>
                               </v-card-text>
                          </v-card>
                           </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
               </v-flex>


 
              
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>

        <v-tab ripple> reservas canceladas</v-tab>
        <v-tab-item>
          <v-card flat class="blue darken-4">
            <v-card-text> <template v-for="n in 1">
              <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>

              <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>



               <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>



               <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>


              <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>


               <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>


              <v-flex xs12 :key="n" mb-3>
                <v-card color="#1E88E5" class="white--text">
                  <v-layout row >
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">tipo de habitacion: doble</div>
                          <div  class="mb-4">fecha de la reserva  : 25/05/2017 </div>
                          <div  class=" mb-4">numero de adultos : 2</div>
                          <div  class=" mb-4">tipo de habitacion: estandar</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-card-title primary-title>
                        <div>
                          <div class="headline mb-4">precio de la habitacion </div>
                          <div  class="title mb-4 ">65666$ </div>
                          <div>numero de niños: 0</div>
                        </div>
                      </v-card-title>
                    </v-flex>
                    <v-flex xs4>
                      <v-img :src="habitacion2" contain></v-img>
                    </v-flex>
                  </v-layout>
                  <v-divider light></v-divider>
                  <v-expansion-panel class="blue darken-4">
                        <v-expansion-panel-content class="blue darken-1" >
                          <template v-slot:header>
                               <v-btn  color="#0D47A1" dark v-on="on" >Mas Detalles</v-btn>
                          </template>
                          <v-card dark tile flat color="#1E88E5" >
                            <v-card-text>
                              *Aire acondicionado <br>
                              *Baño con ducha, secador de pelo y servicio de *amenidades diarias<br>
                              *Caja de seguridad electrónica<br>
                              * Voltaje (corriente): 220 V/60 Hz (los baños cuentan con tomas de 110 V para equipos hasta 50 W)<br>
                              *Minibar con agua, refrescos, cervezas y más ($)<br>
                              *Teléfono directo en dormitorio y baño<br>
                              *1 cama extra o una cuna (a solicitud)<br>
                              *2 Baños

                            </v-card-text>
                            </v-card>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                </v-card>
              </v-flex>
              </template >
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-flex>
</template>

<script scope>
import HABITACION2 from '@/assets/habitacion2.png'
export default {
  name: 'inicio',
  data () {
    return {
      habitacion2: HABITACION2,
      active: null
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  },
  methods: {
    next () {
      const active = parseInt(this.active)
      this.active = (active < 2 ? active + 1 : 0)
    }
  }
}
</script>
