import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRouter } from "next/router";

const TicketTable = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    // figure out why this isn't working
    // showing /undefined
    // might fix itself once I get fetching on main index.js
    // yeah definately not working because I dont have fetching and getStaticProps
    router.push("/" + props.ticketId);
    console.log(props.name);
  };

  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Owner</th>
            <th>Ttitle</th>
            <th>Ticket Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={item.ticketId}>
                <th></th>

                <td>
                  {item.owner}
                  <br></br>
                  <span className="badge badge-ghost badge-sm p-2">
                    {item.tier} Ticket
                  </span>
                </td>
                <td>
                  <p className="text-xs truncate flex-shrink p-10">
                    {item.title}
                  </p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {item.ticketId}
                  </button>
                </th>
                <th className="justify-center items-center">
                  <button
                    className="btn hover:bg-gray-500"
                    onClick={showDetailsHandler}
                  >
                    <AiOutlineDoubleRight />
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;
