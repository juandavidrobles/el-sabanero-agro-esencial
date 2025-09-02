import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeroButton } from "@/components/ui/hero-button"
import { Heart, Wrench, Stethoscope, Shield, Shirt, Home } from "lucide-react"
import productsImage from "@/assets/products-veterinary.jpg"
import toolsImage from "@/assets/tools-equipment.jpg"

const Products = () => {
  const categories = [
    {
      icon: Stethoscope,
      title: "Productos Veterinarios",
      description: "Medicamentos, vacunas, antibióticos y suplementos para el cuidado animal",
      image: productsImage,
      items: ["Vacunas y biológicos", "Antibióticos", "Vitaminas", "Reconstituyentes", "Antiparasitarios"]
    },
    {
      icon: Wrench,
      title: "Herramientas de Campo",
      description: "Implementos y herramientas para el trabajo agropecuario",
      image: toolsImage,
      items: ["Machetes y serruchos", "Motosierras", "Guadañas", "Herramientas de ferretería", "Lubricantes"]
    },
    {
      icon: Heart,
      title: "Alimentos y Nutrición",
      description: "Alimentos concentrados y suplementos nutricionales",
      image: productsImage,
      items: ["Alimento concentrado", "Sales mineralizadas", "Melaza", "Suplementos", "Comida para mascotas"]
    },
    {
      icon: Shirt,
      title: "Equipos y Vestimenta",
      description: "Botas, sombreros, monturas y accesorios",
      image: toolsImage,
      items: ["Botas Brahma", "Sombreros", "Monturas y aperos", "Carteras Mesacé", "Correas"]
    },
    {
      icon: Home,
      title: "Productos para Mascotas",
      description: "Todo lo necesario para el cuidado de mascotas",
      image: productsImage,
      items: ["Collares y traillas", "Shampoo y lociones", "Platos y camas", "Guacales", "Productos de higiene"]
    },
    {
      icon: Shield,
      title: "Productos Químicos",
      description: "Herbicidas, fungicidas y control de plagas",
      image: toolsImage,
      items: ["Herbicidas", "Fungicidas", "Control de maleza", "Antiparasitarios", "Productos de limpieza"]
    }
  ]

  return (
    <section id="productos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Amplio catálogo de productos de alta calidad para satisfacer todas las necesidades de tu finca y ganado
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-natural transition-all duration-300 border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <category.icon className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <HeroButton variant="outline" size="sm" className="w-full">
                  Ver Productos
                </HeroButton>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <HeroButton size="lg">
            Ver Catálogo Completo
          </HeroButton>
        </div>
      </div>
    </section>
  )
}

export default Products