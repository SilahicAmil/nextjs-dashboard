import { useRef } from "react";
import { useRouter } from "next/router";

const NewTicket = (props) => {
  // Extract all this into a form hook
  const titleRef = useRef();
  const tierRef = useRef();
  const descriptionRef = useRef();
  const platformRef = useRef();
  const fileRef = useRef();
  const ownerRef = useRef();

  const router = useRouter();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const titleRefValue = titleRef.current.value;
    const tierRefValue = tierRef.current.value;
    const descriptionRefValue = descriptionRef.current.value;
    const platformRefValue = platformRef.current.value;
    // const fileRefValue = fileRef.current.value;
    const ownerRefValue = ownerRef.current.value;

    const formData = {
      title: titleRefValue,
      owner: ownerRefValue,
      tier: tierRefValue,
      description: descriptionRefValue,
      platform: platformRefValue,
      //   file: fileRefValue,
    };

    event.target.reset();
    router.push("/");

    props.onAddTicket(formData);

    console.log(formData);
  };

  return (
    <>
      <div className="mt-4  h-full py-12 bg-base-100 flex items-center justify-center">
        <form className="w-full max-w-lg " onSubmit={submitFormHandler}>
          <div className="flex flex-wrap -mx-3 mb-6 ">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-title"
              >
                Ticket Title:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-title"
                type="text"
                placeholder="Title"
                ref={titleRef}
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="grid-owner"
              >
                Submitter
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-owner"
                type="text"
                placeholder="Name"
                ref={ownerRef}
              />
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
                className="w-full block appearance-none w- bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ref={tierRef}
              >
                <option>Tier A</option>
                <option>Tier B</option>
                <option>Tier C</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="grid-description"
              >
                Ticket Description:
              </label>
              <textarea
                id="grid-description"
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
                htmlFor="grid-platform"
              >
                Platform:
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-platform"
                  ref={platformRef}
                >
                  <option>Web</option>
                  <option>Mobile</option>
                </select>
              </div>
            </div>
            {/* Will Re Add this once I figure out how to store in a DB properly */}
            {/* <div className="relative md:w-1/3 px-3 mb-6 md:mb-0 m-7">
              <input
                type="file"
                className="tracking-wide block "
                ref={fileRef}
              />
            </div> */}

            <button
              type="submit"
              className="btn block tracking-wide w-full bg-white text-black mt-4 hover:bg-black hover:text-white"
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
