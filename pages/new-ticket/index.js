import Head from "next/head";
import NewTicket from "../../components/NewTicket/NewTicket";
import { useRouter } from "next/router";

const NewTicketPage = () => {
  const router = useRouter();

  const addTicketHandler = async (enteredTicketData) => {
    try {
      const response = await fetch("/api/new-ticket", {
        method: "POST",
        body: JSON.stringify(enteredTicketData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Takeya Ticket - Create Ticket</title>
        <meta content="" />
      </Head>
      <NewTicket onAddTicket={addTicketHandler} />
    </>
  );
};

export default NewTicketPage;
