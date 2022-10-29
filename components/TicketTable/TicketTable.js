import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRouter } from "next/router";

const TicketTable = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    // still showing /undefined
    // probably because I don't have it setup in [tikcketId]
    router.push("/" + props.tier);
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
          {props.tickets.map((item) => {
            return (
              <tr key={item.id}>
                <th></th>

                <td>
                  {item.owner}
                  <br></br>
                  <span className="badge badge-ghost badge-sm p-2">
                    {item.tier} Ticket
                  </span>
                </td>
                <td>
                  <p className="text-xs truncate flex-shrink p-6">
                    {item.title}
                  </p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    # {item.id.substring(0, 8)}
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
