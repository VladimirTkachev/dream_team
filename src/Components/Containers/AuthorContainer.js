import React from "react";

class AuthorContainer extends React.Component {
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
