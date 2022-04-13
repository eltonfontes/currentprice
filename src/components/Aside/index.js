import { useEffect, useState } from "react";

import { FiCalendar, FiRefreshCcw } from "react-icons/fi";
import { Container, H1, P, HR, Item } from "./styles";

import * as ActionsCurrent from "../../store/actions/currencyprice";
import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import api from "../../services/api";

function Lista({ current, showItem }) {
  return (
    <div
      style={{
        padding: "5px",
        flex: 1,
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
        onClick={() => showItem(current.bpi.USD)}
      >
        <span>
          {current.bpi.USD.code} {current.bpi.USD.description}
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: `${current.bpi.USD.symbol} ${current.bpi.USD.rate}`,
          }}
        />
      </Item>
      <Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
        onClick={() => showItem(current.bpi.GBP)}
      >
        <span>
          {current.bpi.GBP.code} {current.bpi.GBP.description}
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: `${current.bpi.GBP.symbol} ${current.bpi.GBP.rate}`,
          }}
        />
      </Item>
      <Item
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
        onClick={() => showItem(current.bpi.EUR)}
      >
        <span>
          {current.bpi.EUR.code} {current.bpi.EUR.description}
        </span>
        <p
          dangerouslySetInnerHTML={{
            __html: `${current.bpi.EUR.symbol} ${current.bpi.EUR.rate}`,
          }}
        />
      </Item>
    </div>
  );
}

function Aside({ loaded, current, setLoaded, showItem, onLoad }) {
  const [timeIn, setTimeIn] = useState(null);

  async function handleGetCurrentValue() {
    setLoaded(true);
    const response = await api.get();
    try {
      const { status, data } = response;
      if (status === 200) {
        onLoad(data);
      }
    } catch {
      console.log("ocorreu um erro ao localizar");
    }
  }

  useEffect(() => {
    handleGetCurrentValue();
    let tIn = setInterval(() => {
      handleGetCurrentValue();
    }, 1000 * 60);

    setTimeIn(tIn);
  }, []);
  return (
    <Container>
      {loaded && (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <H1>{current.chartName}</H1>
            <button
              style={{
                background: "transparent",
                border: 0,
                cursor: "pointer",
                color: "#999",
              }}
              onClick={() => handleGetCurrentValue()}
            >
              <FiRefreshCcw style={{ fontWeight: "bold" }} size={19} />
            </button>
          </div>
          <P>{current.disclaimer}</P>
          <div style={{ fontSize: 14, display: "flex" }}>
            <FiCalendar
              size={14}
              style={{ marginRight: 5, fontWeight: "bold" }}
            />
            {current.time.updated}
          </div>
          <HR />
          <Lista current={current} showItem={showItem} />
        </>
      )}
    </Container>
  );
}

const mapToProps = (store) => ({
  current: store.currentprice.current,
  loaded: store.currentprice.loaded,
});

const mapToDispatchProps = (dispatch) =>
  bindActionCreators(ActionsCurrent, dispatch);

export default connect(mapToProps, mapToDispatchProps)(Aside);
