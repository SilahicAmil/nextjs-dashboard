import { AiOutlineDoubleRight } from "react-icons/ai";

const TicketTable = (props) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>

            <th>Owner</th>
            <th>Description</th>
            <th>Ticket Id</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr key={item.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

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
                  <button className="btn btn-ghost btn-xs">#123456</button>
                </th>
                <th className="justify-center items-center">
                  <button className="btn hover:bg-gray-500">
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
