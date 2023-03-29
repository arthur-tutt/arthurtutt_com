import logo from '../../logo.svg';
import ArthurHeadshot from '../../assets/arthur_headshot_bowtie.jpg'


function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ArthurHeadshot} className="App-logo" alt="logo" />
        <p>
          Welcoem to arthurtutt.com
        </p>
        
      </header>
    </div>
  );
}

export default Homepage;
