
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import ContentSubmissionForm from '@/components/ContentSubmissionForm';
import AnimatedElement from '@/components/AnimatedElement';

const SubmitContent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          title="Submit Content"
          subtitle="Share your news, events, stories or photos with our community"
          imagePath="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3"
        />
        
        <SectionContainer
          title="Submit Your Content"
          subtitle="Fill out the form below to contribute to our community website"
        >
          <AnimatedElement animation="fade-in">
            <div className="mb-8 max-w-2xl mx-auto text-stone">
              <p className="mb-4">
                We welcome submissions from all community members! Whether you have news to share, 
                an event to announce, a story to tell, or photos to showcase, this is the place to submit it.
              </p>
              <p>
                All submissions will be reviewed by our team before being published. 
                Please provide accurate information and appropriate content for our community website.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={2}>
            <ContentSubmissionForm />
          </AnimatedElement>
        </SectionContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitContent;
