import Navbar from '../Components/Navbar'

import Image from 'next/image'
export default function Home() {
  return (
  <>
  <Navbar />
  <h1>
    Home Page
  </h1>


  <Image src="https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500"  width={500} height={500} > 
   </Image>

  </>
  )
}
