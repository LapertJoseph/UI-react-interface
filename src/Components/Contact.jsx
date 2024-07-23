import { useState } from "react";

// Page de contact
export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="content">
			<h2>Contactez-nous</h2>
			<p>Utilisez le formulaire ci-dessous pour nous envoyer un message :</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nom:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
					></textarea>
				</div>
				<button type="submit">Envoyer</button>
			</form>
		</div>
	);
}