import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRouter } from "next/router";

const TicketTable = (props) => {
  // I think this isn't working because it's the parent level components
  // so props only go to each item wthin the return()

  // If I made the button a child component I think I could use the below
  // have a workaround for now but interesting
  const router = useRouter();

  // const showDetailsHandler = () => {
  //   // still showing /undefined
  //   router.push("/" + props.ticketId);
  // };

  // // props.id is undefined?
  // console.log(props.id);

  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-full ">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th className="bg-white text-black"></th>
            <th className="bg-white text-black">Submitter</th>
            <th className="bg-white text-black">Ttitle</th>
            <th className="bg-white text-black">Ticket Id</th>
            <th className="bg-white text-black"></th>
          </tr>
        </thead>
        <tbody>
          {/* Could probably seperate below into own component 
        
        React/NexJs is weird with tables  so IDK if that would work
        
        */}
          {props.ticket.map((item) => {
            return (
              <tr key={item.id} className="text-black">
                <th className="bg-white text"></th>

                <td className="bg-white">
                  {item.owner}
                  <br></br>
                  <span className="badge text-white p-2  tracking-wide badge-md ">
                    {item.tier}
                  </span>
                </td>
                <td className="bg-white">
                  <p className="text-sm truncate flex-shrink p-6">
                    {item.title}
                  </p>
                </td>
                <th className="bg-white">
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => {
                      router.push("/" + item.id);
                    }}
                    name="ticket id button"
                    value="ticket id"
                  >
                    # {item.id.substring(0, 8)}
                  </button>
                </th>
                <th className="justify-center items-center bg-white">
                  <button
                    className="btn bg-black hover:bg-white hover:text-black"
                    onClick={() => {
                      router.push("/" + item.id);
                    }}
                    name="ticket details button"
                    value="ticket details"
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
