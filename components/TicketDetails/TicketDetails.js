import { FiPaperclip } from "react-icons/fi";

const TicketDeails = (props) => {
  // Eventually use a switch statement for each tier
  // could just do this for each tier but would be a pain

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
    <div className="overflow-hidden   gap-y-4 bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        {/* button should popup a modal where you can add notes for ticketId */}
        <button className="ml-auto mr-0 flex text-black btn bg-white hover:bg-black hover:text-white">
          Notes
        </button>
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Ticket Information
        </h3>

        <p className="mt-1 max-w-2xl text-xs text-gray-500">{props.id}</p>
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
            <dt className="text-sm font-medium text-gray-500">Platform</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.platform}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Issue Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {props.description}
            </dd>
          </div>
          {/* Eventually add functionality for below
          
          will do some testing right now to see how this works

          also make this own component maybe
           */}
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
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
                    <span className="ml-2 w-0 flex-1 truncate">repro.mov</span>
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
          </div>
        </dl>
      </div>
    </div>
  );
};

export default TicketDeails;
