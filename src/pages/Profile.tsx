import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom"
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
                    <Link to={`${url}/view-profile`}>View Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/edit-profile`}>Edit Profile</Link>
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
