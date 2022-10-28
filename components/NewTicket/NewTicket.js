import { useRef } from "react";

const NewTicket = () => {
  const titleRef = useRef();
  const tierRef = useRef();
  const descriptionRef = useRef();
  const platformRef = useRef();
  const fileRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const titleRefValue = titleRef.current.value;
    const tierRefValue = tierRef.current.value;
    const descriptionRefValue = descriptionRef.current.value;
    const platformRefValue = platformRef.current.value;
    const fileRefValue = fileRef.current.value;

    const formData = {
      title: titleRefValue,
      tier: tierRefValue,
      description: descriptionRefValue,
      platform: platformRefValue,
      file: fileRefValue,
    };

    event.target.reset();

    console.log(formData);
  };

  return (
    <>
      <div className="mt-4 h-full bg-base-100 flex items-center justify-center">
        <form className="w-full max-w-lg " onSubmit={submitFormHandler}>
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Ticket Title:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Title"
                ref={titleRef}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="grid-ticket-tier"
              >
                Tier:
              </label>
              <select
                id="grid-dropdown"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ref={tierRef}
              >
                <option value="">Tier A</option>
                <option value="">Tier B</option>
                <option value="">Tier C</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Ticket Description:
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                ref={descriptionRef}
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Platform:
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  ref={platformRef}
                >
                  <option>Web</option>
                  <option>Mobile</option>
                </select>
              </div>
            </div>
            <div className="relative md:w-1/3 px-3 mb-6 md:mb-0 m-7">
              <input
                type="file"
                className="tracking-wide block "
                ref={fileRef}
              />
            </div>
            <button
              type="submit"
              className="btn block tracking-wide w-full bg-white text-black mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTicket;
