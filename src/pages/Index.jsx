import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Bitcoin, Zap, Lock, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">CryptoSaaS</h1>
        <p className="text-xl mb-8">Revolutionize Your Crypto Trading Experience</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        <img src="/images/crypto-illustration.jpg" alt="Crypto illustration" className="mx-auto mt-12 w-full max-w-2xl h-64 object-cover rounded-lg shadow-lg" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {[
            { icon: <Bitcoin className="h-10 w-10 text-yellow-500" />, title: "Real-time Tracking" },
            { icon: <Zap className="h-10 w-10 text-blue-500" />, title: "Instant Trades" },
            { icon: <Lock className="h-10 w-10 text-green-500" />, title: "Secure Wallet" },
            { icon: <TrendingUp className="h-10 w-10 text-red-500" />, title: "Advanced Analytics" },
          ].map((feature, index) => (
            <Card key={index} className="bg-gray-700">
              <CardContent className="flex flex-col items-center p-6">
                {feature.icon}
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          {[
            { step: 1, title: "Sign Up", description: "Create your account" },
            { step: 2, title: "Connect Wallet", description: "Link your crypto wallet" },
            { step: 3, title: "Start Trading", description: "Execute trades with ease" },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">{step.step}</span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {[
              { name: "Alice", comment: "CryptoSaaS changed how I trade. It's intuitive and powerful!" },
              { name: "Bob", comment: "The real-time tracking feature is a game-changer. Highly recommended!" },
              { name: "Charlie", comment: "Secure and fast. CryptoSaaS is my go-to platform for all things crypto." },
            ].map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-gray-700">
                  <CardContent className="p-6 text-center">
                    <p className="mb-4">"{testimonial.comment}"</p>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          {[
            { plan: "Basic", price: "$9.99/mo", features: ["Real-time tracking", "Basic analytics", "Secure wallet"] },
            { plan: "Pro", price: "$19.99/mo", features: ["Everything in Basic", "Advanced analytics", "Priority support"] },
            { plan: "Enterprise", price: "Custom", features: ["Everything in Pro", "Dedicated account manager", "Custom integrations"] },
          ].map((tier, index) => (
            <Card key={index} className="bg-gray-700 w-full md:w-80">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{tier.plan}</h3>
                <p className="text-2xl font-bold mb-4">{tier.price}</p>
                <ul className="mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="mb-2">✓ {feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center">
        <img src="/images/cryptosaas-logo.png" alt="CryptoSaaS Logo" className="w-32 mx-auto mb-4" />
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          {/* Add social media icons here */}
        </div>
        <p>© 2024 CryptoSaaS. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;