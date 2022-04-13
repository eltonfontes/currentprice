import { connect } from "react-redux";

// import { Container } from './styles';

function Preview({ item }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{item.description}</h1>
      <h3
        dangerouslySetInnerHTML={{
          __html: `${item.symbol} ${item.rate}`,
        }}
      />
    </div>
  );
}

const mapToProps = (store) => ({
  item: store.currentprice.item,
});

export default connect(mapToProps)(Preview);
