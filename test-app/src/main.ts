import App from './App.svelte'
import { bootstrapApp } from '../../src/app-bootstrap'

bootstrapApp(App, 'app').then(app => {
  // App mounted successfully
  console.log('App mounted')
})
