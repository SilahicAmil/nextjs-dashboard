import NewTicket from "../../components/NewTicket/NewTicket";
import { useRouter } from "next/router";

const NewTicketPage = () => {
  const router = useRouter();

  async function addTicketHandler(enteredTicketData) {
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
  }

  return (
    <>
      <h1>New Ticket Page</h1>
      <NewTicket onAddTicket={addTicketHandler} />
    </>
  );
};

export default NewTicketPage;

// add getStaticProps for submitting new ticket in new-ticket file
// add file to API folder for new ticket submission
