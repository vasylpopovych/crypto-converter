import styles from "./homeScreen.module.scss";

const HomeScreen = () => {
    return (
        <div className={styles.wrapper}>
            <div>Home Screen</div>
            <form>
                <select name="currencies" id="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="czk">CZK</option>
                </select>
                <input type="number"></input>
                <br />
                <select name="currencies" id="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="czk">CZK</option>
                </select>
                <br />
                <input type="button" value="convert"></input>
            </form>
        </div>
    );
};

export default HomeScreen;
