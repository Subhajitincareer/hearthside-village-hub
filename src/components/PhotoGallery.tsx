
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="aspect-square overflow-hidden rounded-md cursor-pointer relative group"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-black/90 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-white z-10 bg-black/20 rounded-full p-1"
          >
            <X size={20} />
          </button>
          
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <p className="text-white">{selectedImage.caption}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
