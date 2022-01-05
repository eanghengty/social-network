import './Signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Signup=()=>{
    return(
        <div className="">
            <div className="div-main__section">
                <nav className="nav-main">
                    <ul className="nav-main__items">
                        <li  className="nav-main__item">
                            <a href="#">Sign up</a>
                        </li>
                       
                        <li className="nav-main__item">
                            <a href="#">Sign in</a>
                        </li>
                    </ul>
                </nav>
           </div>
           <div className="div-body__section">
               <input className="first-name__input" type="text" placeholder='first name'></input>
               <input className="last-name__input" type="text" placeholder='last name'></input>
               <input type="text" placeholder='email'></input>
               <input type="password" placeholder='password'></input>
               <input type="password" placeholder='confirmpassword'></input>
           </div>
        </div>
    )
}

export default Signup