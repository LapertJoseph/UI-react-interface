import React from "react";

export default function HelpPage() {
  return (
    <div>
      <h2>Besoin d'aide?</h2>
      <p>
        Si vous rencontrez des problèmes ou si vous avez des questions, veuillez
        consulter les ressources ci-dessous :
      </p>
      <ul>
        <li>
          <strong>FAQ:</strong> Consultez notre page de{" "}
          <a href="/faq">Foire Aux Questions</a> pour trouver des réponses aux
          questions courantes.
        </li>
        <li>
          <strong>Support:</strong> Contactez notre équipe de support en
          envoyant un e-mail à{" "}
          <a href="mailto:support@example.com">support@example.com</a>.
        </li>
        <li>
          <strong>Tutoriels:</strong> Consultez nos{" "}
          <a href="/tutorials">tutoriels</a> pour des guides étape par étape sur
          l'utilisation de notre application.
        </li>
      </ul>
    </div>
  );
}
