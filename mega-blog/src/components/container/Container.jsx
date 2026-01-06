function Container({children}) {

    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default Container;


const styles = {
  container: {
    width: "100%",
    maxWidth: "1280px", // max-w-7xl ≈ 80rem = 1280px
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "16px",  // px-4 = 1rem = 16px
    paddingRight: "16px",
  },
};