"use client";

import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer, Image as KonvaImage, Transformer } from "react-konva";
import useImage from "use-image";
import { KonvaEventObject } from "konva/lib/Node";
import { Image as KonvaImageType } from "konva/lib/shapes/Image";
import { Transformer as KonvaTransformerType } from "konva/lib/shapes/Transformer";
import html2canvas from "html2canvas";
import Link from "next/link";
import useWindowSize, { resizeImage } from "@/utils/util";
import { CheckMark } from "./Icons";

interface CapImageProps {
  onSelect: () => void;
  isSelected: boolean;
  shapeProps: KonvaImageProps;
  onChange: (newAttrs: KonvaImageProps) => void;
  downloading: boolean;
}

interface KonvaImageProps {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
}

const CapImage: React.FC<CapImageProps> = ({
  onSelect,
  isSelected,
  shapeProps,
  onChange,
  downloading,
}) => {
  const [image] = useImage("/media/cap.png");
  const shapeRef = useRef<KonvaImageType>(null);
  const trRef = useRef<KonvaTransformerType>(null);

  useEffect(() => {
    console.log({ isSelected });
    if (isSelected && !downloading) {
      // we need to attach transformer manually
      if (trRef.current && shapeRef.current) {
        trRef.current.nodes([shapeRef.current]);
        trRef.current.getLayer()?.batchDraw();
      }
    }
  }, [isSelected, downloading]);

  return (
    <>
      <KonvaImage
        image={image}
        onClick={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onTransformEnd={(e) => {
          // transformer is changing scale
          const node = shapeRef.current;
          if (node) {
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();

            // we will reset it back
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
              rotation: node.rotation(),
              width: node.width() * scaleX,
              height: node.height() * scaleY,
            });
          }
        }}
      />
      {!downloading && (
        <>
          {isSelected && (
            <Transformer
              ref={trRef}
              boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                  return oldBox;
                }
                return newBox;
              }}
            />
          )}
        </>
      )}
    </>
  );
};

const CropBox: React.FC = () => {
  const { width } = useWindowSize();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [shapeProps, setShapeProps] = useState<KonvaImageProps>({
    x: 150,
    y: 20,
    width: 150,
    height: 150,
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  const [cropWidth, setCropWidth] = useState(width > 500 ? 500 : width - 30);
  const [cropHeight, setCropHeight] = useState(width > 500 ? 500 : width - 30);

  const handleDeselect = (e: KonvaEventObject<MouseEvent | TouchEvent>) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectedId(null);
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setImageUploaded(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const cropRef = useRef<any>(null);

  const [downloading, setDownloading] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleDownloadImage = async () => {
    if (cropRef.current) {
      setDownloading(true);
      const canvas = await html2canvas(cropRef.current);
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "cropped-image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
      location.reload();
    }
  };

  useEffect(() => {
    const img = new Image();
    if (selectedImage) {
      img.src = selectedImage;

      img.onload = () => {
        const { reW, reH } = resizeImage(
          img.width,
          img.height,
          width > 500 ? null : width - 30
        );
        setCropWidth(reW);
        setCropHeight(reH);
      };
    }
  }, [selectedImage]);

  return (
    <div
      className="mx-auto mt-10 relative"
      style={{
        width: cropWidth,
        height: cropHeight,
      }}
    >
      {selectedImage && (
        <button
          className="absolute right-[70px] top-3 z-50"
          onClick={() => {
            setChecked(true);
            setSelectedId("check");
          }}
        >
          <CheckMark />
        </button>
      )}
      <Link href={"/cap"}>
        <div
          className="border-2 border-black w-[48px] h-[48px] bg-red-500 rounded-full grid place-content-center leading-[1] p-1 text-[28px] absolute right-3 top-3 z-50"
          onClick={() => location.reload()}
        >
          X
        </div>
      </Link>
      <div
        className="mx-auto relative"
        ref={cropRef}
        style={{
          width: cropWidth,
          height: cropHeight,
        }}
      >
        <Stage
          width={cropWidth}
          height={cropHeight}
          onMouseDown={handleDeselect}
          onTouchStart={handleDeselect}
          className="relative z-30"
        >
          <Layer>
            <CapImage
              isSelected={selectedId === "capImage"}
              onSelect={() => handleSelect("capImage")}
              shapeProps={shapeProps}
              onChange={(newAttrs) => {
                setShapeProps(newAttrs);
              }}
              downloading={downloading}
            />
          </Layer>
        </Stage>
        {selectedImage && (
          <div className="absolute left-0 top-0 w-full h-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="absolute left-0 top-0 w-full h-full"
            />
          </div>
        )}
        <div className="border-2 border-black absolute left-0 top-0 w-full h-full" />
      </div>
      <div className="flex flex-col items-center">
        {imageUploaded && checked ? (
          <button
            onClick={handleDownloadImage}
            className="w-[160px] lg:w-[300px] h-[50px] lg:h-[80px] bg-blue-500 border-2 border-black uppercase grid place-content-center text-xl lg:text-4xl -rotate-3 my-10"
          >
            Download
          </button>
        ) : (
          <label className="w-[160px] lg:w-[300px] h-[50px] lg:h-[80px] bg-red-500 border-2 border-black duration-200 hover:scale-105 uppercase grid place-content-center text-xl lg:text-4xl rotate-3 my-10">
            <span>Add Image</span>
            <input
              type="file"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default CropBox;
