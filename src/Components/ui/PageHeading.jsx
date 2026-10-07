import { Download, Plus, SlidersHorizontal } from "lucide-react";
import Button from "../../components/ui/Button";

function PageHeading({ pageName, isButtonVisible, buttonOnClick }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-Acme w-full">
        <div className="text-3xl sm:text-4xl font-semibold">
          {pageName ? pageName : "Home"}
        </div>
        {isButtonVisible ? (
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Button
              buttonIcon={<SlidersHorizontal />}
              buttonText={"Customise"}
              buttonClass={"gap-2 p-3 text-white"}
            />
            <Button
              buttonIcon={<Download />}
              buttonText={"Export to excel"}
              buttonClass={"bg-white p-3 text-black gap-1 rounded-2xl"}
            />
            <Button
              buttonIcon={<Plus />}
              buttonText={"Create a new Task"}
              buttonClass={"bg-blue-500 p-3 text-white gap-1 hover:bg-blue-600 rounded-2xl"}
              buttonOnClick={buttonOnClick}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default PageHeading;