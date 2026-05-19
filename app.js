const BACKEND_URL = "https://hcabackend.onrender.com";

async function loadLeagueData() {

    try {

        const response = await fetch(`${BACKEND_URL}/api/data`);

        const data = await response.json();

        console.log(data);

        const newsContainer = document.getElementById("news");

        if (!newsContainer) return;

        newsContainer.innerHTML = "";

        data.news.forEach(item => {

            const div = document.createElement("div");

            div.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.content}</p>
            `;

            newsContainer.appendChild(div);

        });

    } catch (err) {
        console.error(err);
    }

}

loadLeagueData();