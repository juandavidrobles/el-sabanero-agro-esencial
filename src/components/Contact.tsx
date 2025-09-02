import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeroButton } from "@/components/ui/hero-button"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Calle Principal #123", "Centro, Ciudad", "Región, Colombia"],
      action: "Ver en Mapa"
    },
    {
      icon: Phone,
      title: "Teléfonos",
      details: ["+57 XXX XXX XXXX", "+57 XXX XXX XXXX", "WhatsApp disponible"],
      action: "Llamar"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@elsabanero.com", "ventas@elsabanero.com", "Respuesta en 24h"],
      action: "Enviar Email"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 7:00 AM - 6:00 PM", "Sábados: 7:00 AM - 5:00 PM", "Domingos: 8:00 AM - 12:00 PM"],
      action: "Ver Horarios"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contacta con nuestro equipo para asesoría, consultas o visitas a tu finca
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border hover:shadow-natural transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-hero rounded-lg">
                        <info.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">{detail}</p>
                      ))}
                    </div>
                    <HeroButton variant="outline" size="sm" className="w-full">
                      {info.action}
                    </HeroButton>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border shadow-natural">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nombre Completo</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Teléfono</label>
                    <Input placeholder="+57 XXX XXX XXXX" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Tipo de Consulta</label>
                    <select className="w-full p-2 border border-border rounded-md bg-background text-foreground">
                      <option>Asesoría Veterinaria</option>
                      <option>Visita a Finca</option>
                      <option>Cotización de Productos</option>
                      <option>Información General</option>
                      <option>Emergencia</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Ubicación de la Finca</label>
                  <Input placeholder="Municipio, vereda o dirección de tu finca" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensaje</label>
                  <Textarea 
                    placeholder="Describe tu consulta, el tipo de animales, productos que necesitas o cualquier información relevante..."
                    rows={5}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <HeroButton size="lg" className="flex-1">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </HeroButton>
                  <HeroButton variant="earth" size="lg" className="flex-1">
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </HeroButton>
                </div>

                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Para emergencias veterinarias, llama directamente al{" "}
                    <span className="font-semibold text-foreground">+57 XXX XXX XXXX</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact