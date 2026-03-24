async function inspectComments(postId) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`

    try {
        const response_url = await fetch(url);
        if (!response_url.ok) throw new Error("Erro ao pegar os comentários do post")
        const comentarios = await response_url.json()
        
        if (comentarios.length === 0) throw new Error("Esse post não tem comentário")

        console.log("E-mails dos comentários do post")
        comentarios.map(comentario => {
            const email = comentario.email
            console.log(`- Email: ${email}`);
        });

    } catch (error) {
        console.error(" Error:", error.message);
    }
}

inspectComments(2);