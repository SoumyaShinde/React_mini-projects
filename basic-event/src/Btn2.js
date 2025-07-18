function Btn2(){
    const handler = ()=>console.log("mouse over");
    return(
        <button onMouseOver={handler}>
            Mouse Over
        </button>
    );
};

export default Btn2;