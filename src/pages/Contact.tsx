
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Contact Us"
          subtitle="Get in touch with the Hearthside Village community administration"
          imagePath="https://images.unsplash.com/photo-1579451482020-c28f40bfa8a4?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Get In Touch"
          subtitle="We'd love to hear from you. Send us a message or visit our community office."
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <Card className="rustic-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-forest mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 text-sage mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-stone">
                          123 Community Way<br />
                          Hearthside Village, Rural County<br />
                          State, ZIP
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone size={20} className="mr-3 text-sage mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-stone">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail size={20} className="mr-3 text-sage mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-stone">info@hearthsidevillage.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock size={20} className="mr-3 text-sage mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-stone">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rustic-card overflow-hidden">
                <CardContent className="p-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-95.123456!3d45.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzMwLjQiTiA5NcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1617123456789!5m2!1sen!2sus" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Hearthside Village Map"
                  ></iframe>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
