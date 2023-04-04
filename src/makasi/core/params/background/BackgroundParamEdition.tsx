import { FC, useRef, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./BackgroundParamEdition.module.scss";
import { useSectionEdition } from "../../section/section.context";
// import Unsplash from "@/Test/Unsplash/Unsplash";
// import { TColorBackground, TImageBackground } from "./BackgroundParam.types";
import { ImageSquare, PaintBrush, UploadSimple } from "phosphor-react";
import { Modal, TModalHook, useModal } from "@/makasi/utils/Modal/Modal";
import Unsplash from "@/Test/Unsplash/Unsplash";
import {
  TBackgroundParamValue,
  TImageBackgroundValue,
} from "./BackgroundParam.types";
import { ThemeColorSelector } from "../common/ThemeColorSelector/ThemeColorSelector";

const className = classNameModule(styles);

interface TBackgroundParamEditionProps {
  paramKey: string;
  value: TBackgroundParamValue;
}

export const BackgroundParamEdition: FC<TBackgroundParamEditionProps> = ({
  paramKey,
  value,
}) => {
  const { updateParam } = useSectionEdition();

  const galleryModal = useModal<any>();

  return (
    <div {...className("BackgroundParamEdition")}>
      <GalleryModal
        {...galleryModal}
        handleUpdate={(url) => {
          updateParam(paramKey, {
            type: "image",
            url,
          } as TImageBackgroundValue);
        }}
      />
      <div {...className("label")}>Fond</div>

      <div {...className("buttons")}>
        <UploadButton />
        <GalleryButton
          handleOpen={() => {
            galleryModal.open();
          }}
        />
        <ColorButton paramKey={paramKey} value={value} />
      </div>

      {value.type === "color" && (
        <div {...className("color")}>
          <ThemeColorSelector
            value={value.color}
            onChange={(color) => {
              updateParam(paramKey, { color });
            }}
          />
        </div>
      )}
    </div>
  );
};

const UploadButton = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <button
      onClick={() => {
        fileInputRef.current?.click();
      }}
    >
      <input type="file" ref={fileInputRef} hidden />
      <UploadSimple weight="duotone" />
      <span>Upload</span>
    </button>
  );
};

interface TGalleryButtonProps {
  handleOpen: () => void;
}

const GalleryButton: FC<TGalleryButtonProps> = ({ handleOpen }) => {
  return (
    <button onClick={handleOpen}>
      <ImageSquare weight="duotone" />
      <span>Galerie</span>
    </button>
  );
};

interface TColorButtonProps {
  paramKey: string;
  value: TBackgroundParamValue;
}

const ColorButton: FC<TColorButtonProps> = ({ paramKey, value }) => {
  const { updateParam } = useSectionEdition();

  return (
    <button
      onClick={() => {
        if (value.type === "color") return;

        updateParam(paramKey, {
          type: "color",
          color: "--dark",
        });
      }}
    >
      <PaintBrush weight="duotone" />
      <span>Couleur</span>
    </button>
  );
};

const GalleryModal: FC<
  TModalHook<any> & {
    handleUpdate: (image: string) => void;
  }
> = ({ payload, handleUpdate, ...modalProps }) => {
  const [currentTab, setCurrentTab] = useState("website-gallery");

  return (
    <Modal {...modalProps}>
      <div {...className("GalleryModal")}>
        <nav>
          <button
            onClick={() => {
              setCurrentTab("website-gallery");
            }}
          >
            Votre galerie
          </button>
          <button
            onClick={() => {
              setCurrentTab("unsplash");
            }}
          >
            Unsplash
          </button>
        </nav>

        <div {...className("content")}>
          {currentTab === "website-gallery" ? (
            <WebsiteGallery />
          ) : (
            <UnsplashGallery handleSelectImage={handleUpdate} />
          )}
        </div>
      </div>
    </Modal>
  );
};

const WebsiteGallery = () => {
  return (
    <div {...className("WebsiteGallery")}>
      <div {...className("empty")}>Aucune image dans votre galerie</div>
    </div>
  );
};

interface TUnsplashGalleryProps {
  handleSelectImage: (url: string) => void;
}

const UnsplashGallery: FC<TUnsplashGalleryProps> = ({ handleSelectImage }) => {
  return (
    <div {...className("UnsplashGallery")}>
      <Unsplash handleSelectImage={handleSelectImage} />
    </div>
  );
};

/*

 <header>
        <button
          {...className({ active: value.type === "image" })}
          onClick={() => {
            if (value.type === "image") return;

            updateParam(paramKey, {
              type: "image",
              url: "https://images.unsplash.com/photo-1550945364-6373abbd7a2d?auto=format&fit=crop&w=1742&q=80",
            } as TImageBackground);
          }}
        >
          Image
        </button>
        <button
          {...className({ active: value.type === "color" })}
          onClick={() => {
            if (value.type === "color") return;

            updateParam(paramKey, {
              type: "color",
              color: "red",
            } as TColorBackground);
          }}
        >
          Couleur
        </button>
      </header>
      {value.type === "image" && (
        <div>
          <Unsplash
            handleSelectImage={(image) => {
              updateParam(paramKey, {
                type: "image",
                url: image,
              } as Partial<TImageBackground>);
            }}
          />
        </div>
      )}
      {value.type === "color" && (
        <div>
          <input
            defaultValue={value.color}
            onBlur={(e) => {
              updateParam(paramKey, {
                color: e.target.value,
              } as TColorBackground);
            }}
          />
        </div>
      )}

*/
