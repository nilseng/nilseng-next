import dynamic from "next/dynamic";

const UserInfo = dynamic(
  () => import("../components/UserInfo").then((mod: any) => mod.UserInfo),
  { ssr: false }
);

const Mapbox = dynamic(
  () => import("../components/Mapbox").then((mod: any) => mod.Mapbox),
  { ssr: false }
);

const AboutYou = () => {
  return (
    <div className="sm:container xl:px-60 mx-auto text-gray-50 p-4">
      <UserInfo />
      <p className="mt-4">Your location:</p>
      <div>
        <Mapbox />
      </div>
    </div>
  );
};

export default AboutYou;
