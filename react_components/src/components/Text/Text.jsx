const Text = ({style, bodyText, size}) => {
    return <p style={{margin: 0, padding: 0, fontSize: size || "16px"}}>{bodyText}</p>;
};

export default Text;
