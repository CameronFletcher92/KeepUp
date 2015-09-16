import React, { Component, AppRegistry } from 'react-native'
import { Provider } from 'react-redux/native'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Main from './containers/Main.js'

// create the redux store
const finalCreateStore = compose(applyMiddleware(thunk))(createStore)
const store = finalCreateStore(reducer)

// render top level app
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    )
  }
}

export default App
