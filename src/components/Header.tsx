import styles from "./header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div>logo</div>
            <div>Home</div>
            <div>Advantages</div>
            <div>Confidentiality</div>
            <div>Reviews</div>
        </header>
    );
};

export default Header;
