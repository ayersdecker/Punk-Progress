import Header from "./header";
import Footer from "./footer";
import '../../App.css';
import { useState } from 'react';
import { Container } from "react-bootstrap";

export interface LayoutProps {
    children?: React.ReactNode;
    LayoutType?: LayoutType;
  }

export enum LayoutType {
    Default = 'default',
    Home = 'home',
    Technology = 'technology',
    Sustainability = 'sustainability',
    Movements = 'movements',
  }


export default function Layout(props: LayoutProps, layoutTypeProp?: LayoutType): JSX.Element {

  const [currentLayoutType, setCurrentLayoutType] = useState<LayoutType>(layoutTypeProp || LayoutType.Default);

  
    return (
      <div className="layout-wrapper">
          <Header/>
          <Container className="content-wrapper">
            {props.children}
          </Container>
          <Footer/>
      </div>
    );
  }

