import Logo from "../assets/logo.jpg"

export const Header = ({title, setTitle, setUrl}) => {

 
  return (
    <div className='header'>
        <div>
          <h1>MOVIES HUB</h1>
          <h3>All movie details in one place!</h3>
        </div> 
        
        <div className='search'>
            <input type="text" name="title" value={title} placeholder='Type movie name...' onChange={(e) => setTitle(e.target.value)}/>
            <img src={Logo} alt="logo" width="40" height="40" onClick={()=> {title? setUrl("https://omdbapi.com/?t="+title+"&apikey=f229a01e") : setUrl("")}}/>
        </div>
    </div>
    
  )
}
