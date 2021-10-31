import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { About, Contact, Banner, Blog, Offers, TourDetail } from 'pages'
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
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/about" component={About} />
          <Route path="/:tourId" component={TourDetail} />
        </Switch>
        <Footer />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </div>
  )
}

export default App
