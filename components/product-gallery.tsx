'use client';

/* oxlint-disable next/no-img-element -- The catalogue uses pre-encoded local WebP assets with explicit dimensions. */

import { useId, useState } from 'react';
import { ArrowUpRight, Maximize2, Scan, X } from 'lucide-react';
import type { ProductDetail } from '@/lib/product-details';
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
  slug,
  details = [],
}: {
  photos: Photo[];
  title: string;
  slug: string;
  details?: ProductDetail[];
}) {
  const [selectedDetail, setSelectedDetail] = useState(0);
  const detailId = useId();
  const detail = details[selectedDetail];
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
                style={{ viewTransitionName: 'product-' + slug }}
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
                {index === 0 && details.length > 0 && (
                  <fieldset className="product-hotspots">
                    <legend className="sr-only">Изучить детали продукта</legend>
                    {details.map((point, pointIndex) => (
                      <button
                        key={point.title}
                        type="button"
                        className="product-hotspot"
                        style={{ left: point.x + '%', top: point.y + '%' }}
                        aria-label={
                          'Деталь ' + (pointIndex + 1) + ': ' + point.title
                        }
                        aria-pressed={selectedDetail === pointIndex}
                        aria-controls={detailId}
                        onClick={() => setSelectedDetail(pointIndex)}
                      >
                        {String(pointIndex + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </fieldset>
                )}
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
            {index === 0 && detail && (
              <div className="product-detail-insight" id={detailId}>
                <div className="product-detail-crop" aria-hidden="true">
                  <img
                    src={photo.src}
                    alt=""
                    width="1254"
                    height="1254"
                    style={{
                      left: 50 - detail.x * 3.8 + '%',
                      top: 50 - detail.y * 3.8 + '%',
                    }}
                  />
                  <Scan size={17} />
                </div>
                <div aria-live="polite" aria-atomic="true">
                  <span className="insight-label">
                    ДЕТАЛЬ {String(selectedDetail + 1).padStart(2, '0')} /{' '}
                    {String(details.length).padStart(2, '0')}
                  </span>
                  <h2>{detail.title}</h2>
                  <p>{detail.description}</p>
                  {detail.href && (
                    <a href={detail.href}>
                      {detail.linkLabel} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </TabsContent>
        ))}
        <div className="gallery-caption">
          <span>Визуализация</span>
          <span>
            {details.length
              ? 'Точки — детали · Фото — увеличение'
              : 'Нажмите на фото для увеличения'}
          </span>
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
