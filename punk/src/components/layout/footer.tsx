const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <span><p>Decker Ayers - {month}, {year} - All Rights Reserved - v0.0.1</p></span>
        </div>
      </footer>
    );
  }
  
  export default Footer;