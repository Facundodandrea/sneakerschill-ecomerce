const Navbar = () => {
    return (
        <nav className="menu">

            <a href="#" className="brand">Sneakers Chill</a>

            <div className="menu_container">
                <ul className="nav_list">
                <li className="nav_item"><a href="#" className="nav_link active">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link ">Featured</a></li>
                <li className="nav_item"><a href="#" className="nav_link ">Women</a></li>
                <li className="nav_item"><a href="#" className="nav_link ">New</a></li>
                </ul>
            </div>
        
        </nav>
    )
}

export default Navbar