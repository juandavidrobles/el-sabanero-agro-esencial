import { HeroButton } from "@/components/ui/hero-button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Award, Users } from "lucide-react"
import heroImage from "@/assets/hero-sabanero.jpg"

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="El Sabanero - Insumos Agropecuarios" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4 text-primary">
            Más de 20 años de experiencia
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Todo para tu{" "}
            <span className="text-accent">finca</span> y{" "}
            <span className="text-accent">ganado</span>
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Insumos agropecuarios, productos veterinarios, herramientas de campo y asesoría técnica profesional. 
            Tu socio confiable para el éxito de tu negocio agropecuario.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <HeroButton size="xl" variant="earth">
              Ver Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </HeroButton>
            <HeroButton size="xl" variant="outline">
              Asesoría Técnica
            </HeroButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">500+</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Productos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">20+</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Años</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-primary-foreground">1000+</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero