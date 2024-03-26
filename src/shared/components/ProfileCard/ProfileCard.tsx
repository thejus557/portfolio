import { TypeAnimation } from "react-type-animation";

const ProfileCard = () => {
  return (
    <div className="picture-card-container h-full w-full  lg:h-[84%] lg:w-[35%]">
      <div className="picture-card glossy-card relative z-10 h-full w-full overflow-hidden !border-black">
        <div className="profile-picture h-full w-full">
          <img className="profile-image h-full w-full" />
          <div className="profile-footer glossy-card absolute  bottom-0 flex w-full flex-col items-center justify-center !rounded-none !border-none !shadow-black">
            <div className="profile-details h-auto">
              <div className="relative top-[-30px] text-5xl">Surya Teja</div>
              <TypeAnimation
                className="mb-3"
                sequence={[
                  "Frontend Engineer",
                  "Developer",
                  "Open Source Contributer",
                ]}
                wrapper="span"
                speed={1}
                deletionSpeed={1}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <ul className="profile-social-icons mb-4 mt-4 flex flex-row gap-4">
              <li>😁</li>
              <li>😁</li>
              <li>😁</li>
              <li>😁</li>
            </ul>
            <div className="picture-card-footer flex  h-16 w-full flex-row items-center justify-evenly border-t-[0.5px] border-transparent">
              <div>Download CV</div>
              <div>Contant Me</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
