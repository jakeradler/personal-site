import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="pt-8">
        <Heading title="About Me" />
        <p className="text-gray-400 text-lg mb-4">Hey, I'm Jake Adler. 👋</p>
        <p className="text-gray-400 text-lg mb-4">
          I'm a 17 year old aspiring polymath, developer and inventor working in numerous industries to challenge the current status-quo of technology. I've founded 3 companies that have worked with major organizations like Mastercard and were incubated in the DMZ. 
        </p>
        <p className="text-gray-400 text-lg mb-4">
          When I'm not working I'm most likely learning about different technologies and how they interact or I'm just playing some video games.
        </p>
      </div>
    </Layout>
  )
}

export default About
