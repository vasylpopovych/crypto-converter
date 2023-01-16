/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Header from "./Header";
import styles from "./layout.module.scss";

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
