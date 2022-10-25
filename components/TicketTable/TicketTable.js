import { AiOutlineDoubleRight } from "react-icons/ai";
import { useRouter } from "next/router";

const TicketTable = (props) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div className="overflow-x-auto w-full">
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
              <tr key={item.id}>
                <th></th>

                <td>
                  {item.owner}
                  <br></br>
                  <span className="badge badge-ghost badge-sm">
                    {item.tier} Ticket
                  </span>
                </td>
                <td>
                  <p className="text-xs">{item.title}</p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">{item.id}</button>
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
