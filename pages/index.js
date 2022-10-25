import Head from "next/head";
import TicketTable from "../components/TicketTable/TicketTable";

const DUMMY_DATA = [
  {
    id: "t12",
    owner: "John Stossel",
    tier: "Tier A",
    title: "Fix useMemo Hook",
  },
  {
    id: "t23",
    owner: "Steven Stossel",
    tier: "Tier B",
    title: "Fix Form Hook",
  },
  {
    id: "t34",
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
      </Head>
      <div>
        <h1 className="text-2xl p-4">Home Page</h1>

        {/* Add a  */}
        <TicketTable data={DUMMY_DATA} />
      </div>
    </>
  );
};

export default HomePage;

// add getStatic props to fetch data
// add file to API for just fetching data
