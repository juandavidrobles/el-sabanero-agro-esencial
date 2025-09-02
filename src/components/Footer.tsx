import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">El Sabanero</h3>
                <p className="text-sm text-primary-foreground/80">Insumos Agropecuarios</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Tu socio confiable para el éxito de tu negocio agropecuario. Más de 20 años brindando calidad y servicio.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Productos Veterinarios</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Herramientas de Campo</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Alimentos y Nutrición</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Equipos y Vestimenta</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Productos para Mascotas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Productos Químicos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Asesoría Veterinaria</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Visitas a Finca</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consulta en Tienda</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Emergencias</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Programa de Vacunación</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Seguimiento Técnico</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p>Calle Principal #123</p>
                  <p>Centro, Ciudad</p>
                  <p>Región, Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p>+57 XXX XXX XXXX</p>
                  <p>+57 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <p>info@elsabanero.com</p>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p>Lun - Vie: 7:00 AM - 6:00 PM</p>
                  <p>Sáb: 7:00 AM - 5:00 PM</p>
                  <p>Dom: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 El Sabanero - Insumos Agropecuarios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer