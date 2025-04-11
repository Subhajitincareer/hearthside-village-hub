
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsItems } from '@/data/sampleData';
import { Calendar, ChevronLeft, Facebook, Twitter, Mail, Bookmark } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { NewsItem } from '@/components/NewsCard';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Find the article from the sample data
    const foundArticle = newsItems.find(item => item.id === id?.split('-')[0]);
    
    if (foundArticle) {
      setArticle(foundArticle);
      // Simulate loading
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [id]);
  
  // If article not found
  if (!article && isLoaded) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-serif text-forest mb-4">Article Not Found</h1>
            <p className="text-stone mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Link to="/news">
              <Button className="bg-sage hover:bg-sage/90 text-white">
                Return to News
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className={`flex-grow transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {article && (
          <>
            {/* Hero Image */}
            {article.imagePath && (
              <div 
                className="w-full h-56 md:h-80 lg:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.imagePath})` }}
              />
            )}
            
            <div className="container mx-auto px-4 py-6 md:py-10">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/news">News</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{article.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              
              <div className="md:max-w-3xl mx-auto">
                {/* Back Button for Mobile */}
                <div className="mb-4 md:hidden">
                  <Link to="/news">
                    <Button variant="outline" className="border-stone/30 text-stone flex items-center gap-2">
                      <ChevronLeft size={16} />
                      <span>Back to News</span>
                    </Button>
                  </Link>
                </div>
                
                {/* Category badge */}
                <div className="mb-4">
                  <span className="bg-sage/90 text-white px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                </div>
                
                {/* Article Title */}
                <h1 className="text-2xl md:text-4xl font-serif text-forest mb-4 leading-tight">
                  {article.title}
                </h1>
                
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-3 text-stone mb-6 text-sm md:text-base">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {article.date}
                  </div>
                  <span className="hidden md:inline">•</span>
                  <div>By {article.author}</div>
                </div>
                
                {/* Social Share */}
                <div className="flex mb-8 space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-stone/30">
                    <Facebook size={16} className="text-stone" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-stone/30">
                    <Twitter size={16} className="text-stone" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-stone/30">
                    <Mail size={16} className="text-stone" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-9 h-9 border-stone/30">
                    <Bookmark size={16} className="text-stone" />
                  </Button>
                </div>
                
                {/* Article Content */}
                <div className="prose max-w-none text-stone text-base md:text-lg leading-relaxed space-y-6">
                  <p>
                    {article.excerpt}
                  </p>
                  
                  <p>
                    The serene landscape of Hearthside Village underwent a transformation this week as residents came together for the annual community improvement initiative. Under clear blue skies, neighbors of all ages worked side by side, reinforcing the bonds that make our rural community special.
                  </p>
                  
                  <p>
                    Local farmer James Wilson provided equipment for the larger projects, while the Thompson family bakery kept everyone energized with fresh pastries and coffee. "It's not just about beautifying our spaces," explained community organizer Martha Reed. "These events strengthen our sense of belonging and shared responsibility."
                  </p>
                  
                  <p>
                    The day's achievements included renovating the children's playground, clearing hiking trails, and planting native wildflowers along the main road. The newly established community garden plots were expanded to accommodate growing interest from residents.
                  </p>
                  
                  <p>
                    As the sun began to set, participants gathered at the community pavilion for a potluck dinner and live music from local musicians. Children played games on the grass while elders shared stories of Hearthside's history with newcomers.
                  </p>
                  
                  <p>
                    The success of this year's initiative has inspired plans for quarterly community projects. "When we work together, we're not just maintaining a place to live," said Mayor Johnston. "We're cultivating a thriving community that respects its heritage while embracing positive change."
                  </p>
                </div>
                
                {/* Back to News */}
                <div className="mt-8 pt-6 border-t border-stone/20">
                  <Link to="/news">
                    <Button className="bg-sage hover:bg-sage/90 text-white">
                      <ChevronLeft size={16} className="mr-1" />
                      Back to News
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsDetail;
