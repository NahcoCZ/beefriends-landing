import "./index.css";

function Beehive() {
  const hexagonCount = 11;

  const renderHexagons = () => {
    const hexagons = [];

    for (let i = 1; i <= hexagonCount; i++) {
      hexagons.push(
        <div className="hexagon" key={i}>
          <div className="middle-hexa"></div>
        </div>
      );
    }

    return hexagons;
  };

  return <div className="left-[-75px] relative">{renderHexagons()}</div>;
}

export default Beehive;
