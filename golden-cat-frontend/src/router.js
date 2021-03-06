import Vue from 'vue'
import Router from 'vue-router'
import Registro from './views/Principal/Registro.vue'
import Servicios from './views/Principal/Servicios.vue'
import Configuracion from './views/Principal/Configuracion.vue'
import RestaurarContrasena from './views/Principal/restaurar_contraseña.vue'
import Inicio from './views/Principal/Inicio.vue'
import QueEsGoldenCat from './views/Principal/Que_es_golden_cat.vue'
import contactanos from './views/Principal/contactanos.vue'
import AdministrarUsuarios from './views/Administrador/AdministrarUsuarios.vue'
import Realizarreserva from './views/Administrador/Realizarreserva.vue'
import Login from './views/Principal/Login.vue'
import Configuracionadmi from './views/Administrador/Configuracionadmi.vue'
import ReservasCliente from './views/Principal/Reservas_Cliente.vue'
import Contabilidad from './views/Administrador/Contabilidad.vue'
import DatosCompra from './views/Principal/Datos_compra.vue'
import PreguntasFrecuentes from './views/Principal/PreguntasFrecuentes.vue'
import TerminosCondiciones from './views/Principal/TerminosCondiciones.vue'
import Eventos from './views/Principal/Eventos.vue'
import AdministradorHabitaciones from './views/Administrador/AdministradorHabitaciones.vue'
import CargarImagenes from './views/Administrador/CargarImagenes.vue'
import Individual from './views/Principal/Individual.vue'
import Doble from './views/Principal/Doble.vue'
import Suite from './views/Principal/Suite.vue'
import Matrimonial from './views/Principal/Matrimonial.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Inicio
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/restaurar_contraseña',
      name: 'restaurar_contraseña',
      component: RestaurarContrasena
    },
    {
      path: '/Que_es_golden_cat',
      name: 'Que_es_golden_cat',
      component: QueEsGoldenCat
    },
    {
      path: '/contactanos',
      name: 'contactanos',
      component: contactanos
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: Configuracion
    },
    {
      path: '/administrador/usuarios',
      name: 'adiministrarusuarios',
      component: AdministrarUsuarios
    },
    {
      path: '/administrador/realizarreserva',
      name: 'realizarreserva',
      component: Realizarreserva
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/administrador/configuracion',
      name: 'configuracionadmi',
      component: Configuracionadmi
    },
    {
      path: '/Reservas_Cliente',
      name: 'Reservas_Cliente',
      component: ReservasCliente
    },
    {
      path: '/administrador/contabilidad',
      name: 'contabilidad',
      component: Contabilidad
    },
    {
      path: '/Datos_Compra',
      name: 'Datos_Compra',
      component: DatosCompra
    },
    {
      path: '/PreguntasFrecuentes',
      name: 'PreguntasFrecuentes',
      component: PreguntasFrecuentes
    },
    {
      path: '/TerminosCondiciones',
      name: 'TerminosCondiciones',
      component: TerminosCondiciones
    },
    {
      path: '/Eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/administrador/habitaciones',
      name: 'AdministradorHabitaciones',
      component: AdministradorHabitaciones
    },
    {
      path: '/administrador/CargarImagenes',
      name: 'CargarImagenes',
      component: CargarImagenes
    },
    {
      path: '/Individual',
      name: 'Individual',
      component: Individual
    },
    {
      path: '/Doble',
      name: 'Doble',
      component: Doble
    },
    {
      path: '/Suite',
      name: 'Suite',
      component: Suite
    },
    {
      path: '/Matrimonial',
      name: 'Matrimonial',
      component: Matrimonial
    }
  ]
})
