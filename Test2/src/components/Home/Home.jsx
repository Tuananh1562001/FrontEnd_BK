import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <NavLink to={'/product'}>
        Show List Products
    </NavLink>
  );
};

export default Home;
