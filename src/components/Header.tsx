import { HeroButton } from "@/components/ui/hero-button"
import { Phone, MapPin, Mail } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">El Sabanero</h1>
              <p className="text-sm text-muted-foreground">Insumos Agropecuarios</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#productos" className="text-foreground hover:text-primary transition-colors">Productos</a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+57 XXX XXX XXXX</span>
              </div>
            </div>
            <HeroButton size="sm">
              Contactar
            </HeroButton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header