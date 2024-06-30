import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Book {
  title: string;
  author: string;
  id: string;
}


interface DetailsContextType {
  book: Book | null;
  setBook: (value: Book) => void;
}

interface DetailsProviderProps {
  children: ReactNode;
}

const DetailsContext = createContext<DetailsContextType | null>(null);

export const DetailsProvider: React.FC<DetailsProviderProps> = ({ children }) => {
  const [book, setBook] = useState<Book | null>(null);

  return (
    <DetailsContext.Provider  value={{ book, setBook }}>
      {children}
    </DetailsContext.Provider>
  );
};

export const useDetails = (): DetailsContextType => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error('useDetails deve ser usado dentro de um DetailsProvider');
  }
  return context;
};
