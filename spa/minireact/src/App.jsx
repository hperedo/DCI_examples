
import cat from './imgs/cat.jpeg'
import "./style/main.scss"

export default function App() {
  

    const words = ["take","MYlo","gassi"]


  return (
    <>
      <h1>suiiiiiiiiiiiiiiiiiiii world cup</h1>

  
     <ol>

         {
            
            words.map(word => <li>{word}</li>)
         }
     </ol>

      <div className="main" id="woooo">
        <ul>
          <li>awt</li>
          <li>wolf</li>
          <li>anounymous</li>
        </ul>
      </div>
       <img src= {cat} alt="" />
      <hr />
      <hr />
      <hr />
      <hr />
       
      {Math.random() > .5 ? <h1>yeaaaaa</h1> :<h2>noooooooo</h2>}
      <p>i am a paragraph</p>



    </>
  );
}
