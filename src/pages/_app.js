import '@/styles/globals.css'
import Synergy from '../../Data'

export default function App({ Component, pageProps }) {
  return (
  <Synergy>

  <Component {...pageProps} />
  </Synergy>
)}
