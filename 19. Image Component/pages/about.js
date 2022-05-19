import Navbar from '../Components/Navbar'

import Image from 'next/image'
export default function About() {
  return (
  <>
  <Navbar />
  <h1>
    About Page
  </h1>


     <Image src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500"  width={500} height={500} > 
   </Image>
  </>
  )
}
