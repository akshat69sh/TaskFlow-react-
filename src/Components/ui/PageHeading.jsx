import { Download, Plus, SlidersHorizontal } from "lucide-react";
import Button from "../ui/Button";

function PageHeading({ pageName, isButtonVisible }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="text-4xl font-semibold">
          {pageName ? pageName : "Home"}
        </div>
        {isButtonVisible ? (
          <div className="flex space-x-4">
            <Button
              buttonIcon={<SlidersHorizontal />}
              buttonText={"Customise"}
              buttonClass={"gap-3 text-white"}
            />
            <Button
              buttonIcon={<Download />}
              buttonText={"Export to excel"}
              buttonClass={"bg-white text-black"}
            />
            <Button
              buttonIcon={<Plus />}
              buttonText={"Create a new Task"}
              buttonClass={"bg-blue-500 text-white"}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default PageHeading;
