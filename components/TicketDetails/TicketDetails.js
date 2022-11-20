import { useRef } from "react";
import { useState } from "react";

const TicketDeails = (props) => {
  const [showReply, setShowReply] = useState(false);
  const replyDataRef = useRef();

  const showReplyInputHandler = () => {
    setShowReply(true);
  };

  const replyDataHandler = (e) => {
    e.preventDefault();
    const replyDataRefValue = replyDataRef.current.value;

    console.log(replyDataRefValue);
    // pass the data to an api point that adds reply to DB
    // then make a comments/reply component that displays at the bottom
    // might also need to change the layout for all this to work

    setShowReply(false);
  };

  // Eventually use a switch statement for each tier
  // maybe a context would be usefull
  // probably not since only used here but IDK

  const tierTicketA =
    props.tier === "Tier A" ? (
      <div className="bg-red-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm  font-medium text-black">Tier</dt>
        <dd className="mt-1  text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {props.tier}
        </dd>
      </div>
    ) : (
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">Tier</dt>
        <dd className="mt-1  text-sm text-gray-900 sm:col-span-2 sm:mt-0">
          {props.tier}
        </dd>
      </div>
    );

  return (
    <>
      <div className="flex h-full w-full m-4">
        <div className="grid w-6/12 flex-grow card bg-base-300 rounded-box ">
          <div className="overflow-hidden   bg-white shadow sm:rounded-lg">
            <div className=" sm:px-6 p-4 m-4">
              {/* Still dont know if I want to do a modal OR new page */}
              {/* <button className="ml-auto mr-0 mt-4 flex text-white btn ">
                Notes
              </button> */}

              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {props.title}
              </h3>

              <p className="mt-1 max-w-2xl text-xs text-gray-500">
                # {props.id}
              </p>
            </div>

            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Title</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {props.title}
                  </dd>
                </div>
                {tierTicketA}

                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500"></dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Platform
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {props.platform}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500 ">
                    Issue Description
                  </dt>
                  <p className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 whitespace-pre-line">
                    {props.description}
                  </p>
                </div>
                {/* Eventually add functionality for below
          
          will do some testing right now to see how this works

          also make this own component maybe
           */}
                {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 ">
                    <ul
                      role="list"
                      className="divide-y divide-gray-200 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                          <FiPaperclip
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            repro.mov
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium btn bg-white text-indigo-600 hover:text-indigo-300"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                        <div className="flex w-0 flex-1 items-center">
                          <FiPaperclip
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2 w-0 flex-1 truncate">
                            photo_1.jpg
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium btn bg-white text-indigo-600 hover:text-indigo-300"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
              </dl>
            </div>
            {showReply ? (
              <>
                <textarea
                  className=" w-full text-black "
                  name=""
                  id=""
                  cols="20"
                  rows="5"
                  ref={replyDataRef}
                ></textarea>
                <button
                  onClick={replyDataHandler}
                  className="text-white flex ml-auto m-5 p-4 btn"
                >
                  Submit
                </button>
              </>
            ) : (
              <button
                className="text-white flex ml-auto m-5 p-4 btn"
                onClick={showReplyInputHandler}
              >
                Reply
              </button>
            )}
            <div></div>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>
        <div className="grid  h-full flex-grow  bg-white text-black rounded-xl mr-8  place-items-center">
          <div className="flex justify-center p-4 m-4 gap-10 items-center ">
            Owner: {props.owner}
            <button className="btn text-white">Claim</button>
          </div>
          <div>
            <h1>Status: Pending</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDeails;
