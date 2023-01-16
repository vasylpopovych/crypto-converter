import Layout from "../components/Layout";
import AdvantagesScreen from "../screens/mainPage/AdvantagesScreen";
import ConfidentialityScreen from "../screens/mainPage/ConfidentialityScreen";
import HomeScreen from "../screens/mainPage/HomeScreen";
import ReviewsScreen from "../screens/mainPage/ReviewsScreen";

const MainPage = () => {
    return (
        <Layout>
            <HomeScreen />
            <AdvantagesScreen />
            <ConfidentialityScreen />
            <ReviewsScreen />
        </Layout>
    );
};

export default MainPage;
