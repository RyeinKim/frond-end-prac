const postsPerPage = 5;
const totalPosts = 15;

const boardList = document.getElementById("board-list");
const pagination = document.getElementById("pagination");

const posts = [
    { title: "게시글 1 제목", author: "작성자 1", date: "작성일 1", content: "게시글 내용 1" },
    { title: "게시글 2 제목", author: "작성자 2", date: "작성일 2", content: "게시글 내용 2" },
    { title: "게시글 3 제목", author: "작성자 3", date: "작성일 3", content: "게시글 내용 3" },
    { title: "게시글 4 제목", author: "작성자 4", date: "작성일 4", content: "게시글 내용 4" },
    { title: "게시글 5 제목", author: "작성자 5", date: "작성일 5", content: "게시글 내용 5" },
    { title: "게시글 6 제목", author: "작성자 6", date: "작성일 6", content: "게시글 내용 6" },
    // ... 나머지 게시글 ...
];

function renderPosts(pageNumber) {
    boardList.innerHTML = "";

    const startIndex = (pageNumber - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, totalPosts);

    for (let i = startIndex; i < endIndex; i++) {
        const post = posts[i];

        const article = document.createElement("article");
        article.innerHTML = `
                    <div class="post_head">${post.title}</div>
                    <div class="post_body">${post.content}</div>
                    <div class="post_info">${post.author} | ${post.date}</div>
                `;

        article.addEventListener("click", () => {
            viewPost(i + 1); // 게시글 번호는 1부터 시작하므로 i + 1 사용
        });

        boardList.appendChild(article);
    }
}

function renderPagination(currentPage) {
    pagination.innerHTML = "";

    const totalPages = Math.ceil(totalPosts / postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.classList.add("active");
        }

        pageLink.addEventListener("click", () => {
            renderPosts(i);
            renderPagination(i);
        });

        pagination.appendChild(pageLink);

        if (i < totalPages) {
            const separator = document.createElement("span");
            separator.textContent = " | "; // 구분자 설정
            pagination.appendChild(separator);
        }
    }
}

function viewPost(postNumber) {
    alert(`게시글 ${postNumber}를 클릭했습니다.`); // 실제 페이지로 이동하는 로직을 추가해야 합니다.
}

renderPosts(1);
renderPagination(1);