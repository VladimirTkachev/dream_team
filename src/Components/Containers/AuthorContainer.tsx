import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type RouteInfo = {
    id?: string;
}

type ComponentRouteProps = RouteComponentProps<RouteInfo>

const AuthorContainer = (props : ComponentRouteProps): JSX.Element => {
    const { match } = props;
    const { params = {} } = match;
    const { id } = params;

    return (
        <div>
            Author
            {id}
        </div>
    );
};

export default AuthorContainer;
