import Header from "./header";
import Footer from "./footer";
import '../../App.css';
import { useState } from 'react';

export interface LayoutProps {
    children?: React.ReactNode;
  }

export enum LayoutType {
    Default = 'default',
    Home = 'home',
    Technology = 'technology',
    Sustainability = 'sustainability',
    Movements = 'movements',
  }


export default function Layout(props: LayoutProps, layoutTypeProp?: LayoutType): JSX.Element {

  const [layoutType, setLayoutType] = useState<LayoutType>(layoutTypeProp ?? LayoutType.Default);

  
    return (
      <>
          <Header/>
            {props.children}
          <Footer/>
      </>
    );
  }

