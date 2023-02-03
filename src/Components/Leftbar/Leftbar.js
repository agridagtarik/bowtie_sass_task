import React from "react";
import "./Leftbar.css";
import { RiHome6Line } from "@react-icons/all-files/ri/RiHome6Line";
import { RiWalletLine } from "@react-icons/all-files/ri/RiWalletLine";
import { FiLayers } from "@react-icons/all-files/fi/FiLayers";
import { RiQuestionnaireLine } from "@react-icons/all-files/ri/RiQuestionnaireLine";
import { RiNotificationBadgeLine } from "@react-icons/all-files/ri/RiNotificationBadgeLine";
import { RiChatNewLine } from "@react-icons/all-files/ri/RiChatNewLine";

import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const Leftbar = () => {
  return (
    <nav id="drawer">
      <ul>
        <li>
          <a href="#">Menu Item</a>
        </li>
        <li>
          <a href="#">Menu Item</a>
        </li>
        <li>
          <a href="#">Menu Item</a>
        </li>
        <li>
          <a href="#">Menu Item</a>
        </li>
      </ul>
    </nav>
  );
};

export default Leftbar;
