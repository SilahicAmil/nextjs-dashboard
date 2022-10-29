import Head from "next/head";
import Link from "next/link";
import TicketTable from "../components/TicketTable/TicketTable";

const DUMMY_DATA = [
  {
    ticketId: "123",
    owner: "John Stossel",
    tier: "Tier A",
    title: "Fix useMemo Hook",
  },
  {
    ticketId: "t23",
    owner: "Steven Stossel",
    tier: "Tier B",
    title: "Fix Form Hook.",
  },
  {
    ticketId: "t34",
    owner: "John Stevens",
    tier: "Tier AA",
    title: "Fix useEffect Hook",
  },
];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Takeya Ticket</title>
        <meta content="" />
      </Head>
      <div>
        {/* Move this into it's own component */}
        <button className="btn flex flex-row-reverse bg-red-500 text-white m-4 ">
          <Link href="/new-ticket">New Ticket</Link>
        </button>

        {/* Add a  */}
        <TicketTable data={DUMMY_DATA} />
      </div>
    </>
  );
};

export default HomePage;

// add getStatic props to fetch data
// add file to API for just fetching data
