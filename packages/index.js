import registerDirectives from './directives/gDirectives.js'
import Button from './components/button/Button.vue'
import Empty from './components/empty/Empty.vue'
import Title from './components/title/Title.vue'
import Dialog from './components/dialog/Dialog.vue'
import Drawer from './components/drawer/Drawer.vue'

const comps = [Button, Empty, Title, Dialog, Drawer]
const finalComps = comps.map((v) => {
  let baseName = v.__name ?? v.name
  let res = 'o' + baseName.charAt(0).toUpperCase() + baseName.slice(1)
  console.log('res', res)
  return res
})

const install = (app) => {
  registerDirectives(app)
  finalComps.forEach((v, i) => {
    app.component(v, comps[i])
  })
}

export default {
  finalComps,
  install,
}
