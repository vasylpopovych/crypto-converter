import Layout from "./components/Layout";
import AdvantagesScreen from "./screens/AdvantagesScreen";
import ConfidentialityScreen from "./screens/ConfidentialityScreen";
import HomeScreen from "./screens/HomeScreen";
import ReviewsScreen from "./screens/ReviewsScreen";

function App() {
    return (
        <>
            <Layout>
                <HomeScreen />
                <AdvantagesScreen />
                <ConfidentialityScreen />
                <ReviewsScreen />
            </Layout>
        </>
    );
}

export default App;
