import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/103.jpg'

function navbar() {
  return (
    
         <nav>
          <Image 
          src={Logo}
          alt='mickeys logo'
          width={70}
          quality={100}
          />
       <h1><span>M</span>ickeys helpdesk</h1> 
       <Link href="/">Dashboard</Link>
       <Link href="/tickets">Tickets</Link>
       <Link href="/tickets/latest">Latest</Link>
        
       
      </nav>
    
  )
}

export default navbar