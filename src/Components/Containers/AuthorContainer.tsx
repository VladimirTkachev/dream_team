import React from "react";


type params = {
    id?: Number;
}

interface IProps {
    match: {
        params: params;
    };
}

class AuthorContainer extends React.Component<IProps, {}> {
    render() {
        const { match : { params = {} } } = this.props;
        const { id } = params;

        return (
            <div>
                {id}
            </div>
        );
    }
}

export default AuthorContainer;
