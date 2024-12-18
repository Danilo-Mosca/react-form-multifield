// Funzione che disegna il form per l'inserimento dati
function BlogForm({ handlerInput, handlerSubmit, post }) {
    //parte html da ritornare
    return (
        <section className="my-4">
            <h2>Inserisci un articolo del blog</h2>
            <form onSubmit={handlerSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Titolo del post
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="titlelHelp"
                        value={post.title}
                        onChange={handlerInput}
                        name="title"
                        placeholder="Titolo del post"
                    />
                    <div id="titlelHelp" className="form-text">
                        Il tuo articolo sarà pubblicato nel nostro blog!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                        Contenuto dell'articolo
                    </label>
                    <textarea
                        className="form-control"
                        id="content"
                        rows="5"
                        value={post.content}
                        onChange={handlerInput}
                        name="content"
                        placeholder="Contenuto del post">
                    </textarea>
                </div>

                {/* <select name="category"
                    onChange={handlerChange}>
                    {postList.map((post) => {
                        <option value="{post.category}">{post.category}</option>
                    })}
                </select> */}

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="published"
                        name="published"
                        onChange={handlerInput}
                        checked={post.published}
                    />
                    <label className="form-check-label" htmlFor="published">
                        Clicca qui se vuoi pubblicare subito, altrimenti lascialo in bozza
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Inserisci articolo
                </button>
            </form>
        </section>
    );
}

export default BlogForm;