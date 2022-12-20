import { WatchButton, AddList } from "../../common/Button/style";
import LayoutContainer from "../../common/Layout/LayoutContainer";
import {
  HomeComponent,
  HomeContent,
  HomeRankings,
  HomeShowContents,
  HomeShowDetails,
  HomeTitle,
  HomeWrapper,
  HomeShowList,
} from "./style";

const Home = () => (
  <LayoutContainer title="Home Page">
    <HomeComponent>
      {/*⭐⭐⭐⭐ Import this part in common UI and Use Grid Here */}
      <HomeWrapper>
        <HomeContent>
          <HomeRankings>Rankings</HomeRankings>
          <HomeTitle variant="h3">Jujutsu Kaisen</HomeTitle>
          <HomeShowDetails>
            <HomeShowContents>TV Shows</HomeShowContents>
            <HomeShowContents>24 min</HomeShowContents>
            <HomeShowContents>Release Date</HomeShowContents>
          </HomeShowDetails>
          {/* Watch Show or Add to List */}
          <HomeShowList>
            <WatchButton variant="contained">Watch Now</WatchButton>
            <AddList>Add to List</AddList>
          </HomeShowList>
        </HomeContent>
      </HomeWrapper>
      {/*⭐⭐⭐⭐*/}
    </HomeComponent>
  </LayoutContainer>
);

export default Home;
