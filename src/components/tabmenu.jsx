
import { useState } from "react";
import DescriptionTab from "./alltabs/desciptiontab";
import CurriculumTab from "./alltabs/curriculumtab";
import ReviewTab from "./alltabs/reviewtab";
const TabMenu = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Description</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Curriculum</li>
        <li className={activeTab === "tab3" ? "active" : ""} onClick={handleTab3}>Reviews</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <DescriptionTab /> : activeTab === "tab2" ? <CurriculumTab /> : <ReviewTab />}
      </div>
    </div>
  );
};
export default TabMenu;