
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Image, Upload, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  contentType: z.string({
    required_error: 'Please select a content type',
  }),
  title: z.string().min(5, { message: 'Title must be at least 5 characters' }),
  description: z.string().min(10, { message: 'Description must be at least 10 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContentSubmissionForm = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      contentType: '',
      title: '',
      description: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      
      // Create preview for images
      if (selectedFile.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFilePreview(e.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        setFilePreview(null);
      }
    }
  };
  
  const onSubmit = (values: FormValues) => {
    // Combine form values with file
    const submission = {
      ...values,
      file: file,
      submittedAt: new Date().toISOString(),
    };
    
    // For now, just log to console
    console.log('Form submission:', submission);
    
    // Show success message
    setShowSuccessDialog(true);
    
    // Also show toast
    toast({
      title: "Submission Received",
      description: "Thank you for your contribution to our community!",
    });
    
    // Reset form
    form.reset();
    setFile(null);
    setFilePreview(null);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="contentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content Type</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="news">Community News</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                    <SelectItem value="story">Story</SelectItem>
                    <SelectItem value="photo">Photo</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title for your submission" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter details about your submission" 
                    className="min-h-[120px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="space-y-2">
            <FormLabel>Upload File (optional)</FormLabel>
            <div className="border-2 border-dashed border-stone/30 rounded-md p-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Image className="mx-auto h-12 w-12 text-stone/70" />
                <div className="text-sm text-stone">
                  <label htmlFor="file-upload" className="relative cursor-pointer font-medium text-sage hover:text-sage/90">
                    <span>Click to upload</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="text-xs text-stone/70 mt-1">PNG, JPG, GIF, PDF up to 10MB</p>
                </div>
              </div>
              
              {filePreview && (
                <div className="mt-4">
                  <p className="text-sm text-stone mb-2">Preview:</p>
                  <div className="relative w-40 h-40 mx-auto">
                    <img 
                      src={filePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFile(null);
                        setFilePreview(null);
                      }}
                      className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md"
                    >
                      <span className="sr-only">Remove</span>
                      <span className="h-4 w-4 text-stone">×</span>
                    </button>
                  </div>
                </div>
              )}
              
              {file && !filePreview && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-stone">
                  <Upload className="h-4 w-4" />
                  <span>{file.name}</span>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <span className="sr-only">Remove</span>
                    <span>×</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-sage hover:bg-sage/90 text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
      
      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Check className="h-6 w-6 text-green-500" />
              Submission Successful
            </DialogTitle>
            <DialogDescription>
              Thank you for your contribution to our community!
            </DialogDescription>
          </DialogHeader>
          
          <div className="text-center py-4">
            <p className="text-stone">
              Your submission has been received and will be reviewed by our team.
            </p>
          </div>
          
          <DialogFooter>
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="w-full bg-sage hover:bg-sage/90 text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContentSubmissionForm;
