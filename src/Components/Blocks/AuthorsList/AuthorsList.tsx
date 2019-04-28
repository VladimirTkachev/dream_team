import React from "react";

import Author from "./Components/Author";
import { IAuthor } from "../../../reducers/authors";

interface IProps {
    items: IAuthor[];
}

const AuthorsList = ({ items } : IProps ) => {
    const newItems = items.slice(0, 10);

    return (
        <div className="authors-list">
            {newItems.map(item => {
                return (
                    <div key={item.ID} className="authors-list__author">
                        <Author item={item}/>
                    </div>
                );
            })}
        </div>
    );
}

export default AuthorsList;
