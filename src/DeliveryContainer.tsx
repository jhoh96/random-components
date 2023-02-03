import React, { useState, useEffect } from "react";
import { getTrackingInfo } from "./general/util/GetTrackingInfo";

export default function DeliveryContainer() {
  const [trackingNum, setTrackingNum] = useState<string>("654182146802");
  const [apiKey, setApiKey] = useState<string>("");
  const [trackingInfo, setTrackingInfo] = useState<string>();
  const deliKey = {
    trackingNum: trackingNum,
    apiKey: apiKey,
    trackingInfo: trackingInfo,
    setTrackingInfo: setTrackingInfo,
  };

  useEffect(() => {
    console.log(trackingNum);
  }, [trackingNum]);

  useEffect(() => {}, []);

  const handleTrackClick = () => {
    getTrackingInfo(deliKey);
  };

  return (
    <div>
      <div>
        <input
          placeholder="tracking-number"
          value={trackingNum}
          onChange={(e) => setTrackingNum(e.target.value)}
          maxLength={20}
        ></input>
        <button
          onClick={() => {
            handleTrackClick();
          }}
        >
          Track
        </button>
      </div>
      <div>{trackingInfo ? trackingInfo : <></>}</div>
    </div>
  );
}
