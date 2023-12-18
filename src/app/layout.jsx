import Synergy from '@/Data'
import '@/styles/globals.css'
import { Providers } from './provider'
import TopBar from '@/components/TopBar'

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
        <Synergy>
          <Providers>
            <TopBar/>
            <div className="main">
                <div className="gradient"/>
            </div>
            <main className="app ">
                {children}
            </main>
            </Providers>
            </Synergy>
        </body>
    </html>
  )
}

export default RootLayout
