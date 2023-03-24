

# SPA - STORE -DAY 4


## Advanced Implementation


- SOMETIMES contexts are made with `useReducer` instead of ``useState`

- Today we will actually just learn `useReducer` alone

- if you want to have a `useReducer` in a context , just use that instead of `useState` inside 

- `useState()`

- it gives you an array with a state varianle and a function to change it
- `const [name,setName] = useState('')`

- ` useReducer() `

- it gives you in a  *special* function called **reducer** and the default variable for your state variable

- it gives you an array with  state variable  and a  *special* function called **dispatch** change it



- As far as I know the state variable is _always_ an complex object, `useReducer` is way overkill with a simple state

- the naming of these things comes directly from Redux


- I belive the people building React really they liked Redux and basically built its fundumental concepts into React 


- we used to teach Redux as a big part of the course but `useContext()` + `useReducer()` basically *is* Redux


- what is a complex state variable like ?

```js

{

   companyId :42,
   name : "Blah GGmbh",
   adresses :[
    {street:"Bubilibu Str . 60 , 02834 Leipzig",confirmed:true,hd:false},
    {street:"SuperPowerSpiderMan Str . 60 , 37364 Hamburg", confirmed:true,hq:true}

   ],
   Orders : [52,83,22,17,4442],
   gps : {...},
   contactPersons : [...]
   uploadedFiles :[...]


}


```

- Quite often this state is one of the following
- A really complex individual concept, like a company
- All of states of one section of your application, like AdminPanel
- All of the states of your entire application 


- So, essentially `useReducer()` is an alternative to `useState()` or multiple `useState()`


```js
//instead of 
const [name,setName]= useState('')
const [email,setEmail]= useState('')

//combined in 
const initialState = {name:'',email:''}
const [state,dispatch] =useReducer(reducer,initialState)


```

## Live coding

-To test how these actually work, lets build a math game!

  - Yaaaaaay **Math** :D