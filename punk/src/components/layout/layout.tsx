import Header from "./header";
import Footer from "./footer";
import '../../App.css';

export interface LayoutProps {
    children?: React.ReactNode;
  }

export default function Layout(props: LayoutProps): JSX.Element {
    return (
      <>
          <Header/>
            {props.children}
          <Footer/>
      </>
    );
  }