import React from "react";
import { Link } from "react-router-dom";

function Author(props) {
    const { item = [] } = props;
    const { ID, FirstName } = item;

    return (
        <div className="authors-list__item">
            <Link to={`/${ID}`}>
                {FirstName}
            </Link>
        </div>
    );
}
export default Author;
