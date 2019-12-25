import React, { useEffect } from 'react'
import $ from 'jquery'

const SearchField = () => {

    useEffect(() => {
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();

        });

        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
    })

    return (
        <form className="d-flex justify-content-between">
            <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
            <button type="submit" className="btn"></button>
            <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
        </form>
    )
}

export default SearchField