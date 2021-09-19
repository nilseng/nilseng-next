import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

export const UserInfo = () => {
  const [ua, setUa] = useState<any>();

  useEffect(() => {
    setUa(UAParser(navigator.userAgent));
  }, []);

  const handleGeoPosition = (pos: any) => console.log(pos);

  return (
    <div>
      <h5 className="font-bold text-xl mt-4">About you</h5>
      <p className="text-gray-200 text-xs">Just so you know that I know.</p>
      {ua && (
        <>
          <p className="mt-4">Your browser is {ua.browser?.name}</p>
          <p className="text-gray-200 text-xs">
            Version: {ua.browser?.version}
          </p>
          <p className="text-gray-200 text-xs">Engine: {ua.engine?.name}</p>
          {ua.os && (
            <p className="mt-4">Your operating system is {ua.os?.name}</p>
          )}
          {ua.os?.version && (
            <p className="text-gray-200 text-xs">Version: {ua.os.version}</p>
          )}
          {ua.device?.type && ua.device?.vendor && (
            <p className="mt-4">
              You&apos;re on a {ua.device.type} device from {ua.device.vendor}
            </p>
          )}
          {ua.cpu?.architecture && (
            <p className="mt-4">Your device has a {ua.cpu.architecture} CPU.</p>
          )}
        </>
      )}
      {localStorage && Object.keys(localStorage).length > 0 && (
        <div className="mt-4">
          You have the following objects in your browser&apos;s local storage:
          {Object.keys(localStorage).map((k) => (
            <p className="text-gray-200 text-xs" key={k}>
              {k}
            </p>
          ))}
        </div>
      )}
      {document.referrer && (
        <p className="mt-4">You were referred from {document.referrer}</p>
      )}
      {JSON.stringify(
        navigator.geolocation.getCurrentPosition(
          handleGeoPosition,
          (err) => console.log("something went wrong:", err),
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          }
        )
      )}
    </div>
  );
};
