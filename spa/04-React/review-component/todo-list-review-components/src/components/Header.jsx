

import l10n from "./translation.js";


const Header = ({numberOfTasks,lang,setLang})=>{

    console.log(lang);
return(

   <div>

    <h1>{l10n[lang].todo} {l10n[lang].list} {l10n[lang].for} {l10n[lang].today}!!!   {numberOfTasks} </h1>

    <button  onClick={()=>setLang("en") }   >EN</button>
    <button  onClick={()=> setLang("de")}  >DE</button>
   </div>

)


}




export default Header