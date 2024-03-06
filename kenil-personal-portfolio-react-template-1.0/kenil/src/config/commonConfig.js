export const headerConfig = {
  Default: "Default Header",
  Classic: "Classic Header",
  BottomHeader: "Bottom Header",
  MenuPushOpenSideHeader: "Menu Push Open Side Header",
  OverlayMenu: "Overlay Menu",
  SideHeader: "Side Header",
};

export const introBackgroundConfig = {
  particles: "particles",
  image: "image",
  video: "video",
};

export const appliedConfig = {
  // apply Header from : Default | Classic | BottomHeader | MenuPushOpenSideHeader | OverlayMenu | SideHeader
  appliedHeader: headerConfig.Default,

  // dark and light header option only work with Classic | BottomHeader | SideHeader appliedHeader options, choose true if you want to apply a dark and false for light header
  isDarkHeader: false,

  // apply Intro from :  image | video | particles
  appliedIntro: introBackgroundConfig.image,

  // apply primary background to intro section
  isPrimaryBackground: false,

  // apply Frame Layout
  isFrameLayout: false,

  // apply Dark Theme template
  isDarkTheme: false,
};

export const scrollDuration = 1000;
