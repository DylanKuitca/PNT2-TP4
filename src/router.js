import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue'
import Usuario from './components/Usuario.vue'

Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes: [
        {path: '/formulario', component: Formulario},
        {path: '/usuario', component: Usuario}
    ]
})