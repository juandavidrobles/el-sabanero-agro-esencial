import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Badge } from "@/components/ui/badge"
import { UserCheck, MapPin, Phone, Calendar, CheckCircle, Clock } from "lucide-react"
import consultationImage from "@/assets/consultation-farm.jpg"

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: "Asesoría Técnica Veterinaria",
      description: "Consultas profesionales con médicos veterinarios especializados",
      features: ["Diagnóstico profesional", "Planes de tratamiento", "Seguimiento personalizado", "Emergencias"],
      badge: "Profesional"
    },
    {
      icon: MapPin,
      title: "Visitas a Finca",
      description: "Servicio a domicilio directamente en tu finca",
      features: ["Evaluación in situ", "Revisión de animales", "Recomendaciones técnicas", "Programa de vacunación"],
      badge: "A Domicilio"
    },
    {
      icon: Phone,
      title: "Consulta en Punto de Venta",
      description: "Atención personalizada en nuestras instalaciones",
      features: ["Horario extendido", "Atención inmediata", "Productos disponibles", "Precios preferenciales"],
      badge: "Inmediato"
    }
  ]

  const benefits = [
    "Médicos veterinarios certificados",
    "Más de 20 años de experiencia",
    "Cobertura en toda la región",
    "Precios competitivos",
    "Atención 7 días a la semana",
    "Productos de primera calidad"
  ]

  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Servicios Profesionales
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Asesoría y Servicios Técnicos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contamos con profesionales especializados para brindarte la mejor asesoría técnica y veterinaria
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={consultationImage} 
              alt="Consulta veterinaria en finca"
              className="w-full rounded-lg shadow-earth"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Atención Profesional Cuando la Necesites
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestro equipo de veterinarios y técnicos especializados está disponible para 
              brindarte la mejor atención, ya sea en nuestro punto de venta o directamente en tu finca.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <HeroButton>
                Solicitar Visita
              </HeroButton>
              <HeroButton variant="outline">
                Agendar Consulta
              </HeroButton>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-natural transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-hero rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary">{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-foreground flex items-center">
                      <Clock className="h-4 w-4 text-accent mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Más Información
                </HeroButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-gradient-field rounded-lg">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            ¿Necesitas Asesoría Urgente?
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            Contáctanos ahora para atención inmediata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeroButton variant="earth" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Llamar Ahora
            </HeroButton>
            <HeroButton variant="outline" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Cita
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services