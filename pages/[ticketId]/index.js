import { MongoClient, ObjectId } from "mongodb";

import Head from "next/head";
import TicketDeails from "../../components/TicketDetails/TicketDetails";

const TicketDetailsPage = (props) => {
  return (
    <>
      <Head>
        <title>Takeya Ticket - {props.ticketData.id.substring(0, 8)}</title>
        <meta content="" />
      </Head>
      <div>
        <TicketDeails {...props.ticketData} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // cant use proccess.env.DB_URL here and no clue why
  const client = await MongoClient.connect(process.env.DB_URL);

  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const tickets = await ticketsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: "blocking",
    paths: tickets.map((ticket) => ({
      params: {
        ticketId: ticket._id.toString(),
      },
    })),
  };
};

//  getStaticProps for getting ticketId based of objectID
// add file to API to do above and just fetch here
export const getStaticProps = async (context) => {
  const ticketId = context.params.ticketId;

  const client = await MongoClient.connect(process.env.DB_URL);

  const db = client.db();

  const ticketsCollection = db.collection("tickets");

  const selectedTicket = await ticketsCollection.findOne({
    _id: ObjectId(ticketId),
  });

  client.close();

  return {
    props: {
      ticketData: {
        id: selectedTicket._id.toString(),
        title: selectedTicket.title,
        owner: selectedTicket.owner,
        tier: selectedTicket.tier,
        description: selectedTicket.description,
        platform: selectedTicket.platform,
      },
    },
  };
};

export default TicketDetailsPage;
