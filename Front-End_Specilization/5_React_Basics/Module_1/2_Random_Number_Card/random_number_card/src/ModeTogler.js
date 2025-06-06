
function ModeTogler(){
    let darkModeOn=false
    const darkMode=<h1>darkMode is on</h1>
    const lightMode=<h1>lightMode is on</h1>

    function handleClick(){
        darkModeOn=!darkModeOn;
        if (darkModeOn==true){
            console.log("Dark Mode is on")
        }
        else{
            console.log("Light Mode is on")
        }
    }

    return(
        <div>
        {darkModeOn ? darkMode : lightMode}
        <button onClick={handleClick}>Submit me</button>
        </div>
    )
}

export default ModeTogler;