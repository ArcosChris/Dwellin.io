import React from "react";
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <>
            <header className="mt-2">
                <div className="headerInfo">
                    <h1>Welcome to Dwellinn!</h1>
                    <h4 className="slogan-header">All rentals, all the time.</h4>
                    <form class="row my-2">
                        <div className="col-10 mx-auto">
                            <div class="input-group input-group-lg">
                                <input type="search" className="headerInput form-control" placeholder="Enter City, State, or ZIP Code" aria-label="Search" />
                                <button class="btn btn-outline-secondary" type="submit" id="button-addon2"><FontAwesomeIcon icon={faSearch} /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </header>
        </>
    );
}

export default Header;