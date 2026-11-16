import PageHeading from "../Components/ui/PageHeading";

function Profile() {
  return (
    <div className="w-full h-full p-1 sm:p-2 overflow-y-auto">
      <PageHeading pageName="Profile" isButtonVisible={false} />
    </div>
  );
}

export default Profile;