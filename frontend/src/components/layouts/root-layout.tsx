import Footer from "../shared/footer/footer";
import Navbar from "../shared/navbar/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-between h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
export default RootLayout;
