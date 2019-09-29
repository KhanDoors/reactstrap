import world50m from "../assets/geo-data/world-50m.json";
import cities from "../assets/geo-data/world-most-populous.json";
import { scaleLinear } from "d3-scale";
import React, { Component } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Markers,
  ZoomableGroup
} from "react-simple-maps";
import { getColor } from "../Utils/colors";

const cityScale = scaleLinear()
  .domain([0, 37843000])
  .range([1, 25]);

class Map extends Component {
  state = {
    cities
  };

  render() {
    // const primaryColor = getColor('primary');
    const secondaryColor = getColor("gray");
    const lightColor = getColor("green");
    const thirdColor = getColor("red");

    return (
      <ComposableMap
        projectionConfig={{ scale: 205 }}
        width={980}
        height={551}
        style={{
          width: "100%",
          height: "auto"
        }}
      >
        <ZoomableGroup center={[0, 20]} disablePanning>
          <Geographies geography={world50m}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: lightColor,
                          stroke: lightColor,
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        hover: {
                          fill: thirdColor,
                          stroke: thirdColor,
                          strokeWidth: 0.75,
                          outline: "none"
                        },
                        pressed: {
                          fill: secondaryColor,
                          stroke: secondaryColor,
                          strokeWidth: 0.75,
                          outline: "none"
                        }
                      }}
                    />
                  )
              )
            }
          </Geographies>
          <Markers>
            {this.state.cities.map((city, i) => (
              <Marker key={i} marker={city}>
                <circle
                  cx={0}
                  cy={0}
                  r={cityScale(city.population)}
                  fill={secondaryColor}
                  stroke={secondaryColor}
                  strokeWidth="2"
                />
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    );
  }
}

export default Map;
