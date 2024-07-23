import { BrowserRouter as Router, Link } from "react-router-dom";

export default function FAQPage() {
  return (
    <div>
      <h2>FAQ (Foire Aux Questions)</h2>
      <div>
        <h3>Question 1: Qu'est-ce que Lorem Ipsum?</h3>
        <p>
          Lorem Ipsum est simplement du faux texte employé dans la composition
          et la mise en page avant impression.
        </p>
      </div>
      <div>
        <h3>Question 2: D'où vient Lorem Ipsum?</h3>
        <p>
          Contrairement à une opinion répandue, Lorem Ipsum n'est pas
          simplement du texte aléatoire.
        </p>
      </div>
      <div>
        <h3>Question 3: Pourquoi l'utiliser?</h3>
        <p>
          Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là,
          mais la majeure partie d'entre elles a été altérée.
        </p>
      </div>
      <div>
        <h3>Question 4: Comment puis-je l'utiliser?</h3>
        <p>
          Il existe de nombreux passages du Lorem Ipsum disponibles, mais la
          majorité a subi une altération.
        </p>
      </div>
    </div>
  );
}
