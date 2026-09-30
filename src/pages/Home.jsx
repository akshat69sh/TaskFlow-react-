import PageHeading from "../components/ui/PageHeading"
import TaskCard from "../components/ui/TaskCard";


function Home() {
  return (
     <div className="w-full h-full">
      <PageHeading pageName="Home" isButtonVisible={true} />

    <div className="flex flex-wrap gap-5 mt-5 justify-around">
      <TaskCard>
        Hello
      </TaskCard>
      <TaskCard>
        Hello
      </TaskCard>
      <TaskCard>
        Hello
      </TaskCard>
      <TaskCard>
        Hello
      </TaskCard>
    </div>

    </div>
  );
}

export default Home;
