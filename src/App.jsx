import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import products from './data'

function App() {
  const [productList, setProductList] = useState(products)
 
//console.log(products)

// add state in here
const [value, setValue] = useState("");
// handleChange function

  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
})

const handleChange = event => {

  setForm({...form, [event.target.name]: event.target.value})

}
// handleSubmit
const handleSubmit = event => {
  // prevent page refresh
  event.preventDefault();
  // do what you want with the form data
  console.log('form in submit')
  console.log(form);
  setForm({
    itemName: "",
    price: 0,
    description: "Describe this item",
  })
  const newProduct =  form;
  setProductList([newProduct, ...productList])


}
const isHiring = true;
const toggleHiring = () => { setIsHiring(!isHiring) }
// return}
  
// return ( 
//   <div> 
//  <h1> Big Time Shopping </h1>
//   <ul> {products.map(item => <li>{item.itemName}</li>)} 
       
//        {products[0].itemName}

//   </ul> 
//   </div> 
//   )
// return ( 
//   <div> <h1> Big Time Shopping </h1> <ul> {productList.map(item => <li>{item.itemName}</li>)} </ul> 
//   </div> ) 
// return ( 
//   <div> <h1> Big Time Shopping </h1> 
//   <input type="text" /> 
//   <ul> {productList.map(item => <li>{item.itemName} {item.price}</li>)}
//    </ul> 
//   </div> )
return ( 
  <div> <h1> Big Time Shopping </h1>
   <form onSubmit={handleSubmit}/>
  <form> 
  <input     
                    type="text"
                    value={value}
                    onChange={handleChange}
                    name="value"
                    placeholder="write name here"
                /> </form> 
                 <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
<div> <h2>Preview our new item</h2> <h3>{form.itemName}</h3> 
<h4>{form.price}</h4> 
<h5>{form.description}</h5> </div>

 

  <ul> {productList.map(item => <li>{item.itemName} {item.price}</li>)}
   </ul> 
   {!isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
   <h1 onClick={toggleHiring}> Big Time Shopping </h1> {isHiring ? <h2>Yes, we are hiring </h2>: <h2>Sorry, try again tomorrow</h2>}
   </div> ) }

export default App;
