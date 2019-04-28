import React from "react";
import { Link } from "react-router-dom";
import { IAuthor } from "../../../../reducers/authors";

interface IProps {
    item: IAuthor;
}

const Author = ({ item }: IProps) => {
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
