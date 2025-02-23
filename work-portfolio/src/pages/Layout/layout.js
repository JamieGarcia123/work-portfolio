
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"


export default function PageLayout({children}) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
};

