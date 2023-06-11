export interface Project {
  title: string
  description: string
  url: string
}

export const getProjects = (): Project[] => {
  return [
    {
      title: 'Neusleep',
      description:
        "Advanced wearables designed to optimize and enhance sleep through personalized brain stimulation.",
      url: 'https://neusleep.com',
    },
    {
      title: 'Pilgrim',
      description:
        "Experimental body-machine interfaces designed to enhance the biological capabilities of warfighters.",
      url: 'https://pilgrimlabs.xyz',
    },
    {
      title: 'Atherma',
      description:
        'Portable self-sustaining thermoelectric small modular nuclear reactor using the Seebeck Effect.',
      url: 'https://www.dropbox.com/scl/fi/s50zd350n9i4b174vaz77/Atherma-OnePager.pdf?dl=0&rlkey=gngd8t41cocutoa7cffnlbqrl',
    },
    {
      title: 'Brainex',
      description:
        'A chrome extension that connects to a neural interface and provides in-browser access to EEG data.',
      url: 'https://github.com/jrjradler/Brainex',
    },
    // {
    //   title: 'oneKYC',
    //   description:
    //     'An authorization platform that allows any investor to sign in to crypto platforms with pre-verified KYC.',
    //   url: 'https://onekyc.io',
    // },
    // {
    //   title: 'Ordy',
    //   description:
    //     "The first personalized crypto wallet that provides investors with critical investment information depending on their desired investment strategy.",
    //   url: 'https://meetordy.com',
    // },
  ]
}
