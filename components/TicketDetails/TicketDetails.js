const TicketDeails = (props) => {
  return (
    <>
      <h1>{props.ticketId}</h1>
      <h1>{props.title}</h1>
      <h1>{props.owner}</h1>
      <h1>{props.tier}</h1>
      <h1>{props.description}</h1>
      <h1>{props.platform}</h1>
    </>
  );
};

export default TicketDeails;
