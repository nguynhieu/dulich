import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { About, Contact, Banner, Blog, Offers } from 'pages'
import { Footer, Header } from 'components/Layout'
import { GlobalStyle } from 'styles/globalStyle'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Banner} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/offers" component={Offers} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </Router>
    </div>
  )
}

export default App
