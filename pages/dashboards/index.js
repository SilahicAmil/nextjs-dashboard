import TicketTable from "../../components/TicketTable/TicketTable";

const DUMMY_DATA = [
  {
    id: "t1",
    owner: "John Stossel",
    tier: "Tier A",
    title: "Fix useMemo Hook",
  },
  {
    id: "t2",
    owner: "Steven Stossel",
    tier: "Tier B",
    title: "Fix Form Hook",
  },
  {
    id: "t3",
    owner: "John Stevens",
    tier: "Tier AA",
    title: "Fix useEffect Hook",
  },
];

const DashboardPage = () => {
  return (
    <div className="">
      <h1>All Dashboards Page</h1>
      <div>
        <TicketTable data={DUMMY_DATA} />
      </div>
    </div>
  );
};

export default DashboardPage;
