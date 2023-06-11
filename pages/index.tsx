import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const Index: NextPage = () => (
  <Layout>
    <div>
      <div className="flex items-center">
        {/* <img className="rounded-full w-24 md:w-36 mr-6 mb-6" src="img/Jake.png" /> */}
        <Heading title="Jake Adler" />
      </div>
      <p className="text-gray-400 text-lg mb-14">
        I'm a 19-year-old hardware engineer in Toronto, focused on experimental bioelectronics and semiconductor fabrication. I'm the founder of {' '}
        <a href="https://neusleep.com" target="_blank" className="font-semibold hover:text-gray-300 underline">
          Neusleep
        </a>{', '}
        a startup developing advanced wearables that optimize and enhance sleep. Concurrently, I'm building {' '}
        <a href="https://pilgrimlabs.xyz" target="_blank" className="font-semibold hover:text-gray-300 underline">
          Pilgrim
        </a>, a defense company focused on augmenting the biological capabilities of warfighters. Since age 11, I've leveraged wearable devices to quantify and optimize my biology. At age 12, I began building software, followed by hardware at 17. I graduated high school in 2022 and was awarded the Thiel Fellowship in 2023.

      </p>
      <div className="mb-14">
        <Heading subheading title="Recent Projects" />
        <Projects />
      </div>
    </div>
  </Layout>
)

export default Index
