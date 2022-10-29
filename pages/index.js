import Head from "next/head";
import Link from "next/link";
import { MongoClient } from "mongodb";
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

const HomePage = (props) => {
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

        <TicketTable tickets={props.tickets} />
      </div>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://designate:Scabby123@cluster0.hho9svc.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find().toArray();

  client.close();

  return {
    props: {
      tickets: tickets.map((ticket) => ({
        title: ticket.title,
        owner: ticket.owner,
        tier: ticket.tier,
        description: ticket.description,
        platform: ticket.platform,
        id: ticket._id.toString(),
      })),
    },
    revalidate: 15,
  };
}

// add getStatic props to fetch data
// add file to API for just fetching data
