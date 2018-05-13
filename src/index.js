import React from 'react'
import ReactDOM from 'react-dom'
import Firebase from 'firebase'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import 'typeface-merriweather'

Firebase.initializeApp({
  apiKey: 'AIzaSyCIsMMaGLGs3klbIrMatUJgRkTZNWm2ixo',
  authDomain: 'hearthstonepity.firebaseapp.com',
  databaseURL: 'https://hearthstonepity.firebaseio.com',
  projectId: 'hearthstonepity',
  storageBucket: 'hearthstonepity.appspot.com',
  messagingSenderId: '720548317883',
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
