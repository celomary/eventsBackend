import './App.css';

function App() {

  const sponsorHandleClick = () => {
        const anchor = document.createElement('a');
     anchor.setAttribute('href', "https://back-no4k.onrender.com/sponsors/excel");
     anchor.setAttribute('download', "");
     anchor.setAttribute("target", '_blank');
     anchor.setAttribute('rel', "noreferrer");
     anchor.click();
     anchor.remove();
  }

  const subscribersHandleClick = () => {
        const anchor = document.createElement('a');
     anchor.setAttribute('href', "https://back-no4k.onrender.com/subscribers/excel");
     anchor.setAttribute('download', "");
     anchor.setAttribute("target", '_blank');
     anchor.setAttribute('rel', "noreferrer");
     anchor.click();
     anchor.remove();
  }
  return (
     <section className="hero">
        <h1>Bienvenue sur Mldfa Excel</h1>
        <p>Téléchargez les données des sponsors et des participants au format Excel :</p>
        <div className="btn-container">
            <button onClick={sponsorHandleClick} className="btn">sponsors</button>
            <button onClick={subscribersHandleClick} className="btn">participants</button>
        </div>
    </section>
  );
}

export default App;
