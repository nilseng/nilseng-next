import mapboxgl, { GeolocateControl } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

export const Mapbox = () => {
  const mapEl = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

  const geoLocateControl = useRef<mapboxgl.GeolocateControl>(
    new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    })
  );

  useEffect(() => {
    if (mapEl.current && mapboxgl.accessToken) {
      setMap(
        new mapboxgl.Map({
          container: mapEl.current,
          style: "mapbox://styles/mapbox/outdoors-v10",
          zoom: 1,
          center: [0, 20],
          maxBounds: [-200, -85, 200, 85],
        })
      );
    }
    return () => setMap(undefined);
  }, [setMap, mapEl]);

  useEffect(() => {
    if (map && !map.hasControl(geoLocateControl.current)) {
      map.addControl(geoLocateControl.current, "top-left");
      map.on("load", function () {
        geoLocateControl.current.trigger();
      });
    }
  }, [map]);

  return (
    <div className="xl:px-60 mx-auto h-80 max-w">
      <div ref={mapEl} id="map" className="h-full w-full"></div>
    </div>
  );
};
