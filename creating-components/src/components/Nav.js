function Nav(){
    const navStyle = {
        background : "red",
        width : "calc(50% - 10px)",
        marginLeft :"10px"
    } 
    return (
        <nav style={navStyle} className="main-nav">
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;