import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
import { NavHashLink as Link } from "react-router-hash-link";
import EditProfile from "./EditProfile"
import ViewProfile from "./ViewProfile"

const Profile = () => {
    const {path, url} = useRouteMatch();

    return (
        <>
            <h1>
                Profile Page
            </h1>
            <ul>
                <li>
                    <Link to={`${url}/view-profile`} activeClassName="activeLinkNav">View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/edit-profile`} activeClassName="activeLinkNav">Edit Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path={path}> 
                    <Redirect to={`${path}/view-profile`}></Redirect>
                </Route>
                <Route path={`${path}/view-profile`} component={ViewProfile}/>
                <Route path={`${path}/edit-profile`} component={EditProfile}/>
            </Switch>
        </>
    )
}

export default Profile
