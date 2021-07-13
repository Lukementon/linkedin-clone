import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React 18 is out", "Top news 9099 readers")}
      {newsArticle("Redux is magic", "Top news 8002 readers")}
      {newsArticle("NextJS and server side rendering", "6,500 readers")}
      {newsArticle("Firebase and stripe implementation", "5000 readers")}
    </div>
  );
};

export default Widgets;
