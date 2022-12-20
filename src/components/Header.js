import React from "react";
import '../css/Header.css'

const Header = () => {
    return (
        <>
            <header className="mt-2">
                <div className="headerInfo">
                    <h1>Welcome to Dwellinn!</h1>
                    <h4 className="slogan-header">All rentals, all the time.</h4>
                    <div className="search-input d-flex mb-3 mb-md-0 center-block mx-auto">
                        <input type="search" className="form-control-med headerInput form-control" placeholder="Enter zipcode" aria-label="Search" />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;