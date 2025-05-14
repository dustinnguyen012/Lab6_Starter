class RecipeCard extends HTMLElement {
	constructor() {
		super();

		// A1. Attach the shadow DOM (open mode)
		this.shadow = this.attachShadow({ mode: 'open' });

		// A2. Create the <article> element
		this.article = document.createElement('article');

		// A3. Create the <style> element
		const style = document.createElement('style');

		// A4. Add styles from cardTemplate.html inside <style>
		style.textContent = `
			* {
				font-family: sans-serif;
				margin: 0;
				padding: 0;
			}
			article {
				align-items: center;
				border: 1px solid rgb(223, 225, 229);
				border-radius: 8px;
				display: grid;
				grid-template-rows: 118px 56px 14px 18px 15px 36px;
				height: auto;
				row-gap: 5px;
				padding: 0 16px 16px 16px;
				width: 178px;
			}
			article > img {
				border-top-left-radius: 8px;
				border-top-right-radius: 8px;
				height: 118px;
				object-fit: cover;
				margin-left: -16px;
				width: calc(100% + 32px);
			}
			p.title {
				display: -webkit-box;
				font-size: 16px;
				line-height: 18px;
				height: 36px;
				overflow: hidden;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			p.title a {
				text-decoration: none;
				color: #000;
			}
			p.organization {
				color: black !important;
				font-size: 12px;
			}
			div.rating {
				align-items: center;
				column-gap: 5px;
				display: flex;
			}
			div.rating > img {
				height: auto;
				display: inline-block;
				object-fit: scale-down;
				width: 78px;
			}
			time {
				color: #70757A;
				font-size: 12px;
			}
			p.ingredients {
				height: 32px;
				overflow: hidden;
				color: #70757A;
				font-size: 12px;
			}
		`;

		// A5. Append <style> and <article> to shadow DOM
		this.shadow.append(style, this.article);
	}

	set data(data) {
		if (!data) return;

		// A6. Select <article> (already saved as this.article)
		const article = this.article;

		// A7. Populate <article> using template literals
		article.innerHTML = `
			<img src="${data.imgSrc}" alt="${data.imgAlt}">
			<p class="title"><a href="${data.titleLnk}">${data.titleTxt}</a></p>
			<p class="organization">${data.organization}</p>
			<div class="rating">
				<span>${data.rating}</span>
				<img src="./assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
				<span>(${data.numRatings})</span>
			</div>
			<time>${data.lengthTime}</time>
			<p class="ingredients">${data.ingredients}</p>
		`;
	}
}

// A8. Define the custom element
customElements.define('recipe-card', RecipeCard);
