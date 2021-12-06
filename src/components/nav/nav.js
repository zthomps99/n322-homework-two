import './nav.css'

function Nav(){
    return(
        <div className="navHolder">
            <nav>
            <div className="navLogo">SONY</div>
                <button>Businesses & Products</button>
                <button>About Sony Group</button>
                <button>Technology</button>
                <button>Employees</button>
            </nav>
        </div>
    );
}

export default Nav;