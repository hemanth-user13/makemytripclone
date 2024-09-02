const NavBar = () => {
  return (
    <div className="relative">
      <DashbaordImage />
      <MixUi />
    </div>
  );
};

export function DashbaordImage() {
  return (
    <img
      className="w-full h-auto max-h-screen object-cover"
      style={{ height: "530px" }}
      src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg6.jpg"
      alt="dashboard image"
    />
  );
}

export function ProjectLogo() {
  return (
    <div className="absolute top-4 left-4 md:left-8 lg:left-12">
      <img
        className="object-contain w-16 md:w-24 lg:w-32"
        src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
        alt="logo"
      />
    </div>
  );
}

export function UIComponent() {
  return (
    <div className="absolute top-5 right-4 md:right-8 lg:right-12">
      <ul className="flex flex-wrap space-x-4 md:space-x-8 lg:space-x-12 text-white">
        <li className="flex flex-col items-start">
          <p className="text-xs md:text-sm lg:text-base">List Your Property</p>
          <p className="text-xs">Start earning today</p>
        </li>
        <li className="flex flex-col items-start border-l border-white pl-2 md:pl-4 lg:pl-6">
          <p className="text-xs md:text-sm lg:text-base">Introducing myBiz</p>
          <p className="text-xs">Business Travel Solutions</p>
        </li>
        <li className="flex flex-col items-start border-l border-white pl-2 md:pl-4 lg:pl-6">
          <p className="text-xs md:text-sm lg:text-base">My Trips</p>
          <p className="text-xs">Manage Your Bookings</p>
        </li>
        <li className="pl-2 md:pl-4 lg:pl-6">
          <div className="w-24 md:w-32 lg:w-40 bg-blue-500 text-center  rounded">
            <p className="text-xs md:text-sm lg:text-base">
              Login / Create Account
            </p>
          </div>
        </li>
        <li className="pl-2 md:pl-4 lg:pl-6">
          <div className="w-24 md:w-32 lg:w-40 bg-transparent border border-gray-500 text-center py-2 rounded flex items-center justify-center space-x-2">
            <img
              src="https://imgak.mmtcdn.com/pwa_v3/pwa_mmt_ui_assets/in_v2.webp"
              alt="Flag"
              className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8"
            />
            <p className="text-xs md:text-sm lg:text-base">
              IN<span className="mx-2">|</span>ENG
              <span className="mx-2">|</span>INR
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export function MixUi() {
  return (
    <>
      <div className="absolute inset-0 flex flex-wrap items-center justify-between px-4 md:px-8 py-4 bg-opacity-50">
        <ProjectLogo />
        <UIComponent />
      </div>
      <div className="flex items-center justify-center absolute top-16 md:top-24 lg:top-32 left-4 md:left-8 lg:left-12 right-4 md:right-8 lg:right-12">
        {/* <MainPage /> */}
      </div>
    </>
  );
}

export default NavBar;
