import NewTicket from "../../components/NewTicket/NewTicket";

const NewTicketPage = () => {
  return (
    <>
      <h1>New Ticket Page</h1>
      <NewTicket />
    </>
  );
};

export default NewTicketPage;

// add getStaticProps for submitting new ticket in new-ticket file
// add file to API folder for new ticket submission
