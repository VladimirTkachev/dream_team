import * as React from "react";
import { Link } from "react-router-dom";

type Props = {
    item: {
        ID: number;
        FirstName: string;
        IDBook: number;
        LastName: string;
    }
}

/**
 * Отображает элемент автора
 * @param {Object} props Объект данных
 * @param {object} props.item объект данных автора
 */
const Author: React.SFC<Props> = ({ item }) => {
    const { ID, FirstName } = item;

    return (
        <div className="authors-list__item">
            <Link to={`/${ID}`}>
                {FirstName}
            </Link>
        </div>
    );
}

Author.defaultProps = {
    item: {
        ID: 1,
        FirstName: 'sdf',
        IDBook: 2,
        LastName: 'asd',
    }
}

export default Author;
