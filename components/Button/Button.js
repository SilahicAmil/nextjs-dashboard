// Create a re-usable button

const Button = (props) => {
  return (
    <button className="btn flex ml-auto mr-5 bg-white text-black hover:bg-black hover:text-white m-4 text-sm ">
      {props.children}
    </button>
  );
};

export default Button;
