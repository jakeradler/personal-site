export interface Project {
  title: string
  description: string
  url: string
}

export const getProjects = (): Project[] => {
  return [
    {
      title: 'Ordy & Ordcoin',
      description:
        "Ordy (or meet Ordy) is the first AI-based personalized crypto wallet that provides investors with critical investment information depending on their desired investment strategy.",
      url: 'https://meetordy.com',
    },
    {
      title: 'oneKYC',
      description:
        'oneKYC is an authentication platform that allows any investor to sign in (similar to "sign in with google") to crypto platforms with pre-verified KYC providing instantaneous access.',
      url: 'https://onekyc.io',
    },

    {
      title: 'Brainex',
      description:
        'A chrome extension that connects to BCI technology and provides live access to calm and focus data.',
      url: 'https://github.com/jrjradler/Brainex',
    },

    {
      title: 'CryptoSent',
      description:
        'An AI algorithm that uses sentiment analysis to determine the general sentiment around specific crypto invesments.',
      url: 'https://github.com/jrjradler/twittersentimentmk1',
    },
    {
      title: 'Atherma',
      description:
        'Self-sustaining thermoelectric modular nuclear reactors that improve current nuclear energy production efficiency by 3%.',
      url: 'https://atherma.world',
    }
  ]
}
