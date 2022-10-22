import SideNav from "../SideNav/SideNav";

const Layout = (props) => {
  return (
    <>
      <div className="p-2 font-mono">{props.children}</div>
      <SideNav />
    </>
  );
};

export default Layout;
