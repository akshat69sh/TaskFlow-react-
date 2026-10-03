import PageHeading from "../components/ui/PageHeading";
import TaskCard from "../Components/ui/TaskCard";

function Home() {
  return (
    <div className="w-full h-full">
      <PageHeading pageName="Home" isButtonVisible={true} />

      <div className="flex gap-5 mt-5 justify-around w-full  items-center  ">
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        
        
      </div>
    </div>
  );
}

export default Home;
