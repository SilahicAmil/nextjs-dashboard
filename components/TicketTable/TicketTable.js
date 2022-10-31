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
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Submitter</th>
            <th>Ttitle</th>
            <th>Ticket Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Could probably seperate below into own component 
        
        React/NexJs is weird with tables  so IDK if that would work
        
        */}
          {props.ticket.map((item) => {
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
                    onClick={() => {
                      router.push("/" + item.id);
                    }}
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
