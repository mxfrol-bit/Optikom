'use client';

import { Maximize2, X } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

type Photo = {
  src: string;
  alt: string;
  cleaned?: boolean;
};

export function ProductGallery({
  photos,
  title,
}: {
  photos: Photo[];
  title: string;
}) {
  return (
    <div className="detail-gallery">
      <Tabs defaultValue="0">
        {photos.map((photo, index) => (
          <TabsContent value={String(index)} key={photo.src}>
            <Dialog>
              <div
                className={
                  'detail-visual' + (photo.cleaned ? ' studio-photo' : '')
                }
              >
                <DialogTrigger
                  className="gallery-image-trigger"
                  aria-label={
                    'Увеличить изображение ' + (index + 1) + ' — ' + title
                  }
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    width="1254"
                    height="1254"
                    decoding="async"
                  />
                  <span className="gallery-expand" aria-hidden="true">
                    <Maximize2 size={19} />
                  </span>
                </DialogTrigger>
              </div>
              <DialogContent className="photo-lightbox" showCloseButton={false}>
                <DialogClose
                  className="gallery-close"
                  aria-label="Закрыть изображение"
                >
                  <X size={20} />
                </DialogClose>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  Изображение {index + 1} из {photos.length}
                </DialogDescription>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width="1254"
                  height="1254"
                />
              </DialogContent>
            </Dialog>
          </TabsContent>
        ))}
        <div className="gallery-caption">
          <span>Визуализация</span>
          <span>Нажмите на фото для увеличения</span>
        </div>
        {photos.length > 1 && (
          <TabsList
            className="gallery-thumbnails"
            aria-label={'Изображения: ' + title}
          >
            {photos.map((photo, index) => (
              <TabsTrigger
                key={photo.src}
                value={String(index)}
                className={
                  'gallery-thumbnail' +
                  (photo.cleaned ? ' studio-thumbnail' : '')
                }
                aria-label={'Фото ' + (index + 1) + ' из ' + photos.length}
              >
                <img
                  src={photo.src}
                  alt=""
                  width="1254"
                  height="1254"
                  loading="lazy"
                  decoding="async"
                />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        )}
      </Tabs>
    </div>
  );
}
