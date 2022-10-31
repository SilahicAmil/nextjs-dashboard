import Navigation from "../Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      <main className="font-mono">{props.children}</main>
    </>
  );
};

export default Layout;
