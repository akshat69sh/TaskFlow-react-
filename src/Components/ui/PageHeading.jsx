import { Download, Plus, SlidersHorizontal } from "lucide-react";
import Button from "../../components/ui/Button";

function PageHeading({ pageName, isButtonVisible, buttonOnClick }) {
  return (
    <>
      <div className="flex justify-between font-Acme">
        <div className="text-4xl font-semibold">
          {pageName ? pageName : "Home"}
        </div>
        {isButtonVisible ? (
          <div className="flex space-x-4">
            <Button
              buttonIcon={<SlidersHorizontal />}
              buttonText={"Customise"}
              buttonClass={"gap-2 text-white "}
            />
            <Button
              buttonIcon={<Download />}
              buttonText={"Export to excel"}
              buttonClass={"bg-white text-black gap-1 rounded-2xl"}
            />
            <Button
              buttonIcon={<Plus />}
              buttonText={"Create a new Task"}
              buttonClass={"bg-blue-500 text-white gap-1 hover:bg-blue-600 rounded-2xl"}
              buttonOnClick={buttonOnClick}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default PageHeading;
