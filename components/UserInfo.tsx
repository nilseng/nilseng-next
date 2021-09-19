import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";
import { useCookies } from "react-cookie";

export const UserInfo = () => {
  const [ua, setUa] = useState<any>();
  const [cookies] = useCookies();

  useEffect(() => {
    setUa(UAParser(navigator.userAgent));
  }, []);

  return (
    <div>
      <h5 className="font-bold text-xl mt-4">About you</h5>
      <p className="text-gray-400 text-xs">Just so you know that I know.</p>
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
      {cookies?.length > 0 && (
        <>
          <p className="mt-4">Cookies</p>
          {Object.keys(cookies).map((key) => (
            <p key={key} className="text-xs text-gray-200">
              {key}: {cookies[key]}
            </p>
          ))}
        </>
      )}
    </div>
  );
};
