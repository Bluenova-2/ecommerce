import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The link you followed may be broken, or the page may have been removed.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  );
};

export default NotFound;