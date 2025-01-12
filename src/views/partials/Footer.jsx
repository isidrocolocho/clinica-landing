import Button from "../../components/ui/botton";
const Footer = () => {
    return (
        <footer className="bg-[#E6F4F1] py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xl">
              La forma más simple<br />
              de cuidar de ti.
            </p>
            <div className="space-x-4">
              <Button variant="outline">Contáctanos</Button>
              <Button className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
