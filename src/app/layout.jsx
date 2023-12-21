import Synergy from "@/Data";
import "@/styles/globals.css";
import { Providers } from "./provider";
import TopBar from "@/components/TopBar";
import Navbars from "@/components/Navbars";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Synergy>
          <Providers>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app ">
              <Navbars children={children}/>
            </main>
          </Providers>
        </Synergy>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
