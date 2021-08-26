import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const Index: NextPage = () => (
  <Layout>
    <div>
      <div className="flex items-center">
        <img className="rounded-full w-24 md:w-36 mr-6 mb-6" src="img/Jake.png" />
        <Heading title="Hey there, I'm Jake" />
      </div>
      <p className="text-gray-400 text-lg mb-14">
        I'm a founder and inventor of cool shit based in Toronto. I'm currently building{' '}
        <a href="https://meetordy.com" target="_blank" className="font-semibold hover:text-gray-300 underline">
          MeetOrdy
        </a>{' '}
        the first AI-based personalized crypto wallet. I focus all my work on projects that directly address problems people face everyday. On this site
        you'll find some of my recent projects and other information about myself. Thanks for stopping by!
      </p>
      <div className="mb-14">
        <Heading subheading title="Recent Projects" />
        <Projects />
      </div>
    </div>
  </Layout>
)

export default Index
