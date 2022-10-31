import { AiOutlinePlus } from "react-icons/ai";
import Head from "next/head";
import Link from "next/link";
import { MongoClient } from "mongodb";
import TicketTable from "../components/TicketTable/TicketTable";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Takeya Ticket</title>
        <meta content="" />
      </Head>
      <div>
        {/* Move this into it's own component */}
        <button className="btn flex ml-auto mr-5 bg-green-500 text-white m-4 ">
          <AiOutlinePlus className="text-white text-xl mr-1" />
          <Link href="/new-ticket">New Ticket</Link>
        </button>

        <TicketTable ticket={props.ticket} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://designate:Scabby123@cluster0.hho9svc.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find().toArray();

  client.close();

  return {
    props: {
      ticket: tickets.map((ticket) => ({
        title: ticket.title,
        owner: ticket.owner,
        tier: ticket.tier,
        description: ticket.description,
        platform: ticket.platform,
        id: ticket._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
// add getStatic props to fetch data
// add file to API for just fetching data
