import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function getTrackingInfo(tracking: any) {
  var trackingNum = tracking.trackingNum;
  var api = tracking.apiKey;
  try {
    axios
      .get(`http://info.sweettracker.co.kr/api/v1/trackingInfo`, {
        params: {
          t_code: "04",
          t_invoice: trackingNum,
          t_key: api,
        },
      })
      .then((response) => {
        console.log(response);
        tracking.setTrackingInfo(JSON.stringify(response));
      })
      .catch((error) => {
        console.log(error);
        alert("error has occurred");
        return 0;
      });
  } finally {
    return 1;
  }
}

export function getTrackingCompany() {
  return 0;
}

export function getTrackingRoute() {
  return 0;
}
