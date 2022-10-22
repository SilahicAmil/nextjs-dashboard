import Card from "../components/Card/Card";

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

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <div>
        <Card data={DUMMY_DATA} />
      </div>
    </>
  );
};

export default HomePage;
