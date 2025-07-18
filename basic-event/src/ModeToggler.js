export default function ModeToggler(){
    let darkModeOn = false;
     const darkMode = <h1>Dark Mode is on</h1>
    const lightMode = <h1>Light mode is on</h1>

    function  handler(){
      darkModeOn = !darkModeOn;
        if(darkModeOn){
            console.log("Dark mode is on");
        }else{
            console.log("Light mode is on");
        }
    }
    return (
        <div>
            {{darkModeOn} ? darkMode : lightMode}
            <button onClick={handler}>
                click me to toggle
            </button>
        </div>
    );
}