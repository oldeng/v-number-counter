import NumberCounter from './src/index.vue';

const components = [
  NumberCounter
]

export  {
  NumberCounter
}

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
