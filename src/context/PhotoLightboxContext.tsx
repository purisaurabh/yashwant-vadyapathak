import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type PhotoLightboxContextValue = {
  photoLightboxOpen: boolean;
  setPhotoLightboxOpen: (open: boolean) => void;
};

const PhotoLightboxContext = createContext<PhotoLightboxContextValue | null>(
  null,
);

export function PhotoLightboxProvider({ children }: { children: ReactNode }) {
  const [photoLightboxOpen, setPhotoLightboxOpen] = useState(false);

  return (
    <PhotoLightboxContext.Provider
      value={{ photoLightboxOpen, setPhotoLightboxOpen }}
    >
      {children}
    </PhotoLightboxContext.Provider>
  );
}

export function usePhotoLightbox() {
  const ctx = useContext(PhotoLightboxContext);
  if (!ctx) {
    throw new Error("usePhotoLightbox must be used within PhotoLightboxProvider");
  }
  return ctx;
}
