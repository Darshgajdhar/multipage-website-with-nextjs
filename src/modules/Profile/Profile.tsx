import Image from "next/image";
import LayoutContainer from "../../common/Layout/LayoutContainer";

const Profile = () => {
  return (
    <LayoutContainer title="Profile">
      <h1>Profile Page</h1>
      <Image
        src="https://assets.wired.com/photos/w_2000/wp-content/uploads/2016/12/BSP_056.jpg"
        height="800"
        alt="Space"
        width="800"
      />
    </LayoutContainer>
  );
};

export default Profile;
