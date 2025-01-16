import { NavLink, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error=useRouteError();
    console.log(error);

  return (
    <div>
       <h1>Oops! An error occurred.</h1>
       {error && <p>{error.data}</p>}
       <button><NavLink to="/">Go Back</NavLink></button>
    </div>
  )
}

export default ErrorPage
