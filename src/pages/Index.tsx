
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Image, Mail, NewspaperIcon, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import NewsCard from '@/components/NewsCard';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { newsItems, eventItems } from '@/data/sampleData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection 
          title="Welcome to Hearthside Village"
          subtitle="A vibrant rural community nestled in the heart of nature"
          imagePath="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3"
          hasAction
          actionText="Explore Our Community"
          actionLink="#community-features"
        />
        
        {/* News Preview */}
        <SectionContainer
          title="Latest News"
          subtitle="Stay updated with the latest happenings in our community"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
              <Link to="/news">
                View All News
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </SectionContainer>
        
        {/* Upcoming Events */}
        <SectionContainer
          title="Upcoming Events"
          subtitle="Join us for these upcoming community gatherings"
          className="bg-sage/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventItems.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white">
              <Link to="/events">
                View Calendar
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </SectionContainer>
        
        {/* Community Features */}
        <SectionContainer
          title="Our Community Features"
          id="community-features"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <NewspaperIcon size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Community News</h3>
                  <p className="text-stone mb-4">Stay informed with the latest events, announcements, and stories from our community.</p>
                  <Link to="/news" className="text-sage hover:text-forest font-medium">Learn More</Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <Calendar size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Events Calendar</h3>
                  <p className="text-stone mb-4">Discover and participate in upcoming events, workshops, and gatherings.</p>
                  <Link to="/events" className="text-sage hover:text-forest font-medium">View Calendar</Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <Users size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Resident Directory</h3>
                  <p className="text-stone mb-4">Connect with fellow community members and find local services and skills.</p>
                  <Link to="/directory" className="text-sage hover:text-forest font-medium">Directory</Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <ShieldCheck size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Resources</h3>
                  <p className="text-stone mb-4">Access information about local services, healthcare, education, and farming tips.</p>
                  <Link to="/resources" className="text-sage hover:text-forest font-medium">View Resources</Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <Image size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Photo Gallery</h3>
                  <p className="text-stone mb-4">Explore beautiful moments from our community life and scenic surroundings.</p>
                  <Link to="/gallery" className="text-sage hover:text-forest font-medium">View Gallery</Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rustic-card hover:translate-y-[-5px] duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center mb-4">
                    <Mail size={24} className="text-sage" />
                  </div>
                  <h3 className="text-xl font-serif text-forest mb-2">Contact Us</h3>
                  <p className="text-stone mb-4">Get in touch with community administrators or submit feedback and suggestions.</p>
                  <Link to="/contact" className="text-sage hover:text-forest font-medium">Contact</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </SectionContainer>
        
        {/* CTA Section */}
        <section className="py-16 bg-forest text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Join Our Community</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Whether you're a longtime resident or new to the area, there are many ways to get involved
              and connect with your neighbors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-cream text-forest hover:bg-cream/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-cream text-cream hover:bg-cream/20">
                <Link to="/directory">View Directory</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
