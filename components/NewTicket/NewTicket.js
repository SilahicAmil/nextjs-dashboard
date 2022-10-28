const NewTicket = () => {
  const submitFormHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="Ticket Title">Ticket Title </label>
          <input type="text" className="form-input text-black" />
          <label htmlFor="Ticket Tier" className="form-label">
            Ticket Tier:
          </label>
          <select
            name=""
            id=""
            className="form-select  rounded-full text-black"
          >
            <option value="Tier C" className="form-option ">
              Tier C
            </option>
            <option value="Tier B" className="form-option ">
              Tier B
            </option>
            <option value="Tier A" className="form-option ">
              Tier A
            </option>
          </select>
          <textarea
            name=""
            id=""
            cols="35"
            rows="5"
            className="form-textarea"
          ></textarea>
          <select name="" id="" className="text-black rounded-full py-2">
            <option value="Web">Web</option>
            <option value="Web">Mobile</option>
          </select>
          <button type="submit" className="btn bg-red-500 text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewTicket;
