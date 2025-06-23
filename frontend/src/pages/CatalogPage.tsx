import Catalog from "@/components/Catalog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CatalogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage; 