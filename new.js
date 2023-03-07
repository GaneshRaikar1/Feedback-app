feedback.reduce((acc, { rating }) => acc + rating, 0)
          
          localStorage.setItem('name', JSON.stringify(value))
JSON.parse(localStorage.getItem('name'))
        localStorage.removeItem('name')

        window.confirm('Are you sure you want to delete?')

const response = await fetch(`/feedback?_sort=id&_order=desc`)
                       fetch('/feedback', 
                           { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newFeedback) }
                        )
                       fetch(`/feedback/${id}`,
                           { method: 'PUT',  headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(updItem) }
                        )
                       fetch(`/feedback/${id}`, { method: 'DELETE' })
const data = await response.json()




        axios.post( '/api/x', { email, password }, config )

const FeedbackContext = createContext()
<FeedbackContext.Provider value={{ values,functions }}>
  {children}
</FeedbackContext.Provider>

Button.defaultProps = {
  version: 'primary',
     type: 'button',
isDisabled: false
}

Button.propTypes = {
 children: PropTypes.node.isRequired,
  version: PropTypes.string,
     type: PropTypes.string,
isDisabled: PropTypes.bool,
}



        import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
        <Router>
                <Routes>
                         <Route path='/'   element={<HomeScreen/>}/>
                         <Route path='*'   element={<NoMatch/>}/>
                         <Route path='/users/:id'                       element={<UserDetails/>}/> {/* Dynamic route*/}
                         <Route path='products'                         element={<Products/>}>
                           <Route index                                 element={<Featured/>}/>    {/* index route*/}
                           <Route path='featured'                       element={<Featured/>}/>
                           <Route path='new'                            element={<New/>}/>
                         </Route>
                </Routes>
        </Router>

        import { Link, Outlet } from 'react-router-dom'
        import { NavLink } from 'react-router-dom'
        const navLinkStyles=({isActive})=>{
          return {
           fontWeight: isActive?'bold':'normal',
           textDecoration: isActive?'none':'underline'
          }
        }
        <><NavLink end to='/' style={navLinkStyles}>home</NavLink>
          <NavLink to='/about' style={navLinkStyles}>about</NavLink>
        
          <nav>
           <Link to='new'>New Products</Link>
           <Link to='featured'>Featured Products</Link>
          </nav>
          <Outlet/></>

        import { useNavigate, useParams, useLocation } from 'react-router-dom'
        const navigate=useNavigate()
        navigate('ordersummary',{replace:true})
        navigate(-1)  //history stack
        navigate(0)   //reload
        navigate('/result',{state:{ result , time:totalTime } } )
        const {result,time}=location?.state

        const {id}=useParams()

        const location=useLocation()
        location.pathname==='/'

        import { useSearchParams } from 'react-router-dom'
        const [searchParams,setSearchParams]=useSearchParams()
        setSearchParams({filter:'active'})
        searchParams.get('filter')

        import { Provider } from 'react-redux'     //index
        import store from './store'
        <Provider store={store}>
          <App />
        </Provider>

const [state, dispatch] = useReducer(githubReducer, initialState)
const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER_AND_REPOS': return { ...state, loading: false, user: action.payload.user, repos: action.payload.repos }
    case        'CLEAR_USERS': return { ...state,   users: [] } 
                     default : return state 
  }
}

dispatch({ type: 'GET_USER_AND_REPOS', payload: userData })
dispatch({ type: 'CLEAR_USERS' })

const handleResize = () => { 
  setwidth(window.innerWidth)
  if(width>600) { setFilterOpen(false)}
}

window.addEventListener('resize', handleResize);

const deepcopy=JSON.parse(JSON.stringify(vehicles))

      