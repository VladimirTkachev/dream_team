import * as React from "react";
import Author from "./Components/Author";

type item = {
    ID: number;
    FirstName: string;
    IDBook: number;
    LastName: string;
}

type Props = {
    items: Array<item>
}

const AuthorsList: React.SFC<Props> = ({ items }) => {
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
