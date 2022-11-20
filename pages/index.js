import Button from "../components/Button/Button";
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
        <Button>
          <Link href="/new-ticket">New Ticket</Link>
        </Button>
        <TicketTable ticket={props.ticket} />
      </div>
    </>
  );
};

// add getStatic props to fetch data
// add file to API for just fetching data
export const getStaticProps = async () => {
  const client = await MongoClient.connect(process.env.DB_URL);

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
