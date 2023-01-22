import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import {useForm} from "react-hook-form";
function App() { 
  // const [count, setCount] = useState("")


  return (
    <div className="App">
    <Navbar />
    <div className='cont'><Datamap /></div>
    
    </div>
  )
}
export default App
function Navbar (){
  const [selet,setselet] =useState(true)
  return(
    <div>
      <div className="searchbar">
        <img className="logo"src ="Untitled-1.png"/>
        <div className='shopingicon'>
        <button onClick ={()=>{
          setselet(!selet)
         
          function cardselet() {
             
           const content = document.querySelector(".content")
             content.style.display = "none"
           const content2= document.querySelector(".recyle")
            content2.style.display ="grid"
            const content44= document.querySelector(".recyle")
            if(content44.innerHTML === ""){
              const content54= document.querySelector(".empty")
              content54.style.display = "block"
             }
             else{
              const content54= document.querySelector(".empty")
              content54.style.display = "none"
             }
             
          }
          function cardview (){
            const content = document.querySelector(".content")
            content.style.display = "grid"
           const content3 = document.querySelector(".recyle")
            content3.style.display ="none"
            const content44= document.querySelector(".recyle")
            if(content44.innerHTML === ""){
              const content54= document.querySelector(".empty")
              content54.style.display = "none"
             }
             else{
              const content54= document.querySelector(".empty")
              content54.style.display = "none"
             }
          }
      {selet?  cardselet():cardview ()}
          
        }}className="material-symbols-outlined achor">shopping_cart <span className='shoping_count'></span></button>
       
        </div>
     
      </div>
 
    </div>
  )
}
function Datamap(){

  const data =[
    {
    title:"Baby things",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Schoolfromhome/PCQC/0-6_months._SY116_CB667649399_.jpg",
    rate : "$10",
    star: `⭐⭐⭐`
  }
  ,{
    title:"Home items",
    img:"https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg",
    rate : "$14",
    star: `⭐⭐⭐⭐⭐`
  },{
    title:"Electronics devices",
    img:"https://gridaxis.in/products/demo/ecommerce/wp-content/uploads/2020/04/electronic-devices.jpg",
   
    rate : "$30",
    star: `⭐⭐⭐⭐`
  },{
    title:"Birthday gifts",
    img:"https://stylesatlife.com/wp-content/uploads/2018/05/Fruit-Chocolate-hamper-Birthday-Gifts.jpg.webp",
    rate : "$6",
    star: `⭐⭐⭐⭐`
  },{
    title:"Sports item",
    img:"https://www.tencom.com/hubfs/sports-1.jpeg",
    rate : "$20",
    star: `⭐⭐⭐⭐`
  },{
    title:"Men dress",
    img:"https://5.imimg.com/data5/JZ/SG/CD/GLADMIN-19530154/img-20200306-wa0031-500x500.jpg",
    rate : "$10",
    star: `⭐⭐⭐⭐`
  },{
    title:"Women dress",
    img:"https://images.meesho.com/images/products/17898110/70d5f_512.jpg",
    rate : "$20",
    star: `⭐⭐⭐⭐`
  },{
    title:"Professional tools",
    img:"https://images-cdn.ubuy.co.in/635bd39100962e09926edc06-108-piece-tool-set-with-drill-home-tool.jpg",
    rate : "$30",
    star: `⭐⭐⭐⭐⭐`
  }]

 return ( <div className='background'>
  <div className='content'>
    {data.map((dd,index) =>(<Data dd={dd} key={index}  />))}
  
  </div>
  <Shop />
  </div>
 )
}

function Data({dd}){
const [get,setget] = useState()
// function itemnum (){
//   const shopcount = document.querySelector(".shoping_count")
//   var gh =0
//   shopcount.innerText = gh+1
// }
  return (  <div className='form'>
  <div className='card' >
  <div className='card-img'>
    <img className="img"src={dd.img}/>
   
  </div>
  <h2 className='card-title'>{dd.title}</h2>
  <h3  className='card-rate'>{dd.star}</h3>
  <h3   className='card-rate'>{dd.rate}</h3>

  <div className='card-rate'>

 <Button />
  </div>

</div>

</div> )
}

function Button(){

  const [count, setCount] = useState(true);
  // const [number,setnumber] = useState(true);

  const [num, setnum ] = useState(true)
  const [get,setget] = useState(0)
  return (
  <div>
    <button className='add-to-card' onClick={(ee)=>
  {
   
    setnum (!num)
      setCount(!count)
        setget(get+1)
  function dfg(){
    
    var dh= document.querySelector(".recyle")
    // console.log(ee.target.parentElement.parentElement.parentElement.parentElement.parentElement)
    const jj = ee.target.parentElement.parentElement.parentElement.parentElement
       if(jj ){
        var clone = jj.cloneNode(true)
        dh.append(clone)
       }
    var ww = document.querySelectorAll(".recyle .card")
   
    
    //  console.log(clone.className(".card"))
   
  //  console.log(ww.length)
  return  ww.length;
    
  }
  function fff(){
   var ww = document.querySelector(".recyle .card")
   var kl = document.querySelector(".content")
   ww.remove()
   let kw = document.querySelectorAll(".recyle .card")
   return kw.length;
  }
    
  // }
      // console.log(ee.target.parentElement.parentElement.parentElement)
      const df = count? dfg(): fff()
      // var dh= document.querySelector(".recyle")
      // dh.append(ee.target.parentElement.parentElement.parentElement.parentElement)
         var dd = document.querySelector(".shoping_count")
         dd.innerText = df   
               
  //  dd.parentElement.remove()
  
  }
  } >
    {count ?<span>Add to card</span>: <span>remove</span> }
   
      </button>
  </div>
  )
}
function Shop(){

  return( <div>
<h2 className='empty'>Your shoping is empty</h2>
    <div className='recyle'>
    
    </div>
    </div>
  )
}