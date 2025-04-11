
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import AnimatedElement from './AnimatedElement';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  contentType: z.enum(['news', 'event', 'story', 'photo']),
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContentSubmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      contentType: 'news',
      title: '',
      description: '',
    },
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log the submission (in a real app, this would be sent to the server)
      console.log('Submission data:', { ...data, file: fileSelected });
      
      toast({
        title: "Submission successful!",
        description: "Thank you for your contribution to our community.",
      });
      
      // Reset the form
      form.reset();
      setFileSelected(null);
      
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your content. Please try again.",
        variant: "destructive",
      });
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileSelected(e.target.files[0]);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <AnimatedElement animation="fade-in" delay={1}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="input-focus-effect"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={2}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="Your email address" 
                      {...field} 
                      className="input-focus-effect"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={3}>
            <FormField
              control={form.control}
              name="contentType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Content Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                    >
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="news" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">News</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="event" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Event</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="story" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Story</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <RadioGroupItem value="photo" />
                        </FormControl>
                        <FormLabel className="font-normal cursor-pointer">Photo</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={4}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Title of your content" 
                      {...field} 
                      className="input-focus-effect"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={5}>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Provide details about your content..." 
                      rows={5} 
                      {...field} 
                      className="input-focus-effect resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={5}>
            <div className="space-y-2">
              <FormLabel htmlFor="file" className="block">Image/File Upload (optional)</FormLabel>
              <div className="border border-stone/20 rounded-md p-4 bg-cream/50 flex flex-col items-center justify-center cursor-pointer hover:bg-cream transition-colors">
                <label htmlFor="file" className="w-full cursor-pointer flex flex-col items-center">
                  <Upload className="h-8 w-8 text-sage mb-2" />
                  <span className="text-sm text-stone mb-1">
                    {fileSelected ? fileSelected.name : "Click to upload or drag and drop"}
                  </span>
                  <span className="text-xs text-stone/70">SVG, PNG, JPG or GIF (max. 5MB)</span>
                  <input
                    id="file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={5}>
            <Button 
              type="submit" 
              className="w-full bg-sage hover:bg-sage/90 text-white btn-hover-effect" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Content"}
            </Button>
          </AnimatedElement>
        </form>
      </Form>
    </div>
  );
};

export default ContentSubmissionForm;
