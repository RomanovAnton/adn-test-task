import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./CustomizedSlider.scss";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#ff5c00",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "#141414",
    border: "2px solid currentColor",
  },
  "& .MuiSlider-track": {
    height: 5,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export const CustomizedSlider = () => {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slider">
      <p className="slider__title">Цена, ₽</p>
      <div className="slider__range-container">
        <div className="slider__value">
          <span>от</span>
          <span>{value[0]}</span>
        </div>
        <div className="slider__value">
          <span>до</span>
          <span>{value[1]}</span>
        </div>
      </div>
      <Box sx={{ width: 0.97, paddingLeft: 0.4 }}>
        <AirbnbSlider
          slots={{ thumb: AirbnbThumbComponent }}
          getAriaLabel={(index) =>
            index === 0 ? "Minimum price" : "Maximum price"
          }
          value={value}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};
