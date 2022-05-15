import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators: {
        'caracteres-nombre': function(value) {
            return value.length <= 15 && value.length >= 5
        },
        'edad-valida': function(value) {
            return value <= 120 && value >= 18
        }
    }
}

Vue.use(VueForm,options)